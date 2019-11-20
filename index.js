const express = require('express');
const app = express();

const chartsRouter = require('./controllers/chartsRouter');
const nyseRouter = require('./controllers/nyseRouter');
const kpiRouter = require('./controllers/kpiRouter');

// get all stocks at route /nyse
app.use('/nyse', nyseRouter);
//get chart for any individual stock symbol. example /chart/GOOGL
app.use('/chart', chartsRouter);
// get kpi and company info at route /nyse/kpi/TSLA for example
app.use('/nyse/kpi', kpiRouter);



app.listen(8080, ()=>{
    console.log('server started on port 8080');
}) 

