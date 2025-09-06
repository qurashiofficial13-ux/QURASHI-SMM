document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Admin credentials
  const adminEmail = "akkiller612@gmail.com";
  const adminPassword = "admin123";

  if (email === adminEmail && password === adminPassword) {
    // Redirect admin
    window.location.href = "admin.html";
  } else {
    // Redirect normal user
    window.location.href = "dashboard.html";
  }
});
