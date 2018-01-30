const
	pageRoute = require('./page'),
	apiRoute = require('./api'),
	config = require('./../../config');

function init(server) {
	/**
	 * Register page view and api routes
	 */
	server.use('/', pageRoute);
	server.use(config.apiURI, apiRoute);
}

module.exports = {
	init: init
};