// Virgo Webpack Configuration File
// ================================================================================================

const path = require("path");
const webpack = require("webpack");

module.exports = {

	// [*] Input & Output Configuration

	mode: "production",
	entry: {
		bundle: "./src/bundle.ts",
	},
	output: {
		filename: "[name].min.js",
		path: path.resolve(__dirname, "dist"),
		library: {
			name: "Virgo",
			type: "umd",
		},
	},

	// [*] Process Configuration

	module: {
		rules: [
			// Typescript
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			// HTML
			{
				test: /\.html$/i,
				use: "html-loader",
			},
		],
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	
	devtool: false,

	// [*] Source Mapping

	plugins: [
		new webpack.SourceMapDevToolPlugin({ filename: '[name].min.js.map' })
	],

};