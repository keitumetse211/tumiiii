let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add "active" class to the current dot
    dots[slideIndex - 1].className += " active"; 

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000); 
}
