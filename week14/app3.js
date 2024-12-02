const express = require('express');
const app = express();

// app.use('/favicon.ico', (req, res) => res.status(204).end()); 

app.use(function(req, res, next) {
    console.log('First Middleware ...');
    req.user = 'PSW';
    next();
});

app.use(function(req, res) {
    console.log("Second Middleware ...");
    res.status(200).send(`<h1>${req.user} responds at Express Server`);
});

app.listen(500);