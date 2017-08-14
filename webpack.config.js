var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// require("waypoints/lib/jquery.waypoints.js");

module.exports = {

	entry: './js/custom.js',
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'app.js' 
	},
	// module:{
	// 	loaders:[
	// 		{
	// 			test: /\.sass$/, 
	// 			loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	// 		}
	// 	]
	// },
	
	plugins:[
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		// new ExtractTextPlugin("style.css")
	],
	plugins: [
		new webpack.ProvidePlugin({
		  	$: 'jquery',
		  	jQuery: 'jquery',
	  		'window.jQuery': 'jquery'
		})
	]
	// resolve: {
	//     alias: {
	//       'waypoints': 'waypoints/lib/jquery.waypoints.js'
	//     }
	// },

}