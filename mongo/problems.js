var mongoose = require('mongoose');
mongoose.connect("/config.js");

var problemSchema = mongoose.Schema({
  text: String,
  choices: [String],
  answer: String
});

var Problems = mongoose.model("Problems", problemSchema);

module.exports = Problems;