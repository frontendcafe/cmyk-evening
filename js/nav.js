const boton = document.getElementById("toggle-menu");
function ToggleMenu(){
    var menu = document.getElementById("nav-desplegable");
    var imgCruz = document.getElementById("img-cruz");
    var imgHamb = document.getElementById("img-hamburguesa");
    if(menu.style.display === "block"){
        menu.style.display = "none";
        imgCruz.style.display = "none";
        imgHamb.style.display = "block";

    } else{
        menu.style.display = "block";
        imgCruz.style.display = "block";
        imgHamb.style.display = "none";
    }
}


boton.addEventListener('click', ToggleMenu);
