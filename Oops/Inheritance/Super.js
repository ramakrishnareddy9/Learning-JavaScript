class A {
    greet() { console.log("Hello from A"); }
}

class B extends A {
    greet() {
        super.greet(); // calls A's greet
        console.log("Hello from B");
    }
}

class C extends B {
    greet() {
        super.greet(); // calls B's greet (which also calls A's)
        console.log("Hello from C");
    }
}

let c = new C();
c.greet();