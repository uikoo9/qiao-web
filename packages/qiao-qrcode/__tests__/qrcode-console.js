// q
const { qrcodeConsole } = require('../index.js');

// url
const url = 'https://baidu.com/';

// console
async function go() {
  const res = await qrcodeConsole(url);
  console.log(res);
}
go();
