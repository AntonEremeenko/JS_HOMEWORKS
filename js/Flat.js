import Human from './Human.js';
class Flat {
    residents = [];
    addHuman(Human) {
        if (!Human) throw new Error('Argument is not an instance of Human');
        return this.residents.push(Human);
    }
}
export default Flat;
