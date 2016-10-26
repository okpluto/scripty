var mongoose = require('mongoose');

var readingSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  lessonId: mongoose.Schema.Types.ObjectId
});

var Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;