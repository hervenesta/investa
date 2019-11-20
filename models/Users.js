const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    }
})

module.exports = Users;