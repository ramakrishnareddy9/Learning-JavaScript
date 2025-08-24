class Profile{
    constructor(name,age,branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    printProfile() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.branch);
    }
}
let p = new Profile("ram", 20, "cse");
p.printProfile()

// Class Expressions
let Profile1 = class {
  constructor(name) { this.name = name; }
  sayHi() { console.log("Hi " + this.name); }
};

let p1 = new Profile1("Ram");
p1.sayHi();

