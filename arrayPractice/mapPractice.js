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
    capacity: 2,
  },
];

// declare variable to keep the results in fontVariantEastAsian
//loop over the entire array
/// if the car capacity is less than or equal to 2
// return string small.

//if car capacity is greater than or equal to 5
// return string "average"

let seats = cars.map((car) => {
  if (car.capacity <= 2) {
    return "small";
  }
  if (car.capacity >= 5) {
    return "average";
  } else return "family large car";
});

console.log(seats);
