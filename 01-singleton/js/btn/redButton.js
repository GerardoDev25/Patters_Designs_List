import { singletonCounter as Counter } from '../counter/counterAsClass.js';

const button = document.getElementById("red");
button.addEventListener("click", () => {
  Counter.increment();
  console.log("counter total: ", Counter.getCount());
});