// Commonly used console methods in JavaScript

console.log("This is a log message."); // General output

console.info("This is an info message."); // Informational message

console.warn("This is a warning message!"); // Warning message

console.error("This is an error message!"); // Error message

console.debug("This is a debug message."); // Debug-level message (may not show in all browsers by default)

console.assert(2 + 2 === 5, "Assertion failed: 2 + 2 is not 5"); // Prints if assertion is false

console.count("Counter"); // Counts the number of times called with the same label
console.count("Counter");

console.countReset("Counter"); // Resets the count for the given label

console.group("Group 1"); // Creates a new inline group
console.log("Inside group");
console.groupEnd(); // Ends the current group

console.groupCollapsed("Collapsed Group"); // Creates a collapsed group
console.log("Inside collapsed group");
console.groupEnd();

console.table([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
]); // Displays tabular data

console.time("Timer"); // Starts a timer
for (let i = 0; i < 100000; i++) {} // Some code
console.timeEnd("Timer"); // Ends the timer and logs the time taken

console.trace("Trace message"); // Prints a stack trace

// You can also style console.log output in browsers:
console.log("%cStyled log", "color: blue; font-weight: bold; font-size: 16px;");

//console.clear(); // Clears the console