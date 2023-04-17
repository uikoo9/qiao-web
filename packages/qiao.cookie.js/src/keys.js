/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-backreference */

/**
 * keys
 * @returns
 */
export const keys = () => {
  // eslint-disable-next-line
  const aKeys = document.cookie
    .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
    .split(/\s*(?:\=[^;]*)?;\s*/);
  for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }
  return aKeys;
};
