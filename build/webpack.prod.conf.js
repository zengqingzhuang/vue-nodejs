let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool: '#source-map',
	output: {
		filename: '[name].[chunkhash].js' // 缓存。1、chunkhash根据文件内容生成哈希值，2、hash生成哈希值所有文件都一样
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
			minify: { // html-minifier
				// minifyJS: true,           // 仅压缩内联在html里面的js
				// minifyCSS: true,          // 仅压缩内联在html里面的css
				// html5: true,              // 以html5的文档格式解析html的模板文件
				removeComments: true, // 不删除Html文件里面的注释
				collapseWhitespace: true, // 删除空格
				removeAttributeQuotes: true,
				preserveLineBreaks: false // 删除换行
			},
			chunksSortMode: 'dependency'
		}),
		// 公共模块提取，方便浏览器进行长期缓存
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
		// mainfest文件存储webpack编译时产生的运行时代码，防止把运行时代码存储到vendor.js中导致浏览器重新加载。
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false
		}),
		new ExtractTextPlugin("styles.css")
	]
}