var mongoose = require('mongoose');
<<<<<<< HEAD
//mongoose.connect("/config.js");
//mongoose.connect("mongodb://localhost:test");

=======
>>>>>>> bf396f80118280d4efb0a7e950599e4f044b3c8b

var problemSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  choices: [String],
  answer: String,
  lesson: {type: Number, ref: 'lesson'}
});

<<<<<<< HEAD

var Problems = mongoose.model("Problems", problemSchema);
=======
var Problems = mongoose.model('Problems', problemSchema);
>>>>>>> bf396f80118280d4efb0a7e950599e4f044b3c8b

var helloWorld = new Problems({
  text: " How would you print out 'Hello World'? ",
  choices: ["print('Hello World')", "show('Hello World')", "console.log('Hello World')"],
  answer: "The answer was: console.log('Hello World')."
});

module.exports = Problems;