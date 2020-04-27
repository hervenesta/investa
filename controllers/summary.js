const express = require('express');
let router = express.Router();
const {Transaction, User} = require('../models');
const Sequelize = require('sequelize');

router.get('/', (req,res) => {
    let userid = 2;
    Transaction.findAll({
        attributes: { exclude: ['stockSymbol', 'transactiontypeId']} ,
        include:[{model: User, attributes: { exclude: ['password']},
        where: {
            id:userid
        }}],
       
    })
    /*User.findAll({
        attributes: { exclude: ['password']},
        include:[{model: Transaction, attributes: { exclude: ['stockSymbol', 'transactiontypeId']}}],
        where: {
            id:userid
        }
    })*/
    .then(transact => {
        res.send(
            transact
        )
    })
    .catch(e => console.log(e));
  })

  module.exports = router;