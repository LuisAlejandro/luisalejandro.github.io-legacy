// Paths
//
// Jekyll wipes out all files on recreation.
// We don’t want to recreate all assets on every Jekyll build
// though. That’s why assets are served from a different
// folder on the development build. BrowserSync watches only
// the asset files.
const path = require('path');
const util = require('util');

const app = 'app';
const build = 'build';
const nodeModules = 'node_modules';
const development = path.join(build, 'development');
const production = path.join(build, 'production');

// Assets
const appAssets = path.join(app, '_assets');
const devAssets = path.join(development, 'assets');
const prodAssets = path.join(production, 'assets');

var exports = module.exports = {};

exports.libraries = {
  fonts: {
    src: [
      path.join('google-fonts-*.css'),
      path.join('fonts', '**', '**', '*.{eot,ttf,woff,woff2,svg}')
    ],
    clean: [
      path.join('google-fonts-*.css'),
      path.join('fonts')
    ],
    webfonts: [
      'Roboto:100',
      'Oleo+Script:400'
    ],
    dest: path.join(nodeModules, 'webfonts')
  }
};

// BrowserSync
exports.browsersync = {
  development: {
    server: {
      baseDir: [development]
    },
    port: 9999,
    // Watched files in the dev build. BS reloads
    // website on change.
    files: [
      path.join(devAssets, 'css', '*.css'),
      path.join(devAssets, 'js', '*.js'),
      path.join(devAssets, 'images', '**'),
      path.join(devAssets, 'sounds', '**'),
      path.join(devAssets, 'fonts', '*'),
      path.join(development, '*')
    ],
    notify: true,
    open: false,
    ui: false
  },
  production: {
    server: {
      baseDir: [production]
    },
    port: 9998,
    notify: true,
    open: false,
    ui: false
  }
};

// Watch source files
exports.watch = {
  jekyll: [
    '_config.common.yml',
    '_config.development.yml',
    '_config.production.yml',
    'stopwords.txt',
    path.join(app, '_data', '**', '*.{json,yml,csv}'),
    path.join(app, '_includes', '**', '*.{html,xml}'),
    path.join(app, '_layouts', '*.html'),
    path.join(app, '_locales', '*.yml'),
    path.join(app, '_plugins', '*.rb'),
    path.join(app, '_posts', '*.{markdown,md}'),
    path.join(app, '**', '*.{html,markdown,md,yml,json,txt,xml}'),
    path.join(app, '*')
  ],
  styles: path.join(appAssets, 'styles', '**', '*.{css,scss}'),
  scripts: path.join(appAssets, 'javascripts', '**', '*.{js,vue}'),
  images: path.join(appAssets, 'images', '**', '*.{jpg,jpeg,png,gif}'),
  sounds: path.join(appAssets, 'sounds', '**', '*.{ogg,mp3,m4a,ac3}'),
  svg: path.join(appAssets, 'images', '**', '*.svg')
};

// Delete all files from the dev build
exports.clean = {
  development: {
    src: [
      development,
      path.join(appAssets, 'styles', 'vendor'),
      path.join(appAssets, 'fonts', 'vendor')
    ]
  },
  production: {
    src: [
      production,
      path.join(appAssets, 'styles', 'vendor'),
      path.join(appAssets, 'fonts', 'vendor')
    ]
  }
};

// Jekyll
exports.jekyll = {
  development: {
    config: '_config.common.yml,_config.development.yml',
    option: '--profile'
  },
  production: {
    config: '_config.common.yml,_config.production.yml',
    option: '--quiet'
  }
};

exports.sass = {
  src: path.join(appAssets, 'styles', 'bootswatch', 'theme.scss'),
  dest: path.join(appAssets, 'styles', 'vendor', 'bootswatch')
};

// CSS
exports.styles = {
  vendor: {
    src: [
      path.join(nodeModules, 'bootstrap-vue', 'dist', 'bootstrap-vue.css'),
      path.join(nodeModules, 'bootstrap', 'scss', '**', '*'),
      path.join(nodeModules, 'normalize.css', 'normalize.css'),
      path.join(nodeModules, 'webfonts', '*.css')
    ],
    dest: path.join(appAssets, 'styles', 'vendor'),
    base: nodeModules
  },
  development: {
    src: path.join(appAssets, 'styles', '*.css'),
    dest: path.join(devAssets, 'css')
  },
  production: {
    src: path.join(appAssets, 'styles', '*.css'),
    dest: path.join(prodAssets, 'css')
  },
  options: {
    advancedVariables: {},
    presetEnv: {
      autoprefixer: {
        cascade: true
      }
    },
    nested: {},
    mqpacker: {
      sort: true
    },
    cssnano: {},
    uncss: {
      html: [
        path.join(production, '**', '*.html')
      ],
      ignore: []
    }
  }
};

// JavaScript Modules via Browserify
exports.scripts = {
  // A separate bundle will be generated for each
  // bundle config in the list below.
  //
  // app.js is loaded at the bottom, and contains
  // everything that can be loaded after rendering.
  development: {
    options: {
      // Required watchify args
      cache: {},
      packageCache: {},
      fullPaths: false,
      // Enable source maps!
      debug: true
    },
    bundles: [{
      entries: path.join(appAssets, 'javascripts', 'app.js'),
      dest: path.join(devAssets, 'js'),
      outputName: 'app.js'
    }]

  },
  production: {
    options: {
      // Required watchify args
      cache: {},
      packageCache: {},
      fullPaths: false,
      // Disable source maps!
      debug: false
    },
    bundles: [{
      entries: path.join(appAssets, 'javascripts', 'app.js'),
      dest: path.join(prodAssets, 'js'),
      outputName: 'app.js'
    }]
  }
};

// Copy images
exports.images = {
  development: {
    src: path.join(appAssets, 'images', '**', '*'),
    dest: path.join(devAssets, 'images')
  },
  production: {
    src: path.join(appAssets, 'images', '**', '*'),
    dest: path.join(prodAssets, 'images')
  }
};

// Copy sounds
exports.sounds = {
  development: {
    src: path.join(appAssets, 'sounds', '**', '*'),
    dest: path.join(devAssets, 'sounds')
  },
  production: {
    src: path.join(appAssets, 'sounds', '**', '*'),
    dest: path.join(prodAssets, 'sounds')
  }
};

// Copy fonts
exports.fonts = {
  vendor: {
    src: path.join(nodeModules, 'webfonts', '*.{eot,ttf,woff,woff2,svg}'),
    dest: path.join(appAssets, 'fonts', 'vendor')
  },
  development: {
    src: [
      path.join(appAssets, 'fonts', '*.{eot,ttf,woff,woff2,svg}'),
      path.join(appAssets, 'fonts', 'vendor', '*.{eot,ttf,woff,woff2,svg}')
    ],
    dest: path.join(devAssets, 'fonts')
  },
  production: {
    src: [
      path.join(appAssets, 'fonts', '*.{eot,ttf,woff,woff2,svg}'),
      path.join(appAssets, 'fonts', 'vendor', '*.{eot,ttf,woff,woff2,svg}')
    ],
    dest: path.join(prodAssets, 'fonts')
  }
};

// Base64
exports.base64 = {
  src: path.join(prodAssets, 'css', '*.css'),
  dest: path.join(prodAssets, 'css'),
  options: {
    extensions: ['svg', 'woff2'],
    maxImageSize: 1024 * 1024 * 1, // bytes
    debug: false
  }
};

// Optimize CSS, JS, Images, HTML for production
exports.optimize = {
  css: {
    src: path.join(prodAssets, 'css', '*.css'),
    dest: path.join(prodAssets, 'css'),
    options: {
      discardComments: {},
      cssnano: {},
      uncss: {
        html: [
          path.join(production, '**', '*.html')
        ],
        ignore: [],
        htmlroot: production
      }
    }
  },
  js: {
    src: path.join(prodAssets, 'js', '*.js'),
    dest: path.join(prodAssets, 'js')
  },
  json: {
    src: path.join(production, '**', '*.json'),
    dest: production
  },
  xml: {
    src: path.join(production, '**', '*.xml'),
    dest: production,
    options: {
      type: 'minify'
    }
  },
  images: {
    src: path.join(prodAssets, 'images', '**', '*.{jpg,jpeg,png,gif,svg}'),
    dest: path.join(prodAssets, 'images'),
    imageminPluginOptions: {
      gifsicle: {
        interlaced: true
      },
      jpegtran: {
        progressive: true
      },
      optipng: {
        optimizationLevel: 3
      },
      svgo: {
        plugins: [{
          removeDesc: true
        }]
      }
    },
    imageminOptions: {
      verbose: false
    }
  },
  html: {
    src: path.join(production, '**', '*.html'),
    dest: production,
    options: {
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      minifyJS: true,
      minifyCSS: true,
      processScripts: ['application/ld+json']
    }
  }
};

// Lint CSS files, but none in /vendor/
exports.lintStyles = {
  src: [
    path.join(appAssets, 'styles', '**', '*.css'),
    util.format('!%s', path.join(appAssets, 'styles', 'vendor', '**'))
  ],
  options: {
    stylelint: {},
    reporter: {
      clearReportedMessages: true
    }
  }
};

// Lint JavaScript files
exports.lintJs = {
  src: path.join(appAssets, 'javascripts', '*.js')
};

// Lint JSON files
exports.lintJson = {
  src: path.join(production, '**', '*.json')
};

// Lint JSON files
exports.lintHtml = {
  src: path.join(production, '**', '*.html')
};
// Lint JSON files
exports.lintXml = {
  src: path.join(production, '**', '*.xml')
};

// Revision asset files
exports.revision = {
  src: {
    assets: [
      path.join(prodAssets, 'css', '*.css'),
      path.join(prodAssets, 'js', '*.js')
    ],
    base: production
  },
  dest: {
    assets: production,
    manifest: {
      name: 'manifest.json',
      path: prodAssets
    }
  }
};

// Replace links to asset files, with rev version
exports.collect = {
  src: [
    path.join(prodAssets, 'manifest.json'),
    path.join(production, '**', '*.{html,xml,txt,json,css,js}'),
    util.format('!%s', path.join(production, 'feed.xml'))
  ],
  dest: production
};

exports.favicon = {
  src: path.join(production, 'index.html'),
  dest: production,
  options: {
    masterPicture: path.join(production, 'assets', 'images', 'logo.svg'),
    dest: path.join(production, 'assets', 'images', 'icons'),
    iconsPath: '/assets/images/icons/',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#f8d983',
        margin: '25%',
        assets: {
          ios6AndPriorIcons: true,
          ios7AndLaterIcons: true,
          precomposedIcons: true,
          declareOnlyDefaultIcon: true
        },
        appName: 'Luis Alejandro'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#f8d983',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: true,
            medium: true,
            big: true,
            rectangle: true
          }
        },
        appName: 'Luis Alejandro'
      },
      androidChrome: {
        pictureAspect: 'backgroundAndMargin',
        margin: '25%',
        backgroundColor: '#f8d983',
        themeColor: '#f8d983',
        manifest: {
          name: 'Luis Alejandro',
          startUrl: 'http://luisalejandro.org',
          display: 'standalone',
          orientation: 'portrait',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: true,
          lowResolutionIcons: true
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#525252'
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
      readmeFile: false,
      htmlCodeFile: false,
      usePathAsIs: false
    },
    markupFile: path.join(production, 'assets', 'images', 'faviconMarkup.json')
  }
};

exports.svgstore = {
  development: {
    src: path.join(development, 'index.html'),
    dest: development,
    svgs: path.join(devAssets, 'images', '**', '*.svg')
  },
  production: {
    src: path.join(production, 'index.html'),
    dest: production,
    svgs: path.join(prodAssets, 'images', '**', '*.svg')
  }
};

exports.garbage = {
  src: [
    path.join(prodAssets, 'sounds', 'parts'),
    path.join(prodAssets, 'images', '*.svg'),
    path.join(prodAssets, 'images', 'faviconMarkup.json'),
    path.join(prodAssets, 'js', 'app.js'),
    path.join(prodAssets, 'css', 'app.css'),
    path.join(prodAssets, 'fonts'),
    path.join(prodAssets, 'manifest.json')
  ]
};
