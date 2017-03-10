/**
 * Created by cijo.kb on 10/03/17.
 */
const express =require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require("webpack");
const webpackConfig =require('./webpack.config');
const app = express();
const compiler = webpack(webpackConfig);

//middleware for serving the public files like css,images,js ....
app.use(express.static(__dirname+'/www'));

//It's a simple wrapper middleware for webpack. It serves the files emitted from webpack over a connect server
app.use(webpackDevMiddleware(compiler,{
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true
}));

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});


