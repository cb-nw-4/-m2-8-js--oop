class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement += 10;
    }

    writeCode = () => {
        this.learn();
    };
}

let bob = new Student();
bob.writeCode();