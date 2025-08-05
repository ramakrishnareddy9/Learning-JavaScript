// 1. Basic Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log("1. Basic:", a, b, c); // 10 20 30

// 2. Skipping Elements
const values = [1, 2, 3, 4];
const [first, , third] = values;
console.log("2. Skipping:", first, third); // 1 3

// 3. Default Values
const defaults = [5];
const [x = 1, y = 2] = defaults;
console.log("3. Defaults:", x, y); // 5 2

// 4. Rest Operator
const restExample = [1, 2, 3, 4, 5];
const [one, two, ...rest] = restExample;
console.log("4. Rest:", one, two, rest); // 1 2 [3, 4, 5]

// 5. Swapping Variables
let m = 100, n = 200;
[m, n] = [n, m];
console.log("5. Swap:", m, n); // 200 100

// 6. Nested Destructuring
const nested = [1, [2, 3]];
const [outer, [inner1, inner2]] = nested;
console.log("6. Nested:", outer, inner1, inner2); // 1 2 3

// 7. Destructuring in Function Parameters
function sum([a, b]) {
  return a + b;
}
console.log("7. Function Param:", sum([5, 10])); // 15

// 8. Real-world Example - Swapping in Sorted Array
let arr = [4, 2, 1, 3];
arr.sort((a, b) => a - b); // [1, 2, 3, 4]
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log("8. Swap in Sorted:", arr); // [2, 1, 3, 4]

// 9. Destructuring from split()
const fullName = "John Doe";
const [firstName, lastName] = fullName.split(" ");
console.log("9. From split():", firstName, lastName); // John Doe

// 10. Chained Destructuring
const chainArr = [1, 2, 3, 4];
let [p, q, [r, s] = [chainArr[2], chainArr[3]]] = chainArr;
console.log("10. Chained:", p, q, r, s); // 1 2 3 4

// 11. Destructuring in Loop
const coordinates = [[1, 2], [3, 4], [5, 6]];
for (const [x, y] of coordinates) {
  console.log("11. Loop:", x, y);
}

// 12. Partial Destructuring
const partial = [10, 20, 30];
const [a1, a2] = partial;
console.log("12. Partial:", a1, a2); // 10 20

// 13. Destructuring Inside map()
const points = [[1, 2], [3, 4]];
const sumPoints = points.map(([x, y]) => x + y);
console.log("13. Inside map():", sumPoints); // [3, 7]

// 14. Mixing with Object Destructuring
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const [{ name: user1 }, { age: user2Age }] = users;
console.log("14. Mixed:", user1, user2Age); // Alice 30

// 15. Destructure with Ignored Values
const [, , thirdValue] = ["a", "b", "c", "d"];
console.log("15. Ignored:", thirdValue); // c

// 16. Destructuring Generator Results
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const [g1, g2] = gen();
console.log("16. Generator:", g1, g2); // 1 2

// 17. Destructure Function Return
function getStats() {
  return [100, 200, 300];
}
const [views, likes, shares] = getStats();
console.log("17. Function return:", views, likes, shares); // 100 200 300