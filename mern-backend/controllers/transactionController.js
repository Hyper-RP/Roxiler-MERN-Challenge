const axios = require('axios');
const Transaction = require('../models/Transaction');



exports.listTransactions = async (req, res) => {
    try {
        const { month, page = 1, perPage = 5, search = '' } = req.query;
        const regex = new RegExp(search, 'i');  
        const start = (page - 1) * perPage;  

        
        const isNumericSearch = !isNaN(search);

        
        const searchQuery = {
            $and: [
                { $expr: { $eq: [{ $month: "$dateOfSale" }, new Date(`${month} 1`).getMonth() + 1] } },
                {
                    $or: [
                        { title: regex },
                        { description: regex },
                        ...(isNumericSearch ? [{ price: Number(search) }] : [])
                    ]
                }
            ]
        };

        
        const totalRecords = await Transaction.countDocuments(searchQuery);

        
        const transactions = await Transaction.find(searchQuery)
            .skip(start)
            .limit(parseInt(perPage));

       
        res.status(200).json({
            totalRecords,        
            currentPage: page,   
            perPage: perPage,    
            totalPages: Math.ceil(totalRecords / perPage),  
            transactions         
        });
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        res.status(500).send('Error fetching transactions: ' + error.message);
    }
};

exports.initializeDatabase = async (req, res) => {
    try {
        // Fetch data from the provided API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

        if (!response.data || !Array.isArray(response.data)) {
            return res.status(400).send('Invalid data format from API');
        }

        
        await Transaction.deleteMany({});

        
        await Transaction.insertMany(response.data);

        res.status(200).send('Database initialized with data from external API!');
    } catch (error) {
        console.error('Error initializing database:', error.message);
        res.status(500).send('Error initializing database: ' + error.message);
    }
};
