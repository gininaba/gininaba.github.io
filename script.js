// script.js

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

document.addEventListener("DOMContentLoaded", function () {
    // Array of skills to cycle through
    const skills = ["Graphic Designer", "IT Expert", "Android Expert"];

    // Get the element to update
    const skillsText = document.getElementById("skillsText");

    // Function to update skills text with animation
    function updateSkills() {
        let currentIndex = 0;

        setInterval(function () {
            const currentSkill = skills[currentIndex];
            skillsText.textContent = currentSkill;

            // Generate a random RGB color
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

            // Apply the color to the text
            skillsText.style.color = randomColor;

            currentIndex = (currentIndex + 1) % skills.length;
        }, 1000); // Change the interval (in milliseconds) as needed
    }

    // Call the function to start the animation
    updateSkills();
});
