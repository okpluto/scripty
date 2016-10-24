var mongoose = require('mongoose');

var problemSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  choices: [String],
  answer: String,
  lesson: {type: Number, ref: 'lesson'}
});

var Problems = mongoose.model('Problems', problemSchema);

module.exports = Problems;