// ava
const test = require('ava');

// jsdom
const { JSDOM } = require('jsdom');

// ls
const { ls, cache } = require('../index.js');

// jsdom
test.before(() => {
  const dom = new JSDOM('', { url: 'http://localhost' });
  global.localStorage = dom.window.localStorage;
});

// ls
test('ls / set boolean, get boolean', (t) => {
  const key = 'key-boolean';
  const value = true;

  ls(key, value);
  const res = ls(key);

  t.true(res);
});
test('ls / set number, get number', (t) => {
  const key = 'key-number';
  const value = 1;

  ls(key, value);
  const res = ls(key);

  t.is(res, 1);
});
test('ls / set object, get object', (t) => {
  const key = 'key-object';
  const value = { name: 'vincent' };

  ls(key, value);
  const res = ls(key);

  t.deepEqual(res, value);
});
test('ls / del', (t) => {
  const key = 'key-object';

  ls(key, null);
  const res = ls(key);

  t.falsy(res);
});
test('ls / expires', async (t) => {
  t.timeout(4 * 1000);

  // const
  const key = 'key-expires';
  const value = 'expires';
  const expires = 3 * 1000;
  ls(key, value, expires);

  // not expires
  const v = await getValue(key, 2 * 1000);
  t.deepEqual(v, value);

  // expires
  const vv = await getValue(key, 2 * 1000);
  t.falsy(vv);
});

// get value
function getValue(key, time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(ls(key));
    }, time);
  });
}

// cache
test.serial('cache / set value, get value', (t) => {
  const name = 'cache.group';
  const key = 'team-123';
  const value = true;

  cache(name, key, value);
  const res = cache(name, key);

  t.true(res);
});
test.serial('cache / del value', (t) => {
  const name = 'cache.group';
  const key = 'team-123';

  const res = cache(name, key);
  t.true(res);

  cache(name, key, null);
  const res1 = cache(name, key);
  t.falsy(res1);
});
