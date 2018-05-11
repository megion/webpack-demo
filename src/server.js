'use strict';

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
    // webpack-dev-middleware options
}));

app.listen(9000, () => console.log('Example app listening on port 9000'))
