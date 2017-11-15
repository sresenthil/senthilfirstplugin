var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src('senthilfirstplugin.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('dist', ['lint'], function() {
  return gulp.src('senthilfirstplugin.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(''));
});

gulp.task('default', ['dist']);