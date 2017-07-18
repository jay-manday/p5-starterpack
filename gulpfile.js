const gulp = require('gulp');
const connect = require('gulp-connect');
const colors = require('colors');
const watch = require('gulp-watch');

let log = console.log;

gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  log('[CONNECT] Listening on port 3000'.yellow.inverse);
  // Watch HTML files for changes
  log('[CONNECT] Watching files for live-reload'.blue);
  watch({
    glob: ['./js/**.js', './css/**.css', './index.html']
  })
    .pipe(connect.reload());
});
