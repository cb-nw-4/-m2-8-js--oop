class Dog {
  constructor() {
    this.hunger = 0;
  }

  remaining = () => {
    console.log(this.food.amount); // amount ?? 
  };
}

let fido = new Dog();
fido.remaining();
