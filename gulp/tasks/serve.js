require('./development/watch');
require('./production/browser-sync');

const gulp = require('gulp');

gulp.task('serve:development', gulp.series('watch:development'));

gulp.task('serve:production', function (done) {
  gulp.series('browsersync:production');
  done();
});
