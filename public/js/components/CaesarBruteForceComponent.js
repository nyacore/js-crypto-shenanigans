import BaseComponent from "./BaseComponent.js";

export default class CaesarBruteForceComponent extends BaseComponent {
    constructor(container, action) {
        super(container, action, false, true);

        this.results = [];
        this.bindListeners();
    }

    bindListeners() {
        this.inputElement.addEventListener("keyup", this.bruteforce.bind(this));
        this.inputElement.addEventListener("change", this.bruteforce.bind(this));

        this.languageElement.addEventListener("change", this.changeLanguage.bind(this));
    }

    changeLanguage() {
        this.loadLanguage();
        setTimeout(() => {
            console.log(this.language);
            this.bruteforce();
        }, 200);
    }

    bruteforce() {
        if (this.getInputText().length) {
            this.clearResult();
            [...Array(this.language.alphabet.length - 1).keys()].forEach(e => {
                const result = this.action(this.getInputText(), e + 1, true, this.language);
                this.results.push(`mod ${e + 1}: ${result}`);
            });
            this.setOutputText();
        }
    }

    clearResult() {
        this.outputElement.innerHTML = "";
        this.results = [];
    }

    setOutputText() {
        this.results.forEach(e => {
            const el = document.createElement("p");
            el.innerText = e;
            this.outputElement.appendChild(el);
        });
    }
}