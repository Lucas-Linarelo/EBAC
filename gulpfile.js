const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./aula/src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./aula/dist/js'))
}

function styles(){
    return gulp.src('./aula/src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./aula/dist/css'));
}

function images(){
    return gulp.src('./aula/src/images/**/*.{jpg,jpeg,png,gif,svg,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('./aula/dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(){
    gulp.watch('./aula/src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./aula/src/scripts/*.js', gulp.parallel(scripts))
}