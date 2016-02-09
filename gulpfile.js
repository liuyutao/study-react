/**
 * Created by user on 16/2/7.
 */
    var gulp  = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
//var jslint = require('gulp-jslint');
gulp.task('lint', function  () {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


/*gulp.task('webpack', function () {
    gulp.src('./test.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});*/

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.watch = true;
    // run webpack
    webpack(
        // configuration
        myConfig
        , function(err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //	 // output options
            // }));
            callback();
        });
});

/*
var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
    return gulp.src('src/entry.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/'));
});*/


/*
return gulp.src('src/entry.js')
    .pipe(webpack({
        watch: true,
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style!css' },
            ],
        },
    }))
    .pipe(gulp.dest('dist/'));*/




gulp.task('default', ['webpack'],function(){
    console.log("hello")
});
