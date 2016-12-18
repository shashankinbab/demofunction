var test = require('tape');

const errorConfig = {lambdaCode: '01', areas: {backend: '01', lambda: '02', infra: '03'}};

test('Handle data request status error codes ', function (t) {

	var nonLifeInsuranceFunction = require('../lib/bank-account-balances-transformation-function.js');

	// 403
	t.deepEqual(nonLifeInsuranceFunction.returnError('99996', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('39000', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('38000', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('37000', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('15000', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('14000', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('67300', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('67500', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('0917E', errorConfig), { code: '01-01-403-001', error: true, message: 'Forbidden', statuscode: 403 }, '403 (Forbidden) should be returned');

	// 404
	t.deepEqual(nonLifeInsuranceFunction.returnError('99000', errorConfig), { code: '01-01-404-001', error: true, message: 'Not Found', statuscode: 404 }, '404 (Not Found) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('78200', errorConfig), { code: '01-01-404-001', error: true, message: 'Not Found', statuscode: 404 }, '404 (Not Found) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('16000', errorConfig), { code: '01-01-404-001', error: true, message: 'Not Found', statuscode: 404 }, '404 (Not Found) should be returned');

	// 500
	t.deepEqual(nonLifeInsuranceFunction.returnError('50150', errorConfig), { code: '01-01-500-004', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server Error) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('68600', errorConfig), { code: '01-01-500-004', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server Error) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('0116E', errorConfig), { code: '01-01-500-004', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server Error) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError('50030', errorConfig), { code: '01-01-500-004', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server Error) should be returned');
	t.deepEqual(nonLifeInsuranceFunction.returnError(null, errorConfig), { code: '01-01-500-004', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server Error) should be returned');

	// 500 (not handled)
	t.deepEqual(nonLifeInsuranceFunction.returnError('12345', errorConfig), { code: '01-02-500-005', error: true, message: 'Internal Server Error', statuscode: 500 }, '500 (Internal Server ErrorRe) should be returned');

	t.end();
});