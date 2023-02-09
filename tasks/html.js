const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const errorHandler = require("./errorHandler.js").errorHandler;
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');

module.exports = function html() {
  return gulp.src('src/**/*.html')
  .pipe(plumber(errorHandler))
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
  .pipe(htmlmin(
    { collapseWhitespace: true,
      removeComments: true    
    }
  ))
  .pipe(gulp.dest('build'))
}