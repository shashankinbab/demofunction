'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('bank-account-balances-transformation-function.js');

exports.returnError = function (errorCode, errorConfig) {
	logger.info('Start returnError()');
	logger.info(`Got error code: ${errorCode}`);
	let errorObj;
	switch (errorCode) {
		case '99996':
		case '39000':
		case '38000':
		case '37000':
		case '15000':
		case '14000':
		case '67300':
		case '67500':
		case '0917E':
			errorObj = {error: true, message: 'Forbidden', statuscode: 403, code: `${errorConfig.lambdaCode}-${errorConfig.areas.backend}-403-001`};
			break;
		case '99000':
		case '78200':
		case '16000':
			errorObj = {error: true, message: 'Not Found', statuscode: 404, code: `${errorConfig.lambdaCode}-${errorConfig.areas.backend}-404-001`};
			break;
		case '50150':
		case '68600':
		case '0116E':
		case '50030':
		case null:
			errorObj = {error: true, message: 'Internal Server Error', statuscode: 500, code: `${errorConfig.lambdaCode}-${errorConfig.areas.backend}-500-004`};
			break;
		default:
			errorObj = {error: true, message: 'Internal Server Error', statuscode: 500, code: `${errorConfig.lambdaCode}-${errorConfig.areas.lambda}-500-005`};
			break;
	}
	logger.info(`Returning ${JSON.stringify(errorObj)}`);
	return errorObj;
};
