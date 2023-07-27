var blink1 = function() {
    $('.iugjuiu').hide();
    setTimeout(blink2, 500);
};
var blink2 = function() {
    $('.iugjuiu').show();
    setTimeout(blink1, 600);
};

$(document).ready(function() {
    setTimeout(blink1, 1000);
});