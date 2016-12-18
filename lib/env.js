'use strict';

exports.targetHost = function (event) {
	return event.stageVariables && event.stageVariables.bamboo_STAGE_target_host;
};
exports.targetService = function (event) {
	return event.stageVariables && event.stageVariables.bamboo_STAGE_target_service;
};
exports.tlsReject = function (event) {
	return event.stageVariables && event.stageVariables.bamboo_STAGE_NODE_TLS_REJECT_UNAUTHORIZED;
};
