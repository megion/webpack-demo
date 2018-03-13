//const NODE_ENV = process.env.NODE_ENV || 'development';
//const webpack = require('webpack');

const path = require('path');

module.exports = {
    entry: "./home", // string | object | array
    // Here the application starts executing
    // and webpack starts bundling
    
    output: {
        path: path.resolve(__dirname, "dist"),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        
        filename: "bundle.js",
        // the filename template for entry chunks

        library: "MyLibHome",
        // the name of the exported library
        
        libraryTarget: "umd" // universal module definition
        // the type of the exported library
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" 
            }
        ]
    },
    
    watch: true,

    devtool: "source-map" // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
   
    // configuration regarding modules
    //module: {
        //// rules for modules (configure loaders, parser options, etc.)
        //rules: [ 
            //{
                //loader: "babel-loader",
                //// the loader which should be applied, 
                //// it'll be resolved relative to the context
                //// -loader suffix is no longer optional in webpack2 
                //// for clarity reasons see webpack 1 upgrade guide

                ////options: {
                    ////presets: ["es2015"]
                ////}
            //}
        //]

        

        ////loaders: [{
            ////test: /\.js$/,
            ////exclude: /node_modules/,
            ////loader: 'babel-loader'
        ////}]

    //}
};

    
