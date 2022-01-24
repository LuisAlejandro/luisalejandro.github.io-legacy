const config = require('../../config').lintJson;

const gulp = require('gulp');
const jsonlint = require('gulp-jsonlint');

// Lint optimized JSON files
gulp.task('lint-json', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});
