const loginBtn = document.getElementById("login-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const contentFrame = document.getElementById("content-frame");
const sidebarLinks = document.querySelectorAll('.sidebar ul li');

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
// Add active class to the current button
sidebarLinks.forEach(link => {
  link.addEventListener('click', function() {
    sidebarLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});