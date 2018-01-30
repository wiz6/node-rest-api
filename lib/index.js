const
	express = require('express'),
	hbs = require('hbs'),
	bodyParser = require('body-parser');

module.exports = function() {
	var server = express(),
		create,
		run;

	create = function(config) {
		var routes = require('./routes');

		hbs.registerPartials(__dirname + '/../views/partials/');
		server.set('view engine', 'hbs');
		server.set('port', config.port);

		server.use(express.static(__dirname + './../public'));
		server.use(bodyParser.urlencoded({
			extended: true
		}));

		routes.init(server);
	};

	run = function() {
		server.listen(server.get('port'), function() {
			console.log('Server is running on port ' + server.get('port'));
		});
	};

	return {
		create: create,
		run: run
	};
};