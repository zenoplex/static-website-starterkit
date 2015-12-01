var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bundler = webpack(webpackConfig);

module.exports = {
  "ui":                     {
    "port":   3001,
    "weinre": {
      "port": 8080
    }
  },
  "files":                  [
    'dist/css/**/*.css',
    'dist/**/*.html',
    'dist/**/*.js'
  ],
  "watchOptions":           {},
  "server":                 {
    baseDir:   './dist',
    directory: true
  },
  "proxy":                  false,
  "port":                   3000,
  "middleware":             [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo:     true,
      stats:      {colors: true}
    }),
    webpackHotMiddleware(bundler)
  ],
  "serveStatic":            [],
  "ghostMode":              {
    "clicks": true,
    "scroll": true,
    "forms":  {
      "submit":  true,
      "inputs":  true,
      "toggles": true
    }
  },
  "logLevel":               "info",
  "logPrefix":              "BS",
  "logConnections":         false,
  "logFileChanges":         true,
  "logSnippet":             true,
  "rewriteRules":           false,
  "open":                   "local",
  "browser":                "default",
  "xip":                    false,
  "hostnameSuffix":         false,
  "reloadOnRestart":        false,
  "notify":                 true,
  "scrollProportionally":   true,
  "scrollThrottle":         0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements":         [],
  "scrollElementMapping":   [],
  "reloadDelay":            0,
  "reloadDebounce":         0,
  "plugins":                [],
  "injectChanges":          true,
  "startPath":              null,
  "minify":                 true,
  "host":                   null,
  "codeSync":               true,
  "timestamps":             true,
  "clientEvents":           [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click"
  ],
  "socket":                 {
    "socketIoOptions":      {
      "log": false
    },
    "socketIoClientConfig": {
      "reconnectionAttempts": 50
    },
    "path":                 "/browser-sync/socket.io",
    "clientPath":           "/browser-sync",
    "namespace":            "/browser-sync",
    "clients":              {
      "heartbeatTimeout": 5000
    }
  },
  "tagNames":               {
    "less": "link",
    "scss": "link",
    "css":  "link",
    "jpg":  "img",
    "jpeg": "img",
    "png":  "img",
    "svg":  "img",
    "gif":  "img",
    "js":   "script"
  }
};
