// qrcode
import qrcode from 'qrcode';

/**
 * qrcode console
 * @param {*} id
 * @param {*} text
 * @returns
 */
export const qrcodeConsole = (text) => {
  // check
  if (!text) return;

  return new Promise((resovle, reject) => {
    qrcode.toString(text, { type: 'terminal' }, function (err, url) {
      return err ? reject(err) : resovle(url);
    });
  });
};
