//JavaScript functions

function greet() {
  console.log("Hello World");
}
//calling function
greet();

//add is a function, read the parenthesis as function

const add = (a, b) => {
  return a + b;
};

console.log(`The sum: ${add(5, 2)}`);

//They wanted functons to be even shorter
//If function is only one line, you can remove curly and return
const sum = (a, b) => a + b;

console.log(`The sum: ${sum(5, 2)}`);

//if you have only one parameter you can drop the ()
const sqaure = (a) => a * a;

console.log(`The square: ${sqaure(5)}`);

//Callback functions - A function that gets passed as a parameter
//to another function
//foreach()
//is called on a collection
function display(x) {
  console.log(x);
}
let numbers = [1, 2, 3];
//foreach takes a function as a parameter
numbers.forEach(display);
//I can make function right in line
numbers.forEach((x) => console.log(x));
//If you are doin more than one thing then you need {}
numbers.forEach((element, index) => {
  console.log(`The index is ${index}`);
  console.log(`The element is ${element}`);
});
