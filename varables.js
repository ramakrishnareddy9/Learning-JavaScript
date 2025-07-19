console.log("hello JavaScript");

// Variable Declaration (without keywords - not recommended)
num = 10; // Global variable (not recommended, no keyword)
char = 'c'; // Global variable
string = "Ramakrishnareddy"; // Global variable
float = 10.5; // Global variable
bool = true; // Global variable

console.log("Global variables (no keyword):");
console.log(num);    // 10
console.log(char);   // 'c'
console.log(string); // "Ramakrishnareddy"
console.log(float);  // 10.5
console.log(bool);   // true

// Checking types of variables
console.log("Types of global variables:");
console.log(typeof num);    // number
console.log(typeof char);   // string
console.log(typeof string); // string
console.log(typeof float);  // number
console.log(typeof bool);   // boolean

// let: Block-scoped variable (can be updated, not re-declared in same scope)
let a = 10;
let b = 20;
let c = a + b;
console.log("\nlet variables (block scoped):");
console.log("a =", a); // 10
console.log("b =", b); // 20
console.log("c = a + b =", c); // 30

let stringName = "Ramakrishnareddy";
let x = 10;
let boolValue = false;

// var: Function-scoped variable (can be updated and re-declared)
// var: is now not recommended for use in modern JavaScript, but still valid
// It is function scoped, can be re-declared and updated.
var y = 20;
var name = "Ramakrishnareddy";
var isAvailable = true;
console.log("\nvar variables (function/global scoped):");
console.log("y =", y);
console.log("name =", name);
console.log("isAvailable =", isAvailable);

// const: Block-scoped constant (cannot be reassigned)
const pi = 3.14;
const MAX_LIMIT = 100;
console.log("\nconst variables (block scoped, cannot be reassigned):");
console.log("pi =", pi);
console.log("MAX_LIMIT =", MAX_LIMIT);

// Primitive Types in JavaScript
let number = 42; // Number
let text = "Hello, World!"; // String
let isTrue = true; // Boolean
let notDefined = undefined; // Undefined
let emptyValue = null; // Null
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
let symbolValue = Symbol("description"); // Symbol

console.log("\nPrimitive Types:");
console.log("number =", number, "| type:", typeof number);
console.log("text =", text, "| type:", typeof text);
console.log("isTrue =", isTrue, "| type:", typeof isTrue);
console.log("notDefined =", notDefined, "| type:", typeof notDefined);
console.log("emptyValue =", emptyValue, "| type:", typeof emptyValue);
console.log("bigIntValue =", bigIntValue, "| type:", typeof bigIntValue);
console.log("symbolValue =", symbolValue, "| type:", typeof symbolValue);

// Explanation comments:
// - Variables can be declared using var, let, or const.
// - var is function scoped, can be re-declared and updated.
// - let is block scoped, can be updated but not re-declared in the same scope.
// - const is block scoped, cannot be updated or re-declared.
// - Avoid declaring variables without a keyword (creates global variables, not recommended).
// - Primitive types: Number, String, Boolean, Undefined, Null, BigInt, Symbol.