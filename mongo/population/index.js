var mongoose = require('mongoose');

var log = require('../../api/helpers/log');

var Lesson = require('../models/lesson');
var Reading = require('../models/reading');
var Problem = require('../models/problem');

/*
 *  DATAYPE: Lesson
 *
 *  @title <String> alias lessonTitle
 *  @description <String> alias lessonDescription
 *  @contents <Array[Content]> alias lessonContents
 */
var testlesson = {
  title: 'Hello World',
  description: 'Welcome to Javascript!',
  contents: [
    {
      type: 'reading',
      text: 'This is a test of our lesson schema.'
    },
    {
      type: 'question',
      text: '_________(\'Hello world!\')',
      choices: [ 'console.log', 'print' ],
      answer: 'console.log',
    }
  ]
};

var createdLesson = new Lesson({
  title: testlesson.title,
  description: testlesson.description,
})
.save(function(err, lesson) {
  if (err) {
    log({color: 'red'}, 'Error saving test lesson.', err);
  }

  new Reading({
    order: 0,
    text: testlesson.contents[0].text,
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(function(err) {
    if (err) {
      log({color: 'red'}, 'Error saving test reading.', err);
    }
  });

  new Problem({
    order: 1,
    text: testlesson.contents[1].text,
    choices: testlesson.contents[1].choices,
    answer: testlesson.contents[1].answer,
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(function(err) {
    if (err) {
      log({color: 'red'}, 'Error saving test problem.', err);
    }
  });
});

module.exports = createdLesson;