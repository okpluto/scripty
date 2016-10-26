var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var log = require('./helpers/log');

var mongoose = require('mongoose');
var objid = mongoose.Types.ObjectId;

var db = require('../mongo/config');
var Lesson = require('../mongo/models/lesson');
var Reading = require('../mongo/models/reading');
var Problem = require('../mongo/models/problem');

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
  next();
});

app.get('/api/lessons', function(req, res) {
  Lesson.find({}, function(err, lessons) {
    if (err) {
      log({color: 'red'}, err);
      return;
    }
    res.status(200).json(lessons);
  });
});

app.get('/api/lessons/:id', function(req, res) {
  var id = req.params.id;
  var result = {};

  // TODO: This oughta be refactored to a promise-oriented chain.
  Lesson.findById(id, function(err, lessonInfo) {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Problem.find({lessonId: objid(id)}, function(err, problems) {
      if (err || !problems) {
        log({color: 'red'}, 'Error retrieving problems.');
        return;
      }
      result.lessonContent.push(...problems);

      Reading.find({lessonId: objid(id)}, function(err, readings) {
        if (err || !readings) {
          log({color: 'red'}, 'Error retrieving readings.');
          return;
        }
        result.lessonContent.push(...readings);
        res.status(200).json(result);
      });
    });
  });
});

app.listen(process.env.PORT || 3011, function() {
  log(`Listening on port ${process.env.PORT || 3011}`);
});
