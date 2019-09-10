import { loadJSON } from '../lib/utils.js';

export default class BaseComponent {
    constructor(container, action, bindListeners = true, decrypt = false) {
        this.container = document.querySelector(container);

        this.action = action;

        this.decrypt = decrypt;

        /**
         * @type {HTMLInputElement}
         */
        this.inputElement = this.container.querySelector('.input-text');

        /**
         * @type {HTMLInputElement}
         */
        this.keyElement = this.container.querySelector('.input-key');

        /**
         * @type {HTMLInputElement}
         */
        this.languageElement = this.container.querySelector('.input-language');

        /**
         * @type {HTMLElement}
         */
        this.outputElement = this.container.querySelector('.encryption-result');

        if (this.languageElement.value) {
            this.loadLanguage();
        }

        if (bindListeners) {
            this.bindListeners();
        }
    }

    bindListeners() {
        [this.inputElement, this.keyElement].forEach(e => e.addEventListener('change', this.processAction.bind(this)));
        [this.inputElement, this.keyElement].forEach(e => e.addEventListener('keyup', this.processAction.bind(this)));

        this.languageElement.addEventListener('change', this.loadLanguage.bind(this));
    }

    loadLanguage() {
        loadJSON('/public/js/lib/alphabets.json').then(language => {
            this.language = language[this.getLanguage()];
            this.processAction();
        })
    }

    processAction() {
        this.setInputText(this.getInputText().toLowerCase());

        const result = this.action(this.getInputText(), this.getKey(), this.decrypt, this.language);
        this.setOutputText(result);
    }

    getInputText() {
        return this.inputElement.value;
    }

    getKey() {
        return this.keyElement.value;
    }

    getResult() {
        return this.outputElement.innerText;
    }

    getLanguage() {
        return this.languageElement.value;
    }

    /**
     * @param {String} text
     */
    setInputText(text) {
        this.inputElement.value = text;
    }

    /**
     * @param {String} text
     */
    setOutputText(text) {
        this.outputElement.innerText = text;
    }

    /**
     * @param {String} text
     */
    setKey(text) {
        this.keyElement.value = text;
    }

    /**
     * @param {String} text
     */
    setLanguage(text) {
        this.languageElement.value = text;
    }
}