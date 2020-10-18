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
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 0;
    }
/**SLEEP */
    sleep = (hours) => {
        this.tiredness = this.tiredness -5*hours;
            if(this.tiredness <0){this.tiredness = 0;}
            this.happiness =this.happiness + 10;
    };
/**EAT */
    eat = (kibbles) => {
        if(this.hunger>0){this.hunger = this.hunger - this.hunger/5;}
        this.happiness =this.happiness + 15;
    };
/**PLAY */
play = (minutes) => {
    if(this.loneliness >0 ){this.loneliness = this.loneliness - minutes*3;}
    this.happiness = this.happiness + 20;
};
/** */
  }

  let boots = new Cat("Boots","Siamese");
  console.log(boots);
  boots.sleep(2);
  boots.eat(3);
  boots.play(10);
  console.log(boots);
