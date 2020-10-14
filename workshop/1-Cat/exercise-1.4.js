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
        this.species = "cat";
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 30;
    }
    wait = (minutes) => {
        this.tiredness += minutes + 5;
        this.hunger += minutes + 2;
        this.loneliness += minutes + 1;
        this.happiness -= minutes - 3;
    }
    }
    let myCat = new Cat("boots");
    myCat.wait(20);
    console.log(myCat);