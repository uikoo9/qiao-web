// ava
const test = require('ava');

// jsdom
const { JSDOM } = require('jsdom');

// fake indexeddb
const { indexedDB } = require('fake-indexeddb');

// db
const { listDB, delDB, DB } = require('../index.js');

// jsdom
test.before(() => {
  const dom = new JSDOM('', { url: 'http://localhost' });
  global.window = dom.window;
  global.window.indexedDB = indexedDB;
  global.indexedDB = indexedDB;
});

// db
test.serial('db / create db', async (t) => {
  const db = await DB('db_to_del');

  // close db for delete db
  db && db.db && db.db.close();

  t.truthy(db);
});
test.serial('db / list db', async (t) => {
  const res = await listDB();
  t.truthy(res && res.length);
});
test.serial('db / del db', async (t) => {
  const res = await delDB('db_to_del');
  t.true(res);
});
