var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.vue', '.js', 'json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		},
		modules: [
			//path.join(__dirname, "src"),
			"node_modules"
		]
	},
	resolveLoader: {

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
				test: /\.less$/,
				loader: 'less-loader'
			}, {
				test: /\.sass$/,
				loader: 'sass-loader'
			},
			// {
			//   test: /\.html$/,
			//   loader: 'vue-html-loader'
			// },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: 'source-map',
	plugins: [
		//new webpack.optimize.UglifyJsPlugin(), //线上配置
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor'
		// })
	]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#eval-source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	])
}