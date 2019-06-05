const webpacNodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
	mode: "production",
	target: "node",
	output: {
		filename: "bundle.js"
	},
	resolve: {
		alias: {
			"@babel/core": path.resolve(__dirname, "../node_modules/@babel/core")
		},
		extensions: ['.ts', '.tsx', '.js', '.json', '.mjs']
	},
	resolveLoader: {
		modules: [path.resolve(__dirname, "node_modules")]
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			},	
			{
				test: /\.(js|jsx|ts|tsx|mjs)$/,
				use: ['babel-loader', 'shebang-loader'],
				exclude: [/node_modules/]
			}
		]
	}
};