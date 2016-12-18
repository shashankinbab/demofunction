var test = require('tape');
var ail = require('../lib/backend.js');

test('BS_AE_FIN_CONTRACT_04_PAYLOAD', function (t) {
  var expectedPayload =  { listContractsRequest: { AILHEADER: { CLIENTID: 'apiname', CORRELATIONID: '##aa-bb-cc##' } } };
  t.deepEqual(ail.BS_AE_FIN_CONTRACT_04_PAYLOAD('apiname', 'aa-bb-cc'), expectedPayload, 'payload is returned');
  t.end();
});

test('targetUrl', function (t) {
  t.equal(ail.targetUrl('someAILJunction', 'AIL', 'listContracts'), 'https://someAILJunction/AIL/US_RestGatewayWeb/rest/requestResponse/BS_AE_FIN_CONTRACT_04/listContracts', 'targetUrl is returned');
  t.end();
});
