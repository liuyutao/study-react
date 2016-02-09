/**
 * Created by user on 16/2/7.
 */
module.exports = {
    entry: {
        app: "./pages/index.js",
        // vendor:"jquery"
    },

    output: {
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            // required for react jsx
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}