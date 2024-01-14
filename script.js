// script.js

const roles = ["Graphic Designer", "Android Expert", "IT Expert"];
let currentIndex = 0;

function updateRole() {
    const roleTextElement = document.getElementById("roleText");
    const articleTextElement = document.getElementById("articleText");
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    function determineArticle(role) {
        // Function to determine whether to use "A" or "An" based on the first letter of the role
        return role && /^[aeiou]/i.test(role) ? "An" : "A";
    }

    function typeWriter() {
        if (charIndex < currentRole.length) {
            roleTextElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            currentIndex = (currentIndex + 1) % roles.length;
            const article = determineArticle(roles[currentIndex]);
            articleTextElement.textContent = `${article} `;
            setTimeout(updateRole, 500);
        }
    }

    // Initialize the fixed article with the first role
    const initialArticle = determineArticle(roles[currentIndex]);
    articleTextElement.textContent = `${initialArticle} `;

    typeWriter();
}

document.addEventListener("DOMContentLoaded", updateRole);

const scrollToTopButton = document.getElementById("scrollToTop");
const SCROLL_THRESHOLD = 20;
const SCROLL_TOP_DURATION = 500;

window.onscroll = function () {
    scrollToTopButton.style.display = (document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD) ? "block" : "none";
};

scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
