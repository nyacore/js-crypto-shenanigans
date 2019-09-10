import {
    buildViegenereTable
} from './utils.js';

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
    alphabet
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
                index = alphabet.indexOf(e) - (+shift % alphabet.length);
                if (index < 0) index = alphabet.length + index;
            } else {
                index = (alphabet.indexOf(e) + +shift) % alphabet.length;
            }
            result += alphabet[index];
        }
    });
    return result;
}

export async function viegenereEncrypt(text, key, decrypt = false, alphabet) {
    if (key.length > text.length) {
        return '';
    }

    const table = await buildViegenereTable(alphabet);

    let index = 0;
    let newKey = key;
    while (newKey.length < text.length) {
        newKey += key[index++ % key.length];
    }

    let result = '';
    newKey.split('').forEach((e, index) => {
        const keyIndex = alphabet.indexOf(e);
        const inputIndex = alphabet.indexOf(text[index]);

        if (decrypt) {
            result += table[keyIndex][inputIndex];
        } else {
            // result +=
        }
    });

    return result;
}