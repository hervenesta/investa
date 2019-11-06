/*const express = require('express');
const app = express();

var request = require("request");

// query parameters
// /stocks/AAPL?fetch=historical
// /stocks/AAPL?fetch=news
// /stocks/AAPL?fetch=charts
app.get('/stocks/:id', (req, res) => {
    const symbolName = req.params.id;
    let timestamp = Math.floor(Date.now()/1000);

    const fetchParam = req.query.fetch
    let suffix;
    //swtich (fetchParam) {
     // case 'historical':
      //default:
        suffix = 'get-historical-data'
      //case 'news':
        // news-suffix
      //case 'charts':
        // charts-suffix
        
    }

    var options = {
      method: 'GET',
      url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data`,
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


app.listen(8080, ()=>{
    console.log('server started on port 8080');
})*/

{
    prices: [
    {
    date: 1571774401,
    open: 241.16000366210938,
    high: 242.1999969482422,
    low: 239.62179565429688,
    close: 239.9600067138672,
    volume: 22684001,
    adjclose: 239.9600067138672
    },
    {
    date: 1571630400,
    open: 241.16000366210938,
    high: 242.1999969482422,
    low: 239.6199951171875,
    close: 239.9600067138672,
    volume: 20573400,
    adjclose: 239.9600067138672
    }
    ]
}