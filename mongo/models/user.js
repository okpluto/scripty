var mongoose = require('mongoose');

/*
  TODO: Achievement and progress info should be included in the schema.
*/
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;