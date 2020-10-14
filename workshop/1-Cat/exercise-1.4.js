// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
    // Add code here
    constructor (name, breed) {
      this.name = name;
      this.breed = breed;
      this.species = "cat";
      this.tiredness = 50;
      this.hunger = 50;
      this.loneliness = 50;
      this.happiness = 10;
    }
    
    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += hours * 2;
    };

    eat = (nbKibbles) => {
        this.hunger -= Math.round(nbKibbles/5);
        this.happiness += nbKibbles;
    };

    play = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += minutes * 5;
    };

    wait = (minutes) => {
        this.tiredness += minutes * 5;
        this.loneliness += minutes * 10;
        this.hunger += minutes * 2;
        this.happiness -= minutes * 2;
    };
}
 

  let boots = new Cat("Boots", "Simaese");

// B) Make Boots wait 20 minutes and call then console.log(boots);
boots.wait(20);
console.log(boots);
/*Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    wait: [Function: wait],
    name: 'Boots',
    breed: 'Simaese',
    species: 'cat',
    tiredness: 150,
    hunger: 90,
    loneliness: 250,
    happiness: -30
  }*/
