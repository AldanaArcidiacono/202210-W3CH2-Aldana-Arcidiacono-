export class Pet {
    constructor(name, breed, adopter) {
        this.name = name;
        this.breed = breed;
        this.adopter = adopter;
        this.id = Pet.createId();
        this.isAdopted = false;
    }
    static createId() {
        return Math.round(Math.random() * 10);
    }
}
