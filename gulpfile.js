var gulp =require('gulp')
var uglify=require('gulp-uglify')
var concat=require('gulp-concat')
var less=require('gulp-less')
const imagemin=require('gulp-imagemin')

gulp.task('less',function(){
    return gulp.src('dest/bulid/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/bulid/css'))
})

gulp.task('yasuo',function(){
    return gulp.src('dest/bulid/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/bulid'))
})


gulp.task('hebing',function(){
    return gulp.src('dest/bulid/*.js')
    .pipe(uglify())


    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/bulid'))
})

gulp.task('imagemin',function(){
    return gulp.src('src/image/1.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/bulid/image'))
})