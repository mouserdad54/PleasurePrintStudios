document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded: Age Verification should be visible.");

    const ageVerification = document.getElementById("age-verification");
    const mainContent = document.getElementById("main-content");
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");

    if (!ageVerification || !mainContent || !yesButton || !noButton) {
        console.error("Error: One or more elements are missing!");
        return;
    }

    console.log("Elements found successfully, setting initial display states...");
    ageVerification.style.display = "flex";
    mainContent.style.display = "none"; // Ensure content starts hidden

    yesButton.addEventListener("click", () => {
        console.log("User clicked YES - hiding popup & showing content.");
        ageVerification.style.display = "none"; // This should hide the popup
        ageVerification.remove(); // This completely removes the element
        mainContent.style.display = "block"; // This ensures the content is visible
    });
    
    noButton.addEventListener("click", () => {
        console.log("User clicked NO - redirecting.");
        alert("You must be 18 or older to enter.");
        window.location.href = "https://www.google.com";
    });
});


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

    // **Age Verification Logic Fix**
    const ageVerification = document.getElementById("age-verification");
    const mainContent = document.getElementById("main-content");
    const yesButton = document.querySelector("#age-verification button:nth-child(1)");
    const noButton = document.querySelector("#age-verification button:nth-child(2)");

    if (yesButton && noButton) {
        yesButton.addEventListener("click", () => {
            ageVerification.style.display = "none";
            mainContent.style.display = "block";
        });

        noButton.addEventListener("click", () => {
            alert("You must be 18 or older to enter.");
            window.location.href = "https://www.google.com"; // Redirect away
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
