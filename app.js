// app.js

// Smooth scroll effect for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('nav a');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});
