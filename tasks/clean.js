const gulp = require('gulp');
const del = require('del');

module.exports = function clean() {
  return del(['build/*', '!build/img/']);
}