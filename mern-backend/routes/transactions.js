const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const barChartController = require('../controllers/barChartController');
const pieChartController = require('../controllers/pieChartController');
const statisticsController = require('../controllers/statisticsController');
const combinedController = require('../controllers/combinedController');


console.log(transactionController); 
// Define your routes
router.get('/initialize', transactionController.initializeDatabase);

router.get('/transactions', transactionController.listTransactions);
router.get('/statistics', statisticsController.getStatistics);
router.get('/barchart', barChartController.getBarChartData);
router.get('/piechart', pieChartController.getPieChartData);
router.get('/combined', combinedController.getCombinedData);

module.exports = router;
