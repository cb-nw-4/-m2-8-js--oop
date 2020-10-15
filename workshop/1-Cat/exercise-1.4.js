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
    constructor(tiredness, hunger, lonliness, happiness, name, breed) {
        this.species = 'cat';
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
        this.name = name;
        this.breed = breed;
    }

    sleep = (hours) => {
        this.tiredness = this.tiredness - (hours * 5);
        this.happiness = this.happiness + (hours * 3);
    }

    eat = (kibbles) => {
        this.hunger = this.hunger - (kibbles / 5);
        this.happiness = this.happiness + (kibbles * 2)
    }

    play = (minutes) => {
        this.lonliness = this.lonliness - (minutes * 3);
        this.happiness = this.happiness + (minutes / 2);
    }

    wait = (minutes) => {
        this.tiredness = this.tiredness + (minutes / 4);
        this.hunger = this.hunger + (minutes / 2);
        this.lonliness = this.lonliness + minutes;
        this.happiness = this.happiness - (minutes / 5);
    }
}

// B) Make Boots wait 20 minutes and call then console.log(boots);
let boots = new Cat(25, 30, 10, 20, 'Boots', 'Siamese');
boots.wait(20);

//When I console.log(boots):
Cat {species: "cat", sleep: ƒ, eat: ƒ, play: ƒ, wait: ƒ, …}
breed: "Siamese"
eat: (kibbles) => {…}
happiness: 16
hunger: 40
lonliness: 30
name: "Boots"
play: (minutes) => {…}
sleep: (hours) => {…}
species: "cat"
tiredness: 30
wait: (minutes) => {…}