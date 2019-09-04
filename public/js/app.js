import CaesarBaseComponent from "./components/CaesarBaseComponent.js";
import CaesarBruteForceComponent from "./components/CaesarBruteForceComponent.js";

import { loadJSON } from "../lib/utils.js";

export const russianAlphabet = loadJSON("lib/alphabets.json")[lang];

new CaesarBaseComponent(
  "#caesar-encryption-text",
  ".caesar-encryption__result",
  "#caesar-encryption-shift"
);
new CaesarBaseComponent(
  "#caesar-decryption-text",
  ".caesar-decryption__result",
  "#caesar-decryption-shift",
  true,
  true
);

new CaesarBruteForceComponent(
  "#caesar-bruteforce-text",
  ".caesar-bruteforce__result"
);
