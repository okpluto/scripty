var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

var Lesson = mongoose.model('Lesson', lessonSchema);


module.exports = Lesson;