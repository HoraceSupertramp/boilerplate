module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    externals: {
        'mocha': 'mocha',
        'chai': 'chai'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            modules: {
                                namedExport: true
                            },
                            esModule: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: true
                            },
                            esModule: true
                        }
                    }
                ]
            }
        ]
    },
};