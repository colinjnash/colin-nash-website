var webpack = require('webpack');
var path = require('path');


var config = {
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: [],
					presets: ['react', 'es2015', 'stage-1']
				}
			},
			{
				test: /\.(png|jp(e*)g|)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					} 
				}]
			},
			{
				test: /\.ico$/,  
				use: [{
					loader: 'file-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: '[name].[ext]'
					} 
				}]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		],

	},
	entry: __dirname + '/src/Index.js',
	output: {
		path: path.resolve(__dirname,'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		port: 9000
}
};

module.exports = config;