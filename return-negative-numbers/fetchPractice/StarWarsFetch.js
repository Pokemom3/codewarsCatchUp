console.log("StarWars rules");

//Get a quote from an API in an ASYNC function
//await it
async function getPlanets() {
  const response = await fetch(`https://swapi.dev/api//planets/`);
  console.log(response);
  //without await is stuck in a Promise. A promise is pending and not enough
  //AWAIT the response in a variable
  //the response comes back in json format so .json
  const data = await response.json();
  console.log(data);
  //pull the data that we need from the object using dot notation.
  let StarWarsPlanets = data.results;
  console.log(StarWarsPlanets);
}

//call the function outside of the function!
getPlanets();
