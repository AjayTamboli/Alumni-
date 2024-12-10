// Toggle the menu
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('.main-content');
  const body = document.body;

  // Toggle active states
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.classList.toggle('menu-active');

  // Adjust the main content's margin-top dynamically based on nav-links height
  if (navLinks.classList.contains('active')) {
    const navHeight = navLinks.offsetHeight; // Get height of nav-links
    mainContent.style.marginTop = `${navHeight + 10}px`; // Push content below nav-links with additional margin
  } else {
    mainContent.style.marginTop = '0'; // Reset content position
  }
}

// Handle dropdowns
function handleDropdowns() {
  document.querySelectorAll('.nav-item .nav-link').forEach((item) => {
    item.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) { // Allow on mobile only
        e.preventDefault();
        const parent = item.parentElement;
        parent.classList.toggle('active');
      }
    });
  });
}

// Close menu on click outside
function closeMenuOnClickOutside() {
  document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      if (navLinks.classList.contains('active')) {
        toggleMenu(); // Close the menu
      }
    }
  });
}

// Reset styles on window resize
function resetOnResize() {
  window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    const mainContent = document.querySelector('.main-content');
    const body = document.body;

    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      body.classList.remove('menu-active');
      mainContent.style.marginTop = '0'; // Reset content position
    }
  });
}

// Enable keyboard accessibility
function enableKeyboardAccessibility() {
  document.addEventListener('keydown', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Close menu with Escape key
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu();
    }

    // Open menu with Enter or Space on hamburger
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === hamburger) {
      e.preventDefault();
      toggleMenu();
    }
  });
}

// Initialize functions
function initMenu() {
  handleDropdowns();
  closeMenuOnClickOutside();
  resetOnResize();
  enableKeyboardAccessibility();
}

// Run the initializer
initMenu();

