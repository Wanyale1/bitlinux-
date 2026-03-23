//Hamburger menu JavaScript 
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  
  // Select hamburger icon and nav links
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return; // safety check

  // Toggle mobile menu on click
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // shows/hides menu
    hamburger.classList.toggle('open');   // optional for hamburger animation
  });

  // Optional: close menu when clicking a link (mobile UX)
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });

});
