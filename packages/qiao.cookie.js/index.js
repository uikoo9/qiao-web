'use strict';

/**
 * has
 * @param {*} sKey
 * @returns
 */
const has = (sKey) => {
  return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(
    document.cookie,
  );
};

/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-backreference */

/**
 * keys
 * @returns
 */
const keys = () => {
  // eslint-disable-next-line
  const aKeys = document.cookie
    .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
    .split(/\s*(?:\=[^;]*)?;\s*/);
  for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }
  return aKeys;
};

// has

/**
 * cookie
 * @param {*} name
 * @param {*} value
 * @param {*} options
 *  sPath
 *  sDomain
 *  vEnd
 *  bSecure
 * @returns
 */
const cookie = (name, value, options) => {
  // options
  options = options || {};
  const { sPath, sDomain } = options;

  // remove
  if (value === null) return delItem(name, sPath, sDomain);

  // get
  if (typeof value == 'undefined') return getItem(name);

  // set
  return setItem(name, value, options);
};

// get item
function getItem(sKey) {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          '(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$',
        ),
        '$1',
      ),
    ) || null
  );
}

// set item
function setItem(sKey, sValue, options) {
  // eslint-disable-next-line
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) return;

  // options
  options = options || {};
  const { vEnd, sPath, sDomain, bSecure } = options;

  // sExpires
  let sExpires = '';
  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
        break;
      case String:
        sExpires = '; expires=' + vEnd;
        break;
      case Date:
        sExpires = '; expires=' + vEnd.toUTCString();
        break;
    }
  }

  // set
  document.cookie =
    encodeURIComponent(sKey) +
    '=' +
    encodeURIComponent(sValue) +
    sExpires +
    (sDomain ? '; domain=' + sDomain : '') +
    (sPath ? '; path=' + sPath : '') +
    (bSecure ? '; secure' : '');

  // return
  return true;
}

// del item
function delItem(sKey, sPath, sDomain) {
  if (!sKey || !has(sKey)) {
    return false;
  }

  document.cookie =
    encodeURIComponent(sKey) +
    '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
    (sDomain ? '; domain=' + sDomain : '') +
    (sPath ? '; path=' + sPath : '');
  return true;
}

exports.cookie = cookie;
exports.has = has;
exports.keys = keys;
