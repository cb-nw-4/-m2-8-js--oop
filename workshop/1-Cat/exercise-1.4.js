// Exercise 1.4
// ------------
// Creating a Cat class - Part 4
class Cat {
    // Add code here
    constructor(name) {
      this.name = name;
      this.tiredness = 100;
      this.hunger = 70;
      this.loneliness = 50;
      this.happiness = 30;
    }
    wait = (minutes) => {
        this.tiredness += 10;
        this.hunger += 30;
        this.loneliness += 5;
        this.happiness -= 15;
    }
}
// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
let boots = new Cat("Boots");
boots.wait(20);

console.log(boots);
/*
{
    wait: [Function: wait],
    name: 'Boots',
    tiredness: 110,
    hunger: 100,
    loneliness: 55,
    happiness: 15
  }
  */