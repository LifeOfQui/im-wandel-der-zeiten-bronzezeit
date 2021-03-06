var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba'),
    colorFunction = require("postcss-color-function"),
    postcssFor = require("postcss-for");

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/*.css')
        .pipe(postcss([cssImport, mixins, postcssFor, cssvars, colorFunction, nested, hexrgba, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
