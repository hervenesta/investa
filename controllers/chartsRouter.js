const express = require('express');
//const chartdata = require('./chartData.json');
let router = express.Router();

//const app = express();

var request = require("request");

router.get('/:id', (req, res, next) => {
    //res.send(chartdata);
    let symbolName = req.params.id;

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
        qs: {interval: '1d', region: 'US', symbol: `${symbolName}`, lang: 'en', range: '1mo'},
        headers: {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': 'ce9b90c58fmsh5b71f37b9a6a50ep172728jsn54c6923e6e85'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        // convert json object to javascript array to allow access to each
        // object using the dot notation.
        var json = body;
        var obj = JSON.parse(json);
        var stocktimestamp = obj.chart.result[0].timestamp;
        var stockprice = obj.chart.result[0].indicators.adjclose[0].adjclose;
       
       
       
        res.send({
            timestamp:stocktimestamp,
            price: stockprice
        });
    }) 
}) 

module.exports = router;
//app.listen(8888, ()=> console.log("server running ..."));