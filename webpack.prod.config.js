const webpack = require('webpack');
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');


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
		new SWPrecacheWebpackPlugin({
			// By default, a cache-busting query parameter is appended to requests
			// used to populate the caches, to ensure the responses are fresh.
			// If a URL is already hashed by Webpack, then there is no concern
			// about it being stale, and the cache-busting can be skipped.
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			filename: 'service-worker.js',
			logger(message) {
				if (message.indexOf('Total precache size is') === 0) {
					// This message occurs for every build and is a bit too noisy.
					return;
				}
				if (message.indexOf('Skipping static resource') === 0) {
					// This message obscures real errors so we ignore it.
					// https://github.com/facebookincubator/create-react-app/issues/2612
					return;
				}
				console.log(message);
			},
			minify: true,
			// For unknown URLs, fallback to the index page
			navigateFallback: '/index.html',
			// Ignores URLs starting from /__ (useful for Firebase):
			// https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
			navigateFallbackWhitelist: [/^(?!\/__).*/],
			// Don't precache sourcemaps (they're large) and build asset manifest:
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
		}),
	]
};

