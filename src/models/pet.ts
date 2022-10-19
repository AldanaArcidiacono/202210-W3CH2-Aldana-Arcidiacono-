export class Pet {
    id: number;
    static createId() {
        return Math.round(Math.random() * 20);
    }
    constructor(
        public name: string,
        public breed: string,
        public adopter: string
    ) {
        this.id = Pet.createId();
    }
}
