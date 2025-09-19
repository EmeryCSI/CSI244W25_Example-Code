// ========================================
// CALLBACK FUNCTIONS - 10 MIN TUTORIAL
// ========================================

console.log("=== WHAT ARE CALLBACKS? ===");
// A callback is a function passed as an argument to another function

// ========================================
// BASIC CALLBACK EXAMPLE
// ========================================
console.log("\n--- Basic Callback ---");
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function processName(name, callback) {
  console.log("Processing...");
  callback(name); // Call the callback function
}

processName("Alice", sayHello);

// ========================================
// CALLBACKS WITH ARRAYS
// ========================================
console.log("\n=== CALLBACKS WITH ARRAYS ===");
const numbers = [1, 2, 3, 4, 5];

// 1. forEach() - Do something with each element
console.log("\n--- forEach() ---");
numbers.forEach(function (num) {
  console.log("Number:", num);
});

// Arrow function version
numbers.forEach((num) => console.log("Arrow:", num));

// 2. map() - Transform each element
console.log("\n--- map() ---");
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// 3. filter() - Keep only certain elements
console.log("\n--- filter() ---");
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

// ========================================
// PRACTICAL EXAMPLE
// ========================================
console.log("\n=== PRACTICAL EXAMPLE ===");
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
];

// Find students with grade >= 80
const goodStudents = students.filter((student) => student.grade >= 80);
console.log("Good students:", goodStudents);

// Get just the names
const names = goodStudents.map((student) => student.name);
console.log("Names:", names);

// ========================================
// ASYNCHRONOUS CALLBACK
// ========================================
console.log("\n=== ASYNC CALLBACK ===");
console.log("Starting timer...");

setTimeout(() => {
  console.log("This runs after 2 seconds!");
}, 2000);

console.log("This runs immediately!");

console.log("\n=== SUMMARY ===");
console.log("Callbacks: Functions passed as arguments");
console.log("Common uses: forEach, map, filter, setTimeout");
console.log("Makes code reusable and flexible");
