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
            this.language = language[this.language];
            this.processAction();
        });
    }

    processAction() {
        this.input(this.input().toLowerCase());

        const result = this.action(this.input(), this.key, this.decrypt, this.language);
        this.output(result);
    }

    get input() {
        return this.inputElement.value;
    }

    get key() {
        return this.keyElement.value;
    }

    get result() {
        return this.outputElement.innerText;
    }

    get language() {
        return this.languageElement.value;
    }

    /**
     * @param {String} text
     */
    set input(text) {
        this.inputElement.value = text;
    }

    /**
     * @param {String} text
     */
    set output(text) {
        this.outputElement.innerText = text;
    }

    /**
     * @param {String} text
     */
    set key(text) {
        this.keyElement.value = text;
    }

    /**
     * @param {String} text
     */
    set language(text) {
        this.languageElement.value = text;
    }
}