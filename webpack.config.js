const webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
var argv = require('yargs-parser')(process.argv.slice(2));
var mode = argv.mode;
const devMode = mode === 'development';

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        "home": "./home",
        "about": "./about",
        "home2": "./home2",
        "about2": "./about2",
        "demoRoutes": "./demo-routes",
        "demoComponents": "./demo-components",
        "dynamicLoadWelcome": "./dynamic-load-welcome"
    }, // string | object | array
    // Here the application starts executing
    // and webpack starts bundling
    
    output: {
        path: path.resolve(__dirname, "dist"),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        
        filename: devMode ? '[name].js' : '[name].[hash].js',
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
            /ru|en-gb/),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            //filename: '[name].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'demo-components.html',
            inject: true,
            chunks: ['demoComponents'],
            template: 'demo-components.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            inject: true,
            chunks: ['home', 'about'],
            template: 'home.html'
        }),
        
        new HtmlWebpackPlugin({
            filename: 'home2.html',
            inject: true,
            chunks: ['home2', 'about2'],
            template: 'home2.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'demo-routes.html',
            inject: true,
            chunks: ['demoRoutes'],
            template: 'demo-routes.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dynamic-load.html',
            inject: true,
            chunks: ['dynamicLoadWelcome'],
            template: 'dynamic-load.html'
        })
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
            //{
                //test:   /\.css$/,
                //// Adds CSS to the DOM by injecting a <style> tag
                //use: [
                    //// Adds CSS to the DOM by injecting a <style> tag
                    //{loader: 'style-loader'},
                    //// css-loader interprets @import and url()
                    //// like import/require() and will resolve them
                    //{loader: 'css-loader'}
                //]
            //},
            {
                test: /\.less$/,
                use: [
                    // creates style nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // translates CSS into CommonJS
                    'css-loader',
                    // compiles Less to CSS
                    'less-loader'
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
                                if (devMode) {
                                    return '[path][name].[ext]';
                                }

                                return '[path][name][hash].[ext]';
                            }
                        }  
                    }
                ]
            }
            //{
                //test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                //use: [
                    //{
                        //loader: 'url-loader',
                        //options: {
                            //name: function(file) {
                                //if (devMode) {
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

    watch: devMode,
    devtool: devMode ? "source-map" : false, // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
    
    devServer: {
        //contentBase: false,
        //contentBase: path.join(__dirname, "dist"),
        //compress: true,
        //host: 'localhost',
        port: 9000,
        watchContentBase: true
    }
};
