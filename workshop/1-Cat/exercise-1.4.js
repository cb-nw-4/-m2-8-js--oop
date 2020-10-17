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
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 10;
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
wait = (minutes) => {
    this.tiredness = this.tiredness - minutes*1.5;
    this.loneliness = this.loneliness - minutes*2;
    this.hunger = this.hunger - minutes*0.5;
};
  }

  let boots = new Cat("Boots","Siamese");
  console.log(boots);
  boots.wait(20);
  console.log(boots);
