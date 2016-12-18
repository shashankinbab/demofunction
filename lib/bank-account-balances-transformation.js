'use strict';

const log4js = require('log4js');
const bankAccountsBalancesConfig = require('./bank-account-balances-config.json');
const commonFunctions = require('./common-functions.js');
const bankAccountBalancesTransformationFunction = require('./bank-account-balances-transformation-function.js');

const logger = log4js.getLogger('bank-account-balances-transformation.js');

exports.parseResponse = function (contractJsonData, errorConfig) {
	logger.info('Start parseResponse()');
	try {
		let transformedJsonResponse = {};
		let bankSavingsAccount = {};
		let bankSavingsAccountsArray = [];
		let bankInvestmentAccount = {};
		let bankInvestmentAccountArray = [];
		let bankSavingProducts = bankAccountsBalancesConfig.bankSavingsProducts;
		let bankInvestmentProducts = bankAccountsBalancesConfig.bankInvestmentProducts;
		if (contractJsonData.listContractResponse.PROCES.STATUS === '00000') {
			global.PARTIJ = contractJsonData.listContractResponse.DOSSIER.PARTIJ;
			let jsonData = [];
			if (contractJsonData.listContractResponse.DOSSIER.CONTRACT_POLIS.length > 0) {
				jsonData = contractJsonData.listContractResponse.DOSSIER.CONTRACT_POLIS;
			} else {
				jsonData[0] = contractJsonData.listContractResponse.DOSSIER.CONTRACT_POLIS;
			}

			let bankSavingsAccountIndex = 0;
			let bankInvestmentsAccountIndex = 0;
			for (let i = 0; i < jsonData.length; i++) {
				if (bankSavingProducts.indexOf(jsonData[i].PRODUCC) >= 0) {
					let getIDBSA = commonFunctions.createID(jsonData[i], jsonData[i].PRODUCC);
					if (getIDBSA) {
						bankSavingsAccount.id = commonFunctions.encrypt(getIDBSA);
						bankSavingsAccount.number = jsonData[i].NUMMER ? jsonData[i].NUMMER : null;
						bankSavingsAccount.iban = jsonData[i]._AE_FIN_CONTRACT.IBAN ? jsonData[i]._AE_FIN_CONTRACT.IBAN : null;
						bankSavingsAccount.balance = jsonData[i]._AE_WAARDE_TOTAAL ? parseFloat(jsonData[i]._AE_WAARDE_TOTAAL).toFixed(2) : null;
						if (typeof jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT !== 'undefined') {
							let depotArray = [];
							let depot = {};
							let depositAccountArray = [];
							if (jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT.length > 0) {
								depotArray = jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT;
							} else {
								depotArray[0] = jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT;
							}
							for (let nrDepots = 0; nrDepots < depotArray.length; nrDepots++) {
								let getIDDepot = commonFunctions.createID(jsonData[i], depotArray[nrDepots]._AE_PRODUCT_DEF._AE_CATEGORIECD + 'D');
								if (getIDDepot) {
									depot.number = depotArray[nrDepots]._AE_MODULENUMMER ? depotArray[nrDepots]._AE_MODULENUMMER : null;
									depot.id = commonFunctions.encrypt(getIDDepot);
									depositAccountArray[nrDepots] = depot;
									depot = {};
								}
							}
							bankSavingsAccount.depositAccount = depositAccountArray;
						}
						bankSavingsAccountsArray[bankSavingsAccountIndex] = bankSavingsAccount;
						bankSavingsAccountIndex++;
						bankSavingsAccount = {};
					}
				} else if (bankInvestmentProducts.indexOf(jsonData[i].PRODUCC) >= 0) {
					let getIDBIA = commonFunctions.createID(jsonData[i], jsonData[i].PRODUCC);
					if (getIDBIA) {
						bankInvestmentAccount.id = commonFunctions.encrypt(getIDBIA);
						if (typeof jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT !== 'undefined') {
							let getIDSAI = commonFunctions.createID(jsonData[i], jsonData[i]._AE_FIN_CONTRACT._AE_DEPOT._AE_PRODUCT_DEF._AE_CATEGORIECD + 'E');
							if (getIDSAI) {
								bankInvestmentAccount.securitiesAccountId = commonFunctions.encrypt(getIDSAI);
							}
						}
						bankInvestmentAccount.number = jsonData[i].NUMMER ? jsonData[i].NUMMER : null;
						bankInvestmentAccount.iban = jsonData[i]._AE_FIN_CONTRACT.IBAN ? jsonData[i]._AE_FIN_CONTRACT.IBAN : null;
						bankInvestmentAccount.balance = jsonData[i]._AE_WAARDE_TOTAAL ? parseFloat(jsonData[i]._AE_WAARDE_TOTAAL).toFixed(2) : null;
						bankInvestmentAccountArray[bankInvestmentsAccountIndex] = bankInvestmentAccount;
						bankInvestmentsAccountIndex++;
						bankInvestmentAccount = {};
					}
				}
			}
			if (bankSavingsAccountsArray.length > 0) {
				transformedJsonResponse.savingsAccounts = bankSavingsAccountsArray;
			}
			if (bankInvestmentAccountArray.length > 0) {
				transformedJsonResponse.investmentAccounts = bankInvestmentAccountArray;
			}
			return transformedJsonResponse;
		}
		// Else - fall through
		logger.error('Status Error!');
		let statusCode;
		if (contractJsonData.listContractResponse.PROCES.length > 0) {
			statusCode = contractJsonData.listContractResponse.PROCES[0].STATUS;
		} else {
			statusCode = contractJsonData.listContractResponse.PROCES.STATUS;
		}
		return bankAccountBalancesTransformationFunction.returnError(statusCode, errorConfig);
	} catch (err) {
		logger.error(`Error! ${err}`);
		return {error: true, message: 'Internal Server Error', statuscode: 500, code: `${errorConfig.lambdaCode}-${errorConfig.areas.lambda}-500-003`};
	}
};
