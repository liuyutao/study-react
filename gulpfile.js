/**
 * Created by user on 16/2/7.
 */
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
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
