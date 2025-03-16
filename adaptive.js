document.addEventListener('DOMContentLoaded', function() {
    // Device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Add device-specific classes to body
    const body = document.body;
    if (isMobile) body.classList.add('mobile-device');
    if (isTablet) body.classList.add('tablet-device');
    if (isTouchDevice) body.classList.add('touch-device');
    
    // Orientation detection
    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            body.classList.add('portrait');
            body.classList.remove('landscape');
        } else {
            body.classList.add('landscape');
            body.classList.remove('portrait');
        }
    }
    
    // Screen size detection
    function checkScreenSize() {
        const width = window.innerWidth;
        body.classList.remove('xs-screen', 'sm-screen', 'md-screen', 'lg-screen', 'xl-screen');
        
        if (width < 480) body.classList.add('xs-screen');
        else if (width < 768) body.classList.add('sm-screen');
        else if (width < 1024) body.classList.add('md-screen');
        else if (width < 1280) body.classList.add('lg-screen');
        else body.classList.add('xl-screen');
    }
    
    // Adjust font size based on container width
    function adjustFontSizes() {
        const slide = document.querySelector('.slide');
        if (!slide) return;
        
        const width = slide.offsetWidth;
        const baseSize = Math.max(14, Math.min(18, width / 40));
        
        document.documentElement.style.fontSize = `${baseSize}px`;
    }
    
    // Run checks initially and on resize/orientation change
    checkOrientation();
    checkScreenSize();
    adjustFontSizes();
    
    window.addEventListener('resize', function() {
        checkOrientation();
        checkScreenSize();
        adjustFontSizes();
    });
    
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            checkOrientation();
            checkScreenSize();
            adjustFontSizes();
        }, 100);
    });
});
