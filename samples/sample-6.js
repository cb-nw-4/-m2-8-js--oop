class Dog {
  constructor() {
    this.food = {amount:1}
  }

  remaining = () => {
    console.log(this.food.amount);
  };
}

let fido = new Dog();
fido.remaining();
