var mongoose = require('mongoose');

/*
  TODO: Achievement and progress info should be included in the schema.
*/
var readingSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  lesson: {type: Number, ref: 'lesson'}
});

var Readings = mongoose.model('Readings', readingSchema);

module.exports = Readings;