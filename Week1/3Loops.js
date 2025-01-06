//for while loops are the same
//foreach() is called on a collection and takes a callback function
//
const cars = ["BMW", "Volvo", "Mini"];
//for of has no index
for (let car of cars) {
  console.log(car);
}

//for in goes through objects using key: value
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  console.log(`The key is ${x}`);
  console.log(`The value is ${person[x]}`);
}
