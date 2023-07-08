// Including Libraries and Modules
const express = require('express');
const path = require('path');
const app = express();
const port = 7000;

// Seting View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

// creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error in ${err}`);
    }
    console.log('Server is running visit http://localhost:7000 to see result');
});