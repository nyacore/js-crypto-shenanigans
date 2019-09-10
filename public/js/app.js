import BaseComponent from "./components/BaseComponent.js";
import CaesarBruteForceComponent from "./components/CaesarBruteForceComponent.js";

import { loadJSON, buildViegenereTable } from './lib/utils.js';

import { viegenereEncrypt, caesarEncrypt } from "./lib/algorithms.js";

(async () => {
    const englishAlphabet = (await loadJSON('/public/js/lib/alphabets.json')).english;
    console.log(englishAlphabet);
    console.log(buildViegenereTable(englishAlphabet));
    console.log(123);

    new BaseComponent('.caesar-encryption', caesarEncrypt, true, false);
    new BaseComponent('.caesar-decryption', caesarEncrypt, true, true);

    new CaesarBruteForceComponent('.caesar-bruteforce', caesarEncrypt);

    new BaseComponent('.viegener-encryption', viegenereEncrypt, true, false);
    new BaseComponent('.viegener-decryption', viegenereEncrypt, true, true);
})();