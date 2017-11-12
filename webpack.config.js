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
    }

};

    
