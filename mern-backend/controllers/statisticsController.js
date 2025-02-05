// Fetch data without sending response
const Transaction = require('../models/Transaction'); 

const fetchStatistics = async (month) => {
    const monthIndex = new Date(`${month} 1`).getMonth() + 1;
    const transactions = await Transaction.find({
        $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] }
    });

    const totalSales = transactions.reduce((sum, t) => sum + (t.sold ? t.price : 0), 0);
    const soldItems = transactions.filter(t => t.sold).length;
    const notSoldItems = transactions.filter(t => !t.sold).length;

    return {
        totalSalesAmount: totalSales,
        totalSoldItems: soldItems,
        totalNotSoldItems: notSoldItems
    };
};


exports.getStatistics = async (req, res) => {
    try {
        const data = await fetchStatistics(req.query.month);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send('Error fetching statistics: ' + error.message);
    }
};

exports.fetchStatistics = fetchStatistics;  
