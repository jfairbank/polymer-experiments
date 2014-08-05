var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var rename     = require('gulp-rename');
var connect    = require('gulp-connect');

gulp.task('browserify-todo', function() {
  var assetPath    = './components/todo-list/js';
  var file         = assetPath + '/main.js';
  var bundleStream = browserify(file).bundle();

  return bundleStream
    .pipe(source(file))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(assetPath))
    .pipe(connect.reload());
});

gulp.task('watch-todo', function() {
  gulp.watch('./components/todo-list/**/*.{js,html}', ['browserify-todo']);
});

gulp.task('server', ['browserify-todo'], function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['server', 'watch-todo']);
