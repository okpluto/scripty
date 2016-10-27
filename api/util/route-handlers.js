var mongoose = require('mongoose');
var objid = mongoose.Types.ObjectId;

var Lesson = require('../data/models/lesson');
var Reading = require('../data/models/reading');
var Problem = require('../data/models/problem');

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

exports.getLessonById = function(req, res) {
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

        log.info('Successfully submitted lesson.');
        res.status(200).json(result);
      });
    });
  });
};

exports.createLesson = function(req, res) {

};

exports.getUsers = function() {

};

exports.getUserById = function() {

};

exports.createUser = function() {

};

