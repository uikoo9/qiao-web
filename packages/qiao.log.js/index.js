'use strict';

// logs
const logs = ['info', 'warn', 'error'];

/**
 * Logger
 * @param {*} namespace
 */
function Logger(namespace) {
  const obj = {};
  obj.namespace = namespace;
  logs.forEach(function (logType) {
    obj[logType] = function (methodName, ...msg) {
      log(logType, this.namespace, methodName, ...msg);
    };
  });

  return obj;
}

// log
function log(logType, namespace, methodName, ...msg) {
  // check
  if (!namespace) {
    console.log('qiao.log.js / need namespace');
    return;
  }
  if (!methodName) {
    console.log('qiao.log.js / need methodName');
    return;
  }

  console.log(`${namespace} / ${logType} / ${methodName} / `, ...msg);
}

exports.Logger = Logger;
