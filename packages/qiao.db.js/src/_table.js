// db
import { newDB as createDB } from './_db.js';

/**
 * create table
 * @param {*} db
 * @param {*} tables
 * @returns
 */
export const createTable = async (db, tables) => {
  // check
  if (!db || !tables || !tables.length) return null;

  // new
  const newDB = await createDB(db);
  if (!newDB) return;

  const res = [];
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    if (newDB.objectStoreNames.contains(table.name)) continue;

    // create table
    const objectStore = createNewTable(newDB, table);

    // push
    res.push(objectStore);
  }

  // obj
  const obj = {};
  obj.res = res;
  obj.db = newDB;

  return obj;
};

// create new table
function createNewTable(db, table) {
  if (!db || !table) return;

  // key
  const key = {};
  if (table.key == 'auto') {
    key.autoIncrement = true;
  } else {
    key.keyPath = table.key;
  }

  // create
  const objectStore = db.createObjectStore(table.name, key);

  // index
  createIndex(objectStore, table);

  // return
  return objectStore;
}

// create index
function createIndex(os, table) {
  if (!os || !table || !table.index || !table.index.length) return;

  for (let j = 0; j < table.index.length; j++) {
    const item = table.index[j];
    const name = item.name;
    const index = item.index;
    const unique = item.unique;
    os.createIndex(name, index, { unique: unique });
  }
}

/**
 * del table
 * @param {*} db
 * @param {*} tableName
 * @returns
 */
export const delTable = async (db, tableName) => {
  // check
  if (!db || !tableName) return;

  // new
  const newDB = await createDB(db);
  if (!newDB) return;

  // del
  try {
    console.log(2);
    newDB.deleteObjectStore(tableName);
  } catch (e) {
    console.error('You should use it in the versionchange event callback');
    console.error(e);
  }
};
