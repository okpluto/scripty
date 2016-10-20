var mongoose = require('mongoose');
mongoose.connect("/config");

var reading = Readings.findById(id, function(err, read) {
  console.log(read);
});

var problem = Problems.findById(id, function(err, prob) {
  console.log(prob);
});

var lessonSchema = mongoose.Schema({
  contents: [reading, problem];
});

var Lessons = mongoose.model("Lessons", lessonSchema);

module.exports = Lessons;