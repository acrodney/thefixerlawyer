<script type="text/javascript">
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
</script>

<!---For the Slider Text-->
<script type="text/javascript">
var slideIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("wordscript");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].style.display = "block";
setTimeout(carousel, 5000); // Change image every 2 seconds
}
</script>