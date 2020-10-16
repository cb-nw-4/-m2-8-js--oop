class Student {
  constructor() {
    this.excitement = 1;
  }

  writeCode = () => {
    this.learn(); // there is no learn function 
  };
}

let bob = new Student();
bob.writeCode();
