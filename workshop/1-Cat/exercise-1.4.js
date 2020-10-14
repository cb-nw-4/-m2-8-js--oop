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
    constructor(name, breed){
        this.name=name;
        this.breed=breed;
        this.species='cat';
        this.tiredness=100;
        this.hunger=75;
        this.loneliness=40;
        this.happiness=88;
    }
    sleep=(hours)=>{
        this.tiredness=this.tiredness-(10*hours);
        this.happiness=this.happiness+(10*hours);
        console.log("Happiness after sleeping:"+this.happiness);
    }

    eat=(kibbles)=>{
        this.hunger=this.hunger-(kibbles/5);
        this.happiness=this.happiness+(kibbles/5);
        console.log("Happiness after eating:"+this.happiness);
    }

    play=(minutes)=>{
        this.loneliness=this.loneliness-(minutes*3);
        this.happiness=this.happiness+(minutes*3);
        console.log("Happiness after playing:"+this.happiness);
    }

    wait=(minutes)=>{
        this.tiredness=this.tiredness+(minutes*0.456);
        this.hunger=this.hunger+(minutes*0.523);
        this.loneliness=this.loneliness+(minutes*0.279);
        console.log("Tiredness after the wait of "+minutes+" minutes:"+this.tiredness);
        console.log("Hunger after the wait of "+minutes+" minutes:"+this.hunger);
        console.log("Loneliness after the wait of "+minutes+" minutes:"+this.loneliness);
    }
}