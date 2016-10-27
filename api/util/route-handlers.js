var mongoose = require('mongoose');
var objid = mongoose.Types.ObjectId;

var Lesson = require('../../mongo/models/lesson');
var Reading = require('../../mongo/models/reading');
var Problem = require('../../mongo/models/problem');

var log = require('../helpers/log');

exports.getAllLessons = function(req, res) {
  Lesson.find({}, function(err, lessons) {
    if (err) {
      log.error(err);
      return;
    }
    res.status(200).json(lessons);
  });
};

exports.getLessonDeeply = function(req, res) {
  var id = req.params.id;
  var result = {};

  // TODO: This oughta be refactored to a promise-oriented chain.
  Lesson.findById(id, function(err, lessonInfo) {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Problem.find({lessonId: objid(id)}, function(err, problems) {
      if (err || !problems) {
        log.error('Error retrieving problems.');
        return;
      }
      result.lessonContent.push(...problems);

      Reading.find({lessonId: objid(id)}, function(err, readings) {
        if (err || !readings) {
          log.error('Error retrieving readings.');
          return;
        }
        result.lessonContent.push(...readings);
        res.status(200).json(result);
      });
    });
  });
};

exports.postLessons = function(req, res) {

};

exports.getUsers = function() {

};

exports.postUser = function() {

};

