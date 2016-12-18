var test = require('tape');
var proxyquire = require('proxyquire');

test('Retrieve balances responses', function (t) {

	var postPayload = function (options, cb) {
		console.log('postPayload', options);
		process.nextTick(function () {
			if (options.headers['Authorization'] === 'Bearer valid') {
				var body = {
					"listContractResponse": {
						"DOSSIER": {
							"CONTRACT_POLIS": [
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1110R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Vrij Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1110",
										"_AE_CATEGORIE": "Aegon Vrij Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "1.05",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL08AEGO0204219841",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Vrij Beleggen",
												"_AE_CATEGORIECD": "1110",
												"_AE_CATEGORIE": "Aegon Vrij Beleggen"
											},
											"_AE_MODULENUMMER": "1048139",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "204219841",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1132R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1132",
										"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "18.74",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL69AEGO0208979018",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
												"_AE_CATEGORIECD": "1132",
												"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
											},
											"_AE_MODULENUMMER": "1131153",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "208979018",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1131R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1131",
										"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "15.11",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL74AEGO0722142587",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
												"_AE_CATEGORIECD": "1131",
												"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
											},
											"_AE_MODULENUMMER": "1304484",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "722142587",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1100S",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Internet Spaarrekening",
										"PRDTOMS": "Aegon Sparen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1100",
										"_AE_CATEGORIE": "Aegon Sparen"
									},
									"_AE_WAARDE_TOTAAL": "36000.00",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "2",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL94AEGO0763741841"
									},
									"NUMMER": "763741841",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "AEGON SpaarComfort Personeel"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1111R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Mix Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1111",
										"_AE_CATEGORIE": "Aegon Mix Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "0",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL57AEGO0203103653",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Mix Beleggen",
												"_AE_CATEGORIECD": "1111",
												"_AE_CATEGORIE": "Aegon Mix Beleggen"
											},
											"_AE_MODULENUMMER": "1019195",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "203103653",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Mix Beleggen"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1110R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Vrij Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1110",
										"_AE_CATEGORIE": "Aegon Vrij Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "0",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL31AEGO0205438911",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Vrij Beleggen",
												"_AE_CATEGORIECD": "1110",
												"_AE_CATEGORIE": "Aegon Vrij Beleggen"
											},
											"_AE_MODULENUMMER": "3467011",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "205438911",
									"VOLGNUM": "2",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
								}
							],
							"PARTIJ": [
								{
									"VOLGNUM": "1",
									"RELNUM": "1019194"
								},
								{
									"VOLGNUM": "2",
									"RELNUM": "1500567"
								}
							]
						},
						"PROCES": {
							"STATUS": "00000",
							"VOLGNUM": "1",
							"STATUST": "Success"
						},
						"AILHEADER": {
							"CLIENTID": "appic-adbab-dev",
							"CORRELATIONID": "##dcb31881-30f2-4bfa-9912-5e4401af90a3##"
						}
					}
				};
				return cb(null, { statusCode: 200 }, body);
			} else if (options.headers['Authorization'] === 'Bearer invalid') {
				return cb({ error: 'get lost!' });
			}
			return cb({});
		});
	};

	var lambda = proxyquire('../index', {
		'./lib/backend.js': { post: postPayload }
	});

	var event = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};
	lambda.handler(event, {}, function (e, r) {
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '763741841', 'valid id returned');
	});

	// Data 1
	var postPayloadData1 = function (options, cb) {
		console.log('postPayloadData1', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"AILHEADER": {
						"CLIENTID": "Bart",
						"CORRELATIONID": "##bladiebart##"
					},
					"DOSSIER": {
						"PARTIJ": {
							"VOLGNUM": "1",
							"RELNUM": "1688218"
						},
						"CONTRACT_POLIS": [
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "1"
								},
								"NUMMER": "738576174",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen",
								"PRODUCC": "1110R",
								"_AE_ACTIEF": "true",
								"VOLGNUM": "1",
								"_AE_WAARDE_TOTAAL": "7.70",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL34AEGO0738576174",
									"_AE_DEPOT": {
										"_AE_MODULENUMMER": "1728390",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening",
										"_AE_PRODUCT_DEF": {
											"PRDTOMS": "Aegon Vrij Beleggen",
											"_AE_CATEGORIE": "Aegon Vrij Beleggen",
											"_AE_CATEGORIECD": "1110",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"_AE_SUBCATEGORIECD": "Investment account"
										}
									}
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon Vrij Beleggen",
									"_AE_CATEGORIE": "Aegon Vrij Beleggen",
									"_AE_CATEGORIECD": "1110",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							},
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "1"
								},
								"NUMMER": "282304185",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Tijdelijke Opbouw Product",
								"PRODUCC": "2215V",
								"_AE_ACTIEF": "true",
								"VOLGNUM": "1",
								"_AE_WAARDE_TOTAAL": "0",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL66AEGO0282304185"
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon Lijfrente Opbouw",
									"_AE_CATEGORIE": "Aegon Lijfrente Opbouw",
									"_AE_CATEGORIECD": "2215",
									"_AE_SUBCATEGORIE": "Variabele Renterekening",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							},
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "1"
								},
								"NUMMER": "726448702",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "spaarpotje2",
								"PRODUCC": "1100S",
								"_AE_ACTIEF": "true",
								"VOLGNUM": "1",
								"_AE_WAARDE_TOTAAL": "2.15",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL42AEGO0726448702",
									"_AE_DEPOT": {
										"_AE_MODULENUMMER": "1729688",
										"_AE_PRDTOMS_PERS": "Deposito Rekening 2 jaar",
										"_AE_PRODUCT_DEF": {
											"PRDTOMS": "Aegon Sparen",
											"_AE_CATEGORIE": "Aegon Sparen",
											"_AE_CATEGORIECD": "1100",
											"_AE_SUBCATEGORIE": "Deposito Rekening",
											"_AE_SUBCATEGORIECD": "Cash Account"
										}
									}
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon Sparen",
									"_AE_CATEGORIE": "Aegon Sparen",
									"_AE_CATEGORIECD": "1100",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							},
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "1"
								},
								"NUMMER": "738665517",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Mix Beleggen",
								"PRODUCC": "1111R",
								"_AE_ACTIEF": "true",
								"VOLGNUM": "2",
								"_AE_WAARDE_TOTAAL": "0.12",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL66AEGO0738665517",
									"_AE_DEPOT": {
										"_AE_MODULENUMMER": "1864299",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening",
										"_AE_PRODUCT_DEF": {
											"PRDTOMS": "Aegon Mix Beleggen",
											"_AE_CATEGORIE": "Aegon Mix Beleggen",
											"_AE_CATEGORIECD": "1111",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"_AE_SUBCATEGORIECD": "Investment account"
										}
									}
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon Mix Beleggen",
									"_AE_CATEGORIE": "Aegon Mix Beleggen",
									"_AE_CATEGORIECD": "1111",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							}
						]
					},
					"PROCES": {
						"VOLGNUM": "1",
						"STATUS": "00000",
						"STATUST": "Success"
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaData1 = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadData1 }
	});

	var eventData1 = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaData1.handler(eventData1, {}, function (e, r) {
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '282304185', 'Savings account number 1 matched');
		t.equal(JSON.parse(r.body).savingsAccounts[1].number, '726448702', 'Savings account number 2 matched');
		t.equal(JSON.parse(r.body).investmentAccounts[0].number, '738576174', 'Investment account number 1 matched');
		t.equal(JSON.parse(r.body).investmentAccounts[1].number, '738665517', 'Investment account number 2 matched');
	});

	// Data 2
	var postPayloadData2 = function (options, cb) {
		console.log('postPayloadData2', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"AILHEADER": {
						"CLIENTID": "Salesforce",
						"CORRELATIONID": "##BS_AE_FIN_CONTRACT##Thu Sep 29 15:54:10 CEST 2016##"
					},
					"DOSSIER": {
						"PARTIJ": {
							"VOLGNUM": "1",
							"RELNUM": "1698391"
						},
						"CONTRACT_POLIS": {
							"_AE_PARTIJCONTRACTROL": {
								"VOLGNUM": "1",
								"ENTITEI": "RF",
								"_AE_PARTIJ_VOLGNUM": "1"
							},
							"NUMMER": "202997065",
							"_AE_BRONSYSTEEM": "EUROPORT",
							"_AE_PRDTOMS_PERS": "Ontslagvergoeding Sparen",
							"PRODUCC": "2240V",
							"_AE_ACTIEF": "false",
							"VOLGNUM": "1",
							"_AE_WAARDE_TOTAAL": "0",
							"_AE_FIN_CONTRACT": {
								"BIC": "AEGONL2U",
								"IBAN": "NL40AEGO0202997065"
							},
							"_AE_PRODUCT_DEF": {
								"PRDTOMS": "Aegon Ontslagvergoeding Sparen",
								"_AE_CATEGORIE": "Aegon Ontslagvergoeding Sparen",
								"_AE_CATEGORIECD": "2240",
								"_AE_SUBCATEGORIE": "Variabele Renterekening",
								"_AE_SUBCATEGORIECD": "Cash Account",
								"_AE_PRODUCTTONENINPORTAL": "true"
							}
						}
					},
					"PROCES": {
						"VOLGNUM": "1",
						"STATUS": "00000",
						"STATUST": "Success"
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaData2 = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadData2 }
	});

	var eventData2 = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaData2.handler(eventData2, {}, function (e, r) {
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '202997065', 'Savings account number matched');
	});

	// Data 3
	var postPayloadData3 = function (options, cb) {
		console.log('postPayloadData3', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"AILHEADER": {
						"CLIENTID": "Bart",
						"CORRELATIONID": "##bladiebart##"
					},
					"DOSSIER": {
						"PARTIJ": [
							{
								"VOLGNUM": "1",
								"RELNUM": "1016562"
							},
							{
								"VOLGNUM": "2",
								"RELNUM": "1293051"
							}
						],
						"CONTRACT_POLIS": [
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "1"
								},
								"NUMMER": "202998738",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon RenteRekening",
								"PRODUCC": "1120S",
								"_AE_ACTIEF": "true",
								"VOLGNUM": "1",
								"_AE_WAARDE_TOTAAL": "84.77",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL71AEGO0202998738"
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon RenteRekening",
									"_AE_CATEGORIE": "Aegon RenteRekening",
									"_AE_CATEGORIECD": "1120",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							},
							{
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"ENTITEI": "RF",
									"_AE_PARTIJ_VOLGNUM": "2"
								},
								"NUMMER": "721065694",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon RenteRekening",
								"PRODUCC": "1120S",
								"_AE_ACTIEF": "false",
								"VOLGNUM": "1",
								"_AE_WAARDE_TOTAAL": "0",
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL47AEGO0721065694"
								},
								"_AE_PRODUCT_DEF": {
									"PRDTOMS": "Aegon RenteRekening",
									"_AE_CATEGORIE": "Aegon RenteRekening",
									"_AE_CATEGORIECD": "1120",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_PRODUCTTONENINPORTAL": "true"
								}
							}
						]
					},
					"PROCES": {
						"VOLGNUM": "1",
						"STATUS": "00000",
						"STATUST": "Success"
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaData3 = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadData3 }
	});

	var eventData3 = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaData3.handler(eventData3, {}, function (e, r) {
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '202998738', 'Savings account number 1 matched');
		t.equal(JSON.parse(r.body).savingsAccounts[1].number, '721065694', 'Savings account number 2 matched');
	});

	// Handle data where data items have situations where _AE_PARTIJCONTRACTROL.ENTITEI does NOT equal 'RF' (should be skipped)
	var postPayloadDataNonRF = function (options, cb) {
		console.log('postPayloadDataNonRF', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"DOSSIER": {
						"CONTRACT_POLIS": [
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1100S",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"PRDTOMS": "Aegon Sparen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1100",
									"_AE_CATEGORIE": "Aegon Sparen"
								},
								"_AE_WAARDE_TOTAAL": "0.01",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "2",
									"ENTITEI": "BN"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL96AEGO0283051418"
								},
								"NUMMER": "283051418",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Sparen"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1100S",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"PRDTOMS": "Aegon Sparen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1100",
									"_AE_CATEGORIE": "Aegon Sparen"
								},
								"_AE_WAARDE_TOTAAL": "8210.81",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL28AEGO0742140741",
									"_AE_DEPOT": [
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "1714987",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 10 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "1822591",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 10 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "1928203",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 10 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "2852397",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 10 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "2859500",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 6 mnd"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "2860800",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 5 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "3160715",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 10 jaar"
										},
										{
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Cash Account",
												"_AE_SUBCATEGORIE": "Deposito Rekening",
												"PRDTOMS": "Aegon Sparen",
												"_AE_CATEGORIECD": "1100",
												"_AE_CATEGORIE": "Aegon Sparen"
											},
											"_AE_MODULENUMMER": "3371200",
											"_AE_PRDTOMS_PERS": "Deposito Rekening 1 jaar"
										}
									]
								},
								"NUMMER": "742140741",
								"VOLGNUM": "2",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Sparen"
							}
						],
						"PARTIJ": [
							{
								"VOLGNUM": "1",
								"RELNUM": "1028327"
							},
							{
								"VOLGNUM": "2",
								"RELNUM": "1210849"
							}
						]
					},
					"PROCES": {
						"STATUS": "00000",
						"VOLGNUM": "1",
						"STATUST": "Success"
					},
					"AILHEADER": {
						"CLIENTID": "appic-adbab-uat",
						"CORRELATIONID": "##256bd92e-cddb-469e-c473-92401c071846##"
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaDataNonRF = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadDataNonRF }
	});

	var eventDataNonRF = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaDataNonRF.handler(eventDataNonRF, {}, function (e, r) {
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '742140741', 'Savings account number matched');
	});

	t.end();
});

test('Relax TLS', function(t){

	var postPayload = function (options, cb) {
		process.nextTick(function () {
			if (options.headers['Authorization'] === 'Bearer valid') {
				var body = {
					"listContractResponse": {
						"DOSSIER": {
							"CONTRACT_POLIS": [
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1110R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Vrij Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1110",
										"_AE_CATEGORIE": "Aegon Vrij Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "1.05",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL08AEGO0204219841",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Vrij Beleggen",
												"_AE_CATEGORIECD": "1110",
												"_AE_CATEGORIE": "Aegon Vrij Beleggen"
											},
											"_AE_MODULENUMMER": "1048139",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "204219841",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1132R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1132",
										"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "18.74",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL69AEGO0208979018",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
												"_AE_CATEGORIECD": "1132",
												"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
											},
											"_AE_MODULENUMMER": "1131153",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "208979018",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1131R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1131",
										"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "15.11",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL74AEGO0722142587",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
												"_AE_CATEGORIECD": "1131",
												"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
											},
											"_AE_MODULENUMMER": "1304484",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "722142587",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1100S",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Internet Spaarrekening",
										"PRDTOMS": "Aegon Sparen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1100",
										"_AE_CATEGORIE": "Aegon Sparen"
									},
									"_AE_WAARDE_TOTAAL": "36000.00",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "2",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL94AEGO0763741841"
									},
									"NUMMER": "763741841",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "AEGON SpaarComfort Personeel"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1111R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Mix Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1111",
										"_AE_CATEGORIE": "Aegon Mix Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "0",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL57AEGO0203103653",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Mix Beleggen",
												"_AE_CATEGORIECD": "1111",
												"_AE_CATEGORIE": "Aegon Mix Beleggen"
											},
											"_AE_MODULENUMMER": "1019195",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "203103653",
									"VOLGNUM": "1",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Mix Beleggen"
								},
								{
									"_AE_ACTIEF": "true",
									"PRODUCC": "1110R",
									"_AE_PRODUCT_DEF": {
										"_AE_SUBCATEGORIECD": "Cash Account",
										"_AE_SUBCATEGORIE": "Rekening courant",
										"PRDTOMS": "Aegon Vrij Beleggen",
										"_AE_PRODUCTTONENINPORTAL": "true",
										"_AE_CATEGORIECD": "1110",
										"_AE_CATEGORIE": "Aegon Vrij Beleggen"
									},
									"_AE_WAARDE_TOTAAL": "0",
									"_AE_PARTIJCONTRACTROL": {
										"VOLGNUM": "1",
										"_AE_PARTIJ_VOLGNUM": "1",
										"ENTITEI": "RF"
									},
									"_AE_FIN_CONTRACT": {
										"BIC": "AEGONL2U",
										"IBAN": "NL31AEGO0205438911",
										"_AE_DEPOT": {
											"_AE_PRODUCT_DEF": {
												"_AE_SUBCATEGORIECD": "Investment account",
												"_AE_SUBCATEGORIE": "Depot rekening",
												"PRDTOMS": "Aegon Vrij Beleggen",
												"_AE_CATEGORIECD": "1110",
												"_AE_CATEGORIE": "Aegon Vrij Beleggen"
											},
											"_AE_MODULENUMMER": "3467011",
											"_AE_PRDTOMS_PERS": "Beleggingsrekening"
										}
									},
									"NUMMER": "205438911",
									"VOLGNUM": "2",
									"_AE_BRONSYSTEEM": "EUROPORT",
									"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
								}
							],
							"PARTIJ": [
								{
									"VOLGNUM": "1",
									"RELNUM": "1019194"
								},
								{
									"VOLGNUM": "2",
									"RELNUM": "1500567"
								}
							]
						},
						"PROCES": {
							"STATUS": "00000",
							"VOLGNUM": "1",
							"STATUST": "Success"
						},
						"AILHEADER": {
							"CLIENTID": "appic-adbab-dev",
							"CORRELATIONID": "##dcb31881-30f2-4bfa-9912-5e4401af90a3##"
						}
					}
				};
				return cb(null, { statusCode: 200 }, body);
			} else if (options.headers['Authorization'] === 'Bearer invalid') {
				return cb({ error: 'get lost!' });
			}
			return cb({});
		});
	};

	var lambda = proxyquire('../index', {
		'./lib/backend.js': { post: postPayload }
	});

	var eventTLS = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		// Stage Variables are passed in via Bamboo to AWS, instead of Environment Variables (currently).
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail', bamboo_STAGE_NODE_TLS_REJECT_UNAUTHORIZED: '0' },
		pathParameters: { accnr: '763741841', id: '95741ad42ceabb7f3fd28603719752' }
	};

	lambda.handler(eventTLS,{}, function(e,r){
		t.equal(JSON.parse(r.body).savingsAccounts[0].number, '763741841', 'valid id returned');
		t.equal(process.env.NODE_TLS_REJECT_UNAUTHORIZED, '0', 'TLS_REJECT_UNAUTHORIZED should be modified');
	});

	t.end();
});

test('Handle transport/auth errors ', function (t) {

	var postPayload = function (options, cb) {
		console.log('postPayload', options);
		process.nextTick(function () {
			if (options.headers['Authorization'] === 'Bearer valid') {
				var body = {
					"listDocumentsResponse": {
						"AILHEADER": {
							"CLIENTID": "SCPDIS222",
							"CORRELATIONID": "##MdA##"
						},
						"DOSSIER": {
							"_AE_DOCUMENT": {
								"_AE_DOC_ID": "233996",
								"_AE_DOC_INGDAT": "2014-05-21",
								"_AE_DOC_TYPE": "STARTBRIEF",
								"_AE_BRONSYSTEEM": "SCPDIS"
							},
							"PARTIJ": ""
						},
						"PROCES": {
							"VOLGNUM": "1",
							"STATUS": "00000",
							"STATUST": "Success"
						}
					}
				};
				return cb(null, {statusCode: 200}, body);

			} else if (options.headers['Authorization'] === 'Bearer invalid') {
				return cb({ error: 'get lost!' });
			}
			return cb({});
		});
	};

	var lambda = proxyquire('../index', {
		'./lib/backend.js': { post: postPayload }
	});

	var event = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJpbnZhbGlkIn0=',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail'}
	};
	lambda.handler(event, {}, function (e, r) {
		t.equal(e.error, 'get lost!', 'error should be returned');
	});

	// Missing target host
	var event = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJpbnZhbGlkIn0=',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { }
	};
	lambda.handler(event, {}, function (e, r) {
		t.deepEqual(r, { body: '{"message":"Internal Server Error","code":"01-03-500-001"}', statusCode: 500 }, '500 should be returned');
	});

	// Missing target service
	var event = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJpbnZhbGlkIn0=',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost' }
	};
	lambda.handler(event, {}, function (e, r) {
		t.deepEqual(r, { body: '{"message":"Internal Server Error","code":"01-03-500-002"}', statusCode: 500 }, '500 should be returned');
	});

	// Access token missing
	var event = {
		headers: {
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		}
	};
	lambda.handler(event, {}, function (e, r) {
		t.deepEqual(r, { body: '{"message":"Authentication","code":"01-03-401-001"}', statusCode: 401 }, '401 should be returned for a missing access token');
	});

	t.end();
});

test('Handle data request/response errors ', function (t) {

	// Unhandled response STATUS
	var postPayloadUnhandledStatus = function (options, cb) {
		console.log('postPayloadUnhandledStatus', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"DOSSIER": {
						"CONTRACT_POLIS": [
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1110R",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"PRDTOMS": "Aegon Vrij Beleggen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1110",
									"_AE_CATEGORIE": "Aegon Vrij Beleggen"
								},
								"_AE_WAARDE_TOTAAL": "1.05",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL08AEGO0204219841",
									"_AE_DEPOT": {
										"_AE_PRODUCT_DEF": {
											"_AE_SUBCATEGORIECD": "Investment account",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"PRDTOMS": "Aegon Vrij Beleggen",
											"_AE_CATEGORIECD": "1110",
											"_AE_CATEGORIE": "Aegon Vrij Beleggen"
										},
										"_AE_MODULENUMMER": "1048139",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening"
									}
								},
								"NUMMER": "204219841",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1132R",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash account",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1132",
									"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
								},
								"_AE_WAARDE_TOTAAL": "18.74",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL69AEGO0208979018",
									"_AE_DEPOT": {
										"_AE_PRODUCT_DEF": {
											"_AE_SUBCATEGORIECD": "Investment account",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen",
											"_AE_CATEGORIECD": "1132",
											"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Profiel Beleggen"
										},
										"_AE_MODULENUMMER": "1131153",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening"
									}
								},
								"NUMMER": "208979018",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1131R",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1131",
									"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
								},
								"_AE_WAARDE_TOTAAL": "15.11",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL74AEGO0722142587",
									"_AE_DEPOT": {
										"_AE_PRODUCT_DEF": {
											"_AE_SUBCATEGORIECD": "Investment account",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"PRDTOMS": "Aegon BeleggingsHypotheek Rekening Mix Beleggen",
											"_AE_CATEGORIECD": "1131",
											"_AE_CATEGORIE": "Aegon BeleggingsHypotheek Rekening Mix Beleggen"
										},
										"_AE_MODULENUMMER": "1304484",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening"
									}
								},
								"NUMMER": "722142587",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "BeleggingsHypotheek Rekening"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1100S",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Internet Spaarrekening",
									"PRDTOMS": "Aegon Sparen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1100",
									"_AE_CATEGORIE": "Aegon Sparen"
								},
								"_AE_WAARDE_TOTAAL": "36000.00",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "2",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL94AEGO0763741841"
								},
								"NUMMER": "763741841",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "AEGON SpaarComfort Personeel"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1111R",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"PRDTOMS": "Aegon Mix Beleggen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1111",
									"_AE_CATEGORIE": "Aegon Mix Beleggen"
								},
								"_AE_WAARDE_TOTAAL": "0",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL57AEGO0203103653",
									"_AE_DEPOT": {
										"_AE_PRODUCT_DEF": {
											"_AE_SUBCATEGORIECD": "Investment account",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"PRDTOMS": "Aegon Mix Beleggen",
											"_AE_CATEGORIECD": "1111",
											"_AE_CATEGORIE": "Aegon Mix Beleggen"
										},
										"_AE_MODULENUMMER": "1019195",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening"
									}
								},
								"NUMMER": "203103653",
								"VOLGNUM": "1",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Mix Beleggen"
							},
							{
								"_AE_ACTIEF": "true",
								"PRODUCC": "1110R",
								"_AE_PRODUCT_DEF": {
									"_AE_SUBCATEGORIECD": "Cash Account",
									"_AE_SUBCATEGORIE": "Rekening courant",
									"PRDTOMS": "Aegon Vrij Beleggen",
									"_AE_PRODUCTTONENINPORTAL": "true",
									"_AE_CATEGORIECD": "1110",
									"_AE_CATEGORIE": "Aegon Vrij Beleggen"
								},
								"_AE_WAARDE_TOTAAL": "0",
								"_AE_PARTIJCONTRACTROL": {
									"VOLGNUM": "1",
									"_AE_PARTIJ_VOLGNUM": "1",
									"ENTITEI": "RF"
								},
								"_AE_FIN_CONTRACT": {
									"BIC": "AEGONL2U",
									"IBAN": "NL31AEGO0205438911",
									"_AE_DEPOT": {
										"_AE_PRODUCT_DEF": {
											"_AE_SUBCATEGORIECD": "Investment account",
											"_AE_SUBCATEGORIE": "Depot rekening",
											"PRDTOMS": "Aegon Vrij Beleggen",
											"_AE_CATEGORIECD": "1110",
											"_AE_CATEGORIE": "Aegon Vrij Beleggen"
										},
										"_AE_MODULENUMMER": "3467011",
										"_AE_PRDTOMS_PERS": "Beleggingsrekening"
									}
								},
								"NUMMER": "205438911",
								"VOLGNUM": "2",
								"_AE_BRONSYSTEEM": "EUROPORT",
								"_AE_PRDTOMS_PERS": "Aegon Vrij Beleggen"
							}
						],
						"PARTIJ": [
							{
								"VOLGNUM": "1",
								"RELNUM": "1019194"
							},
							{
								"VOLGNUM": "2",
								"RELNUM": "1500567"
							}
						]
					},
					"PROCES": {
						"STATUS": "00001",
						"VOLGNUM": "1",
						"STATUST": "Success"
					},
					"AILHEADER": {
						"CLIENTID": "appic-adbab-dev",
						"CORRELATIONID": "##dcb31881-30f2-4bfa-9912-5e4401af90a3##"
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaUnhandledStatus = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadUnhandledStatus }
	});

	var eventUnhandledStatus = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};
	lambdaUnhandledStatus.handler(eventUnhandledStatus, {}, function (e, r) {
		t.deepEqual(JSON.parse(r.body), { code: '01-02-500-005', message: 'Internal Server Error' } , 'Internal Server Error should be returned for an unhandled response STATUS');
	});

	// Badly formed response
	var postPayloadBadlyFormed = function (options, cb) {
		console.log('postPayloadBadlyFormed', options);
		process.nextTick(function () {
			var body = {
				// Badly formed response
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaBadlyFormed  = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadBadlyFormed  }
	});

	var eventBadlyFormed  = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};
	lambdaBadlyFormed .handler(eventBadlyFormed , {}, function (e, r) {
		t.deepEqual(JSON.parse(r.body), { code: '01-02-500-003', message: 'Internal Server Error' } , 'Internal Server Error for a badly formed response');
	});

	// Unhandled status code
	var postPayloadUnhandledStatusCode = function (options, cb) {
		console.log('postPayloadUnhandledStatusCode', options);
		process.nextTick(function () {
			if (options.headers['Authorization'] === 'Bearer valid') {
				return cb(null, {statusCode: 201}, null);
			} else if (options.headers['Authorization'] === 'Bearer invalid') {
				return cb({ error: 'get lost!' });
			}
			return cb({});
		});
	};

	var lambdaUnhandledStatusCode = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadUnhandledStatusCode }
	});

	var eventUnhandledStatusCode = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};
	lambdaUnhandledStatusCode.handler(eventUnhandledStatusCode, {}, function (e, r) {
		t.deepEqual(JSON.parse(r.body), { code: '01-01-000-001', message: 'Internal Server Error' } , 'Internal Server Error should be returned for an unhandled status code');
	});

	// Data 4 (Missing resource credential)
	var postPayloadData4 = function (options, cb) {
		console.log('postPayloadData4', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"AILHEADER": {
						"CLIENTID": "bl@dieB@rt",
						"CORRELATIONID": "##BS_AE_FIN_CONTRACT##Fri Sep 30 10:25:36 CEST 2016##"
					},
					"PROCES": {
						"STATUS": "0917E",
						"STATUST": "The specified GSO resource credential was not found."
					}
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaData4 = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadData4 }
	});

	var eventData4 = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaData4.handler(eventData4, {}, function (e, r) {
		t.deepEqual(JSON.parse(r.body), { code: '01-01-403-001', message: 'Forbidden' }, 'Forbidden should be returned for missing resource credentials');
	});

	// Array of STATUS codes
	var postPayloadStatusArray = function (options, cb) {
		console.log('postPayloadStatusArray', options);
		process.nextTick(function () {
			var body = {
				"listContractResponse": {
					"PROCES": [{
						"VOLGNUM": "1",
						"STATUS": "00001",
						"STATUST": "Success"
					}]
				}
			};
			return cb(null, {statusCode: 200}, body);
		});
	};

	var lambdaStatusArray = proxyquire('../index', {
		'./lib/backend.js': { post: postPayloadStatusArray }
	});

	var eventStatusArray = {
		headers: {
			'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9',
			'x-uuid': '13b613f0-1f2c-11e5-867f-0800200c9a66',
			'x-api-name': 'apigee'
		},
		stageVariables: { bamboo_STAGE_target_host: 'localhost', bamboo_STAGE_target_service: 'ail' }
	};

	lambdaStatusArray.handler(eventStatusArray, {}, function (e, r) {
		t.deepEqual(JSON.parse(r.body), { code: '01-02-500-005', message: 'Internal Server Error' }, 'Internal Server Error should be returned for an array of STATUS codes');
	});

	t.end();
});
