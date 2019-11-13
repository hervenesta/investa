const express = require('express');
const app = express();

const chartsRouter = require('./controllers/chartsRouter');
const nyseRouter = require('./controllers/nyseRouter');
const kpiRouter = require('./controllers/kpiRouter');

app.use('/nyse', nyseRouter);
app.use('/chart', chartsRouter);
app.use('/nyse/kpi', kpiRouter);



app.listen(8080, ()=>{
    console.log('server started on port 8080');
}) 

