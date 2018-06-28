'use strict';

const express = require('express');
const app = express();

const oneDay = 86400000;
const port = process.env.PORT || 3000;

//app.use(express.static(__dirname + '/../public', { maxAge: oneDay }));
app.use(express.static(`${__dirname} /../public`, { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);

console.log(`server listening on port:  ${port}`);