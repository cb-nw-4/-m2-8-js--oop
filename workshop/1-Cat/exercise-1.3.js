// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

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

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

class Cat {
    // Add code here
    constructor(name, breed) {
        this.name = name;
        this.species = 'cat';
        this.breed = breed;
        this.tiredness = 80;
        this.hunger = 40;
        this.loneliness = 100;
        this.happiness = 0;
    }
    sleep = (hours) => {
        this.tiredness -= (hours * 5);
        this.happiness = hours
        if (this.tiredness < 0) {
            return 0;
        } else {
            return this.tiredness;
        }
    }
    eat = (kibble) => {
        this.hunger -= (kibble * (1/5));
        this.happiness = kibble * (1/5);
        if (this.hunger < 0) {
            return 0;
        } else {
            return this.hunger;
        }
    }
    play = (minutes) => {
        this.loneliness -= (minutes * 3);
        this.happiness *= 2;
        if (this.loneliness < 0) {
            return 0;
        } else {
            return this.loneliness;
        }
    }
}

let boots = new Cat('Boots', 'Siamese cat');

boots.sleep(5)
boots.eat(100)
boots.play(30)

console.log(`Boots happiness level is ${boots.happiness}, tiredness level is ${boots.tiredness}, hunger level is ${boots.hunger}, and loneliness level is ${boots.loneliness}`)