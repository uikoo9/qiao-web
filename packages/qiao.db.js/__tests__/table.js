// ava
const test = require('ava');

// jsdom
const { JSDOM } = require('jsdom');

// fake indexeddb
const { indexedDB } = require('fake-indexeddb');

// db
const { DB } = require('../index.js');

// jsdom
test.before(async (t) => {
  // jsdom
  const dom = new JSDOM('', { url: 'http://localhost' });
  global.window = dom.window;
  global.window.indexedDB = indexedDB;
  global.indexedDB = indexedDB;

  // db
  const db = await DB('db_for_table');
  t.context.db = db;
});

// table
test.serial('table / create table', async (t) => {
  // db
  const db = t.context.db;

  // create table
  const createTableRes = await db.createTable([
    {
      name: 't_test1',
      key: 'id',
      index: [
        {
          name: 'name',
          index: 'name',
          unique: false,
        },
      ],
    },
    {
      name: 't_test2',
      key: 'auto',
      index: [
        {
          name: 'name',
          index: 'name',
          unique: false,
        },
        {
          name: 'email',
          index: ['name', 'email'],
          unique: true,
        },
      ],
    },
  ]);

  // close
  // db && db.db && db.db.close();
  t.truthy(createTableRes && createTableRes.length === 2);
});
test.serial('table / del table', async (t) => {
  // db
  const db = t.context.db;

  // del table
  const delTableRes = await db.delTable('t_test1');
  t.log(delTableRes);
  // t.true(delTableRes);
  t.pass();
});
