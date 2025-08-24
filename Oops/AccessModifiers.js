// public
class Profile {
  constructor(name, age) {
    this.name = name;   // public
    this.age = age;     // public
  }
}
let p = new Profile("Ram", 20);
console.log(p.name);

// Private
class BankAccount {
  #balance = 0;   // private
  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());
// console.log(acc.#balance);  Error: Private field


// protected
class Person {
  constructor(name) {
    this._name = name; // convention: protected
  }
}

class Student extends Person {
  getName() {
    return this._name;  // accessible in subclass
  }
}

let s = new Student("Krishna");
console.log(s.getName());   //  Krishna
console.log(s._name);       //  works, but not recommended (pretend private)

// Private method
class Secret {
  #secretCode() { return "1234"; }

  showCode() {
    console.log(this.#secretCode());
  }
}

let s1 = new Secret();
s1.showCode();   //  1234
// s.#secretCode();  Error

// Static Private Fields & Methods
class Config {
  static #apiKey = "XYZ123";  // private static

  static getKey() {
    return this.#apiKey;
  }
}

console.log(Config.getKey());   //  XYZ123
// console.log(Config.#apiKey);  Error