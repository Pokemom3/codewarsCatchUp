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
  {
    color: "silver",
    type: "Hyundai",
    registration: new Date("2015-12-16"),
    capacity: 5,
  },
  // array of objects separated by commas (,)
];

//declare the details of new object inside {}
//array.push to insert new object at END of array

let car = {
  color: "burgundy",
  type: "Ford",
  registration: new Date("2020-09-30"),
  capacity: 2,
}; //NO COMMA here

cars.push(car);
console.log(cars);
