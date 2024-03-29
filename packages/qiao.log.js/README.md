## qiao.log.js

[![npm version](https://img.shields.io/npm/v/qiao.log.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.log.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.log.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.log.js)

浏览器日志工具类

## install

```shell
npm i qiao.log.js
```

## use

使用

```js
// Logger
import { Logger } from 'qiao.log.js';

// logger
const logger = Logger('qiao.log.js');
```

## log

- methodName
  - 类型: string
  - 说明: 必填，方法名
- msg
  - 类型: any
  - 说明: 要打印的信息，可以传多个
- return

```js
// info
logger.info('method info', 'msg1', 'msg2', 'msg3');

// warn
logger.warn('method warn', 'msg1', 'msg2', 'msg3');

// error
logger.error('method error', 'msg1', 'msg2', 'msg3');
```
