const gulp = require('gulp');
const del = require('del');

module.exports = function clearJs() {
  return del(['build/img/']);
}