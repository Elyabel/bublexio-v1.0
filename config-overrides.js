const webpack = require("webpack");

module.exports = {
	webpack: function (config, env) {

		if (env === "production") {
			config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				minChunks: (m) => /node_modules/.test(m.context)
			}));
		}

		return config;
	},
};