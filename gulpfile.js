const {src, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
 

function sassComp(){
    return src('./src/style.scss')
    .pipe(sass())
    .pipe(dest('./build'))
}

function moveHTML(){
    return src('./src/index.html')
    .pipe(dest('./build'))
}



function cleanBuild(){
    return src('./build')
    .pipe(clean())
}


exports.default = series(cleanBuild, moveHTML, sassComp)