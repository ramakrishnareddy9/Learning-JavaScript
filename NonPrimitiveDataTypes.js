// JavaScript Non-Primitive (Reference) Data Types

// 1. Object
let person = {
    name: "Ramakrishnareddy",
    age: 19,
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log("Object:", person, "| type:", typeof person);

// 2. Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers, "| type:", typeof numbers); // typeof returns 'object'

// 3. Function
function greet() {
    return "Hello!";
}
console.log("Function:", greet, "| type:", typeof greet);

// 4. Date (built-in object)
let today = new Date();
console.log("Date:", today, "| type:", typeof today);

// 5. RegExp (Regular Expression)
let regex = /abc/;
console.log("RegExp:", regex, "| type:", typeof regex);

// Summary
console.log("\nNon-primitive data types in JavaScript: Object, Array, Function, Date, RegExp.");