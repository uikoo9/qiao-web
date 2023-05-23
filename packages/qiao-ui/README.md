## qiao-ui

[![npm version](https://img.shields.io/npm/v/qiao-ui.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ui)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ui.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ui)

简洁小巧的 react ui 框架

## install

安装

```shell
npm i qiao-ui
```

## use

使用

```javascript
// cjs
const { MobileArticle } = require('qiao-ui');

// mjs
import { MobileArticle } from 'qiao-ui';
```

## all

手机端和 PC 端公用组件

### link

链接

- url
  - 类型: string
  - 说明: 链接
- txt
  - 类型: string
  - 说明: 文字
- blank
  - 类型: boolean
  - 说明: 是否新标签打开，默认为 false

```javascript
<Link url={url} txt={txt} blank={true} />
```

![link](https://static.insistime.com/15_insistime_code/static/qiao-ui/link.png)

## mobile

## pc
