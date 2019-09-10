/**
 *
 * @param {String} text Input string
 * @param {String} shift Shift value
 * @param {Boolean} decrypt If the message should be decrypted instead of default behavior
 * @param {Array<String>} alphabet Used alphabet
 * @returns {String} Encrypted string
 * 
 */
export function caesarEncrypt(text, shift, decrypt, { alphabet }) {
    let result = "";

    text.split("").forEach(e => {
        if (alphabet.indexOf(e) == -1) {
            result = 'Выбран неверный алфавит либо в сообщении чередуются раскладки';
            return;
        }

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

/**
 * @param {String} text Input string
 * @param {String} key Salt
 * @param {Boolean} decrypt If the message should be decrypted instead of default behavior
 * @param {Array<String>} alphabet Used alphabet
 * @returns {String} Encrypted string
 */
export function viegenereEncrypt(text, key, decrypt, { alphabet, table }) {

    if (key.indexOf(' ') != -1 || text.indexOf(' ') != -1) {
        return 'Ни ключ, ни сообщение не должны содержать пробелы'
    }

    if (!key.length) {
        return 'Ключ не может быть пустым';
    }

    if (key.length > text.length) {
        return 'Ключ не может быть длиннее сообщения';
    }

    let index = 0;
    let newKey = key;
    while (newKey.length < text.length) {
        newKey += key[index++ % key.length];
    }

    let result = '';
    newKey.split('').forEach((e, index) => {
        const keyIndex = alphabet.indexOf(e);
        const inputIndex = alphabet.indexOf(text[index]);
        if (keyIndex == -1 || inputIndex == -1) {
            result = 'Выбран неверный алфавит либо в сообщении чередуются раскладки';
            return;
        }

        if (decrypt) {
            result += alphabet[table[keyIndex].indexOf(text[index])];
        } else {
            result += table[keyIndex][inputIndex];
        }
    });

    return result;
}