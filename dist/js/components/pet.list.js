import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { ItemPet } from './item.pet.js';
import { Store } from '../service/storage.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store();
        if (this.storeService.getStore().length === 0) {
            this.pets = [...PETS];
            this.storeService.setStore(this.pets);
        }
        else {
            this.pets = this.storeService.getStore();
        }
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
            template += new ItemPet('', item, this.handlerDelete.bind(this), this.handlerAdoption.bind(this)).template;
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
        const adopter = document.querySelector('#adopter-name').value;
        this.pets.push(new Pet(name, breed, adopter));
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerDelete(deletedId) {
        this.pets = this.pets.filter((item) => item.id !== deletedId);
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerAdoption(changeId) {
        const i = this.pets.findIndex((item) => item.id === changeId);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        this.storeService.setStore(this.pets);
    }
}
