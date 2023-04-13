## qiao.ls.js

[![npm version](https://img.shields.io/npm/v/qiao.ls.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.ls.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.ls.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.ls.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao.ls.js)

浏览器 localStorage 本地存储常见 api 封装和增强，详情：[一篇文章学会 LocalStorage](https://blog.insistime.com/localstorage)

## install

安装

```bash
npm i qiao.ls.js
```

## use

使用

```javascript
// cjs
const { ls } = require('qiao.ls.js');

// mjs
import { ls } from 'qiao.ls.js';
```

## ls

获取，设置，删除数据

- key
  - 类型: string
  - 说明: 只传入 key 时，获取信息
- value
  - 类型: any
  - 说明:
    - 设置信息时，传入 key 和 value
    - 删除信息时传入 null
- expires
  - 类型: number
  - 说明: 过期时间，单位为 ms
- return
  - 类型: any
  - 说明: 获取信息是返回 value，其他无返回

```javascript
// get
ls(key);

// set
ls(key, value);

// set 10s expires
ls(key, value, expires);

// del
ls(key, null);
```

## version

### 0.1.3.20230413

1. 3.0.0

### 0.1.2.20220926

1. add synk
2. modify md
3. modify homepage

### 0.1.1.20220711

1. tree shaking

### 0.1.0.20220709

1. add eslint

### 0.0.9.20220512

1. lerna

### 0.0.8.20210215

1. qls --> q

### 0.0.7.20210214

1. add jsdoc

### 0.0.6.20210209

1. add jest
2. expires to ms
3. md

### 0.0.5.20201022

1. export ls and cache

### 0.0.4.20200803

1. ncu

### 0.0.3.20200414

1. set cache
2. get cache
3. remove cache
4. clear cache
5. add cache and ls

### 0.0.2.20191206

1. add funding

### 0.0.1.20190624

1. init project
2. set item
3. get item
4. remove item
5. modify expires
