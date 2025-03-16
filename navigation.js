document.addEventListener('DOMContentLoaded', function() {
    // Get current slide number
    const currentPath = window.location.pathname;
    const currentSlide = parseInt(currentPath.match(/slide(\d+)\.html/)[1]);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            navigateToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            navigateToSlide(currentSlide - 1);
        }
    });
    
    // Add click navigation
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            navigateToSlide(currentSlide - 1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            navigateToSlide(currentSlide + 1);
        });
    }
    
    // Add touch swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const threshold = 50; // Minimum swipe distance
        if (touchEndX < touchStartX - threshold) {
            // Swipe left to right
            navigateToSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX + threshold) {
            // Swipe right to left
            navigateToSlide(currentSlide - 1);
        }
    }
    
    function navigateToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > 10) return;
        window.location.href = `slide${slideNumber}.html`;
    }
    
    // Ensure content fits on screen
    const adjustContentSize = function() {
        const slide = document.querySelector('.slide');
        const content = document.querySelector('.content');
        
        if (window.innerHeight < 500) {
            slide.style.height = 'auto';
            slide.style.overflowY = 'auto';
        } else {
            slide.style.height = '80vh';
            slide.style.overflowY = 'hidden';
        }
    };
    
    // Run on load and resize
    adjustContentSize();
    window.addEventListener('resize', adjustContentSize);
});
