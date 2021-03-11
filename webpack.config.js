const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
};