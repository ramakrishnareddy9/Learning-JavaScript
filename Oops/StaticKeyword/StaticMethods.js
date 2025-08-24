class Calculator {
  // static method
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3));

let c = new Calculator();
// c.add(5,3); Error: not accessible via object