const webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const ChunksPlugin = require('webpack-split-chunks');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
var argv = require('yargs-parser')(process.argv.slice(2))

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        "home": "./home",
        "about": "./about",
        "home2": "./home2",
        "about2": "./about2",
        "demo-routes": "./demo-routes",
        "demo-components": "./demo-components",
        "dynamic-load-welcome": "./dynamic-load-welcome"
    }, // string | object | array
    // Here the application starts executing
    // and webpack starts bundling
    
    output: {
        path: path.resolve(__dirname, "dist"),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        
        filename: "[name].js",
        // the filename template for entry chunks

        library: "[name]",
        // the name of the exported library
        
        publicPath: "../dist/", // string
        // the url to the output directory resolved relative to the HTML page
        
        libraryTarget: "umd" // universal module definition
        // the type of the exported library
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        // filter moment lib files
        new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/,
            /ru|en-gb/)
    ],

    resolve: {
        alias: {
            old$: path.resolve(__dirname, 'vendor/old/dist/old.js')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                include: /src/,
                loader: "babel-loader", 
                options: {
                    "presets": ["env"
                        //["env", {
                            //"targets": {
                                //"chrome": "60"
                            //}
                        //}]
                    ]
                    //"plugins": ["transform-es2015-modules-umd"]
                }
                // options for the loader
            },
            {
                // 
                test: /old.js/,
                loader: "imports-loader?workSettings=>\
                {delay:500}!exports-loader?Work"
            },
            {
                test:   /\.css$/,
                // Adds CSS to the DOM by injecting a <style> tag
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // creates style nodes from JS strings
                    {loader: 'style-loader'},
                    // translates CSS into CommonJS
                    {loader: 'css-loader'},
                    // compiles Less to CSS
                    {loader: 'less-loader'}
                ]
            },
            { 
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //name: '[name].[ext]'
                            name: function(file) {
                                if (argv.mode === 'development') {
                                    return '[path][name].[ext]';
                                }

                                return '[hash].[ext]';
                            }
                        }  
                    }
                ]
            },
            //{
                //test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                //use: [
                    //{
                        //loader: 'url-loader',
                        //options: {
                            //name: function(file) {
                                //if (argv.mode === 'development') {
                                    //return '[path][name].[ext]';
                                //}

                                //return '[hash].[ext]';
                            //},
                            //limit: 4096 
                        //}
                    //}
                //]
            //}

        ]
        // since webpack 3.0.0
        //noParse: function(content) {
            //return /moment|lodash/.test(content);
        //}
    },

    
    
    watch: argv.mode === 'development',

    devtool: argv.mode === 'development' ? "source-map" : false // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
};

//if (NODE_ENV == 'production') {
    //module.exports.plugins.push(
        //// build optimization plugins
        //new UglifyJsPlugin({
            //uglifyOptions: {
                //ecma: 8
            //}
            ////compress: {
                ////warnings: false,
                ////drop_console: false,
            ////}
        //})
    //);
//}

    
