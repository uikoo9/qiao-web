'use strict';

/**
 * list db
 * @returns
 */
const listDB = () => {
  return new Promise((resolve, reject) => {
    const promise = indexedDB.databases();
    promise
      .then((dbs) => {
        resolve(dbs);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

/**
 * del db
 * @param {*} databaseName
 * @returns
 */
const delDB = (databaseName) => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.deleteDatabase(databaseName);
    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(true);
    };
    request.onblocked = () => {
      reject(new Error('You should use it in the versionchange event callback, or after closing the database'));
    };
  });
};

/**
 * open db
 * @param {*} databaseName
 * @param {*} version
 * @returns
 */
const openDB = (databaseName, version) => {
  return new Promise((resolve, reject) => {
    const request = version ? window.indexedDB.open(databaseName, version) : window.indexedDB.open(databaseName);
    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onupgradeneeded = (event) => {
      resolve(event.target.result);
    };
  });
};

/**
 * new db
 * @param {*} db
 * @returns
 */
const newDB = async (db) => {
  if (!db) return;

  let databaseName = db.name;
  let databaseVersion = db.version;
  if (!databaseName || !databaseVersion) return;
  db.close();

  return await openDB(databaseName, ++databaseVersion);
};

// db

/**
 * create table
 * @param {*} db
 * @param {*} tables
 * @returns
 */
const createTable = async (db, tables) => {
  // check
  if (!db || !tables || !tables.length) return null;

  // new
  const newDB$1 = await newDB(db);
  if (!newDB$1) return;

  const res = [];
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    if (newDB$1.objectStoreNames.contains(table.name)) continue;

    // create table
    const objectStore = createNewTable(newDB$1, table);

    // push
    res.push(objectStore);
  }

  // obj
  const obj = {};
  obj.res = res;
  obj.db = newDB$1;

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
const delTable = async (db, tableName) => {
  // check
  if (!db || !tableName) return;

  // new
  const newDB$1 = await newDB(db);
  if (!newDB$1) return;

  // del
  try {
    newDB$1.deleteObjectStore(tableName);
    return newDB$1;
  } catch (e) {
    console.error('You should use it in the versionchange event callback');
    console.error(e);
  }
};

/**
 * get
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @returns
 */
const get = (db, tableName, key) => {
  return new Promise((resolve) => {
    getData(db, tableName, key, (r) => {
      resolve(r);
    });
  });
};

/**
 * save
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @param {*} data
 * @returns
 */
const save = (db, tableName, key, data) => {
  return new Promise((resolve) => {
    getData(db, tableName, key, (r) => {
      if (r) {
        putData(db, tableName, data, (rr) => {
          resolve(rr);
        });
      } else {
        addData(db, tableName, data, (rr) => {
          resolve(rr);
        });
      }
    });
  });
};

/**
 * del
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @returns
 */
const del = (db, tableName, key) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).delete(key);

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(true);
    };
  });
};

/**
 * clear
 * @param {*} db
 * @param {*} tableName
 * @returns
 */
const clear = (db, tableName) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).clear();

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(true);
    };
  });
};

// get data
function getData(db, tableName, key, cb) {
  // check
  if (!db || !tableName || !key) {
    cb(null);
    return;
  }

  // get
  const tx = db.transaction([tableName], 'readonly');
  const request = tx.objectStore(tableName).get(key);
  request.onerror = () => {
    if (cb) cb(null);
  };
  request.onsuccess = () => {
    if (cb) cb(request.result);
  };
}

// add data
function addData(db, tableName, data, cb) {
  const tx = db.transaction([tableName], 'readwrite');
  const request = tx.objectStore(tableName).add(data);

  request.onerror = () => {
    if (cb) cb(false);
  };
  request.onsuccess = () => {
    if (cb) cb(true);
  };
}

// put data
function putData(db, tableName, data, cb) {
  const tx = db.transaction([tableName], 'readwrite');
  const request = tx.objectStore(tableName).put(data);

  request.onerror = () => {
    if (cb) cb(false);
  };
  request.onsuccess = () => {
    if (cb) cb(true);
  };
}

/**
 * get data
 * @param {*} db
 * @param {*} tableName
 * @param {*} indexName
 * @returns
 */
const getAll = (db, tableName, indexName) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readonly');
    const os = tx.objectStore(tableName);
    const index = os.index(indexName);
    const request = index.getAll();

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

// db

/**
 * db
 * @param {*} databaseName
 */
const DB = async (databaseName) => {
  const obj = {};

  // db
  obj.db = await openDB(databaseName);

  // table
  obj.createTable = async (tables) => {
    const res = await createTable(obj.db, tables);
    if (!res || !res.db || !res.res) return;

    obj.db = res.db;
    return res.res;
  };
  obj.delTable = async (tableName) => {
    const res = await delTable(obj.db, tableName);
    if (!res) return;

    obj.db = res;
    return true;
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

exports.DB = DB;
exports.delDB = delDB;
exports.listDB = listDB;
