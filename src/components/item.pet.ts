import { Pet } from '../models/pet.js';
import { Component } from './component.js';

export class ItemPet extends Component {
    template!: string;
    constructor(
        public selector: string,
        public item: Pet,
        public handelDelete: (id: number) => void
    ) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            (
                document.querySelector(`#d${this.item.id}`) as HTMLElement
            ).addEventListener('click', () => {
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
