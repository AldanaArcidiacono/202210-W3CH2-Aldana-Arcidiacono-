import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { ItemPet } from './item.pet.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderInner(this.selector, this.template);
        new AddPet('slot#add-pet', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Mascotas:</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += new ItemPet('', item, this.handlerDelete.bind(this))
                .template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const name = document.querySelector('#pet-name')
            .value;
        const breed = document.querySelector('#breed')
            .value;
        // const isAdopted = (
        //     document.querySelector('#adopted') as HTMLInputElement
        // ).value;
        const adopter = document.querySelector('#adopter-name').value;
        this.pets.push(new Pet(name, breed, adopter));
        this.manageComponent();
    }
    handlerDelete(deletedId) {
        this.pets = this.pets.filter((item) => item.id === deletedId);
        this.manageComponent();
    }
}
