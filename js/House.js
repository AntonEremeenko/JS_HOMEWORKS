import Flat from './Flat.js';

class House {
    flats = [];
    maxFlats = null;

    constructor(maxFlats) {
        if (typeof maxFlats !== 'number' || maxFlats <= 0) {
            throw new Error('Invalid maxFlats value');
        }
        this.maxFlats = maxFlats;
    }
    addFlats(flat) {
        if (this.flats.length >= this.maxFlats) {
            throw new Error('There is no place for a new flat');
        }
        this.flats.push(flat);
    }
}
export default House;
