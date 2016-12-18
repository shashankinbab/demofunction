'use strict';

const log4js = require('log4js');
const base64 = require('./base64.js');

const logger = log4js.getLogger('auth.js');

// If x-auth-token is passed in the header, try to return it after decoding
exports.authToken = function (event) {
	logger.info('Start authToken()');
	if (event.headers['x-auth-token']) {
		try {
			return JSON.parse(base64.decode(event.headers['x-auth-token']));
		} catch (err) {
			// Could not be decoded
			// Allow fall through which will be picked up by the calling method
		}
	}
};

exports.junctionAuthHeaders = function (token) {
	logger.info('Start junctionAuthHeaders()');
	return {
		Authorization: 'Bearer ' + token.access_token
	};
};

const generateUUID = function () {
	logger.info('Start generateUUID()');
	let nbr;
	let randStr = '';
	do {
		randStr += (nbr = Math.random()).toString(16).substr(2);
	} while (randStr.length < 30);
	return [
		randStr.substr(0, 8), '-',
		randStr.substr(8, 4), '-4',
		randStr.substr(12, 3), '-',
		((nbr * 4 | 0) + 8).toString(16), // [89ab]
		randStr.substr(15, 3), '-',
		randStr.substr(18, 12)
	].join('');
};

exports.uuid = function (event) {
	logger.info('Start uuid()');
	if (event.headers['x-uuid']) {
		return event.headers['x-uuid'];
	}
	// Fall through
	return generateUUID();
};

exports.apiName = function (event) {
	logger.info('Start apiName()');
	if (event.headers['x-api-name']) {
		return event.headers['x-api-name'];
	}
	// Fall through
	return 'api-name-not-passed-from-apigee';
};

