const mongoose = require('mongoose');

const log = require('../../helpers/log');

const Lesson = require('../models/lesson');
const Content = require('../models/content');


const createdLesson = new Lesson({
  title: 'Hello World',
  description: 'Welcome to Javascript!',
})
.save((err, lesson) => {
  if (err) {
    log.error('Error saving test lesson.', err);
  }

  new Content({
    order: 0,
    type: 'reading',
    text: 'This is a test of our lesson schema.',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(err => {
    if (err) {
      log.error(err);
    }
  });

  new Content({
    order: 1,
    type: 'question',
    text: '_________(\'Hello world!\')',
    choices: [ 'console.log', 'print' ],
    answer: 'console.log',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(err => {
    if (err) {
      log.error(err);
    }
  });
});

module.exports = createdLesson;