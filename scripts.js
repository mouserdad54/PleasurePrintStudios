document.addEventListener("DOMContentLoaded", () => {
    // Existing Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.querySelector("header").classList.toggle("dark-mode");
            document.querySelector("footer").classList.toggle("dark-mode");
            document.querySelectorAll("nav ul li a").forEach(link => {
                link.classList.toggle("dark-mode");
            });
        });
    }

    // Existing Parallax Effect
    window.addEventListener("scroll", () => {
        const bannerText = document.querySelector(".banner-text");
        if (bannerText) {
            const scrollPosition = window.pageYOffset;
            bannerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });

    // Existing Newsletter Form Handling
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("newsletter-email").value;
            alert(`Thank you for subscribing with ${email}!`);
            newsletterForm.reset();
        });
    }

    // **Snowflake Effect Integration**
    const container = document.createElement("div");
    container.classList.add("snowflakes-container");
    document.body.appendChild(container);

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.width = snowflake.style.height = Math.random() * 15 + 5 + "px";

        // Apply red-to-pink gradient background
        snowflake.style.background = "linear-gradient(to bottom, red, pink)";
        container.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});
