/* MAPAAAA */

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
    const search = window.location.search;
    console.log(search);
    const urlParams = new URLSearchParams(search);
    const id = urlParams.get('id');
    console.log(id);
  
    const tour = tours.find(tour => tour.id === id);
    console.log(JSON.stringify(tour) + 'SOY DEL  MAP')
    console.log(tour.city);
    if(tour){
      var latLongCiudad = [parseFloat(tour.city.latitude) ,parseFloat(tour.city.longitude) ];
  
    const map = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 10,
      center: { lat: latLongCiudad[0], lng: latLongCiudad[1] },
    });
    console.log(map);
      var descripcionStops = [
        [tour.stops[0].name, parseFloat(tour.stops[0].latitude), parseFloat(tour.stops[0].longitude), 0],
        [tour.stops[1].name, parseFloat(tour.stops[1].latitude), parseFloat(tour.stops[1].longitude), 1],
        [tour.stops[2].name, parseFloat(tour.stops[2].latitude), parseFloat(tour.stops[2].longitude), 2],
        [tour.stops[3].name, parseFloat(tour.stops[3].latitude), parseFloat(tour.stops[3].longitude), 3],
        [tour.stops[4].name, parseFloat(tour.stops[4].latitude), parseFloat(tour.stops[4].longitude), 4]
      ]
      setMarkers(map, descripcionStops);
    }
    // console.log(JSON.stringify(tour) + 'soy  del mapa');
  
  
  
  }
  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  //   const beaches = [
  //     ["Bondi Beach", -33.890542, 151.274856, 4],
  //     ["Coogee Beach", -33.923036, 151.259052, 5],
  //     ["Cronulla Beach", -34.028249, 151.157507, 3],
  //     ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  //     ["Maroubra Beach", -33.950198, 151.259302, 1],
  //   ];
  
  function setMarkers(map, arrayParadas) {
  
  
    for (let i = 0; i < arrayParadas.length; i++) {
        const parada = arrayParadas[i];
        new google.maps.Marker({
          position: { lat: parada[1], lng: parada[2] },
          map,
          title: parada[0],
          title: parada[0],
          zIndex: parada[3],
        });
      }
  }
  