var mongoose = require('mongoose');
mongoose.connect('/config.js');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("We are in!");
// });


var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

var Users = mongoose.model('Users', userSchema);

var user = new Users(
  {
    name: "Fred",
    email: "fred@gmail.com",
    password: "fred1"
  })

module.exports = Users;