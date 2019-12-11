'use strict';
const symbols = require('../controllers/symbols');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('stocks', symbols, {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('stocks', null, {});
    
  }
};
