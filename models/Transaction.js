'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init({
    symbol: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    position: DataTypes.STRING,
    price: DataTypes.FLOAT,
    numberOfShares: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transaction'
  });
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Stock);
    Transaction.belongsTo(models.User);
  };
  return Transaction;
};