import {
    caesarEncrypt
} from '../lib/algorithms.js';

export default class CaesarBaseComponent {
    /**
     * @param {HTMLInputElement} inputElement
     * @param {HTMLElement} outputElement
     * @param {HTMLInputElement} shiftElement
     */
    constructor(inputElement, outputElement, shiftElement, alphabet, bindListeners = true, decrypt = false) {
        this.inputTextEl = document.querySelector(inputElement);
        this.resultEl = document.querySelector(outputElement);
        if (shiftElement) this.shiftEl = document.querySelector(shiftElement);

        this.alphabet = alphabet;
        this.decrypt = decrypt;

        if (bindListeners) this.bindListeners();
    }

    bindListeners() {
        this.inputTextEl.addEventListener('keyup', this.selectAction.bind(this));
        this.inputTextEl.addEventListener('change', this.selectAction.bind(this));

        this.shiftEl.addEventListener('keyup', this.selectAction);
        this.shiftEl.addEventListener('change', this.selectAction);
    }

    async selectAction() {
        this.setInputText(this.getInputText().toLowerCase());

        const result = await caesarEncrypt(this.getInputText(), this.getShift(), this.decrypt, this.alphabet);
        this.setResult(result);
    }

    /**
     * @returns {String} Input text
     */
    getInputText() {
        return this.inputTextEl.value;
    }

    /**
     * @returns {String} Input shift
     */
    getShift() {
        return this.shiftEl.value;
    }

    /**
     * @returns {String} Output code
     */
    getResult() {
        return this.resultEl.innerText;
    }

    /**
     * @param {String} text 
     */
    setResult(text) {
        this.resultEl.innerText = text;
    }

    /**
     * 
     * @param {String} text 
     */
    setInputText(text) {
        this.inputTextEl.value = text;
    }
}
