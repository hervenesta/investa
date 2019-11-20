const Sequelize = require('sequelize');
const db = require('../config/database');

const TransactionType = db.define('transactiontype', {
    position: {
        type: Sequelize.STRING
    }
})

module.exports = TransactionType;