// --- High-Performance Kawaii Snowflake Effect ---
const createSnowflake = () => {
    const container = document.getElementById("snow-container");
    if (!container || document.hidden) return; // Stop running if tab is inactive

    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    
    const size = Math.random() * 10 + 5;
    const colors = ['#ff8fa3', '#baff39', '#fdf2f4'];
    
    // Apply styles in one go to prevent multiple layout shifts
    Object.assign(snowflake.style, {
        left: Math.random() * 100 + "vw",
        width: size + "px",
        height: size + "px",
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 3 + 4 + "s",
        opacity: Math.random()
    });

    container.appendChild(snowflake);

    // Modern cleanup: Listen for the end of the animation instead of a timer
    snowflake.addEventListener('animationend', () => snowflake.remove(), {once: true});
}

// Only spawn snow if the browser isn't struggling
let lastSnowTime = 0;
const snowLoop = (timestamp) => {
    if (timestamp - lastSnowTime > 400) { // Slightly slower interval for better performance
        createSnowflake();
        lastSnowTime = timestamp;
    }
    requestAnimationFrame(snowLoop);
}
requestAnimationFrame(snowLoop);

// --- Efficient Smooth Scroll ---
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});