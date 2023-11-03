export class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

// const dog1 = new Dog('Daisy');

// Dog.prototype.play = () => console.log('Playing now!');

// dog1.play();

// console.log(Dog.prototype);
// console.log(dog1.__proto__);
