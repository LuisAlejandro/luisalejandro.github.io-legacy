const config = require('../../config').favicon;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const favicon = require('gulp-real-favicon');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const fs = require('fs');

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon:generate:production', function (done) {
  favicon.generateFavicon(config.options, done);
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('favicon:production', ['favicon:generate:production'], function () {
  const faviconHtml = JSON.parse(fs.readFileSync(config.options.markupFile)).favicon.html_code;
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(favicon.injectFaviconMarkups(faviconHtml))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'favicon:production'}));
});
