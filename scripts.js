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

// Existing Snowflake Effect Integration
// This function creates a single snowflake
function createSnowflake() {
    const container = document.querySelector(".snowflakes-container");
    if (!container) return; // Exit if the container is not found

    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.width = snowflake.style.height = Math.random() * 15 + 5 + "px";
    snowflake.style.background = "linear-gradient(to bottom, red, pink)";
    container.appendChild(snowflake);

    // Removes the snowflake after it's done falling
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// This runs the snowflake creation function at a regular interval
setInterval(createSnowflake, 200);
