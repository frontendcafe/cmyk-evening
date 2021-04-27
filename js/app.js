const apiURL = '../data/tour_destinos.json';
let resultsArray = [];

const countMobile = 3;
const countTablet = 4;
const countDesktop = 6;

function createDOMNodes(page) {
  const currentArray = page === 'homePage' ? resultsArray : allTours;
}

function updateDOM(page) {
  createDOMNodes(page);
  showContent(page);
}

// Obtener info del JSON
async function getInfoTours() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    console.log(resultsArray[0].city.name);
    updateDOM('homePage');
  } catch (error) {
    console.log(error);
  }
}

getInfoTours();
