const
	config = require('./config'),
	server = require('./lib/')();

server.create(config);
server.run();