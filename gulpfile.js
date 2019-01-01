var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var clean = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});

gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            port: 1212,
            livereload: true
        }));
});

gulp.task('dev', gulp.series('sass', 'server', 'watch'));