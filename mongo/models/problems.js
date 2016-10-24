var mongoose = require('mongoose');
//mongoose.connect("/config.js");
//mongoose.connect("mongodb://localhost:test");


var problemSchema = mongoose.Schema({
  text: String,
  choices: [String],
  answer: String
});


var Problems = mongoose.model("Problems", problemSchema);

var helloWorld = new Problems({
  text: " How would you print out 'Hello World'? ",
  choices: ["print('Hello World')", "show('Hello World')", "console.log('Hello World')"],
  answer: "The answer was: console.log('Hello World')."
});

module.exports = Problems;