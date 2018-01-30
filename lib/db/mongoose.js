const
	mongoose = require('mongoose'),
	config = require('../../config');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:'+ config.db.port +'/'+ config.db.name, function(err) {
	if (err) {
		console.log("Connecting to database failed: ", err)
	}
});

module.exports = {
	mongoose: mongoose
};