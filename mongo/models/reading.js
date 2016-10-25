var mongoose = require('mongoose');

var readingSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  lesson: {type: Number, ref: 'lesson'}
});

var Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;