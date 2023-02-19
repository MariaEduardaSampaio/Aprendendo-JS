const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .on('error: ', err => console.log(err))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'))


/*     return cb() */
}

exports.default = series(padrao)