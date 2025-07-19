// 1. for loop
console.log("for loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while loop
console.log("\nwhile loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// 3. do...while loop
console.log("\ndo...while loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// 4. for...of loop (for arrays and iterable objects)
console.log("\nfor...of loop:");
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}

// 5. for...in loop (for object properties)
console.log("\nfor...in loop:");
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}

// 6. forEach loop (for arrays)
console.log("\nforEach loop:");
arr.forEach((value, index) => {
    console.log(`Index ${index}:`, value);
});