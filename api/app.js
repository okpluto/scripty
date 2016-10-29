const express = require('express');
const bodyParser = require('body-parser');

const handlers = require('./util/route-handlers');
const log = require('./helpers/log');
const db = require('./data/config');

const app = express();

app.use(bodyParser.json());

// Apply headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Log out requests for debug
app.use((req, res, next) => {
  log.info(`Request recieved from ${req.url} with method ${req.method}.`);
  next();
});

/*
Add update, delete for Users/Lesssons.
*/

app.get('/api/lessons', handlers.getAllLessons);
app.get('/api/lessons/:id', handlers.getLessonById);
app.post('/api/lessons', handlers.createLesson);
app.put('/api/lessons/:id', handlers.updateLessonById);
app.delete('/api/lessons/:id', handlers.deleteLessonById);

app.get('/api/users', handlers.getUsers);
app.get('/api/users/:id', handlers.getUserById);
app.post('/api/users', handlers.createUser);

app.get('/api/content/:type', handlers.getContentByType);
app.get('/api/content/:id', handlers.getContentById);
app.post('/api/content', handlers.createContent);
app.put('/api/content', handlers.updateContentById);
app.delete('/api/content', handlers.deleteContentById);



app.listen(process.env.PORT || 3011, () => {
  log.info(`Listening on port ${process.env.PORT || 3011}.`);
});
