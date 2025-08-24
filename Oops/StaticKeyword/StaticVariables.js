class Student {
  static college = "vignan"; // static variable
  
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(`${this.name} studies at ${Student.college}`);
  }
}

let s1 = new Student("Rama");
let s2 = new Student("Krishna");
s1.show();
s2.show();
// Accessing static variable directly
console.log(Student.college); // ✅ IIT
