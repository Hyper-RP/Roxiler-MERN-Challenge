const Transaction = require('../models/Transaction'); 

exports.getPieChartData = async (req, res) => {
    try {
        const { month } = req.query;
        const monthIndex = new Date(`${month} 1`).getMonth() + 1;

        const categories = await Transaction.aggregate([
            {
                $match: { $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] } }
            },
            {
                $group: {
                    _id: "$category",
                    itemCount: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).send('Error fetching pie chart data: ' + error.message);
    }
};
    