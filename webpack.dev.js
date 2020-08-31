const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: "./src/about-us.html"
			// template: "./src/cases.html"
			// template: "./src/cases-detail.html"
			// template: "./src/news.html"
			// template: "./src/news-detail.html"
			// template: "./src/products.html"
			template: "./src/products-detail.html"
			// template: "./src/services-detail.html"
			// template: "./src/our-team.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Inject styles into DOM
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
