'use strict';

var express = require('express');

require('./database');

var app = express();

// parse application/json
app.use(require('body-parser').json());

app.use('/', express.static('public'));

app.use('/api', require('./api'));

app.listen(3000, function() {
    console.log("The frontend server is running on port 3000!");
});