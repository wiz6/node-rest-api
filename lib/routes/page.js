const
	express = require('express'),
	pageController = require('../controllers/page');

var router = express.Router();

router.get('/list', pageController.list);
router.get('/', pageController.homepage);
router.get('/index', pageController.index);
router.get('/edit/:id', pageController.edit);

module.exports = router;
