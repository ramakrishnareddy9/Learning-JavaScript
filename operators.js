// Arithmetic Operators
let a = 10, b = 3;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("a++ =", a++); // Post-increment
console.log("++b =", ++b); // Pre-increment
console.log("a-- =", a--); // Post-decrement
console.log("--b =", --b); // Pre-decrement

// Assignment Operators
let x = 5;
console.log("\nAssignment Operators:");
x += 2; // x = x + 2
console.log("x += 2:", x);
x -= 1; // x = x - 1
console.log("x -= 1:", x);
x *= 3; // x = x * 3
console.log("x *= 3:", x);
x /= 2; // x = x / 2
console.log("x /= 2:", x);
x %= 2; // x = x % 2
console.log("x %= 2:", x);
x **= 3; // x = x ** 3
console.log("x **= 3:", x);

// Comparison Operators
let p = 7, q = "7";
console.log("\nComparison Operators:");
console.log("p == q:", p == q); // Equal to
console.log("p === q:", p === q); // Strict equal to
console.log("p != q:", p != q); // Not equal to
console.log("p !== q:", p !== q); // Strict not equal to
console.log("p > 5:", p > 5); // Greater than
console.log("p < 10:", p < 10); // Less than
console.log("p >= 7:", p >= 7); // Greater than or equal to
console.log("p <= 6:", p <= 6); // Less than or equal to

// Logical Operators
let m = true, n = false;
console.log("\nLogical Operators:");
console.log("m && n:", m && n); // AND
console.log("m || n:", m || n); // OR
console.log("!m:", !m); // NOT

// Bitwise Operators
let bit1 = 5, bit2 = 3;
console.log("\nBitwise Operators:");
console.log("bit1 & bit2:", bit1 & bit2); // AND
console.log("bit1 | bit2:", bit1 | bit2); // OR
console.log("bit1 ^ bit2:", bit1 ^ bit2); // XOR
console.log("~bit1:", ~bit1); // NOT
console.log("bit1 << 1:", bit1 << 1); // Left shift
console.log("bit1 >> 1:", bit1 >> 1); // Right shift
console.log("bit1 >>> 1:", bit1 >>> 1); // Zero-fill right shift

// Ternary Operator
let age = 18;
console.log("\nTernary Operator:");
let result = (age >= 18) ? "Adult" : "Minor";
console.log("age >= 18 ? 'Adult' : 'Minor' =>", result);

// Type Operators
console.log("\nType Operators:");
console.log("typeof a:", typeof a); // typeof
console.log("a instanceof Number:", a instanceof Number); // instanceof (false, as a is a primitive)

// String Operators
let str1 = "Hello", str2 = "World";
console.log("\nString Operators:");
console.log("str1 + ' ' + str2:", str1 + " " + str2); // Concatenation

// Comma Operator
let comma;
console.log("\nComma Operator:");
comma = (1, 2, 3);
console.log("comma = (1, 2, 3):", comma); // 3

// Optional Chaining Operator
let obj = { name: "JS", details: { version: "ES6" } };
console.log("\nOptional Chaining Operator:");
console.log("obj.details?.version:", obj.details?.version); // ES6
console.log("obj.info?.version:", obj.info?.version); // undefined

// Nullish Coalescing Operator
let val = null;
console.log("\nNullish Coalescing Operator:");
console.log("val ?? 'default':", val ?? "default"); // default