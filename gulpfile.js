const {src, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
 

function sassComp(){
    return src('./src/style.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
}

function moveHTML(){
    return src('./src/index.html')
    .pipe(dest('./build/html'))
}

function cleanBuild(){
    return src('./build/**/*.{html, css}')
    .pipe(clean())
}


exports.default = series(cleanBuild, moveHTML, sassComp)