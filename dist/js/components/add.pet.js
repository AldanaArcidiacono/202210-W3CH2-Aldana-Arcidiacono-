import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
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
                <label for="adopted">Está adoptado?</label>
                <input type="checkbox" id="adopted">
            </div>
            <div>
                <input type="text" id="adopter-name" placeholder="Ingresa el nombre de su adoptante">
            </div>
            <button type="submit">Cargar mascota!</button>
        </form>`;
    }
}
