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
];

// add an object (new car) at position 6 in the array.
//declare NEW variable details
// SPLICE the array of objects at position 5
//Don't take any objects away
//Insert new car/ objectFit:
//Return updated array

let car = {
  color: "white",
  type: "Nissan",
  registration: new Date("2020-10 05"),
  capacity: 5,
};
cars.splice(5, 0, car);
console.log(cars);

//Array name.splice(
//   {index where to start},
//   {how many items to remove},
//   {items to add}
// );
