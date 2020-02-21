const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 50000;

var offersProxy = require('./offers');

var myLogger =  (req, res, next) => {
    console.log("App ENTERED");
    next();
}


express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(myLogger)
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .post('/offers', offersProxy.modifyOffersRequest)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

