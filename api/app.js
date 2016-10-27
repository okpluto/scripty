var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var log = require('./helpers/log');

var db = require('./data/config');

var handlers = require('./util/route-handlers');

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
  log.info(`Request recieved from ${req.url} with method ${req.method}.`);
  next();
});

app.get('/api/lessons', handlers.getAllLessons);

app.get('/api/lessons/:id', handlers.getLessonById);

app.post('/api/lessons', handlers.createLesson);

app.get('/api/users', handlers.getUsers);
app.get('/api/users/:id', handlers.getUserById);
// app.get('/api/users/:name', handlers.getUserByName);

app.post('/api/users', handlers.createUser);

app.listen(process.env.PORT || 3011, function() {
  log(`Listening on port ${process.env.PORT || 3011}`);
});
