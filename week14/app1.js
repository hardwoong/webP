const express = require('express');
const app = express();

app.use(function(req, res, next) {
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.write("<h1>HI ! Welcome ~ </h1>");
    // res.write("<h1>Hello World!</h1>");
    // res.end();
    // res.status(200).send(`<h1>Hi ! Welcome</h1>
    //                         <h1>Hello World!!!</h1>`);
    res.send(`<h1>Hi ! Welcome</h1>
            <h1>Hello World!!!</h1>`);

});

app.listen(500);
