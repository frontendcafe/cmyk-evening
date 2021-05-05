const apiURL = '../data/tour_destinos.json';

let resultsArray = [];

const cardsSection = document.querySelector('#cards-section');
const allTours = document.querySelector('#allTours');
const bestTours = document.querySelector('.third-title');
const arg = document.querySelector('#tours-arg');
const mex = document.querySelector('#tours-mex');
const per = document.querySelector('#tours-per');
const chi = document.querySelector('#tours-chi');
const ita = document.querySelector('#tours-ita');

const mobile = 3;
const tablet = 4;
const desktop = 6;

// Obtener info del JSON
async function getInfoTours() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    localStorage.setItem('data', JSON.stringify(resultsArray));

    displayCards();
  } catch (error) {
    console.log(error);
  }
}

let all = false;
function displayCards() {
  let screen;
  const sizeVW = window.innerWidth;
  console.log(sizeVW);
  if (sizeVW < 769) {
    screen = mobile;
  } else if ((769 <= sizeVW) & (sizeVW < 1137)) {
    screen = tablet;
  } else if (1137 <= sizeVW) {
    screen = desktop;
  }
  console.log(screen);

  const nArray = [];

  if (all) {
    nArray.push(...resultsArray);
    console.log(nArray);
    console.log(resultsArray);
  } else {
    while (nArray.length < screen) {
      const randomI = Math.floor(Math.random() * resultsArray.length);
      if (!nArray.includes(randomI)) {
        nArray.push(randomI);
      }
    }
  }
  console.log(nArray);

  let num = 0;
  cardsSection.innerHTML = '';
  for (let value of nArray) {
    // const randomI = Math.floor(Math.random() * resultsArray.length);
    // console.log(randomI);
    // console.log(resultsArray);
    const city = resultsArray[value].city.name;
    const country = resultsArray[value].city.country;
    const tourName = resultsArray[value].tourName;
    const price = resultsArray[value].priceUsd;
    const imgFile = resultsArray[value].img;
    const tourID = resultsArray[value].id;

    console.log(tourID);

    cardsSection.innerHTML += `
      <div class="tour-card tour-card-${num + 1}" data-tourID="${tourID}"
        style="background:#fff url(${imgFile}) no-repeat center;">
        <div class="card-content">
          <div class="first-content">
            <span class="tour-price">$${price}</span>
          </div>
          <div class="second-content">
            <h6 class="card-country">${country}</h6>
            <h3 class="card-place">${city}</h3>
            <h6 class="card-country">${tourName}</h6>
          </div>
        </div>
      </div>
    `;
    num++;
  }
}

function displayAllCards(e) {
  e.preventDefault();
  bestTours.innerText = 'Todos nuestros tours';
  allTours.classList.remove('btn-text');
  allTours.classList.add('invisible');

  cardsSection.innerHTML = '';
  console.log(resultsArray);
  resultsArray.forEach((tour, i) => {
    cardsSection.innerHTML += `
      <div class="tour-card tour-card-${i + 1}" 
        style="background:#fff url(${tour.img}) no-repeat center;">
        <div class="card-content">
          <div class="first-content">
            <span class="tour-price">$${tour.priceUsd}</span>
          </div>
          <div class="second-content">
            <h6 class="card-country">${tour.city.country}</h6>
            <h3 class="card-place">${tour.city.name}</h3>
            <h6 class="card-country">${tour.tourName}</h6>
          </div>
        </div>
      </div>
    `;
  });
}

// function displayCardsByCountry(pais) {
//   // e.preventDefault();
//   bestTours.innerText = pais;
//   if(allTours.classList.contains('invisible')){
//     allTours.classList.add('btn-text');
//     allTours.classList.remove('invisible');
//   }

//   cardsSection.innerHTML = '';
//   console.log(resultsArray);
//   resultsArray.forEach((tour, i) => {

//     if(tour.city.country.toLowerCase() === pais.toLowerCase()){
//       console.log(tour.city.name);
//       cardsSection.innerHTML += `
//       <div class="tour-card tour-card-${i + 1}"
//         style="background:#fff url(${tour.img}) no-repeat center;">
//         <div class="card-content">
//           <div class="first-content">
//             <span class="tour-price">$${tour.priceUsd}</span>
//           </div>
//           <div class="second-content">
//             <h6 class="card-country">${tour.city.country}</h6>
//             <h3 class="card-place">${tour.city.name}</h3>
//             <h6 class="card-country">${tour.tourName}</h6>
//           </div>
//         </div>
//       </div>
//     `;
//     }

//   });
// }

allTours.addEventListener('click', displayAllCards);
window.addEventListener('resize', displayCards);
// arg.addEventListener('click', function(){
//   displayCardsByCountry('Argentina')
// });
// mex.addEventListener('click', function(){
//   displayCardsByCountry('México')
// });
// per.addEventListener('click', function(){
//   displayCardsByCountry('Perú')
// });
// chi.addEventListener('click', function(){
//   displayCardsByCountry('Chile')
// });
// ita.addEventListener('click', function(){
//   displayCardsByCountry('Italia')
// });
getInfoTours();

//CALENDARIO 

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let addYear = date.getFullYear();

  document.querySelector(".date h3").innerHTML =
    months[date.getMonth()] + " " + addYear;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
