import CaesarBaseComponent from "./components/CaesarBaseComponent.js";
import CaesarBruteForceComponent from "./components/CaesarBruteForceComponent.js";

import {
  loadJSON,
  buildViegenereTable
} from "./lib/utils.js";

import {
  viegenereEncrypt
} from './lib/algorithms.js';


window.onload = async () => {
  const alphabets = await loadJSON("/public/js/lib/alphabets.json");
  const russianAlphabet = alphabets["russian"];
  const englishAlphabet = alphabets["english"];
  console.log(await viegenereEncrypt('attackatdawn', 'lemon', false, englishAlphabet));

  new CaesarBaseComponent(
    "#caesar-encryption-text",
    ".caesar-encryption__result",
    "#caesar-encryption-shift",
    russianAlphabet
  );
  new CaesarBaseComponent(
    "#caesar-decryption-text",
    ".caesar-decryption__result",
    "#caesar-decryption-shift",
    russianAlphabet,
    true,
    true
  );

  new CaesarBruteForceComponent(
    "#caesar-bruteforce-text",
    ".caesar-bruteforce__result",
    russianAlphabet
  );
}
