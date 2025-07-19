// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// 3. Arrow Function (ES6+)
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 6));

// 4. Anonymous Function (used as callback)
setTimeout(function() {
    console.log("This runs after 1 second.");
}, 1000);

// 5. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed!");
})();

// 6. Function with Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log("Power:", power(5));
console.log("Power:", power(5, 3));

// 7. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));