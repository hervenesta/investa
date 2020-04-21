const express = require('express');
const router = express.Router();

var request = require("request");

router.get('/:id', (req, res) => {
    symbolName = req.params.id;

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
        qs: {symbol:`${symbolName}`},
        headers: {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': 'ce9b90c58fmsh5b71f37b9a6a50ep172728jsn54c6923e6e85'
            }
        };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        // convert json object to javascript array in order to read each object
        // using the dot notation in React
        let json = body;
        let obj = JSON.parse(json);
        let summary = obj.summaryProfile;
        let financialData = obj.financialData;
        let quoteType = obj.quoteType;

        res.send({
            summary: summary.longBusinessSummary,
            price:financialData.currentPrice.raw,
            ROA:financialData.returnOnAssets.fmt,
            DTE:financialData.debtToEquity.fmt,
            ROE: financialData.returnOnEquity.fmt,
            revenue:financialData.totalRevenue.longFmt,
            quoteType: quoteType.longName
        }); 
    });
})

module.exports = router;