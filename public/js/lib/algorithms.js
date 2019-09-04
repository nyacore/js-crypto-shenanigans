import { russianAlphabet } from "../app.js";

/**
 *
 * @param {String} text Input string
 * @param {String} shift Shift value
 * @param {Boolean} decrypt If the message should be decrypted instead of default behavior
 * @returns {String} Encrypted string
 */
export async function caesarEncrypt(
  text,
  shift = 0,
  decrypt = false,
  lang = "russian"
) {
  let result = "";

  /**
   * @type {Array<String>}
   */

  text.split("").forEach(e => {
    if ([".", ",", " ", "?", "!"].includes(e)) {
      result += e;
    } else {
      let index;
      if (decrypt) {
        index = russianAlphabet.indexOf(e) - (+shift % russianAlphabet.length);
        if (index < 0) index = russianAlphabet.length + index;
      } else {
        index = (russianAlphabet.indexOf(e) + +shift) % russianAlphabet.length;
      }
      result += alphabet[index];
    }
  });
  return result;
}
