'use strict';

const log4js = require('log4js');
const lambda = require('./index.js');

const logger = log4js.getLogger('local.js');

const event = {
	headers: {
		'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJIMkJ2eDR2MUJWVUdqRVZzZHJxZDZudk1XbEpod0VlUEZIRDRDWHozIn0=',
		'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
		'x-api-name': 'nfsb-adwas0-proxy'
	},
	stageVariables: {
		bamboo_STAGE_target_host: '10.38.98.192:443',
		bamboo_STAGE_target_service: 'strop'
	}
};

const context = {
	succeed: function () {},
	fail: function () {}
};

lambda.handler(event, context, function (err, result) {
	logger.info('Start handler()');
	if (err) {
		logger.info('err', err);
	} else {
		logger.info('result', result);
	}
});
