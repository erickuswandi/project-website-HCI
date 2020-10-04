
var slide_ke = 1;  
displaySlides(slide_ke);  

function nextSlide(n) {  
    displaySlides(slide_ke += n);  
}  

function displaySlides(n) {  
    var i;  
    if (n > $(".slideimage").length) {
        slide_ke = 1 
    }  
    if (n < 1) {
        slide_ke = $(".slideimage").length
    }  
    for (i = 0; i < $(".slideimage").length; i++) {  
        $(".slideimage")[i].style.display = "none";  
    }  
    $(".slideimage")[slide_ke - 1].style.display = "block";  
}  
