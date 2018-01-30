/**
 * Collect validation errors to one array
 */
function parseValidationErros(errors) {
	var
		parsedErrors = [],
		field;

	for(field in errors) {
		parsedErrors.push(errors[field].message);
	}
	return parsedErrors;
};


module.exports = {
	parseValidationErros: parseValidationErros
};