import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handleAdd) {
        super();
        this.selector = selector;
        this.handleAdd = handleAdd;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
