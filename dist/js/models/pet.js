export class Pet {
    constructor(name, breed, adopter //public isAdopted: boolean
    ) {
        this.name = name;
        this.breed = breed;
        this.adopter = adopter;
        this.id = Pet.createId();
    }
    static createId() {
        return Math.round(Math.random() * 20);
    }
}
