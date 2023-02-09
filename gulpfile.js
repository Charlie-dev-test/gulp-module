const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.clean = tasks.clean;
exports.cleanImg = tasks.cleanImg;
exports.img = tasks.img;
exports.html = tasks.html;
exports.styles = tasks.styles;
exports.dstyles = tasks.dstyles;
exports.scripts = tasks.scripts;
exports.dscripts = tasks.dscripts;
exports.watching = tasks.watching;

exports.default = gulp.series(
  exports.clean,
  exports.cleanImg,
  exports.html,
  gulp.parallel(exports.styles,
    exports.dstyles,
    exports.scripts,
    exports.dscripts,
    exports.img),
  exports.watching)