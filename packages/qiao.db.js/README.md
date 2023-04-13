## qiao.db.js

[![npm version](https://img.shields.io/npm/v/qiao.db.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.db.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.db.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.db.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao.db.js)

浏览器 IndexedDB 数据库常见 api 封装，详情：[一篇文章学会 IndexedDB](https://blog.insistime.com/indexeddb)

## install

```shell
npm i qiao.db.js
```

## use

使用

```javascript
// cjs
const { openDB } = require('qiao.db.js');

// mjs
import { openDB } from 'qiao.db.js';
```

## api

### openDB

打开一个数据库

- databaseName
  - 类型: string
  - 说明: 数据库名称
- return
  - 类型: db
  - 说明: 数据库实例

```javascript
await openDB(databaseName);
```

### listDB

列出所有的本地数据库

- return
  - 类型: array
  - 说明: 数据库库列表

```javascript
await listDB();
```

### delDB

删除某个数据库

- databaseName
  - 类型: string
  - 说明: 数据库名称

```javascript
await delDB(databaseName);
```

### createTable

创建一个数据库表

- db
  - 类型: db
  - 说明: 数据库实例
- tables
  - 类型: array
  - 说明: 数据库表结构
  - ```javascript
    [
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
      ...
    ];
    ```
- return
  - 类型: res
  - 说明:

```javascript
await createTable(db, tables);
```

### delTable

删除一个数据库表

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称

```javascript
await delTable(db, tableName);
```

### save

保存数据

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称
- id
  - 类型: number
  - 说明: 表 id，存在则更新，不存在则新建
- data
  - 类型: object
  - 说明: 数据

```javascript
await save(db, tableName, data.id, data);
```

### get

获取数据

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称
- id
  - 类型: number
  - 说明: 表 id
- return
  - 类型: object
  - 说明: 数据

```javascript
await get(db, tableName, id);
```

### del

删除数据

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称
- id
  - 类型: number
  - 说明: 表 id

```javascript
await del(db, tableName, id);
```

### clear

清空数据

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称

```javascript
await clear(db, tableName);
```

### getAll

按索引获取所有数据

- db
  - 类型: db
  - 说明: 数据库实例
- tableName
  - 类型: string
  - 说明: 数据库表名称
- indexName
  - 类型: string
  - 说明: 数据库表名称
- return
  - 类型: array
  - 说明: 数据列表

```javascript
await getAll(db, tableName, indexName);
```

## version

### 0.1.2.20230413

1. 3.0.0

### 0.1.1.20221012

1. 1.0.0 publish

### 0.1.0.20220513

1. lerna

### 0.0.9.20201027

1. fix bug

### 0.0.8.20201026

1. modify create table
2. del version

### 0.0.7.20201023

1. export sync
2. save key

### 0.0.6.20200731

1. add sync
2. clear sync
3. del db sync
4. del sync
5. get sync
6. list db sync
7. put sync
8. save sync

### 0.0.5.20200630

1. list db
2. ncu

### 0.0.4.20200609

1. del log

### 0.0.3.20200515

1. tx --> db
2. indexeddb add sync

### 0.0.2.20200514

1. open db
2. del db
3. create table
4. del table
5. get data
6. add data
7. put data
8. del data
9. clear data
10. add readme
11. save data

### 0.0.1.20200513

1. init project
