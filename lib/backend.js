'use strict';

const log4js = require('log4js');
const request = require('request');

const logger = log4js.getLogger('backend.js');

exports.post = function (options, cb) {
	logger.info('Start post()');
	request({
		url: options.url,
		method: 'POST',
		json: true,
		body: options.body,
		headers: options.headers
	}, cb);
};

exports.BS_AE_FIN_CONTRACT_04_PAYLOAD = function (apiName, uuid) {
	logger.info('Start BS_AE_FIN_CONTRACT_04_PAYLOAD()');
	return {
		listContractsRequest: {
			AILHEADER: {
				CLIENTID: apiName,
				CORRELATIONID: '##' + uuid + '##'
			}
		}
	};
};

exports.targetUrl = function (targetHost, service, action) {
	logger.info('Start targetUrl()');
	const url = 'https://' + targetHost + '/' + service + '/US_RestGatewayWeb/rest/requestResponse/BS_AE_FIN_CONTRACT_04/' + action;
	logger.info('targetUrl', url);
	return url;
};
