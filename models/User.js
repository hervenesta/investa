'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: DataTypes.STRING,
    password: { 
      type: DataTypes.STRING
    },
    totalNumberOfShares: DataTypes.FLOAT,
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'user'
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Transaction);
    //User.belongsToMany(models.Stock, {through:'Transaction'});
  };
  
  return User;
};