import {
    caesarEncrypt
} from './algorithms.js';

/**
 * 
 * @param {String} url Url to fetch JSON from
 */
export async function loadJSON(url) {
    const response = await fetch(url, {
        type: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.json();
}

export async function buildViegenereTable(alphabet) {
    let result = [];

    for (let i = 0; i < alphabet.length; i++) {
        let row = [];
        for (let j = 0; j < alphabet.length; j++) {
            row.push(await caesarEncrypt(alphabet[j], i, false, alphabet));
        }
        result.push(row);
    }

    return result;
}