// ================= DYNAMIC HEADER & FOOTER =================
function loadHTML(url, placeholderId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch(err => console.error(`Failed to load ${url}:`, err));
}

// ================= HAMBURGER MENU =================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
}

// ================= FAQ TOGGLE =================
document.querySelectorAll(".faq-item h3").forEach(faq => {
  faq.addEventListener("click", () => {
    const parent = faq.parentElement;
    parent.classList.toggle("open");
  });
});

// ================= SMOOTH SCROLL (OPTIONAL) =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
