'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
	if (err) {
		console.log('Failed connecting to mongo!');
	} else {
		console.log('Successfully connected to mongo!');
	}
});

require('./seed');