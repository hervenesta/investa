const Sequelize = require('sequelize');
const db = require('../config/database');

const Stock = db.define('stock', {
    symbol: {
        type: Sequelize.STRING
    },
    stockName: {
        type: Sequelize.STRING
    }
})

module.exports = Stock;