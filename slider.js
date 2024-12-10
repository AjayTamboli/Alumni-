// Select elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the target slide
    slides[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Add event listeners for navigation (if you plan to add buttons)
document.querySelector('.next-btn')?.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-slide on manual navigation
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
});

document.querySelector('.prev-btn')?.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-slide on manual navigation
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
});

// Initialize the slider
showSlide(currentSlide);
