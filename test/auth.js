var test = require('tape');
var auth = require('../lib/auth.js');


test('x-auth-token should be passed as header', function (t) {
  t.deepEqual(auth.authToken({ headers: { 'x-auth-token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9'} }), { access_token: 'valid' }, 'x-auth-token found');
  t.equal(auth.authToken({ headers: { 'x-auth-token': 'not encoded'} }), undefined, 'x-auth-token not found if it cannot be decoded');
  t.equal(auth.authToken({ headers: { 'x-auth-token': undefined} }), undefined, 'x-auth-token not found if value is undefined');
  t.equal(auth.authToken({ headers: { 'x-auth-tokens': 'bla'} }), undefined, 'x-auth-token not found');
  t.end();
});

test('authorizaton headers for junction', function (t) {
  t.deepEqual(auth.junctionAuthHeaders({ 'access_token': 'valid' }), { 'Authorization': 'Bearer valid' }, 'bearer auth is returned' );
  t.end();
});

test('uuid', function (t) {
  t.equal(auth.uuid({ headers: { 'x-uuid': 'passed as header' } }), 'passed as header', 'passed x-uuid is used');
  t.notEqual(auth.uuid({ headers: { 'x-uuid': undefined } }), 'passed as header', 'uuid is genered in lambda');
  t.equal(auth.uuid({ headers: { 'x-uuid': undefined } }).length, 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.length, 'uuid has expected length');
  t.end();
});

test('apiName', function (t) {
  t.equal(auth.apiName({ headers: { 'x-api-name': 'passed as header' } }), 'passed as header', 'passed x-api-name is used');
  t.equal(auth.apiName({ headers: { 'x-api-name': undefined } }), 'api-name-not-passed-from-apigee', 'api name is not passed, use a dummy one');
  t.end();
});
