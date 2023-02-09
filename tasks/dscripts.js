const gulp = require('gulp');
const errorHandler = require("./errorHandler.js").errorHandler;
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();

module.exports = function dscripts() {
  return gulp.src('src/scripts/**/*.js', { sourcemaps: true })
  .pipe(plumber(errorHandler))
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('build/js/', { sourcemaps: '.' }))
  .pipe(browsersync.stream());
}