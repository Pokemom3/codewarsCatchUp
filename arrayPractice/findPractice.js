const cars = [
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

//Have to save the object as avariable, to be returned so declare in a variable (let)
//find in the WHOLE array the cars that have the matching key pair(s).
// console.log to see output otherwise return null or set up an error.
// Double && extends conditions.
//Double || = or
let car = cars.find((car) => car.color === "red" || car.type === "minivan");
console.log(car);
