class Animal {
  eat() { console.log("Eating..."); }
}
class Dog extends Animal {
  bark() { console.log("Barking"); }
}

let d = new Dog();
d.eat();
d.bark(); 