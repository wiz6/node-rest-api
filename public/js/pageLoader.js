var PageLoader = {
	/**
	 * Load clients list page
	 */
	loadList: function() {
		$.ajax({
			url: '/api/v1/clients',
			method: 'get',
			dataType: 'json'
		}).done(function(data) {
			if (!data.data) {
				return;
			}

			var $clients = $('#clients');
			$clients.append('<ul class="list-group">');
			data.data.forEach(function(client) {
				$clients.append('<li class="list-group-item"><a href="/edit/'+ client._id +'">'+ client.email +'</a> | '+ client.phoneHidden +'</li>')
			});
			$clients.append('</ul>');
		}).fail(function(data) {
			data = JSON.parse(data.responseText);
			PageLoader.showError(data.message);
		});
	},
	/**
	 * Load client page
	 */
	loadClient: function(id) {
		$.ajax({
			url: '/api/v1/clients/' + id,
			method: 'get',
			dataType: 'json'
		}).done(function(data) {
			if (!data.data) {
				return;
			}
			var $form = $('#add-form'),
				client = data.data;

			$('.email', $form).text(client.email);
			$('.phone', $form).text(client.phoneHidden);

			if (!client.extraFields.length) {
				return;
			}

			var
				$new,
				$extraFields = $('#extra-fields');

			for(var i in client.extraFields) {
				$new = $('.row:last', $extraFields).clone();
				$new.find('.extra-field-input.name').text(client.extraFields[i].name);
				$new.find('.extra-field-input.value').text(client.extraFields[i].value);
				$extraFields.append($new);
			}

			$('.row:first', $extraFields).remove();

		}).fail(function(data) {
			data = JSON.parse(data.responseText);
			PageLoader.showError(data.message);
		});
	},
	showError: function(message) {
		$('#errors')
			.empty()
			.append('<div class="alert alert-danger" role="alert">'+ message +'</div>');
	}

};