'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      numberOfShares: {
        type: Sequelize.FLOAT
      },
      total: {
        type:Sequelize.FLOAT
      },
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  }
};