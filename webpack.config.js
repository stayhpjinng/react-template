const argv = require('yargs').argv;
const webpackConfig = require('./build');

module.exports = env => {
	let config = {};
	if (env.NODE_ENV === 'dev') {
		console.log('dev env');
		config = webpackConfig.devConfig;
	}
	if (env.NODE_ENV === 'prod') {
		config = webpackConfig.prodConfig;
	}
	return Object.assign({}, config);
}