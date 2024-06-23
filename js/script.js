import Human from './Human.js';
import Flat from './Flat.js';
import House from './House.js';

const human1 = new Human('Alex', 'male');
const human2 = new Human('Jane', 'female');
const human3 = new Human('Jon', 'male');
console.log(human1);
console.log(human2);
console.log(human3);

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
flat1.addHuman(human1);
flat2.addHuman(human2);
flat3.addHuman(human3);
console.log(flat1);
console.log(flat2);
console.log(flat3);

const house1 = new House(2);
house1.addFlats(flat1);
house1.addFlats(flat2);
console.log(house1);

const house2 = new House(2);
house1.addFlats(flat1);
house1.addFlats(flat2);
house1.addFlats(flat3);
console.log(house2);
