var mongoose = require('mongoose');
mongoose.connect('/config.js');

var readingSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  lesson: {type: Number, ref: 'lesson'}
});

var Readings = mongoose.model('Readings', readingSchema);

module.exports = Readings;