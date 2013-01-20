
var replace = require('../lib/index')
  , assert = require('assert');

var tests = [
  [ 'Hello ${test} foo', 'world', 'Hello world foo' ],
  [ 'Hello ${test} foo', { test : 'world' }, 'Hello world foo' ],
  [ 'Hello ${test} foo ${bar}', { test : 'world', bar : 'bar' }, 'Hello world foo bar' ],
  [ 'Hello ${data.foo} foo', { data : { foo : 'world', biz : 'baz' } }, 'Hello world foo' ],
  [ 'Hello ${data.foo.bar} foo', { data : { foo : { bar : 'world' } } },    'Hello world foo' ],
  [ 'The ${data.one} brown ${data.two} jumped', { data : { one : 'quick', two : 'fox' } }, 'The quick brown fox jumped' ],
  [ 'The ${data.foo} brown ${data.bar.biz} jumped', { data : { foo : 'quick', bar : { biz : 'fox' }}}, 'The quick brown fox jumped' ]
];

var i = 0, test = null;
while(test = tests[i++]) {
  assert.equal(replace(test[0], test[1]), test[2]);
}

