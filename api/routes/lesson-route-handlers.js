const mongoose = require('mongoose');
const Lesson = require('../data/models/lesson');
const Content = require('../data/models/content');

const ObjectId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getAllLessons = (req, res) => {

  Lesson.find({}, (err, lessons) => {
    if (err) {
      log.error(err);
      return;
    }
    res.status(200).json(lessons);
  });
};

exports.getLessonAndContentsById = (req, res) => {
  const id = req.params.id;
  const result = {};

  Lesson.findById(id, (err, lessonInfo) => {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Content.find({lessonId: ObjectId(id)}, (err, content) => {
      if (err) {
        send500(res, 'Error retrieving content.', err);
        return;
      }

      result.lessonContent.push(...content);
      log.success('Successfully retrieved lesson.');
      res.status(200).json(result);
    });
  });
};

exports.createLesson = (req, res) => {
  req.body.published = false;
  new Lesson(req.body)
    .save((err, lesson) => {
      if (err) {
        log.error("Rut roh~ ", err);
        send500(res, "Lesson wasn't saved correctly!!");
      }
      console.log("This is the lesson: ", lesson);
      res.status(201).send(lesson._id);
    });
};

exports.updateLessonById = (req, res) => {
  const id = req.params.id;
  Lesson.findById(id, function(err, lesson) {
    if (err) {
      log.error(err);
    }
    console.log("LESSON ", lesson);
    for (var key in req.body) {
      lesson[key] = req.body[key];
    }
    lesson.save(function(err, updatedLesson) {
      if (err) {
        log.error(err);
      }
      res.status(200).send(updatedLesson);
    })
  });
};

exports.deleteLessonById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};
