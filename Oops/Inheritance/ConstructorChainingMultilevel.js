class A {
    constructor() {
        console.log("A constructor");
    }
}

class B extends A {
    constructor() {
        super();
        console.log("B constructor");
    }
}

class C extends B {
    constructor() {
        super();
        console.log("C constructor");
    }
}

let obj = new C();