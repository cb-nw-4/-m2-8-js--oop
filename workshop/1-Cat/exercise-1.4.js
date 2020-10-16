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
    constructor(name) {
        this.name = name;
        this.tiredness = 30;
        this.hunger = 100;
        this.loneliness = 50;
        this.happiness = 80;
    }

    sleep = (hours) => {
        this.tiredness -= (hours * 5);
        this.happiness += 20;
    }

    eat = (kibbles) => {
        this.hunger -= (kibbles / 5);
        this.happiness += 30;
    }

    play = (minutes) => {
        this.loneliness -= (minutes * 3);
        this.happiness += 40;
    }

    wait = (minutes) => {
        this.tiredness += 10;
        this.hunger += 20;
        this.loneliness += 5;
        this.happiness -= 5;
    }
}

let Boots = new Cat("Boots");
Boots.wait(20);
console.log(Boots);
