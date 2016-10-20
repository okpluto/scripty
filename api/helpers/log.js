const moment = require('moment');
const chalk = require('chalk');

const prelude = () => (
  `${chalk.dim('[')}` +
  `${chalk.yellow(
    '𝕊 ' + moment(new Date()).format('hh:mm:ss')
  )}` +
  `${chalk.dim(']')} `
);

module.exports = function(opts, ...lines) {
  if (typeof opts !== 'object') { lines = [opts, ...lines]; }

  let display = lines
    .map(i =>
      prelude() + chalk[opts.color || 'white'](i))
    .join('\n');

  console.log.call(console, display);
};