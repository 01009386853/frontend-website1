// element reveal



function revealTop(){
    var reveals = document.querySelectorAll('.revealTotop');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealZoom(){
    var reveals = document.querySelectorAll('.revealTozoom');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealRight(){
    var reveals = document.querySelectorAll('.revealToright');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealLeft(){
    var reveals = document.querySelectorAll('.revealToleft');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

window.addEventListener('scroll', revealTop);
window.addEventListener('scroll', revealZoom);
window.addEventListener('scroll', revealRight);
window.addEventListener('scroll', revealLeft);





function revealTop1(){
    var reveals = document.querySelectorAll('.revealTotop1');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealZoom1(){
    var reveals = document.querySelectorAll('.revealTozoom1');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealRight1(){
    var reveals = document.querySelectorAll('.revealToright1');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

function revealLeft1(){
    var reveals = document.querySelectorAll('.revealToleft1');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        // var revealpoint = 150;

        if(revealtop < windowheight){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

window.addEventListener('scroll', revealTop1);
window.addEventListener('scroll', revealZoom1);
window.addEventListener('scroll', revealRight1);
window.addEventListener('scroll', revealLeft1);