// function addTourToDom(tour) {
//   descriptionSection.innerHTML = `<p>Hola Mundo!</p>`;
// }
const cardsSection = document.querySelector('#cards-section');
const descriptionSection = document.getElementById('tour-details');
const data = JSON.parse(localStorage.getItem('data'));

function getTourById(id) {
  window.location.assign(`/details.html?id=${id}`);
  console.log('hola');
  // const tourSelected = resultsArray.find(tour => (tour.id === id));
  // addTourToDom(tourSelected);

  console.log(descriptionSection);
}

console.log(window.location.pathname);

if (window.location.pathname === '/details.html') {
  console.log(data);
  console.log(descriptionSection);
}

cardsSection.addEventListener('click', e => {
  const tourInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('tour-card');
    } else {
      return false;
    }
  });

  if (tourInfo) {
    const tourID = tourInfo.getAttribute('data-tourID');
    getTourById(tourID);
  }
});

// window.location.replace(/details.html?id=${id})

// const search = window.location.search
// const urlParams = new URLSearchParams(search)
// const id = urlParams.get('id')

// window.location.replace(/details.html?id=${id})

// cardsSection.innerHTML +=

// <div class="city-country">${resultsArray[value].city.country}</div>
// <div class="city-name">${resultsArray[value].city.name}</div>
// <div class="description-travel">
//   <div class="details">
//     <p id="sobre-el-tour">Sobre el tour</p>
//     <p>${resultsArray[value].description}</p>
//     <div class="information-tour">
//       <div class="information">
//         <p class="subtitle">Informacion antes del Tour</p>
//         <p class="time-out">Hora de salida: ${resultsArray[value].starDate}</p>
//         <p class="durationHs">Duración: ${resultsArray[value].durationHs} horas</p>
//         <p>Confirmación Instantánea</p>
//       </div>
//       <div class="information">
//         <p class="subtitle">Detalles de Salida</p>
//         <p class="stop-name">${resultsArray[value].stops[0].name}</p>
//       </div>
//       <div class="information">
//         <p class="subtitle">Incluye</p>
//         <p class="inlude">${resultsArray[value].include}</p>
//       </div>
//       <div class="information">
//         <p class="subtitle">Detalles de Llegada</p>
//         <p class="arrive-name">${resultsArray[value].stops[5].name}</p>
//       </div>
//     </div>
//   </div>
// ;
