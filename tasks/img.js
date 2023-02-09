const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require("./errorHandler.js").errorHandler;
const newer = require('gulp-newer');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();

module.exports = function img() {
  return gulp.src('src/img/**/*.*')
  .pipe(plumber(errorHandler))
  .pipe(newer('build/img/'))
  .pipe(cache(imagemin({
    progressive: true
  })))
  .pipe(gulp.dest('build/img/'))
  .pipe(browsersync.stream());
}