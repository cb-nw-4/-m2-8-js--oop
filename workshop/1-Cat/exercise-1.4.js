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
    // Add code here
    constructor(name, breed){
      this.name = name;
      this.breed = breed;
      this.species = "cat";
      this.tiredness = 100;
      this.hunger = 50;
      this.loneliness = 200;
      this.happiness = 50;
     
    }
    sleep = (hours) =>{
        this.tiredness = this.tiredness -(hours * 5)
        this.happiness = this.happiness + (hours * 1.5)
    }
    eat = (kibbles) => {
      this.hunger = this.hunger - (kibbles/5)
      this.happiness = this.happiness + (kibbles * 1)
    }
    play = (minutes) =>{
        this.loneliness =  this.loneliness - (minutes/3)
        this.happiness = this.happiness + (minutes * 1)
        this.happiness = this.happiness * 2
    }
    wait = (minutes) =>{
        this.loneliness =  this.loneliness - (minutes*1.2)
        this.happiness = this.happiness - (minutes * .89)
        this.tiredness = this.tiredness + (minutes * 1.1)

    }
  }
  
  let boots = new Cat("boots","Simaese");  
  console.log(boots)
  boots.wait(20);
  console.log(boots)
