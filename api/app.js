var express = require('express');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var db = require("config");

var log = require('./helpers/log');

var app = express();

app.use((req, res, next) => {
  log(`Request recieved from ${req.url} with method ${req.method}.`);
});

app.use(bodyParser.json());

app.get('/', (req, res) => {});

log(`Listening on port ${process.env.PORT || 3011}`)
app.listen(process.env.PORT || 3011);

log({color: 'red'}, 'Something went wrong!');