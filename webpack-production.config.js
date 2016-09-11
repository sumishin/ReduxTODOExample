var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: './www/asset',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        preLoaders: [
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules)/,
                include: __dirname,
                loader: 'tslint'
            }
        ],
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.json$/, loader: 'json-loader' }
        ],
        postLoaders: [
            { test: /\.spec\.tsx?$/, loader: 'webpack-espower-loader' }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },

    // for production
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

};