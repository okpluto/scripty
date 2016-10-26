var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var log = require('./helpers/log');

var mongoose = require('mongoose');

var db = require('../mongo/config');
var Lessons = require('../mongo/models/lesson');

app.use(bodyParser.json());

// Apply headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Log out requests for debug
app.use(function(req, res, next) {
  log(`Request recieved from ${req.url} with method ${req.method}.`);
});

app.get('/api/lessons', function(req, res) {
  Lessons.find({}, function(err, lessons) {
    if (err) {
      log({color: 'red'}, err);
      return;
    }
    res.status(200).json(lessons);
  });
});

app.get('/api/lessons/:id', function(req, res) {
  var id = req.params.id;
  Lessons.findById(id, function(err, lesson) {
    if (err) {
      log({color: 'red'}, err);
      return;
    }
    res.status(200).json(lesson);
  });
});

app.listen(process.env.PORT || 3011, function() {
  log(`Listening on port ${process.env.PORT || 3011}`);
});
