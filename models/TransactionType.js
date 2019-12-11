'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TransactionType extends Model {}

  TransactionType.init({
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactiontype'
  });
  TransactionType.associate = function(models) {
    // associations can be defined here
    TransactionType.hasMany(models.Transaction);
  };
  return TransactionType;
};