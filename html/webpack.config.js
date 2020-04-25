const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');

module.exports = {

    mode: 'development',

    entry: {
        app: './src/index.js',
        print: './src/print.js',
        home: './src/homepage/home.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.vue$/,
                use:['vue-loader']
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            "window.jQuery":"jquery",
        }),
    ]
};