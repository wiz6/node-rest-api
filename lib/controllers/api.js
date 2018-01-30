const Client = require('../models/client.js').Client,
	ObjectId = require('mongodb').ObjectId,
	parseValidationErros = require('../helpers/parseValidationErros').parseValidationErros;

/**
 * Get all clients
 */
function getClients(req, res) {

	Client.find(function(err, clients) {
		if (err) {
			res.status(500).send({message: 'Server error'});
			return;
		}

		if (clients) {
			res.status(200).send({data: clients});
			return;
		}

		res.status(404).send({message: 'Clients not found'});

	}).select({email:1, phone:1, phoneHidden:1, extraFields: 1});
};

/**
 * Get client by id
 */
function getClientById(req, res) {

	var id = req.params.id;
	if (!ObjectId.isValid(id)) {
		res.status(404).send({message: 'Client ID is invalid'});
		return;
	}

	Client.findById(id, function(err, client) {

		if (err) {
			res.status(500).send({message: 'Server error'});
			return;
		}

		if (client) {
			res.status(200).send({data: client});
			return;
		}

		res.status(404).send({message: 'Client not found'});

	}).select({email:1, phone:1, phoneHidden:1, extraFields: 1});
};

/**
 * Store new client
 */
function storeClient(req, res) {

		var clientData = {
			phone: req.body.phone,
			email: req.body.email,
			extraFields: req.body.extraFields
		};

		var client = new Client(clientData);

		client.save(function(err, client) {
			if (!err) {
				res.status(200).json({data: client});
				return;
			}

			if (err.name === 'ValidationError') {
				res.status(400).send({
					message: 'Validation error',
					errors: parseValidationErros(err.errors)
				});
				return;
			}

			res.status(500).send({message: 'Server error'});
		});
};

module.exports = {
	getClients: getClients,
	getClientById: getClientById,
	storeClient: storeClient
};