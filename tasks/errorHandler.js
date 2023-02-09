const notify = require('gulp-notify');

let errorHandler = {
  errorHandler: notify.onError({
      title: 'Ошибка в плагине <%= error.plugin %>',
      message: "Ошибка: <%= error.message %>"
  })
};

module.exports.errorHandler = errorHandler;