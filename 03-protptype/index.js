import { SuperDog } from './superDog.js';

const dog1 = new SuperDog('Daisy');
console.log(dog1.bark());
console.log(dog1.fly());


console.log(SuperDog.prototype);
console.log(dog1.__proto__);



const dog = {
  bark() {
    console.log(`Woof!`);
  }
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));