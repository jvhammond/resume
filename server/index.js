'use strict';

var express = require('express');
var app = express();

var oneDay = 86400000;
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);

console.log('server listening on port: ' + port);
