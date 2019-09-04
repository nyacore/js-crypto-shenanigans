import {
    caesarEncrypt
} from '../lib/algorithms.js';

export default class CaesarDecryptor {
    constructor() {
        this.inputTextEl = document.querySelector('#caesar-decryption-text');
        this.shiftEl = document.querySelector('#caesar-decryption-shift');
        this.resultEl = document.querySelector('.decryption__result');

        this.bindListeners();
    }

    bindListeners() {
        this.inputTextEl.addEventListener('keyup', async () => {
            this.setInputText(this.getInputText().toLowerCase());
            this.decrypt();
        });

        this.inputTextEl.addEventListener('change', async () => {
            this.setInputText(this.getInputText().toLowerCase());
            this.decrypt();
        });

        this.shiftEl.addEventListener('change', async () => {
            this.decrypt();
        });

        this.shiftEl.addEventListener('keyup', async () => {
            this.decrypt();
        });
    }

    async decrypt() {
        const output = await caesarEncrypt(this.getInputText(), this.getShift(), true);
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
