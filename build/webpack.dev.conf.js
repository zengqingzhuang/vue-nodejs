let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: '#source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
};