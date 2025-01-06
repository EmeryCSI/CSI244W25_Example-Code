//Variables
//Dont use var
var badWay = "Variable made with var";

//we use let
//let is block scoped {}
let newWay = "Variable made with let";

//CONST - Variable cannot be changed
const CONST_VALUE = "I cannot be re-assignment";
//CONST_VALUE = 10;

//Data Types
//String
//Number (this includes whole and decimal numbers)
//Boolean (true or false)
//Array []
//Object {}
//Undefined

let numbers = [1, 2, 3];
console.log(numbers);
numbers[1] = "Hello";
console.log(numbers);

//template literals ``
let output = `The array is ${numbers}`;
console.log(output);

//Objects
let person = {
  firstName: "Josh",
  lastName: "Emery",
};

console.log(`The name is ${person.firstName} ${person.lastName}`);
