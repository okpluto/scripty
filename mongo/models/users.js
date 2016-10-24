var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;