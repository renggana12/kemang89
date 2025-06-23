const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildSyles() {
    return src('app/assets/scss/custom.scss')
    .pipe(sass())
    .pipe(dest('app/assets/css'))
}

function waskTask() {
    watch(['app/assets/scss/custom.scss'], buildSyles)
}

exports.default = series(buildSyles, waskTask)  