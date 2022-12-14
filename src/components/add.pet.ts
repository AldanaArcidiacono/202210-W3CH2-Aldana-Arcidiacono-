import { Component } from './component.js';

export class AddPet extends Component {
    template: string;
    constructor(
        public selector: string,
        public handleAdd: (ev: Event) => void
    ) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    handleAdd(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `<form>
            <div>
                <input type="text" id="pet-name" placeholder="Ingresa el nombre de la mascota" required>
            </div>
            <div>
                <input type="text" id="breed" placeholder="Ingresa su especie">
            </div>
            <div>
                <input type="text" id="adopter-name" placeholder="Ingresa el nombre de su adoptante">
            </div>
            <button type="submit">Cargar mascota!</button>
        </form>`;
    }
}
