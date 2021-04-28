const apiURL = '../data/tour_destinos.json';
let resultsArray = [];

const cardsSection = document.querySelector('#cards-section');

const mobile = 3;
const tablet = 4;
const desktop = 6;

// Obtener info del JSON
async function getInfoTours() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();

    displayCards(mobile);
  } catch (error) {
    console.log(error);
  }
}

function displayCards() {
  const sizeVW = window.innerWidth;

  // if (sizeVW < 769) {
  //  const screen = mobile;
  // } else if(sizeVW < 1137) {
  //   const screen = tablet;
  // } else {
  //    const screen = desktop;
  // }

  for (let i = 0; i < screen; i++) {
    const randomI = Math.floor(Math.random() * resultsArray.length);
    console.log(randomI);
    console.log(resultsArray);
    const city = resultsArray[randomI].city.name;
    const country = resultsArray[randomI].city.country;
    const price = resultsArray[randomI].priceUsd;
    imgFile = city.split(' ').join('-');
    console.log(city);

    cardsSection.innerHTML += `
      <div class="tour-card tour-card-${i + 1}" 
        style="background:#fff url(../assets/imgs/cards/${imgFile}.jpeg) no-repeat center;">
        <div class="card-content">
          <div class="first-content">
            <span class="tour-price">$${price}</span>
          </div>
          <div class="second-content">
            <h6 class="card-country">${country}</h6>
            <h3 class="card-place">${city}</h3>
          </div>
        </div>
      </div>
    `;
  }
}
// CAMBIAR TODAS LAS IMAGENES PARA LA CARPETA IMGS/CARDS Y IMPLEMENTAR UN RANDOM PARA TOMAR 3 VALORES DEL ARRAY resultsArray

getInfoTours();
