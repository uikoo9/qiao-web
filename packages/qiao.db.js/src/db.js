// db
import { openDB } from './_db.js';

// table
import { createTable, delTable } from './_table.js';

// data
import { get, save, del, clear } from './_data.js';
import { getAll } from './_index.js';

/**
 * db
 * @param {*} databaseName
 */
export const DB = async (databaseName) => {
  const obj = {};

  // db
  obj.db = await openDB(databaseName);

  // table
  obj.createTable = async (tables) => {
    return await createTable(obj.db, tables);
  };
  obj.delTable = (tableName) => {
    return delTable(obj.db, tableName);
  };

  // data
  obj.data = async (tableName, key, value) => {
    return await data(obj.db, tableName, key, value);
  };
  obj.clear = async (tableName) => {
    return await clear(obj.db, tableName);
  };
  obj.all = async (tableName, indexName) => {
    return await getAll(obj.db, tableName, indexName);
  };

  return obj;
};

// data
async function data(db, tableName, key, value) {
  // del
  if (value === null) {
    return await del(db, tableName, key);
  }

  // get
  if (typeof value == 'undefined') {
    return await get(db, tableName, key);
  }

  // save
  return await save(db, tableName, key, value);
}
