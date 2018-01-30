/**
 * Object for handling form submits
 */
var Actions = {
	addNewClient: function(formId) {

		var
			$form = $(formId),
			data = {
			phone: $('.phone', $form).val().trim(),
			email: $('.email', $form).val().trim(),
			extraFields: this.parseExtraFields($form)
		};

		$('#errors')
			.empty()
			.hide();

		$.ajax({
			url: '/api/v1/clients',
			method: 'POST',
			dataType: 'json',
			data: data
		}).done(function(data) {
			window.location.href = '/edit/'+data.data._id
		}).fail(function(data) {
			data = JSON.parse(data.responseText)
			Actions.showValidationErrors(data);
		});
	},
	showValidationErrors: function(error) {

		$('#successful').empty().hide();
		var $errors = $('#errors')
			.show();

		$errors.append(error.message);

		if (error.errors) {
			for(var i in error.errors) {
				if (!error.errors.hasOwnProperty(i)) {
					continue
				}
				$errors.append('<br> - ' + error.errors[i]);
			}
		}
	},
	/**
	 * Collect form extra fields to array
	 */
	parseExtraFields: function($form) {
		var
			extraFields = [],
			$values = $('.extra-field-input.value', $form),
			name,
			value;

		$('.extra-field-input.name', $form).each(function(i, element) {
			name = $(element).val().trim();
			value = $($values[i]).val().trim();

			if (!name || !value) {
				return;
			}
			extraFields.push({
				name: name,
				value: value
			})
		});

		return extraFields;
	}
};