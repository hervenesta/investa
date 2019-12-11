'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {}

  Stock.init({
    Symbol: {
      allowNull: false,
      primaryKey: true,
      type:DataTypes.STRING
    },
    CompanyName:{
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'stock'
  });
  Stock.associate = function(models) {
    // associations can be defined here
    Stock.hasMany(models.Transaction);
    //Stock.belongsToMany(models.User, {through: 'Transaction'});
  };
  return Stock;
};