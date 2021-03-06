let path = require("path");
let common = require("./webpack.common");
let merge = require("webpack-merge");
let CleanWebpackPlugin = require("clean-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "js/script.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			// new HtmlWebpackPlugin({
			// 	template: "./src/template.html",
			// 	filename: 'main.html',
				// inject: true,
				// chunks: ['style'],
				// minify: {
				// 	removeAttributeQuotes: true,
				// 	collapseWhitespace: true,
				// 	removeComments: true
				// }
			// }),
			// new HtmlWebpackPlugin({
			// 	template: "./src/modal.html",
			// 	filename: 'modal.html',
			// }),
			new HtmlWebpackPlugin({
				template: "./src/vacancies-detail.html",
				filename: 'vacancies-detail.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/vacancies.html",
				filename: 'vacancies.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/our-team.html",
				filename: 'our-team.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/our-partners.html",
				filename: 'our-partners.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				filename: 'index.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/news.html",
				filename: 'news.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/news-detail.html",
				filename: 'news-detail.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/page-404.html",
				filename: 'page-404.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/cases-detail.html",
				filename: 'cases-detail.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/products.html",
				filename: 'products.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/products-detail.html",
				filename: 'products-detail.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/cases.html",
				filename: 'cases.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/services-detail.html",
				filename: 'services-detail.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/about-us.html",
				filename: 'about-us.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/services.html",
				filename: 'services.html',
			}),
			new HtmlWebpackPlugin({
				template: "./src/main.html",
				filename: 'main.html',
			}),
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "css/[name].css" }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3. Extract css into files
					"css-loader", //2. Turns css into commonjs
					"postcss-loader",
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
