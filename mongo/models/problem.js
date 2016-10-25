var mongoose = require('mongoose');

//mongoose.connect("/config.js");
//mongoose.connect("mongodb://localhost:test");

var problemSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  choices: [String],
  answer: String,
  lesson: {type: Number, ref: 'lesson'}
});

<<<<<<< HEAD:mongo/models/problems.js

var Problems = mongoose.model('Problems', problemSchema);

var helloWorld = new Problems({
  text: " How would you print out 'Hello World'? ",
  choices: ["print('Hello World')", "show('Hello World')", "console.log('Hello World')"],
  answer: "The answer was: console.log('Hello World')."
});

helloWorld.save(function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(err);
  }
})

module.exports = Problems;
=======
var Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
>>>>>>> 55c45c77974f59f4cc30abe48efb3ae3e9fc437b:mongo/models/problem.js
