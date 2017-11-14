//const NODE_ENV = process.env.NODE_ENV || 'development';
//const webpack = require('webpack');

module.exports = {
    entry:  "./home",
    entry: "./home", // string | object | array
    // Here the application starts executing
    // and webpack starts bundling
    
    output: {
        filename: "build.js", // string
        // the filename template for entry chunks

        library: "home" // string,
        // the name of the exported library
    },
   
    // configuration regarding modules
    module: {
        // rules for modules (configure loaders, parser options, etc.)
        rules: [ 
            {
                loader: "babel-loader",
                // the loader which should be applied, 
                // it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 
                // for clarity reasons see webpack 1 upgrade guide

                //options: {
                    //presets: ["es2015"]
                //}
            }
        ]

        //loaders: [{
            //test: /\.js$/,
            //exclude: /node_modules/,
            //loader: 'babel-loader'
        //}]

    }
};

    
