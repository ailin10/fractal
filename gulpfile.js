'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});