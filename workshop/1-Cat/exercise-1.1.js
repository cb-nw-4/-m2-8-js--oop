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
  constructor (name){
    this.name = name;
    this.species = 'cat';
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  // Add code here
}

let Boots = new Cat('Boots');

console.log(Boots.species);

// B) Instantiate a cat called 'boots' with the Cat class.

// C) What do you see when you console.log(boots)?

// D) What if I want to output just boots' species?
