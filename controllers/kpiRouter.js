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
        'x-rapidapi-key': '93b26d98c8msh56f6f024aa8de21p18ec5ejsn2e4cb3c87943'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        // convert json object to javascript array in order to read each object
        // using the dot notation in React
        var json = body;
        var obj = JSON.parse(json);
        var summary = obj.summaryProfile;
        var financialData = obj.financialData;
        var quoteType = obj.quoteType;
        res.send({
            summary: summary,
            financialInfo: financialData,
            quoteType: quoteType
        }); 
    });
})

module.exports = router;