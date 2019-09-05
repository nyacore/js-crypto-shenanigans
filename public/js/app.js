import CaesarBaseComponent from "./components/CaesarBaseComponent.js";
import CaesarBruteForceComponent from "./components/CaesarBruteForceComponent.js";

import {
  loadJSON
} from "./lib/utils.js";


window.onload = async () => {
  const russianAlphabet = (await loadJSON("/public/js/lib/alphabets.json"))["russian"];

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
