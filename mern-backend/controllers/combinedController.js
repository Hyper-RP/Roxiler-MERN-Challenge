const { fetchStatistics } = require('./statisticsController');
const { fetchBarChartData } = require('./barChartController');
const { fetchPieChartData } = require('./pieChartController');

exports.getCombinedData = async (req, res) => {
    try {
        const month = req.query.month;

        const [statistics, barChart, pieChart] = await Promise.all([
            fetchStatistics(month),
            fetchBarChartData(month),
            fetchPieChartData(month),
        ]);

        res.json({ statistics, barChart, pieChart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
