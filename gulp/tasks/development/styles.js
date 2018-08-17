var config = require("../../config").styles;
var helpers = require("../../util/helpers");

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var advancedVariables = require("postcss-advanced-variables");
var presetEnv = require("postcss-preset-env");
var nested = require("postcss-nested");
var mqpacker = require("css-mqpacker");
var sourcemaps = require("gulp-sourcemaps");
var browsersync = require("browser-sync");
var plumber = require("gulp-plumber");
var changed = require("gulp-changed");

// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task("styles:development", ["styles:vendor:common", "styles:sass:common"], function () {
    browsersync.notify("Transforming CSS with PostCSS");

    // PostCSS plugins
    var processors = [
      advancedVariables(config.options.advancedVariables),
      presetEnv(config.options.presetEnv),
      nested(config.options.nested),
      mqpacker(config.options.mqpacker)
    ];

    return gulp
      .src(config.development.src)
      .pipe(
        plumber({
          errorHandler: helpers.onError
        })
      )
      .pipe(changed(config.development.dest))
      .pipe(sourcemaps.init())
      .pipe(postcss(processors))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(config.development.dest));
  }
);
