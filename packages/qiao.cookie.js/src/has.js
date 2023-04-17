/**
 * has
 * @param {*} sKey
 * @returns
 */
export const has = (sKey) => {
  return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(
    document.cookie,
  );
};
