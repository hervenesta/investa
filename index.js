const express = require('express');
const app = express();

var request = require("request");

// query parameters
// /stocks/AAPL?fetch=historical
// /stocks/AAPL?fetch=news
// /stocks/AAPL?fetch=charts
app.get('/stocks/:id', (req, res) => {
    let symbolName = req.params.id;
    let timestamp = Math.floor(Date.now()/1000);
    switch(symbolName)
    {
      case 'AAPL':
        symbolName = 'AAPL';
        break;
      case 'GOOGL':
        symbolName = 'GOOGL';
        break;
      case 'IBM':
        symbolName = 'IBM';
        break;
      case 'MSFT':
        symbolName = 'MSFT';
        break;
      case 'TSLA':
        symbolName = 'TSLA';
        break;
      default:
        console.log("The symbol is not a valid symbol");
        break;

    }

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
    
      res.send(body);
    });
}); 
/*
const stock= {
  prices: [
  {
  date: 1571860801,
  open: 242.10000610351562,
  high: 243.22000122070312,
  low: 241.22000122070312,
  close: 243.17999267578125,
  volume: 19932545,
  adjclose: 243.17999267578125
  }
  ],
  isPending: false,
  firstTradeDate: 345459600,
  id: "1wk15718791161571879116",
  timeZone: {
  gmtOffset: -14400
  },
  eventsData: [ ]
  }

  app.get('/stocks/AAPL', (req, res) => {
    res.send(stock)
  });
*/

app.listen(8080, ()=>{
    console.log('server started on port 8080');
})