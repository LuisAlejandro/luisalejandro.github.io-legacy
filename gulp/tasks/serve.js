const gulp = require('gulp');

gulp.task('serve:development', ['watch:development']);
gulp.task('serve:production', ['browsersync:production']);
