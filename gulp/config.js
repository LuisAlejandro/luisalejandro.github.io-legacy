// Paths
//
// Jekyll wipes out all files on recreation.
// We don’t want to recreate all assets on every Jekyll build
// though. That’s why assets are served from a different
// folder on the development build. BrowserSync watches only
// the asset files.
const path = require('path');

const app = 'app';
const build = 'build';
const nodeModules = 'node_modules';
const development = path.join(build, 'development');
const production = path.join(build, 'production');

// Assets
const appAssets = path.join(app, '_assets');
const devAssets = path.join(development, 'assets');
const prodAssets = path.join(production, 'assets');

// BrowserSync
module.browsersync = {
  development: {
    server: {
      baseDir: [development],
    },
    port: 9999,
    // Watched files in the dev build. BS reloads
    // website on change.
    files: [
      path.join(devAssets, 'css', '*.css'),
      path.join(devAssets, 'js', '*.js'),
      path.join(devAssets, 'images', '**'),
      path.join(devAssets, 'fonts', '*'),
    ],
    notify: false
  },
  production: {
    server: {
      baseDir: [production],
    },
    port: 9998,
    notify: false,
  },
};

// Watch source files
module.watch = {
  jekyll: [
    '_config.yml',
    '_config.build.yml',
    'stopwords.txt',
    path.join(app, '_data', '**', '*.{json,yml,csv}'),
    path.join(app, '_includes', '**', '*.{html,xml}'),
    path.join(app, '_layouts', '*.html'),
    path.join(app, '_locales', '*.yml'),
    path.join(app, '_plugins', '*.rb'),
    path.join(app, '_posts', '*.{markdown,md}'),
    path.join(app, '**', '*.{html,markdown,md,yml,json,txt,xml}'),
    path.join(app, '*'),
  ],
  styles: path.join(appAssets, 'styles', '**', '*.{cs,scss}'),
  scripts: path.join(appAssets, 'javascripts', '**', '*.{js,vue}'),
  images: path.join(appAssets, 'images', '**', '*'),
  sprites: path.join(appAssets, 'images', '**', '*.png'),
  svg: path.join(appAssets, 'images', '**', '*.svg'),
};

// Delete all files from the dev build
module.delete = {
  development: {
    src: [
      development,
      appAssets + '/styles/vendor',
      appAssets + '/fonts/vendor',
    ],
  },
  production: {
    src: [
      production,
      appAssets + '/styles/vendor',
      appAssets + '/fonts/vendor',
    ],
  },
};

// Jekyll
module.jekyll = {
  development: {
    src: app,
    dest: development,
    config: '_config.yml',
    option: '--profile',
  },
  production: {
    src: app,
    dest: production,
    config: '_config.yml,_config.build.yml',
    option: '--',
  },
};

module.sass = {
  src: appAssets + '/styles/bootswatch/theme.scss',
  dest: appAssets + '/styles/vendor/bootswatch',
};

  // CSS
module.styles = {
  development: {
    src: appAssets + '/styles/*.css',
    dest: devAssets + '/css',
  },
  production: {
    src: appAssets + '/styles/*.css',
    dest: prodAssets + '/css',
  },
  vendor: {
    src: [
      nodeModules + '/bootstrap-vue/dist/bootstrap-vue.css',
      nodeModules + '/bootstrap/scss/**/*',
      nodeModules + '/normalize.css/normalize.css',
      nodeModules + '/roboto-fontface/css/roboto/roboto-fontface.css',
    ],
    dest: appAssets + '/styles/vendor',
    base: nodeModules,
  },
  options: {
    advancedVariables: {},
    presetEnv: {
      autoprefixer: {
        cascade: true,
      },
    },
    nested: {},
    mqpacker: {
      sort: true,
    },
    cssnano: {},
  },
};

// JavaScript Modules via Browserify
module.scripts = {
  // A separate bundle will be generated for each
  // bundle config in the list below.
  //
  // head.js is loaded in the head of the website, and
  // contains everything that needs to be loaded asap.
  // app.js is loaded at the bottom, and contains
  // everything that can be loaded after rendering.
  options: {
    // Required watchify args
    cache: {},
    packageCache: {},
    fullPaths: false,
    // Add file extentions to make optional in your requires
    extensions: [],
    // Enable source maps!
    debug: true,
  },
  bundles: [{
    entries: './' + appAssets + '/javascripts/app.js',
    dest: devAssets + '/js',
    outputName: 'app.js',
  }, {
    entries: './' + appAssets + '/javascripts/head.js',
    dest: devAssets + '/js',
    outputName: 'head.js',
  }],
};

// Copy images
module.images = {
  src: appAssets + '/images/**/*',
  dest: devAssets + '/images',
};

// Copy fonts
module.fonts = {
  development: {
    src: [
      appAssets + '/fonts/*.{eot,ttf,woff,woff2,svg}',
      appAssets + '/fonts/vendor/*.{eot,ttf,woff,woff2,svg}',
    ],
    dest: devAssets + '/fonts',
    vendor: {
      src: [
        nodeModules + '/roboto-fontface/fonts/roboto/*.{woff,woff2}',
      ],
      dest: appAssets + '/fonts/vendor',
    },
  },
  production: {
    src: devAssets + '/fonts/*',
    dest: prodAssets + '/fonts',
  },
};

// Copy CSS
// Used to copy production ready styles.
module.copycss = {
  src: devAssets + '/css/*.css',
  dest: prodAssets + '/css/',
};

// Base64
module.base64 = {
  src: devAssets + '/css/*.css',
  dest: devAssets + '/css',
  options: {
    baseDir: build,
    extensions: ['svg', 'woff', 'woff2'],
    maxImageSize: 1024 * 1024 * 1, // bytes
    debug: false,
  },
};

// Optimize CSS, JS, Images, HTML for production
module.optimize = {
  css: {
    src: prodAssets + '/css/*.css',
    dest: prodAssets + '/css/',
    options: {
      uncss: {
        html: [
          production + '/**/*.html',
        ],
        ignore: [],
      },
    },
  },
  js: {
    src: devAssets + '/js/*.js',
    dest: prodAssets + '/js/',
    options: {},
  },
  json: {
    src: production + '/**/*.json',
    dest: production,
  },
  xml: {
    src: production + '/**/*.xml',
    dest: production,
    options: {
      type: 'minify',
    },
  },
  images: {
    src: devAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
    dest: prodAssets + '/images/',
    imageminPluginOptions: {
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
      optipng: {
        optimizationLevel: 3,
      },
      svgo: {
        plugins: [{
          removeDesc: true,
        }]
      }
    },
    imageminOptions: {
      verbose: false,
    },
  },
  html: {
    development: {
      src: development + '/**/*.html',
      dest: development,
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true,
        processScripts: ['application/ld+json'],
      },
    },
    production: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true,
        processScripts: ['application/ld+json'],
      },
    },
  },
};

// Lint CSS files, but none in /vendor/
module.lintStyles = {
  src: [
    appAssets + '/styles/**/*.css',
    '!' + appAssets + '/styles/vendor/**'
  ],
  options: {
    stylelint: {}, // Using .stylelintrc
    reporter: {
      clearReportedMessages: true,
    }
  }
};

// Lint JavaScript files
module.lintJs = {
  src: appAssets + '/javascripts/*.js',
};

// Lint production JSON files
module.lintJson = {
  src: production + '/**/*.json',
};

// Revision asset files
module.revision = {
  src: {
    assets: [
      prodAssets + '/css/*.css',
      prodAssets + '/js/*.js',
    ],
    base: production,
  },
  dest: {
    assets: production,
    manifest: {
      name: 'manifest.json',
      path: prodAssets,
    },
  },
};

// Replace links to asset files, with rev version
module.collect = {
  src: [
    prodAssets + '/manifest.json',
    production + '/**/*.{html,xml,txt,json,css,js}',
    '!' + production + '/feed.xml',
  ],
  dest: production
};
