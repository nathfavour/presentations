document.addEventListener('DOMContentLoaded', function() {
    // Only add mobile navigation on small screens
    if (window.innerWidth <= 768) {
        // Create mobile navigation menu
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        const slideIndicator = document.createElement('div');
        slideIndicator.className = 'slide-indicator';
        
        // Get current slide number
        const currentPath = window.location.pathname;
        const currentSlide = parseInt(currentPath.match(/slide(\d+)\.html/)[1]);
        
        // Create indicator dots for all slides
        for (let i = 1; i <= 10; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            if (i === currentSlide) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', function() {
                window.location.href = `slide${i}.html`;
            });
            
            slideIndicator.appendChild(dot);
        }
        
        mobileNav.appendChild(slideIndicator);
        document.body.appendChild(mobileNav);
        
        // Create help message
        const helpMsg = document.createElement('div');
        helpMsg.className = 'mobile-help';
        helpMsg.textContent = 'Swipe left/right to navigate';
        helpMsg.style.opacity = '1';
        document.body.appendChild(helpMsg);
        
        // Fade out help message after a few seconds
        setTimeout(function() {
            helpMsg.style.opacity = '0';
            setTimeout(function() {
                helpMsg.remove();
            }, 1000);
        }, 3000);
    }
});
