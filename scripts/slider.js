var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.display = "block";
}
slides[currentSlide].style.display = "block";

setInterval(showSlide, 5000);
