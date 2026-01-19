// --- Kawaii Snowflake Effect ---
function createSnowflake() {
    const container = document.querySelector(".snowflakes-container");
    if (!container) return; 

    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    
    // Randomize position and size
    const size = Math.random() * 10 + 5 + "px";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.width = size;
    snowflake.style.height = size;
    
    // Use your brand colors: Kawaii Pink and Lime
    const colors = ['#ff8fa3', '#baff39', '#fdf2f4'];
    snowflake.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Randomize fall speed
    snowflake.style.animationDuration = Math.random() * 3 + 4 + "s"; 
    snowflake.style.opacity = Math.random();

    container.appendChild(snowflake);

    // Remove snowflake after it falls to keep the site fast
    setTimeout(() => {
        snowflake.remove();
    }, 6000);
}

// Start the snow
setInterval(createSnowflake, 300);

// --- Smooth Scroll for "Shop Now" buttons ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});