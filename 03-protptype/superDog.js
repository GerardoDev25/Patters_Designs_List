import { Dog } from './dog.js';

export class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    return 'Flying!';
  }
}
