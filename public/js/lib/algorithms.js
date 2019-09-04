import {
  loadJSON
} from '../lib/utils.js';

/**
 * 
 * @param {String} text Input string
 * @param {String} shift Shift value
 * @param {Boolean} decrypt If the message should be decrypted instead of default behavior
 * @returns {String} Encrypted string
 */
export async function caesarEncrypt(text, shift = 0, decrypt = false, lang = "russian") {
  let result = "";

  /**
   * @type {Array<String>}
   */
  const alphabet = (await loadJSON('/public/js/lib/alphabets.json'))[lang];

  text.split('').forEach((e) => {
    if (['.', ',', ' ', '?', '!'].includes(e)) {
      result += e;
    } else {
      let index;
      if (decrypt) {
        index = alphabet.indexOf(e) - (+shift) % alphabet.length;
        if (index < 0) index = alphabet.length + index;
      } else {
        index = (alphabet.indexOf(e) + (+shift)) % alphabet.length;
      }
      result += alphabet[index];
    }
  });
  return result;
}
