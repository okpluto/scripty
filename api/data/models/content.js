const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  type: String,
  text: String,
  choices: [String],
  answer: String,
  lessonId: mongoose.Schema.Types.ObjectId
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;