const path = require('path');

module.exports = {

    mode: 'development',

    entry: {
        app: './src/index.js',
        print: './src/print.js',
        test: './src/test.vue',
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
        ]
    }
};