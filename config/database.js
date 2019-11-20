const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('investadb', 'postgres', 'postgre', {
  host: 'localhost',
  dialect:'postgres'
});