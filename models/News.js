const Sequelize = require('sequelize');
const db = require('../config/database');

const News = db.define('news', {
    url: {
        type: Sequelize.STRING
    }
})

module.exports = News;