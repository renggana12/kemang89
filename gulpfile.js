// const { src, dest, watch, series} = require('gulp')
// const sass = require('gulp-sass')(require('sass'))
// const browserSync = require('browser-sync')

// function buildSyles() {
//     return src('app/assets/scss/custom.scss')
//     .pipe(sass())
//     .pipe(dest('app/assets/css'))
// }

// function waskTask() {
//     watch(['app/assets/scss/custom.scss'], buildSyles, serve)
// }

// exports.default = series(buildSyles, waskTask)  

var gulp = require('gulp')
const { src, dest, watch, series} = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')(require('sass'))

gulp.task('server', function () {
    browserSync.init({
        server: '../kemang89'
    })
    gulp.watch('app/assets/scss/custom.scss', gulp.series('sass'))
    gulp.watch('index.html').on('change', browserSync.reload)
})

gulp.task('sass', function () {
    
    return gulp.src('app/assets/scss/custom.scss')
    .pipe(sass())
    .pipe(dest('app/assets/css'))
    .pipe(browserSync.stream())
})

gulp.task('start', gulp.series('server', 'sass'))