// Object literal
const person = {
  name: "Rama",
  age: 20,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.name);
person.greet();

// nested objects
const details = {
    name: "ram",
    address: {
        city: "vja",
        dist: "krishna",
        pin:901380
    }
}
console.log(details.address.pin)

// Adding properties
const student = {
  name: "Krishna"
};

// Add new properties in Objects
student.age = 21;
student.branch = "CSE";
console.log(student);
// { name: 'Krishna', age: 21, branch: 'CSE' }
student.printStudent = function () {
  console.log(student);
}

delete student.branch;
console.log(student);
// { name: 'Krishna', age: 21, 'roll no': 101 }


// Dynamic Property Access
let key = "email";
let user = {
  name: "Rama",
  [key]: "rama@gmail.com"   // computed property
};
console.log(user.email);

// Shorthand Properties & Methods
let city = "Vijayawada";
let pincode = 520001;

let address = {
  city,         // shorthand for city: city
  pincode,      // shorthand for pincode: pincode
  showAddress() {   // shorthand method
    console.log(`City: ${this.city}, Pincode: ${this.pincode}`);
  }
};

console.log(address.city);     // Vijayawada
console.log(address.pincode);  // 520001
address.showAddress();         // City: Vijayawada, Pincode: 520001

// Looping
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}

let student = { name: "Rama", age: 20 };
console.log(Object.keys(student));   // ["name", "age"]
console.log(Object.values(student)); // ["Rama", 20]
console.log(Object.entries(student));// [["name","Rama"],["age",20]]

// Merging Objects
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }

let merged2 = { ...obj1, ...obj2 };
console.log(merged2); // { a: 1, b: 2 }

// Checking Properties
let Name = { name: "Rama" };
console.log("name" in Name);   // true
console.log(Name.hasOwnProperty("age")); // false

// Object Destructuring
let student1 = { name: "Ram", age: 22 };
let { name1, age } = student1;
console.log(name1); // Ram
console.log(age);  // 22

// Sealing & Freezing Objects

// Object.freeze → makes object immutable
let obje = { a: 1 };
Object.freeze(obje);
obje.a = 100;  //  won’t change
console.log(obje.a); // 1

// Object.seal → properties can’t be added/removed, but values can change
let obje1 = { a: 1 };
Object.seal(obje1);
obje1.a = 200;  //  allowed
delete obje1.a; //  not allowed
console.log(obje1.a); // 200