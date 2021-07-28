const plumber = require('gulp-plumber'),
      errorHandler = require('gulp-plumber-error-handler'),
      changed = require('gulp-changed'),
      del = require('del');

module.exports = function() {
  $.gulp.task('entriesScriptGet', () => {
    return $.gulp.src('app/js/entries/**/*')
      .pipe(plumber({ errorHandler: errorHandler('Error in entriesScript task') }))
      .pipe($.gulp.dest('build/js/entries'))
  });

  $.gulp.task('delEntriesScript', () => {
    return del('build/js/entries');
  });
};
