window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpopint = 100;

        if(revealtop < windowHeight - revealpopint){
            reveals[i].classList.add('active');  
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

