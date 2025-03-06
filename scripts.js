document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.toggle('dark-mode');
        });
    });

    // Parallax effect for banner text
    window.addEventListener('scroll', () => {
        const bannerText = document.querySelector('.banner-text');
        const scrollPosition = window.pageYOffset;
        bannerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });
});