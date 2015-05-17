var gulp      = require('gulp'),
    watch     = require('gulp-watch'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    replace   = require('gulp-batch-replace'),
    fs        = require('fs');

var path = {
  js  : [
    './bower_components/mootools/dist/mootools-core.js',
    './bower_components/showdown/src/showdown.js',
    './bower_components/showdown/src/extensions/*.js',
    './src/main.js'
  ],
  css : [
    './bower_components/github-markdown-css/github-markdown.css',
    './src/main.css'
  ]
};

gulp.task('js', function() {
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(concat('md.js'))
    .pipe(gulp.dest('dist'));
});
gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(minifyCss())
    .pipe(concat('md.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', ['js', 'css'], function () {
  return gulp.src('./src/index.html')
    .pipe(replace([
      ['%%%JS%%%' , fs.readFileSync('./dist/md.js')],
      ['%%%CSS%%%', fs.readFileSync('./dist/md.css')]
    ]))
    .pipe(gulp.dest('dist'));
});

gulp.task('py', ['html'], function () {
  return gulp.src('./src/MarkdownHtmlPreview.py')
    .pipe(replace([
      ['%%%HTML%%%' , fs.readFileSync('./dist/index.html', 'utf8').replace(new RegExp('\\\\', 'g'), '\\\\')],
    ]))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', ['html', 'py'], function() {
  watch('./src/*', function(files) {
    gulp.run('html');
  });
});

gulp.task('default', ['py']);

