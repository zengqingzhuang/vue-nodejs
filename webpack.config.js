let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
//let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.vue', '.js', '.json', '.scss'],
		alias: {
			'vue': 'vue/dist/vue.js',
			'common': path.resolve(__dirname, 'src/common'),
			'components': path.resolve(__dirname, 'src/components/')
		},
		modules: [ // webpack 解析模块时应该搜索的目录
			path.join(__dirname, "src"),
			"node_modules"
		]
	},
	externals: {
		//vue: 'vue'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				compact: true
			} //解决js文件大于100KB报错的问题
		}, {
			test: /\.css$/,
			use: [{
				loader: "css-loader"
			}, {
				loader: "style-loader"
			}, {
				loader: "postcss-loader"
			}]
		}, {
			test: /\.scss$/,
			use: [{
				loader: "css-loader"
			}, {
				loader: "style-loader"
			}, {
				loader: "postcss-loader"
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: 'imgs/[name].[ext]?[hash]'
			}
		}, {
			test: /\.(svg|woff|woff2|eot|ttf)$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: 'fonts/[name].[ext]?[hash]'
			}
		}]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				// any required modules inside node_modules are extracted to vendor
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, 'node_modules')
					) === 0
				)
			}
		}),
		// extract webpack runtime and module manifest to its own file in order to
		// prevent vendor hash from being updated whenever app bundle is updated
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		require('autoprefixer')
	]
}

if (process.env.NODE_ENV === 'production') {
	//module.exports.devtool = '#eval-source-map';
	module.exports.devtool = false;
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: 'production'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	])
}