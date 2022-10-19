export class Store<P> {
    constructor(public store: string = 'Pets') {}

    getStore(): Array<P> {
        const dataString = localStorage.getItem(this.store);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }
    setStore(data: Array<P>) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
