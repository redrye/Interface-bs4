const Dotenv = require('dotenv-webpack');
const mix = require('laravel-mix');
const webpack = require('webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
	externals: function (context, request, callback) {
		if (/xlsx|canvg|pdfmake|pdfMake/.test(request)) {
			return callback(null, "commonjs " + request);
		}
		callback();
	},
	plugins: [
		new Dotenv({
			path: './.env',
			safe: true
		})
	]
})



mix.sass('resources/sass/bootstrap.scss', 'public/css');

mix.js('resources/js/app.js', 'public/js').extract();
