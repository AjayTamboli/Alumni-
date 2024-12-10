document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider1 .slide1');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Function to update the visibility of slides
    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('active2');
            if (index === currentIndex) {
                slide.classList.add('active2');
            }
        });
    };

    // Add event listeners to navigation buttons
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Initialize the slider by activating the first slide
    updateSlider();
});
