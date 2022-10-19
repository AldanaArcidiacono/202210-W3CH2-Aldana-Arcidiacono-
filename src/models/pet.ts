export class Pet {
    id: number;
    isAdopted: boolean;
    static createId() {
        return Math.round(Math.random() * 10);
    }
    constructor(
        public name: string,
        public breed: string,
        public adopter: string
    ) {
        this.id = Pet.createId();
        this.isAdopted = false;
    }
}
