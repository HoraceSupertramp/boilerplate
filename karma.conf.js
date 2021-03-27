module.exports = (config) => {
    config.set({
        // frameworks to use
        frameworks: ['mocha', 'chai', 'webpack'],
        // list of files / patterns to load in the browser
        files: [
            { pattern: "./src/**/*.spec.ts", watched: true },
            { pattern: "./src/**/*.spec.tsx", watched: true },
        ],
        // list of files to exclude
        exclude: [],
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        preprocessors: {
            // add webpack as preprocessor
            './src/**/*.spec.ts': [ 'sourcemap', 'webpack' ],
            './src/**/*.spec.tsx': [ 'sourcemap', 'webpack' ]
        },
        webpack: {
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
        },
    });
};