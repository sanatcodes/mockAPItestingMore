const express = require('express')
const app = express();
const test1 = require('./data/data1.json');
const test2 = require('./data/data2.json');
const port = 8080;

// //Middleware
// app.use('/v3/trackings/get', () => {
//     console.log("middleware called");
// })


app.get('/v3/trackings/', (req, res) => {
    res.send(test1);
});

app.get('/v3/trackings/', (req, res) => {
    res.send(test2);
});


app.listen( port, () => {
    console.log();
});

