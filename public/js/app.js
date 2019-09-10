// import CaesarBaseComponent from "./components/CaesarBaseComponent.js";

// import ViegenereBaseComponent from "./components/ViegenerBaseComponent.js";

import BaseComponent from "./components/BaseComponent.js";
import CaesarBruteForceComponent from "./components/CaesarBruteForceComponent.js";

import {
    viegenereEncrypt,
    caesarEncrypt
} from "./lib/algorithms.js";

(async () => {

    // new CaesarBaseComponent("#caesar-encryption-text", ".caesar-encryption__result", "#caesar-encryption-shift", russianAlphabet);
    // new CaesarBaseComponent("#caesar-decryption-text", ".caesar-decryption__result", "#caesar-decryption-shift", russianAlphabet, true, true);
    // new CaesarBruteForceComponent("#caesar-bruteforce-text", ".caesar-bruteforce__result", russianAlphabet);

    // new ViegenereBaseComponent("#viegener-encryption-text", ".viegener-encryption__result", "#viegener-encryption-key", russianAlphabet);
    // new ViegenereBaseComponent("#viegener-decryption-text", ".viegener-decryption__result", "#viegener-decryption-key", russianAlphabet, true, true);

    new BaseComponent('.caesar-encryption', caesarEncrypt, true, false);
    new BaseComponent('.caesar-decryption', caesarEncrypt, true, true);

    new CaesarBruteForceComponent('.caesar-bruteforce', caesarEncrypt);

    new BaseComponent('.viegener-encryption', viegenereEncrypt, true, false);
    new BaseComponent('.viegener-decryption', viegenereEncrypt, true, true);
})();