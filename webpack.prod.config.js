const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
				use: ['file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
						},
					},
				]
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
				'NODE_ENV': JSON.stringify('production')
			}
		}), 
		new webpack.optimize.UglifyJsPlugin(), //minify everything
		new webpack.optimize.AggressiveMergingPlugin(),
		new SWPrecacheWebpackPlugin({
			filename: 'service-worker.js',
			logger(message) {
				if (message.indexOf('Total precache size is') === 0) {
					return;
				}
				console.log(message);
			},
			minify: true,
			navigateFallback: './index.html',
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
		}),
		new CompressionPlugin({   
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new ManifestPlugin({
			fileName: 'asset-manifest.json', // Different than manifest.json
		}),
		new CopyWebpackPlugin([
			{ from: 'src/pwa' }, // define the path of the files to be copied
		])
	]
};

