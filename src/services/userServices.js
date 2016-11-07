'use strict'
// To be called when a user starts a lesson to keep streak up to date
//Needs testing!!!
const calculateStreak = function(lastLessonDate) {
  let today = new Date();
  let lastLesson = new Date(lastLessonDate);
  let diff = Math.abs(today.getTime() - lastLesson.getTime());
  let daysDiff = Math.ceil(diff / (1000 * 3600 * 24));
  if (daysDiff <= 2) {
    let prevDay = lastLesson.getDay();
    let currDay = today.getDay();
    return (currDay - prevDay)
  }
  return false;
}

module.exports = {
  calculateStreak: calculateStreak
}