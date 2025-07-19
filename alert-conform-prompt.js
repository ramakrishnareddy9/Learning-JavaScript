// 1. alert() - shows a simple message box
alert("This is an alert!");

// 2. confirm() - shows a message box with OK and Cancel, returns true/false
let isConfirmed = confirm("Do you want to continue?");
console.log("User clicked:", isConfirmed ? "OK" : "Cancel");

// 3. prompt() - shows a message box asking for user input, returns the input or null
let userInput = prompt("Enter your name:");
console.log("User entered:", userInput);