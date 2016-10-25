var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

var Lessons = mongoose.model('Lessons', lessonSchema);

var lesson1 = new Lessons({
  title: "Variable",
  description: "In this lesson, you will be learning about variables"
});

lesson1.save(function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

module.exports = Lessons;