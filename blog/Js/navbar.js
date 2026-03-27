const navbarHTML = `
<nav style="background:#2563eb; padding:15px 20px; display:flex; align-items:center; justify-content:space-between; color:white;">
  <div class="logo">
    <!-- Logo goes to main homepage -->
    <a href="../index.html" style="color:white; text-decoration:none; font-weight:bold; font-size:1.2rem;">BitLinux</a>
  </div>
  <div class="nav-links">
    <!-- Home goes to main homepage -->
    <a href="../index.html" style="color:white; margin-right:15px; text-decoration:none;">Home</a>
    <!-- Blog homepage inside blog folder -->
    <a href="index.html#postsContainer" style="color:white; margin-right:15px; text-decoration:none;">Blog</a>
    <!-- Contact page inside pages folder -->
    <a href="../pages/contact.html" style="color:white; margin-right:15px; text-decoration:none;">Contact</a>
  </div>
</nav>
`;

// Insert navbar at the top of the body
document.body.insertAdjacentHTML("afterbegin", navbarHTML);
