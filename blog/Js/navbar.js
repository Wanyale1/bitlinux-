// js/navbar.js
const navbarHTML = `
<nav style="background:#2563eb; padding:15px 20px; display:flex; align-items:center; justify-content:space-between; color:white;">
  <div class="logo">
    <!-- Logo always goes to main BitLinux homepage -->
    <a href="../index.html" style="color:white; text-decoration:none; font-weight:bold; font-size:1.2rem;">BitLinux</a>
  </div>
  <div class="nav-links">
    <!-- Home goes to main BitLinux homepage -->
    <a href="../index.html" style="color:white; margin-right:15px; text-decoration:none;">Home</a>
    <!-- Blog link can stay on the blog index -->
    <a href="index.html#postsContainer" style="color:white; margin-right:15px; text-decoration:none;">Blog</a>
    <a href="..pages/about.html" style="color:white; margin-right:15px; text-decoration:none;">About</a>
    <a href="..pages/contact.html" style="color:white; text-decoration:none;">Contact</a>
  </div>
</nav>
`;

// Insert navbar at the top of the body
document.body.insertAdjacentHTML("afterbegin", navbarHTML);
