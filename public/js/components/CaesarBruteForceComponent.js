import BaseComponent from './BaseComponent.js';

export default class CaesarBruteForceComponent extends BaseComponent {
    constructor(container, action) {
        super(container, action, false, true);

        this.results = [];
        this.bindListeners();
    }

    bindListeners() {
        this.inputElement.addEventListener('keyup', this.bruteforce.bind(this));
        this.inputElement.addEventListener('change', this.bruteforce.bind(this));

        this.languageElement.addEventListener('change', this.changeLanguage.bind(this));
    }

    async changeLanguage() {
        await this.loadLanguage();
        this.bruteforce();
    }

    bruteforce() {
        if (this.input.length) {
            this.emptyResult();
            [...Array(this.alphabet.alphabet.length - 1).keys()].forEach(e => {
                const result = this.action(this.input, e + 1, true, this.alphabet);
                this.results.push(`mod ${e + 1}: ${result}`);
            });
            this.setOutput();
        }
    }

    emptyResult() {
        this.outputElement.innerHTML = '';
        this.results = [];
    }

    setOutput() {
        this.results.forEach(e => {
            const el = document.createElement('p');
            el.innerText = e;
            this.outputElement.appendChild(el);
        });
    }
}