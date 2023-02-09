const gulp = require('gulp');
const browsersync = require('browser-sync').create();

module.exports = function watching() {
  browsersync.init({
    server: {
      baseDir: "./build/"
    },
    notify: false
  })
  gulp.watch('build').on('change', browsersync.reload)
  gulp.watch('src/**/*.html', gulp.series('html'))
  gulp.watch('src/scss/**/*.scss', gulp.parallel('styles', 'dstyles'))
  gulp.watch('src/scripts/**/*.js', gulp.parallel('scripts', 'dscripts'))
  gulp.watch('src/img/**/*.*', gulp.series('img'))
}