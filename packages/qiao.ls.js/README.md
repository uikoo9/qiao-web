## qiao.ls.js

[![npm version](https://img.shields.io/npm/v/qiao.ls.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.ls.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.ls.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.ls.js)

浏览器 localStorage 本地存储常见 api 封装和增强，详情：[一篇文章学会 LocalStorage](https://blog.vincentqiao.com/localstorage)

## install

安装

```shell
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
