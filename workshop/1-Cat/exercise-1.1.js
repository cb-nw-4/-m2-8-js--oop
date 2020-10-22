// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:

// {
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0,
// }

class Cat {
  // Add code here
  constructor() {
    this.species = "cat";
    this.tiredness = 10;
    this.hunger = 50;
    this.loneliness = 0;
    this.happiness = 75;

  }
}

// B) Instantiate a cat called 'boots' with the Cat class.
let boots = new Cat();
// C) What do you see when you console.log(boots)?
console.log(boots); //{species: "cat", tiredness: 10, hunger: 50, loneliness: 0, happiness: 75}
// D) What if I want to output just boots' species?
boots.species; //"cat"
