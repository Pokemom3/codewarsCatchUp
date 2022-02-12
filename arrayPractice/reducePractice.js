const { idleTimeoutMillis } = require("pg/lib/defaults");

const people = [
  {
    name: "Toni",
    age: 35,
  },
  {
    name: "Jeremy",
    age: 54,
  },
  {
    name: "Fred",
    age: 23,
  },
  {
    name: "Yenyele",
    age: 19,
  },
];

// calculates the running total after each row.
//like a shopping cart.

//reduce method takes 2 parameters:
//1. a function (arrow function (()) => {})
//2. the starting point value (0)
//the function takes in 2 things too!
//1. what we are accumulating/ reducing value to, so our (total)
//2. each person
//the default value of 0 is passed to the total in the first iteration.
//whatever is returned from reduce will become the `new` running value
//for the next iteration so `return total +item.person` really means add the next item's price to the running textDecorationLine:
// declare the function as a variable to be returned.
const totalAge = people.reduce((total, person) => {
  return total + person.age;
}, 0);

console.log(totalAge);
