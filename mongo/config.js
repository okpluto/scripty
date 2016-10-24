var mongoose = require('mongoose');

mongoose.connect('mongod://localhost/scripty');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
connection.once('open', function() {});

module.exports = connection;