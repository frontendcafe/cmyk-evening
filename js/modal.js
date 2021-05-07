//funcionamiento modales.
var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("myBtn");

var btn1 = document.getElementsByClassName("myBtn1");


var span = document.getElementsByClassName("close");

var modal2 = document.getElementById("modal-content-confirmada");

console.log(btn)

btn[0].onclick = function () {
  modal[0].style.display = "block";
};


btn1[0].onclick = function () {
  modal[0].style.display = "block";
};

modal2.onclick = function () {
  modal[1].style.display = "block";
  modal[0].style.display = "none";
};
// btn[1].onclick = function () {
//   modal[1].style.display = "block";
// };


span[0].onclick = function () {
  modal[0].style.display = "none";
};

span[1].onclick = function () {
  modal[1].style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

