// const getPlanets = async function getPlanets() {
//   const response = await fetch("https://swapi.dev/api//planets/3/");

//   fetch("https://swapi.dev/api//planets/3/").then((response) => {});

//   console.log(response);
// };
// getPlanets(response);

console.log("StarWars rules");

async function getPlanets() {
  const response = await fetch(`https://swapi.dev/api//planets/`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  let StarWarsPlanets = data.results;
  console.log(StarWarsPlanets);
}

getPlanets();
