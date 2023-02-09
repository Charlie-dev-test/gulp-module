const gulp = require('gulp');
const errorHandler = require("./errorHandler.js").errorHandler;
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const size = require('gulp-size');

module.exports = function styles() {
  return gulp.src('src/scss/main.scss')
  .pipe(plumber(errorHandler))
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({ level: 2 }))
  .pipe(rename({ basename: 'main', suffix: '.min' }))
  .pipe(size({
    showFiles: true
  }))
  .pipe(gulp.dest('build/css/'))
}