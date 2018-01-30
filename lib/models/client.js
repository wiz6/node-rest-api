const
	mongoose = require('./../db/mongoose').mongoose,
	validator = require('validator'),
	Schema = mongoose.Schema,
	crypto = require('../helpers/crypto'),
	config = require('./../../config');


var schema = new Schema({
	/**
	 * Phone should be
	 */
	phone: {
		type: String,
		required: [true, 'Phone number required'],
		validate: {
			validator: function(v) {
				// spaces are not valid
				v = crypto.decrypt(v).replace(/ /g, '');
				return validator.isMobilePhone(v, config.phoneValidator.locale);
			},
			message: 'Phone is not a valid '+ config.phoneValidator.country +' phone number!'
		},
		get: function(value) {
			return crypto.decrypt(value);
		},
		set: function(value) {
			return crypto.encrypt(value);
		}
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		validate: {
			validator: function(v) {
				return validator.isEmail(v);
			},
			message: 'Email is not a valid!'
		}
	},
	extraFields: {
		type: Array
	}
}, {
	toJSON: { virtuals: true }
});

/**
 * Show phone last 4 digits
 */
schema.virtual('phoneHidden')
	.get(function () {
		return this.phone.replace(/.(?=.{4})/g, '*');
	});

var Client = mongoose.model('Client', schema);


module.exports = {
	Client: Client
};