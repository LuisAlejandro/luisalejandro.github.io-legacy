const config = require('../../config').optimize.images;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy and minimize images
gulp.task('optimize:images', function () {
  const plugins = [
    imagemin.gifsicle(config.imageminPluginOptions.gifsicle),
    imagemin.mozjpeg(config.imageminPluginOptions.mozjpeg),
    imagemin.optipng(config.imageminPluginOptions.optipng),
    imagemin.svgo(config.imageminPluginOptions.svgo)
  ];
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(imagemin(plugins, config.imageminOptions))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'optimize:images' }));
});
