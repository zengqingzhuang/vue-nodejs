let path = require('path');
let webpack = require('webpack');
let merge = require('webpack-merge');
let px2rem = require('postcss-px2rem')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let configParam = '';
let NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
	configParam = require('./webpack.dev.conf');
} else if (NODE_ENV === 'production') {
	configParam = require('./webpack.prod.conf');
}
module.exports = merge({
	entry: {
		bundle: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js' // 开发环境不加哈希值减少编译时间
	},
	resolve: {
		extensions: ['.vue', '.js', '.json', '.scss'],
		alias: {
			'vue': 'vue/dist/vue.min.js',
			'vuex': 'vuex/dist/vuex.min.js',
			'common': path.resolve(__dirname, '../src/common'),
			'components': path.resolve(__dirname, '../src/components/')
		},
		modules: [ // webpack 解析模块时应该搜索的目录
			path.resolve(__dirname, "../src"),
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
			exclude: /(node_modules|bower_components)/,
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
			}],
			use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
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
			}],
			use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
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
	plugins: [
		new webpack.BannerPlugin({
			banner: 'Create Time ' + new Date()
		}),
		new webpack.LoaderOptionsPlugin({
         test: /\.scss$/, // may apply this only for some modules
         options: {
           postcss: [px2rem({remUnit: 75})]
         }
       })
	]
}, configParam);