var express = require("express");
var app = express();
var mongoose = require("mongoose");
//var bodyParser = require("bodyParser");
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

var Problems = require("./models/problems");

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/test', function(req, res) {
  Problems.find(function(err, problems) {
    if(err) console.log("Error: ", err);
    res.json(problems);
  });
});


// app.post("/config", function(req, res) {
//   db.config.insert(req.body, function(err, doc) {
//     res.json(doc);
//   });
// });

// app.get('/config/:id', function(req, res) {
//   var id = req.params.id;
//   db.config.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
//     res.json(doc);
//   });
// });

app.listen(process.env.PORT || 8000);