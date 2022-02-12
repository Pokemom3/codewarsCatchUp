let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "orange",
    type: "volvo",
    registration: new Date("2012-02-1999"),
    capacity: 5,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "red",
    type: "minivan",
    registration: new Date("2014-10-12"),
    capacity: 7,
  },
  {
    color: "black",
    type: "BMW",
    registration: new Date("2021-02-16"),
    capacity: 5,
  },
];

// declare new car details in a variable
// with details in an object {}
let car = {
  color: "silver",
  type: "Hyundai",
  registration: new Date("2015-12-16"),
  capacity: 5,
};
//`unshift` puts the new declared object at the front of the existing array of objects.
cars.unshift(car);
//console.log(array variable name) to see output.
console.log(cars);
