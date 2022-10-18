import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';

export class PetList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderInner(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.delete')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerDelete.bind(this)
                    )
                );
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Mascotas:</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item: Pet) => {
            template += `
            <li> ${item.id} - ${item.name} - ${item.breed} - ${item.adopter}
            <span class="delete" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();
        const name = (document.querySelector('#pet-name') as HTMLInputElement)
            .value;
        const breed = (document.querySelector('#breed') as HTMLInputElement)
            .value;
        // const isAdopted = (
        //     document.querySelector('#adopted') as HTMLInputElement
        // ).value;
        const adopter = (
            document.querySelector('#adopter-name') as HTMLInputElement
        ).value;
        this.pets.push(new Pet(name, breed, adopter));
        this.manageComponent();
    }
    handlerDelete(ev: Event) {
        const deletedId = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(deletedId as string)
        );
        this.manageComponent();
    }
}
