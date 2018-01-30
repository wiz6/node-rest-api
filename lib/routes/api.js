const
	express = require('express'),
	apiController = require('../controllers/api');

var router = express.Router();

/**
 * Defined clients API routes
 */
router.route('/clients')
	.get(apiController.getClients)
	.post(apiController.storeClient);

router.route('/clients/:id')
	.get(apiController.getClientById);

module.exports = router;