// ava
const test = require('ava');

// jsdom
const { JSDOM } = require('jsdom');

// cookie
const { set, get, has, del, keys } = require('../index.js');

// jsdom
test.before(() => {
  const dom = new JSDOM('', { url: 'http://localhost' });
  global.document = dom.window.document;
});

// test
test.serial('cookie / set and get', (t) => {
  const key = 'key';
  const value = 'value';

  set(key, value);
  const res = get(key);

  t.is(res, value);
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
  del(key);

  const res = has(key);
  t.falsy(res);
});

// keys
test.serial('keys', (t) => {
  const key = 'key1';
  const value = 'value';

  set(key, value);
  const res = keys();

  t.true(res && res.length && res[0] === key);
});
