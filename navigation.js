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
    
    function navigateToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > 10) return;
        window.location.href = `slide${slideNumber}.html`;
    }
});
