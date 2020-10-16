class Dog {
  constructor() {
    this.hunger = 0;
  }

  run = () => {
    this.eat(); // There is no eat function. Fix: this.hunger+=10;
  };

  food = () => {
    this.hunger = this.hunger - 10;
  };
}

let fido = new Dog();
fido.run();
