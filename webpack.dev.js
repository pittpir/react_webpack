const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
    	contentBase: './dist',
    	hot: true,
    	compress: true,
    	progress: true,
    	watchContentBase: true,
    	port: 9000
  	},
  	resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  	module: {
    	rules: [
 	  	{
        	test: /\.(css|scss)$/,
        	exclude: /node_modules/,
        	use: [
          	'style-loader', // creates style nodes from JS strings
          	'css-loader', // translates CSS into CommonJS
          	'sass-loader' // compiles Sass to CSS, using Node Sass by default
        	]
      	},
    	]
    }
  });