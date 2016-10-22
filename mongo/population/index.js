var mongoose = require('mongoose');

var Lesson = require('../lessons');
var Reading = require('../readings');
var Problem = require('../problems');

module.exports = new Lesson({
  title: 'Hello World',
  text: 'Welcome to Javascript!',
})
.save(function(err, lesson) {
  new Reading({
    text: 'This is a test of our lesson schema.',
    lesson: lesson._id
  })
  .save(console.error.bind(console));

  new Problem({
    text: '_________(\'Hello world!\')',
    choices: [ 'console.log', 'print' ],
    answer: 'console.log',
    lesson: lesson._id
  })
  .save(console.error.bind(console));
});