const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : `index.[contenthash].js`
    },
    module : {
        rules :[
            {
                test : /\.js$/,
                use : 'babel-loader'
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
        ]
    },
    mode : 'development',
    plugins : [new htmlPlugin({ template : 'app/index.html'})]
}