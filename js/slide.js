var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slide = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds

};