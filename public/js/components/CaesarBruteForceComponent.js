import CaesarBaseComponent from './CaesarBaseComponent.js';
import {
    caesarEncrypt
} from '../lib/algorithms.js';

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
        this.inputTextEl.addEventListener('keyup', this.bruteforce.bind(this));
        this.inputTextEl.addEventListener('change', this.bruteforce.bind(this));
    }

    bruteforce() {
        this.clearResult();
        [...Array(32).keys()].forEach(async e => {
            this.results.push(`<p>mod ${e + 1}: ${await caesarEncrypt(this.getInputText(), e + 1, true)}</p>`);
        });
        this.setResult();
    }

    clearResult() {
        this.resultEl.html = '';
        this.results = [];
    }

    setResult() {
        console.log(this.results);
        this.results.forEach(e => this.resultEl.appendChild(e));
    }
}