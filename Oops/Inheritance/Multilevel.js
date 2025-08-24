class LivingBeing {
  breathe() {
    console.log("Breathing");
  }
}

class Animal extends LivingBeing {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

let d = new Dog();
d.breathe();
d.eat();
d.bark();