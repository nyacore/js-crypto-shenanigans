import BaseComponent from './components/BaseComponent.js';
import CaesarBruteForceComponent from './components/CaesarBruteForceComponent.js';

import { viegenereEncrypt, caesarEncrypt } from './lib/algorithms.js';

(async () => {

    new BaseComponent('.caesar-encryption', caesarEncrypt, true, false);
    new BaseComponent('.caesar-decryption', caesarEncrypt, true, true);

    new CaesarBruteForceComponent('.caesar-bruteforce', caesarEncrypt);

    new BaseComponent('.viegener-encryption', viegenereEncrypt, true, false);
    new BaseComponent('.viegener-decryption', viegenereEncrypt, true, true);
})();