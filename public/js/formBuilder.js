/**
 * Builder for adding name and value HTML inputs to form
 */
var FormBuilder = {
	maxRows: 8,
	addRow: function() {
		if ($('#extra-fields .row').length === this.maxRows) {
			return;
		}

		var $container = $('#extra-fields'),
			$newRow = $container.find('.row:first').clone();

		if (!this.validateInputs()) {
			return;
		}

		$newRow.find('.extra-field-input').val('');
		$container.append($newRow);
	},
	deleteRow: function(element) {
		var $row =$('#extra-fields .row');
		if ($row.length === 1) {
			$row.find('.extra-field-input').each(function() {
				$(this).val('');
			});
			return;
		}

		$(element).parent('.form-group').remove();

	},
	validateInputs: function() {
		var validInputs = true;

		$('#extra-fields .row:last').find('.extra-field-input').each(function() {
			if (!$(this).val().trim()) {
				validInputs = false;
			}
		});

		return validInputs;
	}
};