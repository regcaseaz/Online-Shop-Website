document.getElementById("signup-btn").addEventListener("click", function() {
  alert("Redirecting to signup page...");
  window.location.href = "signup.html";
  // You can replace the alert with actual redirection logic
  // For example:
  // window.location.href = "signup.html";
});
// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  alert("Redirecting to home page...");
  window.location.href = "home.html";
});