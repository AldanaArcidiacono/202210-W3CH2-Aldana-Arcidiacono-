import { Component } from './component.js';
export class ItemPet extends Component {
    constructor(selector, item, handelDelete) {
        super();
        this.selector = selector;
        this.item = item;
        this.handelDelete = handelDelete;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#d${this.item.id}`).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `
            <li> ${this.item.id} - ${this.item.name} - ${this.item.breed} - ${this.item.adopter}
            <span class="delete" id="d${this.item.id}">🗑️</span>
            </li>`;
    }
}
