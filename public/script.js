const loginBtn = document.getElementById("login-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const contentFrame = document.getElementById("content-frame");

loginBtn.addEventListener("click", function() {
  contentFrame.src = "login.html"; // Open login.html in content-frame
});

darkModeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});

document.addEventListener('DOMContentLoaded', function() {
});
// Function to trigger the animation on successful login
function expandContentFrame() {
  overlay.style.display = 'block';
  contentFrame.classList.add('fullscreen');
}

// Simulating successful login
loginBtn.addEventListener("click", function() {
  setTimeout(expandContentFrame, 0); 
});