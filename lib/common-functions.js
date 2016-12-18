'use strict';

const crypto = require('crypto');
const log4js = require('log4js');

const logger = log4js.getLogger('common-functions.js');

exports.createID = function (JsonData, productId) {
	if (JsonData._AE_PARTIJCONTRACTROL.length > 0) {
		for (let partijcontractrol in JsonData._AE_PARTIJCONTRACTROL) {
			if (JsonData._AE_PARTIJCONTRACTROL[partijcontractrol].ENTITEI === 'RF') {
				return this.getRelnum(JsonData._AE_PARTIJCONTRACTROL[partijcontractrol]._AE_PARTIJ_VOLGNUM) +
					'#' + productId + '#' + (JsonData.VOLGNUM ? JsonData.VOLGNUM : null);
			}
		}
	} else if (JsonData._AE_PARTIJCONTRACTROL.ENTITEI === 'RF') {
		return this.getRelnum(JsonData._AE_PARTIJCONTRACTROL._AE_PARTIJ_VOLGNUM) +
			'#' + productId + '#' + (JsonData.VOLGNUM ? JsonData.VOLGNUM : null);
	}
	return false;
};

exports.getRelnum = function (volgnum) {
	logger.info('Start getRelnum()');
	if (global.PARTIJ.length > 0) {
		for (let volindex in global.PARTIJ) {
			if (volgnum === global.PARTIJ[volindex].VOLGNUM) {
				return global.PARTIJ[volindex].RELNUM;
			}
		}
	}
	if (volgnum === global.PARTIJ.VOLGNUM) {
		return global.PARTIJ.RELNUM;
	}
};

exports.encrypt = function (id) {
	logger.info('Start encrypt()');
	const cipher = crypto.createCipher('aes-256-ctr', 'AEGON@APPIC@APP');
	let crypted = cipher.update(id, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
};
