var test = require('tape');
var base64 = require('../lib/base64.js');

test('Encode and decode', function (t) {
  var json = { 'someheader': 'Header Value'};
  var encoded = base64.encode(JSON.stringify(json));
  t.equal('eyJzb21laGVhZGVyIjoiSGVhZGVyIFZhbHVlIn0=', encoded, 'json can be encoded');
  t.deepEqual(json, JSON.parse(base64.decode(encoded)), 'encoded json can be decoded');

  t.equal('eyJhY2Nlc3NfdG9rZW4iOiJ2YWxpZCJ9', base64.encode(JSON.stringify({ 'access_token': 'valid'})), 'valid access token');
  t.equal('eyJhY2Nlc3NfdG9rZW4iOiJpbnZhbGlkIn0=', base64.encode(JSON.stringify({ 'access_token': 'invalid'})), 'invalid access token');
  t.end();
});
