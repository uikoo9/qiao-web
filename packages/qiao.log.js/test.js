// ava
const test = require('ava');

// logger
const { Logger } = require('./index.js');
const logger = Logger('qiao.log.js');

// util-logger
test('util-logger', (t) => {
  logger.info('method info', 'msg1', 'msg2', 'msg3');
  logger.warn('method warn', 'msg1', 'msg2', 'msg3');
  logger.error('method error', 'msg1', 'msg2', 'msg3');
  t.pass();
});
