//Arrays is a collection
let fruits = ["apple", "banana", "orange"];

//access by index
console.log(fruits[0]);

//add to end array
fruits.push("mango");
//add to the beginning
fruits.unshift("strawberry");

//remove from the end/beginning
fruits.pop();
fruits.shift();

//array methods
//foreach runs a function for each item in the array
fruits.forEach((fruit, index) => {
  console.log(`Fruit : ${fruit}, Index: ${index}`);
});
//filter() takes a function to filter by and returns a new array with all items that match the filter
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);
//find() is like filter but gives you the first matching item instead of a new collection
//map() creates a new array based on predicate, similar to filter but lets you change data types
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
//we can extract out the age from an object
const destructuring = ({ age }) => {
  console.log(age);
};
destructuring(person);
