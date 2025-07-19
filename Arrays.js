// Creating arrays
let arr = [10, 20, 30, 40, 50];
console.log("Array:", arr);

// Accessing elements
console.log("First element:", arr[0]);
console.log("Length:", arr.length);

// Adding/removing elements
arr.push(60); // Add to end
console.log("After push:", arr);

arr.pop(); // Remove from end
console.log("After pop:", arr);

arr.unshift(0); // Add to start
console.log("After unshift:", arr);

arr.shift(); // Remove from start
console.log("After shift:", arr);

// Array methods
console.log("Index of 30:", arr.indexOf(30));
console.log("Includes 40:", arr.includes(40));

let joined = arr.join(" - ");
console.log("Joined:", joined);

let sliced = arr.slice(1, 3);
console.log("Slice (1,3):", sliced);

arr.splice(2, 1, 99); // Remove 1 at index 2, insert 99
console.log("After splice:", arr);

let arr2 = [70, 80];
let combined = arr.concat(arr2);
console.log("Concatenated:", combined);

console.log("Reversed:", arr.reverse());
console.log("Sorted:", arr.sort());

// Higher-order methods
let doubled = arr.map(x => x * 2);
console.log("Map (doubled):", doubled);

let filtered = arr.filter(x => x > 20);
console.log("Filter (>20):", filtered);

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum):", sum);

arr.forEach((val, idx) => {
    console.log(`forEach index ${idx}:`, val);
});

// Multi-dimensional Arrays (Array of Arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("\nMulti-dimensional Array (matrix):", matrix);

// Accessing elements
console.log("Element at [0][1]:", matrix[0][1]); // 2
console.log("Element at [2][2]:", matrix[2][2]); // 9

// Iterating through a 2D array
console.log("Iterating through matrix:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] =`, matrix[i][j]);
    }
}

// Using forEach for 2D array
console.log("Using forEach:");
matrix.forEach((row, i) => {
    row.forEach((val, j) => {
        console.log(`matrix[${i}][${j}] =`, val);
    }); 
});

// Using map to create a new 2D array (e.g., double each value)
let doubledMatrix = matrix.map(row => row.map(val => val * 2));
console.log("Doubled matrix:", doubledMatrix);

// Using flat() to flatten a 2D array into 1D
let flatMatrix = matrix.flat();
console.log("Flattened matrix:", flatMatrix);

// Using reduce to sum all elements in a 2D array
let sumMatrix = matrix.reduce((acc, row) => acc + row.reduce((a, b) => a + b, 0), 0);
console.log("Sum of all elements in matrix:", sumMatrix);

// Using filter to find elements greater than 5 in a 2D array
let filteredMatrix = matrix.flat().filter(val => val > 5);
console.log("Filtered matrix (elements > 5):", filteredMatrix);