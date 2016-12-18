var test = require('tape');
var env = require('../lib/env.js');

test('Stage variables', function (t) {
  t.equal(env.targetHost({ stageVariables: { bamboo_STAGE_target_host: 'localhost' } }), 'localhost', 'targetHost is returned');
  t.equal(env.targetHost({ stageVariables: null }), null, 'targetHost is not returned');
  t.equal(env.targetService({ stageVariables: { bamboo_STAGE_target_service: 'ail' } }), 'ail', 'targetService is returned');
  t.equal(env.targetService({ stageVariables: null }), null, 'targetService is not returned');
  t.end();
});
