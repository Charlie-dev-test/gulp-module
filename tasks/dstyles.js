const gulp = require('gulp');
const errorHandler = require("./errorHandler.js").errorHandler;
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browsersync = require('browser-sync').create();

module.exports = function dstyles() {
  return gulp.src('src/scss/main.scss')
  .pipe(plumber(errorHandler))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(rename({ basename: 'main' }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('build/css/'))
  .pipe(browsersync.stream());
}