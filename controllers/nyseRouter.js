const express = require('express');
let router = express.Router();
const {Stock} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// import the symbol.json file
//const symbols = require('./symbols.json');

var request = require("request");
/*
router.get('/', (req, res) => {
    res.send(symbols);
})*/
router.get('/', (req,res) => {
  Stock.findAll()
        .then(stocks => {
            //console.log(stocks);
            //res.sendStatus(200);
            res.send(stocks)
        })
        .catch(e => console.log(e));
})

router.get('/search', (req, res) => {
  const { term } = req.query;
  Stock.findAll({ where: { CompanyName: { [Op.like]: '%' + term + '%'}}})
    .then(stock => res.send(stock))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    let symbolName = req.params.id;
    let timestamp = Math.floor(Date.now()/1000);

    var options = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data',
      qs: {
        frequency: '1d',
        filter: 'history',
        period1: `${timestamp}`,
        period2: `${timestamp}`,
        symbol: `${symbolName}`
      },
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '93b26d98c8msh56f6f024aa8de21p18ec5ejsn2e4cb3c87943'
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let json = body;
      let obj = JSON.parse(json);
      let p = obj.prices[0];  
      let x = (p.close).toString();
      res.send(x);
      
    });
}); 

module.exports = router;