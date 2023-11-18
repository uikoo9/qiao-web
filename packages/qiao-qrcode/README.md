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

### qrcodeConsole

nodejs console中生成二维码

```javascript
await qrcodeConsole(url);
```
