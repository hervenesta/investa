const express = require('express');
let router = express.Router();
const {Transaction, User} = require('../models');
const Sequelize = require('sequelize');

router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: ['password']},
        include:[{model: Transaction, attributes: { exclude: ['stockSymbol', 'transactiontypeId']}}],
        where: {
            id:4
        }
    })
    .then(transact => {
        res.send(transact)
    })
    .catch(e => console.log(e));
  })

  module.exports = router;