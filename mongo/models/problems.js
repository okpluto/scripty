var mongoose = require('mongoose');
mongoose.connect('/config.js');

var problemSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  choices: [String],
  answer: String
});

var Problems = mongoose.model('Problems', problemSchema);

module.exports = Problems;