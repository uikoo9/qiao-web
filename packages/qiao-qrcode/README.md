## qiao-qrcode

[![npm version](https://img.shields.io/npm/v/qiao-qrcode.svg?style=flat-square)](https://www.npmjs.org/package/qiao-qrcode)
[![npm downloads](https://img.shields.io/npm/dm/qiao-qrcode.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-qrcode)

浏览器生成二维码

## install

安装

```shell
npm i qiao-qrcode
```

## use

使用

```javascript
// cjs
const { qrcodeCanvas } = require('qiao-qrcode');

// mjs
import { qrcodeCanvas } from 'qiao-qrcode';
```

## api

### qrcodeCanvas

用 canvas 生成二维码

```javascript
// <div id="canvas"></div>
qrcodeCanvas('canvas', 'https://insistime.com/');
```

### qrcodeImg

用 img 生成二维码

```javascript
// <div id="img"></div>
qrcodeImg('img', 'https://insistime.com/');
```

### qrcodeSvg

用 svg 生成二维码

```javascript
// <div id="svg"></div>
qrcodeSvg('svg', 'https://insistime.com/');
```

## version

### 0.0.4.20230413

1. 3.0.0

### 0.0.3.20221021

1. add eslint
2. 3.0.0

### 0.0.2.20220415

1. add lerna

### 0.0.1.20220414

1. init project
