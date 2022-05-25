const express = require('express')
const app = express();
const importData = require('./data/data_copy.json');
const port = 8080;

// //Middleware
// app.use('/v3/trackings/get', () => {
//     console.log("middleware called");
// })


app.get('/v3/trackings/', (req, res) => {
    res.send(importData);
});

app.listen( port, () => {
    console.log();
});

