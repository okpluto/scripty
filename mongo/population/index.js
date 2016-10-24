var mongoose = require('mongoose');

var Lesson = require('../lessons');
var Reading = require('../readings');
var Problem = require('../problems');

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


module.exports = new Lesson({
  title: testlesson.title,
  description: testlesson.description,
})
.save(function(err, lesson) {
  new Reading({
    order: 0,
    text: testlesson.contents[0].text,
    lessonId: lesson._id
  })
  .save(function() {

  });

  new Problem({
    order: 1,
    text: testlesson.contents[1].text,
    choices: testlesson.contents[1].choices,
    answer: testlesson.contents[1].answer,
    lessonId: lesson._id
  })
  .save(function() {

  });
});