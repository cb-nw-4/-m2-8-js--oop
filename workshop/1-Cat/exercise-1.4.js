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

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 10;
        this.loneliness = 20;
        this.happiness = 100 - (this.tiredness + this.hunger + this.loneliness);
    }

    sleep = (hours) => {
        this.tiredness = Math.max(0, this.tiredness - (hours * 5));
        this.happiness = Math.max(0, 100 - (this.tiredness + this.hunger + this.loneliness));
    }

    eat = (kibble) => {
        this.hunger = Math.max(0, this.hunger - (kibble * 0.2));
        this.happiness = Math.max(0, 100 - (this.tiredness + this.hunger + this.loneliness));
    }

    play = (minutes) => {
        this.loneliness = Math.max(0, this.loneliness - (minutes * 3));
        this.happiness = Math.max(0, 100 - (this.tiredness + this.hunger + this.loneliness));
    }

    wait = (minutes) => {
        this.tiredness += minutes;
        this.hunger += minutes;
        this.loneliness += minutes;
        this.happiness = Math.max(0, 100 - (this.tiredness + this.hunger + this.loneliness));
    }
}

felix = new Cat('Felix', 'Simaese');

// felix object after being instantiated
Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    wait: [Function: wait],
    name: 'Felix',
    breed: 'Simaese',
    species: 'cat',
    tiredness: 50,
    hunger: 10,
    loneliness: 20,
    happiness: 20
}

// felix object after waiting 20 minutes
Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    wait: [Function: wait],
    name: 'Felix',
    breed: 'Simaese',
    species: 'cat',
    tiredness: 70,
    hunger: 30,
    loneliness: 40,
    happiness: 0
}
