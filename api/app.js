var express = require('express');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var db = require("../mongo/config");

var log = require('./helpers/log');

var Lessons = require("../mongo/models/lessons");

var app = express();

app.use((req, res, next) => {
  log(`Request recieved from ${req.url} with method ${req.method}.`);
});

app.use(bodyParser.json());

app.get('/api/lessons', function(req, res) {
  Lessons.find({}, function(err, lessons) {
    res.send(lessons.reduce(function(lessonMap, item) {
        lessonMap[item.id] = item;
        return lessonMap;
      }, {})
    );
  });
});

app.get('/api/lessons:id', function(req, res) {
  Lessons.findById(req.params.id, function(err, lesson) {
    if(err) console.log(err);
    res.json(lesson);
  });
});

log(`Listening on port ${process.env.PORT || 3011}`)
app.listen(process.env.PORT || 3011);

log({color: 'red'}, 'Something went wrong!');