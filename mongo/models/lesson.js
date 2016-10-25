var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

var Lesson = mongoose.model('Lesson', lessonSchema);

<<<<<<< HEAD:mongo/models/lessons.js
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
=======
module.exports = Lesson;
>>>>>>> 55c45c77974f59f4cc30abe48efb3ae3e9fc437b:mongo/models/lesson.js
