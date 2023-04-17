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
  const db = await DB('db');
  t.context.db = db;
});

// table
test.serial('table / create table', async (t) => {
  // db
  const db = t.context.db;

  // create table
  t.log(`db version before createTable: ${db.db.version}`);
  const res = await db.createTable([
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
  t.log(`db version after createTable: ${db.db.version}`);

  //
  t.truthy(res && res.length === 2);
});
test.serial('table / del table', async (t) => {
  // db
  const db = t.context.db;

  // del table
  t.log(`db version before createTable: ${db.db.version}`);
  const res = await db.delTable('t_test2');
  t.log(`db version after createTable: ${db.db.version}`);

  //
  t.true(res);
});

// data
test.serial('data / save, get, del', async (t) => {
  // db
  const db = await DB('db');

  // table
  const tableName = 't_test1';

  // add data
  const data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
  const res = await db.data(tableName, data.id, data);
  t.true(res);

  // modify data
  data.name = '1';
  const res1 = await db.data(tableName, data.id, data);
  t.true(res1);

  // get data
  const res2 = await db.data(tableName, data.id);
  t.truthy(res2);

  // add data
  const data1 = { id: 2, name: '张三1', age: 24, email: 'zhangsan@example.com' };
  const res3 = await db.data(tableName, data1.id, data1);
  t.true(res3);

  // del data
  const res4 = await db.data(tableName, 1, null);
  t.true(res4);
});
test.serial('data / all', async (t) => {
  // db
  const db = await DB('db');

  // table
  const tableName = 't_test1';

  // all
  const res = await db.all(tableName, 'name');
  t.truthy(res && res.length === 1 && res[0].id === 2);
});
test.serial('data / clear', async (t) => {
  // db
  const db = await DB('db');

  // table
  const tableName = 't_test1';

  // clear
  const res = await db.clear(tableName);
  t.true(res);

  const res1 = await db.all(tableName, 'name');
  t.truthy(res1 && !res1.length);
});
