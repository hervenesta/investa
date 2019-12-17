const express = require('express');
const router = express.Router();
const cors = require('cors');
const {Stock, Transaction, User} = require('../models');
const bodyParser = require('body-parser');
//const db = require('../models');
var request = require("request");

router.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  ); 


  router.use(bodyParser.json());

  router.post('/', (req, res) => {
    let { symbol, position, price, numberOfShares } = req.body;
    let timestamp = Math.floor(Date.now()/1000);
    let currentPrice = 0;

    var options = {
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data',
      qs: {
        frequency: '1d',
        filter: 'history',
        period1: `${timestamp}`,
        period2: `${timestamp}`,
        symbol: `${symbol}`
      },
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ce9b90c58fmsh5b71f37b9a6a50ep172728jsn54c6923e6e85'
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let json = body;
      let obj = JSON.parse(json);
      let p = obj.prices[0];  
      currentPrice = (p.close).toString();
      currentPrice = Number(currentPrice);

      let userid = 5;
      
      if(position === "buy"){
        Transaction.create({
          symbol,
          userId:userid,
          position,
          price, 
          numberOfShares,
          total:price*numberOfShares 
        }).then((t) => {
          User.findByPk(userid).then(user => {
            return (
              user.decrement({balance:t.dataValues.total}),
              user.increment({totalNumberOfShares:numberOfShares})
              )
          })
          console.log(t.dataValues)
        })
          .catch(e => console.log(e));

      } else {
            Transaction.create({
              symbol,
              userId:userid,
              position,
              price:currentPrice, 
              numberOfShares,
              total:currentPrice*numberOfShares
            }).then((t) => {
              User.findByPk(userid).then(user => {
                return (
                  user.increment({balance:t.dataValues.total}),
                  user.decrement({totalNumberOfShares:numberOfShares})
                  )
              })
              console.log(t.dataValues)
            })
              .catch(e => console.log(e));
          
        } 
    });

   res.json({
     message:"tables updated"
   })

  })
  
  router.delete('/:id', (req, res) => {
    let ids = req.params.id;
    Transaction.destroy({
      where: {
        id:ids
      }
    });
  })

module.exports = router; 