// Typewriter Effect
const textElement = document.querySelector('header p');
const text = "B.Tech Student & Game Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Slider Logic
let currentSlide = 0;
// We use querySelectorAll because you have multiple slider divs
const slider = document.getElementById('slider'); 
const totalSlides = 3; // You have 2 images + 1 video

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Fancybox Initialization (For the Zoom)
document.addEventListener("DOMContentLoaded", function() {
    Fancybox.bind("[data-fancybox]", {
        infinite: true,
    });
    
    // Start Typewriter
    textElement.innerHTML = "";
    typeWriter();
});

// Scroll Effects
window.addEventListener('scroll', function() {
    const mainName = document.getElementById('main-name');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
        mainName.style.opacity = (1 - scrollPosition / 600);
        mainName.style.filter = `blur(${scrollPosition / 50}px)`;
        mainName.style.transform = `scale(${1 + scrollPosition / 1000})`;
    } else {
        mainName.style.opacity = 1;
        mainName.style.filter = `blur(0px)`;
        mainName.style.transform = 'scale(1)';
    }
});