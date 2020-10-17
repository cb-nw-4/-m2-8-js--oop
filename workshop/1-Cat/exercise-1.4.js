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
    constructor (name, breed){
        this.name = name;
        this.species = 'cat';
        this.breed = breed;
        this.tiredness = 100;
        this.hunger = 100;
        this.loneliness = 100;
        this.happiness = 0;
        this.tiredness =0;
    }
    sleep = (hours) => {
        this.tiredness = this.tiredness - hours*10;
        this.happiness += 10;
        console.log(`Cat Sleeps. Tiredness is at:${this.tiredness}`);
        console.log(`Cat Sleeps. Happiness is at:${this.happiness}`);

    };
    eat = (kibbles) => {
        this.hunger = this.hunger - kibbles*0.2;
        this.happiness += 10;
        console.log(`Cat Eats. Hunger is at:${this.hunger}`);
        console.log(`Cat Eats. Happiness is at: ${this.happiness}`);
    };
    play = (minutes) => {
        this.loneliness = this.loneliness - minutes*3;
        this.tiredness += 10;
        this.hunger -= 10;
        console.log(`Cat plays ${this.loneliness}`);
        
    };

    wait = (minutes) => {
        this.loneliness += minutes*3;
        this.happiness += minutes*10;
        this.hunger += minutes*5;
        console.log(`Cat plays ${this.loneliness}`);
        
    };
    
}

let boots = new Cat('Boots','Species');
boots.wait(20);
console.log(boots);
