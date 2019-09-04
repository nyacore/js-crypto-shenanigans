import {
    caesarEncrypt
} from '../lib/algorithms.js';

export default class CaesarEncryptor {
    constructor() {
        this.inputTextEl = document.querySelector('#caesar-encryption-text');
        this.shiftEl = document.querySelector('#caesar-encryption-shift');
        this.resultEl = document.querySelector('.encryption__result');

        this.bindListeners();
    }

    bindListeners() {
        this.inputTextEl.addEventListener('keyup', async () => {
            this.setInputText(this.getInputText().toLowerCase());
            this.encrypt();
        });

        this.inputTextEl.addEventListener('change', async () => {
            this.setInputText(this.getInputText().toLowerCase());
            this.encrypt();
        });

        this.shiftEl.addEventListener('change', async () => {
            this.encrypt();
        });

        this.shiftEl.addEventListener('keyup', async () => {
            this.encrypt();
        });
    }

    async encrypt() {
        const output = await caesarEncrypt(this.getInputText(), this.getShift());
        this.setResult(output);
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
