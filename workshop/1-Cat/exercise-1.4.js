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
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.species = "cat";
    this.tiredness = 50;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 0;
  }

  sleep = (hours) => {
    this.tiredness = this.tiredness / (5 * hours)
    this.happiness += 1
  }

  eat = (kibble) => {
    this.hunger = this.hunger - (kibble / 5)
    this.happiness += 1
  }
  
  play = (minutes) => {
    this.loneliness = this.loneliness - (minutes*3)
    this.happiness = this.happiness + (minutes / 2)
  }

  wait = (minutes) => {
    this.happiness = this.happiness - (minutes / 2)
    this.loneliness = this.loneliness + minutes
    this.hunger = this.hunger + (minutes * 2)
    this.tiredness = this.tiredness + (minutes * 1.5)
  }
}

let Boots = new Cat ('boots', 'siamese')


// B) Make Boots wait 20 minutes and call then console.log(boots);

Boots.wait(20)
console.log(Boots)
