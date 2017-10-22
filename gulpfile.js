'use strict'

const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('lint', function () {
  return gulp.src(['./*.js', './lib/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})
