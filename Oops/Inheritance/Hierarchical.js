class Person {
    greet() { console.log("Hello!"); }
}

class Student extends Person {
    study() { console.log("Studying"); }
}

class Teacher extends Person {
    teach() { console.log("Teaching"); }
}

let s = new Student();
s.greet();
s.study();

let t = new Teacher();
t.greet();
t.teach();
