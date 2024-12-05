## qiao.db.js

[![npm version](https://img.shields.io/npm/v/qiao.db.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.db.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.db.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.db.js)

浏览器 IndexedDB 数据库常见 api 封装，详情：[一篇文章学会 IndexedDB](https://blog.vincentqiao.com/indexeddb)

## install

```shell
npm i qiao.db.js
```

## use

使用

```javascript
// cjs
const { listDB, delDB, DB } = require('qiao.db.js');

// mjs
import { listDB, delDB, DB } from 'qiao.db.js';
```

## api

### listDB

列出所有的本地数据库

- return
  - 类型: array
  - 说明: 数据库库列表
  - ```javascript
    [
      {
        name: 'db',
        version: 1,
      },
    ];
    ```

```javascript
await listDB();
```

### delDB

删除某个数据库

- databaseName
  - 类型: string
  - 说明: 数据库名称
- return
  - 类型: boolean
  - 说明: 成功则返回 true

```javascript
await delDB(databaseName);
```

### DB

创建 DB 实例

- databaseName
  - 类型: string
  - 说明: 数据库名称
- return
  - 类型: db
  - 说明: DB 实例

```javascript
const db = await DB(databaseName);
```

### createTable

创建一个数据库表

- tables
  - 类型: object
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
  - 类型: array
  - 说明: 返回表信息数组
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
    ];
    ```

```javascript
await db.createTable(tables);
```

### delTable

删除一个数据库表

- tableName
  - 类型: string
  - 说明: 数据库表名称
- return
  - 类型: boolean
  - 说明: 成功则返回 true

```javascript
await db.delTable(tableName);
```

### clear

清空数据

- tableName
  - 类型: string
  - 说明: 数据库表名称
- return
  - 类型: boolean
  - 说明: 成功则返回 true

```javascript
await db.clear(tableName);
```

### all

按索引获取所有数据

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
await db.all(tableName, indexName);
```

### data

获取，设置，删除数据

- tableName
  - 类型: string
  - 说明: 数据库表名称
- key
  - 类型: string
  - 说明: 只传入 key 时，获取信息
- value
  - 类型: any
  - 说明:
    - 设置信息时，传入 key 和 value
    - 删除信息时传入 null
- return
  - 类型: any
  - 说明: 获取信息是返回 value，其他返回操作结果

```javascript
await db.data(tableName, key, value);
```
