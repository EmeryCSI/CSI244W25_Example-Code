// ========================================
// SPREAD, REST & DESTRUCTURING - 10 MIN TUTORIAL
// ========================================

console.log("=== SPREAD OPERATOR ===");
// The spread operator (...) copies or combines arrays and objects

// 1. SPREAD WITH ARRAYS
console.log("\n--- Array Spreading ---");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copy array
const copied = [...arr1];
console.log("Copied:", copied);

// 2. SPREAD WITH OBJECTS
console.log("\n--- Object Spreading ---");
const person = { name: "Alice", age: 30 };
const job = { title: "Developer" };

// Combine objects
const employee = { ...person, ...job, salary: 50000 };
console.log("Employee:", employee);

// ========================================
// REST PARAMETERS
// ========================================
console.log("\n=== REST PARAMETERS ===");
// Rest (...) collects multiple arguments into an array

function sumAll(...numbers) {
  console.log("Numbers:", numbers);
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sumAll(1, 2, 3, 4, 5));

// ========================================
// DESTRUCTURING
// ========================================
console.log("\n=== DESTRUCTURING ===");
// Extract values from arrays or objects into variables

// 1. ARRAY DESTRUCTURING
console.log("\n--- Array Destructuring ---");
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;
console.log("First:", first, "Second:", second);

// 2. OBJECT DESTRUCTURING
console.log("\n--- Object Destructuring ---");
const student = { name: "Bob", age: 25, grade: "A" };
const { name, age } = student;
console.log("Name:", name, "Age:", age);

// 3. DESTRUCTURING IN FUNCTIONS
console.log("\n--- Function Destructuring ---");
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet(student);

console.log("\n=== SUMMARY ===");
console.log("Spread (...): Copy or combine arrays/objects");
console.log("Rest (...): Collect multiple arguments into array");
console.log("Destructuring: Extract values into variables");
