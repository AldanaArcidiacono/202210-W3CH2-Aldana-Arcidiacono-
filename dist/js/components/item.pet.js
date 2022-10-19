import { Component } from './component.js';
export class ItemPet extends Component {
    constructor(selector, item, handelDelete, handelAdoption) {
        super();
        this.selector = selector;
        this.item = item;
        this.handelDelete = handelDelete;
        this.handelAdoption = handelAdoption;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#d${this.item.id}`).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
            document.querySelector(`#c${this.item.id}`).addEventListener('change', () => {
                this.handelAdoption(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `<li> 
        <span>${this.item.id}</span> - 
        <label>La mascota esta adoptada</label>
        <input id="c${this.item.id}" type="checkbox" ${this.item.isAdopted ? 'checked' : ''}>
        <span>${this.item.name}</span> -
        <span>${this.item.breed}</span> -
        <span> ${this.item.adopter}</span> -
        <span class="delete" id="d${this.item.id}">🗑️</span>
        </li>`;
    }
}
