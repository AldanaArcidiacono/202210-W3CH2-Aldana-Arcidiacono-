import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<header><h1>Adopt a pet!</h1></header>`;
    }
}
