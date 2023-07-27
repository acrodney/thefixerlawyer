
var slideIndexa = 0;
carousela();

function carousela() {
var ia;
var xa = document.getElementsByClassName("mySlides");
for (ia = 0; ia < xa.length; ia++) {
xa[ia].style.display = "none";
}
slideIndexa++;
if (slideIndexa > xa.length) {slideIndexa = 1}
xa[slideIndexa-1].style.display = "block";
setTimeout(carousela, 5000); 
}
