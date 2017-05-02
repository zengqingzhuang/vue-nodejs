let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
//let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	//devtool: '#eval-source-map',
	devtool: false,
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		//new ExtractTextPlugin("styles.css")
	]
}