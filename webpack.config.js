var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [__dirname + '/app/main.js'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
              },
             
              {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '/images/key.[hash].[ext]',
                },
              },
              
         
              
              
            
             
             
        ]
    },
    watch: true,
    
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
       
};
