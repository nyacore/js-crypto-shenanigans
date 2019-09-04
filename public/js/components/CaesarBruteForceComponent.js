import CaesarBaseComponent from "./CaesarBaseComponent.js";
import { caesarEncrypt } from "../lib/algorithms.js";

export default class CaesarBruteForceComponent extends CaesarBaseComponent {
  /**
   * @param {HTMLInputElement} inputElement
   * @param {HTMLElement} outputElement
   */
  constructor(inputElement, outputElement) {
    super(inputElement, outputElement, null, false);

    this.results = [];
    this.bindListeners();
  }

  bindListeners() {
    this.inputTextEl.addEventListener("keyup", this.bruteforce.bind(this));
    this.inputTextEl.addEventListener("change", this.bruteforce.bind(this));
  }

  bruteforce() {
    // this.clearResult();
    this.results.splice(0, this.results.length);
    this.resultEl.html = "";
    [...Array(32).keys()].forEach(async e => {
      const result = await caesarEncrypt(this.getInputText(), e + 1, true);
      this.results.push(`mod ${e + 1}: ${result}`);
    });
    setTimeout(() => {
      this.setResult();
    }, 0);
  }

  clearResult() {
    this.resultEl.html = "";
    this.results = [];
  }

  setResult() {
    console.log(this.results);
    this.results.forEach(e => {
      const el = document.createElement("p");
      el.innerText = e;
      this.resultEl.appendChild(el);
    });
  }
}
