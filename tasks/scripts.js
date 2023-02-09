const gulp = require('gulp');
const errorHandler = require("./errorHandler.js").errorHandler;
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const size = require('gulp-size');

module.exports = function scripts() {
  return gulp.src('src/scripts/**/*.js')
  .pipe(plumber(errorHandler))
  .pipe(concat({ path: 'main.js'}))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(size({
    showFiles: true
  }))
  .pipe(gulp.dest('build/js/'))
}