'use strict'
// To be called when a user starts a lesson to keep streak up to date
//Needs testing!!!
const updateStreak = function(lastLessonDate) {
  let today = new Date();
  let lastLesson = new Date(lastLessonDate);
  let diff = Math.abs(today.getTime() - lastLesson.getTime());
  let daysDiff = Math.ceil(diff / (1000 * 3600 * 24));
  if (daysDiff <= 2) {
    let prevDay = lastLesson.getDay();
    let currDay = today.getDay();
    if (currDay - prevDay === 1) {
      //Call function to add one to streak
      //Push numeric value for day of week into streak array
    }
  }
}

module.exports = {
  calculateStreak: calculateStreak
}