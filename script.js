// script.js

// List of roles to cycle through
const roles = ["Graphic Designer", "IT Expert", "Android Expert"];
let currentIndex = 0;

// Function to update the role text with typewriter effect
function updateRole() {
    const roleTextElement = document.getElementById("roleText");
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < currentRole.length) {
            roleTextElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            // After typing the role, wait for 1 second and then start erasing
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            // After erasing, move to the next role and start typing again
            currentIndex = (currentIndex + 1) % roles.length;
            setTimeout(updateRole, 500);
        }
    }

    // Start the typewriter effect
    typeWriter();
}

// Start the role update when the page loads
document.addEventListener("DOMContentLoaded", updateRole);
// Get the button
var scrollToTopButton = document.getElementById("scrollToTop");

// Show/hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    
});
