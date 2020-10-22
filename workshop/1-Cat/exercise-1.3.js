// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.
class Cat {
    // Add code here
    constructor(name) {
      this.name = name;
      this.tiredness = 100;
      this.hunger = 70;
      this.loneliness = 50;
      this.happiness = 30;
    }
    sleep = (hours) => {
        return this.tiredness = this.tiredness - (5 * hours);
    }    
    eat = (kibbles) => {
        return this.hunger = this.hunger - (kibbles / 5);
    }
    play = (minutes) => {
        return this.loneliness = this.loneliness - ((minutes/60) * 3);
    }
    happy = () => {
        this.happiness += 45;
        this.tiredness -= 20;
        this.hunger -= 15;
        this.loneliness -= 30;
    }
}
// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.
let boots = new Cat("Boots");
console.log(boots);
/*
{
  sleep: [Function: sleep],
  eat: [Function: eat],
  play: [Function: play],
  happy: [Function: happy],
  name: 'Boots',
  tiredness: 100,
  hunger: 70,
  loneliness: 50,
  happiness: 30
}
*/
// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
boots.sleep(5);
boots.eat(100);
boots.play(90); //minutes
boots.happy();

console.log(boots);
/*{
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    happy: [Function: happy],
    name: 'Boots',
    tiredness: 55,
    hunger: 35,
    loneliness: 15.5,
    happiness: 75
  }
*/
