## qiao.cookie.js

[![npm version](https://img.shields.io/npm/v/qiao.cookie.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.cookie.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.cookie.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.cookie.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao.cookie.js)

浏览器 Cookie 相关操作封装，详见：[cookie 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

## install

安装

```shell
npm i qiao.cookie.js
```

## use

使用

```javascript
// cjs
const { cookie } = require('qiao.cookie.js');

// mjs
import { cookie } from 'qiao.cookie.js';
```

## api

## keys

返回已经存在的 key 数组

- return
  - 类型: string[]
  - 说明: 已经存在的 key 数组

```javascript
keys();
```

## has

是否已经存在某一个 key

- key
  - 类型: string
  - 说明: key
- return
  - 类型: boolean
  - 说明: 结果，存在返回 true

```javascript
has(key);
```

## cookie

获取，设置，删除数据

- key
  - 类型: string
  - 说明: 只传入 key 时，获取信息
- value
  - 类型: any
  - 说明:
    - 设置信息时，传入 key 和 value
    - 删除信息时传入 null
- options
  - 类型: object
  - 说明: 其他配置项
  - ```javascript
    {
      sPath,
      sDomain,
      vEnd,
      bSecure,
    }
    ```
- return
  - 类型: any
  - 说明: 获取信息是返回 value，其他返回 true 或者非 true

```javascript
// get
cookie(key);

// set
cookie(key, value);

// set options
cookie(key, value, options);

// del
cookie(key, null);
```

## version

### 0.0.5.20230417

1. 3.0.0

### 0.0.4.20221014

1. md

### 0.0.3.20220712

1. tree shaking

### 0.0.2.20220709

1. add rollup
2. add eslint
3. add jest

### 0.0.1.20220616

1. init project
