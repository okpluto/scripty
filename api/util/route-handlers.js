const mongoose = require('mongoose');
const ObjId = mongoose.Types.ObjectId;

const Lesson = require('../data/models/lesson');
const Reading = require('../data/models/reading');
const Problem = require('../data/models/problem');

const log = require('../helpers/log');

exports.getAllLessons = function(req, res) {
  Lesson.find({}, (err, lessons) => {
    if (err) {
      log.error(err);
      return;
    }
    res.status(200).json(lessons);
  });
};

exports.getLessonById = function(req, res) {
  const id = req.params.id;
  let result = {};

  // TODO: This oughta be refactored to a promise-oriented chain.
  Lesson.findById(id, (err, lessonInfo) => {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Problem.find({lessonId: ObjId(id)}, (err, problems) => {
      if (err || !problems) {
        log.error('Error retrieving problems.');
        return;
      }
      result.lessonContent.push(...problems);

      Reading.find({lessonId: ObjId(id)}, (err, readings) => {
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

