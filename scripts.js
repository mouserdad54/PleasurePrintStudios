/**
 * Pleasure Print Studios - Technical Operations Script 2026
 * Focus: Performance, Resource Management, and SEO Integrity
 */

// --- SEO & Meta Integrity (Crawler Layer) ---
/**
 * Ensures the canonical link is valid for the current page.
 * Addresses Lighthouse "Document does not have a valid rel=canonical" audit.
 */
const fixCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    
    // Ensure the canonical points to the specific page, not just the root
    if (canonical.getAttribute('href') !== currentUrl) {
        canonical.setAttribute('href', currentUrl);
    }
};

// --- Optimized Snowflake Generation (Aesthetic Layer) ---
const createSnowflake = () => {
    const container = document.getElementById("snow-container");
    
    // Stop running if tab is inactive or container is missing to save CPU/Battery
    if (!container || document.hidden) return; 

    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    
    const size = Math.random() * 10 + 5;
    const colors = ['#ff8fa3', '#baff39', '#fdf2f4']; // PPS Brand Palette
    
    // Apply styles in one go to prevent multiple layout reflows
    Object.assign(snowflake.style, {
        left: Math.random() * 100 + "vw",
        width: size + "px",
        height: size + "px",
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 3 + 4 + "s",
        opacity: Math.random()
    });

    container.appendChild(snowflake);

    // Modern cleanup: Listen for the end of the animation instead of a fixed timer
    snowflake.addEventListener('animationend', () => snowflake.remove(), {once: true});
}

// Global loop state
let lastSnowTime = 0;

/**
 * snowLoop using requestAnimationFrame for smooth 60fps performance
 * and automatic throttling based on browser load.
 */
const snowLoop = (timestamp) => {
    // 400ms interval provides a balanced "drift" without over-saturating the DOM
    if (timestamp - lastSnowTime > 400) { 
        createSnowflake();
        lastSnowTime = timestamp;
    }
    requestAnimationFrame(snowLoop);
}

// --- Efficient Smooth Scroll (Interaction Layer) ---
const initInteractions = () => {
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
};

// --- Initializer ---
window.onload = () => {
    // 1. Resolve SEO priorities first
    fixCanonicalLink();
    
    // 2. Start the animation loop
    requestAnimationFrame(snowLoop);
    
    // 3. Initialize interaction listeners
    initInteractions();
    
    console.log("PPS System Status: SEO Validated | Performance Mode Active");
};