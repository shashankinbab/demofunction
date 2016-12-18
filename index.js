'use strict';

const log4js = require('log4js');
const backend = require('./lib/backend.js');
const env = require('./lib/env.js');
const auth = require('./lib/auth.js');
const bankAccountBalances = require('./lib/bank-account-balances-transformation.js');

const logger = log4js.getLogger('index.js');

// Errors are returned to the calling service in the format:
// AA-BB-CCC-DDD
// Where :
// AA - Unique code for the Lambda function e.g. '01'
// BB - Event code according to error. General error (Lambda function) = 01, Error from backend = 02, Infrastructure error = 03
// CCC - HTTP error code being returned/handled e.g. '404', '403' etc.
// DDD - Unique code for that error e.g. '001', '002', '003' etc.
// Lambda code for lambda-bank-account-balances-get : 01
const errorConfig = {lambdaCode: '01', areas: {backend: '01', lambda: '02', infra: '03'}};

exports.handler = function (event, context, cb) {
	logger.info('Start handler()');
	logger.info('Received event', event);
	const token = auth.authToken(event);
	const targetHost = env.targetHost(event);
	const targetService = env.targetService(event);
	const tlsRejectUnauthorised = env.tlsReject(event);

	// Check required stuff.
	if (!token || !token.access_token) {
		return cb(null, {statusCode: 401, body: JSON.stringify({message: 'Authentication', code: `${errorConfig.lambdaCode}-${errorConfig.areas.infra}-401-001`})});
	}
	if (!targetHost) {
		return cb(null, {statusCode: 500, body: JSON.stringify({message: 'Internal Server Error', code: `${errorConfig.lambdaCode}-${errorConfig.areas.infra}-500-001`})});
	}
	if (!targetService) {
		return cb(null, {statusCode: 500, body: JSON.stringify({message: 'Internal Server Error', code: `${errorConfig.lambdaCode}-${errorConfig.areas.infra}-500-002`})});
	}

	const uuid = auth.uuid(event);
	const apiName = auth.apiName(event);
	const headers = auth.junctionAuthHeaders(token);
	logger.info('Headers for backend', headers);

	// Set TLS unauthorised rejection from stage variable
	if (tlsRejectUnauthorised) {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = tlsRejectUnauthorised;
	}

	// Prepare call to backend
	const url = backend.targetUrl(targetHost, targetService, 'listContracts');
	const payload = backend.BS_AE_FIN_CONTRACT_04_PAYLOAD(apiName, uuid); // eslint-disable-line new-cap
	console.time('CALL BACKEND ' + uuid);
	backend.post({
		url: url,
		body: payload,
		headers: headers
	}, function (err, response, body) {
		console.timeEnd('CALL BACKEND ' + uuid);
		if (err) {
			logger.error(`Error! ${err}`);
			return cb(err);
		}
		// Else - fall through
		logger.info(`BACKEND response.statusCode ${response.statusCode}`);
		logger.info(`BACKEND body ${JSON.stringify(body)}`);
		let responseBody;
		if (response.statusCode === 200) {
			responseBody = bankAccountBalances.parseResponse(body, errorConfig);
			// Delete any error properties from success (http 200) response
			if ((typeof responseBody.error !== 'undefined') && (responseBody.error)) {
				response.statusCode = responseBody.statuscode;
				delete responseBody.error;
				delete responseBody.statuscode;
			}
		} else {
			// Use '000' status code as the actual response code from the server could be anything
			responseBody = {message: 'Internal Server Error', code: `${errorConfig.lambdaCode}-${errorConfig.areas.backend}-000-001`};
		}
		const result = {
			statusCode: response.statusCode,
			body: JSON.stringify(responseBody)
		};
		logger.info('return result', result);
		return cb(null, result);
	});
};
