// ava
const test = require('ava');

// jsdom
const { JSDOM } = require('jsdom');

// cookie
const { has, keys, cookie } = require('./index.js');

// jsdom
test.before(() => {
  const dom = new JSDOM('', { url: 'http://localhost' });
  global.document = dom.window.document;
});

// test
test.serial('cookie / set and get', (t) => {
  const key = 'key';
  const value = 'value';

  const res = cookie(key, value);
  t.true(res);
});

// has
test.serial('cookie / has', (t) => {
  const key = 'key';
  const res = has(key);

  t.true(res);
});

// del
test.serial('cookie / del', (t) => {
  const key = 'key';
  const res = cookie(key, null);
  t.true(res);
});

// keys
test.serial('keys', (t) => {
  const key = 'key1';
  const value = 'value';

  const res = cookie(key, value);
  const keysRes = keys();

  t.true(res && keysRes && keysRes.length && keysRes[0] === key);
});
