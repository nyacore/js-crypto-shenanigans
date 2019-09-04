export default class CaesarEncryptor {
    constructor() {
        this.inputTextEl = document.querySelector('#caesar-encryption-text');
        this.shiftEl = document.querySelector('#caesar-encryption-shift');
        this.resultEl = document.querySelector('.widget__result');

        this.encrypt();
        this.bindListeners();
    }

    bindListeners() {
        this.inputTextEl.addEventListener('keyup', (e) => {
            this.inputText = this.inputTextEl.value;
            this.encrypt();
        })

        this.shiftEl.addEventListener('keyup', (e) => {
            this.shift = this.shiftEl.value;
            this.encrypt();
        })
    }

    encrypt() {
        let result = "";
        const input = this.getInputText();
        const shift = +this.getShift();
        input.split('').forEach((e, index) => {
            if (['.', ',', ' '].includes(e)) {
                result += e;
            } else {
                console.log(input.charCodeAt(index));
                result += String.fromCharCode(input.charCodeAt(index) + shift);
            }
        });
        console.log(result);
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
}