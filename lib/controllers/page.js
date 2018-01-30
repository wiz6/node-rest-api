/**
 * Controller for rendering views
 */

function homepage(req, res) {
	res.render('homepage');
}

function index(req, res) {
	res.render('index');
}

function list(req, res) {
	res.render('list');
}

function edit(req, res) {
	res.render('edit', {
		id: req.params.id
	});
};

module.exports = {
	homepage: homepage,
	index: index,
	list: list,
	edit: edit
};