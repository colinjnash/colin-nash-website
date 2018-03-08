const webpack = require('webpack');
const path = require('path');
var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname,'build'),
		publicPath: './',
		filename: 'bundle.js'
	},
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
				test: /\.(png|jp(e*)g|JPG)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'assets/images/[hash]-[name].[ext]'
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				// This tells the Webpack and Babel for optimization for performance
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ServiceWorkerWebpackPlugin({
			entry: path.join(__dirname, 'src/registerserviceworker.js'),
		}),
	]
};

