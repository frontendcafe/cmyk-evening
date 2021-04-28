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
  let screen;
  const sizeVW = window.innerWidth;

  if (sizeVW < 769) {
    screen = mobile;
  } else if (sizeVW < 1137) {
    screen = tablet;
  } else {
    screen = desktop;
  }

  const nArray = [];

  while (nArray.length < screen) {
    const randomI = Math.floor(Math.random() * resultsArray.length);
    if (!nArray.includes(randomI)) {
      nArray.push(randomI);
    }
  }
  console.log(nArray);
  let num = 0;
  for (let value of nArray) {
    // const randomI = Math.floor(Math.random() * resultsArray.length);
    // console.log(randomI);
    // console.log(resultsArray);
    const city = resultsArray[value].city.name;
    const country = resultsArray[value].city.country;
    const price = resultsArray[value].priceUsd;
    imgFile = city.split(' ').join('-');
    console.log(city);

    cardsSection.innerHTML += `
      <div class="tour-card tour-card-${num + 1}" 
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
    num++;
  }
}
// CONSULTAR SI PODEMOS INTEGRAR LOS TOURS DE UNA MISMA CIUDAD EN UN SOLO OBJETO?
// LA SECCIÓN EN SI NO ES MUY DINAMICA YA QUE REQUIERE DE ESTAR ACTUALIZANDO LA PÁGINA CADA VEZ QUE SE CAMBIA DE TAMAÑO DEL VW PARA QUE MUESTRE LAS CANTIDADES DE CARDS CORRESPONDIENTES SEGÚN EL RESPONSIVE
// PS: IGUAL EL PROBLEMA SON LAS IMAGENES Y CREO QUE CAMBIANDO EL NOMBRE DE DICHAS IMAGENES Y PONIENDO UNA DISTINTA POR CADA TOUR SE PUEDE SOLUCIONAR

getInfoTours();
