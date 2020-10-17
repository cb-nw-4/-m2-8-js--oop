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
        this.name = name;
        this.species = 'cat';
        this.breed = breed;
        this.tiredness = 80;
        this.hunger = 40;
        this.loneliness = 100;
        this.happiness = 50;
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
    wait = (minutes) => {
        this.tiredness += (2 * minutes);
        this.happiness -= (1.5 * minutes);
        this.hunger += (3 * minutes);
        this.loneliness += (2 * minutes);
        return `tiredness: ${this.tiredness}, happiness: ${this.happiness}, hunger: ${this.hunger}, loneliness: ${this.loneliness}`
    }
}

let boots = new Cat('Boots', 'Siamese cat');

console.log(boots.play(20))
console.log(boots.wait(45));

// B) Make Boots wait 20 minutes and call then console.log(boots);
