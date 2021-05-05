function displayCardsByCountry(pais) {
  bestTours.innerText = pais;
  if (allTours.classList.contains('invisible')) {
    allTours.classList.add('btn-text');
    allTours.classList.remove('invisible');
  }

  cardsSection.innerHTML = '';
  console.log(resultsArray);
  resultsArray.forEach((tour, i) => {
    if (tour.city.country.toLowerCase() === pais.toLowerCase()) {
      console.log(tour.city.name);
      cardsSection.innerHTML += `
      <div class="tour-card tour-card-${i + 1}" data-tourID="${tour.id}" 
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
    }
  });
}

arg.addEventListener('click', function () {
  displayCardsByCountry('Argentina');
});
mex.addEventListener('click', function () {
  displayCardsByCountry('México');
});
per.addEventListener('click', function () {
  displayCardsByCountry('Perú');
});
chi.addEventListener('click', function () {
  displayCardsByCountry('Chile');
});
ita.addEventListener('click', function () {
  displayCardsByCountry('Italia');
});
