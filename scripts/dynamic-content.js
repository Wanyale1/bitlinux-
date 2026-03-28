// dynamic-content.js

// Function to load HTML into a container
function loadHTML(containerSelector, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then(html => {
      const container = document.querySelector(containerSelector);
      if (container) container.innerHTML = html;
    })
    .catch(err => console.error(err));
}

// Load header and footer
loadHTML('header', '/partials/header.html');
loadHTML('footer', '/partials/footer.html');

// Optional: Add authentication check for protected pages
// Only redirect if page is not the home page
if (!window.location.pathname.endsWith('index.html')) {
  import('./auth.js').then(authModule => {
    authModule.checkAuth(); // make sure checkAuth is exported in auth.js
  });
}
