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
}

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

let boots = new Cat(25, 30, 10, 20, 'Boots', 'Siamese');
boots.sleep(3);
boots.eat(40);
boots.play(10);
console.log(boots);

//When I console.log(boots):
Cat {species: "cat", tiredness: 10, sleep: ƒ, eat: ƒ, play: ƒ, …}
breed: "Siamese"
eat: (kibbles) => {…}
happiness: 114
hunger: 22
lonliness: -20
name: "Boots"
play: (minutes) => {…}
sleep: (hours) => {…}
species: "cat"
tiredness: 10