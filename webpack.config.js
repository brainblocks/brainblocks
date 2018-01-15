/* @flow */
/* eslint import/no-nodejs-modules: off */

import path from 'path';
import qs from 'querystring';

import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

const FILE_NAME = 'brainblocks';
const MODULE_NAME = 'brainblocks';

const DEFAULT_VARS = {
    __TEST__:                           false,
    __MIN__:                            false,
    __IE_POPUP_SUPPORT__:               false,
    __CHILD_WINDOW_ENFORCE_LOG_LEVEL__: false,
    __SEND_POPUP_LOGS_TO_OPENER__:      false,
    __POPUP_SUPPORT__:                  false,
    __ALLOW_POSTMESSAGE_POPUP__:        true,
    __DEFAULT_CONTEXT__:                'iframe',
    __DEFAULT_LOG_LEVEL__:              'warn'
};

type WebpackConfigOptions = {
    filename : string,
    modulename : string,
    minify? : boolean,
    options? : Object,
    vars? : { [string] : mixed }
};

function getWebpackConfig({ filename, modulename, minify = false, options = {}, vars = {} } : WebpackConfigOptions) : Object {

    vars = {
        ...DEFAULT_VARS,
        ...vars
    };

    const PREPROCESSOR_OPTS = {
        'ifdef-triple-slash': 'false',
        ...vars
    };

    const SERIALIZED_VARS = (() => {
        let result = {};
        for (let key of Object.keys(vars)) {
            result[key] = JSON.stringify(vars[key]);
        }
        return result;
    })();

    return {

        entry: './src/index.js',

        output: {
            path:           path.resolve('./dist'),
            filename,
            libraryTarget:  'umd',
            umdNamedDefine: true,
            library:        modulename,
            pathinfo:       false
        },

        resolve: {
            modules: [
                __dirname,
                'node_modules'
            ],
            extensions: [ '.js', '.jsx' ]
        },

        module: {
            rules: [
                {
                    test:    /\.js$/,
                    loader: `ifdef-loader?${ qs.encode(PREPROCESSOR_OPTS) }`
                },
                {
                    test:   /sinon\.js$/,
                    loader: 'imports?define=>false,require=>false'
                },
                {
                    test:    /\.jsx?$/,
                    exclude: /(dist)/,
                    loader:  'babel-loader'
                },
                {
                    test:    /\.(html?|css|json)$/,
                    loader: 'raw-loader'
                }
            ]
        },

        bail: true,

        devtool: 'source-map',

        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map'
            }),
            new webpack.DefinePlugin(SERIALIZED_VARS),
            new webpack.NamedModulesPlugin(),
            new UglifyJSPlugin({
                test:     /\.jsx?$/,
                beautify: !minify,
                minimize: minify,
                compress: {
                    warnings:  false,
                    sequences: minify
                },
                mangle:    minify,
                sourceMap: true
            }),
            new CircularDependencyPlugin({
                exclude:     /node_modules/,
                failOnError: true
            })
        ],

        ...options
    };
}

export let WEBPACK_CONFIG = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME
});

export let WEBPACK_CONFIG_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        __MIN__: true
    }
});

export let WEBPACK_CONFIG_TEST = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME,
    options:    {
        devtool: 'inline-source-map'
    },
    vars: {
        __TEST__: true
    }
});

export default [
    WEBPACK_CONFIG,
    WEBPACK_CONFIG_MIN
];
