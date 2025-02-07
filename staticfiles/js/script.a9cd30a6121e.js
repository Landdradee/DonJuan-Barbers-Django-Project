// Add polyfill for older browsers
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

document.addEventListener('DOMContentLoaded', function() {
    const stopMotionToggle = document.getElementById('stopMotion');
    const video = document.getElementById('bgVideo');
    const wrapper = document.querySelector('.wrapper');
    const videoControls = document.querySelector('.video-controls');

    // Function to handle stop motion toggle
    function handleStopMotion(isEnabled) {
        if (isEnabled) {
            // Fade out video first
            video.style.opacity = '0';
            
            // After video fades out, add stop-motion classes
            setTimeout(() => {
                video.classList.add('hidden');
                wrapper.classList.add('stop-motion');
                videoControls.classList.add('stop-motion');
                video.pause();
                
                // Add smooth transition for background
                wrapper.style.transition = 'background 0.3s ease-in-out';
            }, 300);
        } else {
            // Remove stop-motion classes first
            wrapper.classList.remove('stop-motion');
            videoControls.classList.remove('stop-motion');
            video.classList.remove('hidden');
            
            // Start playing video and fade it in
            video.play().then(() => {
                setTimeout(() => {
                    video.style.opacity = '1';
                }, 50);
            }).catch(error => {
                console.warn('Video playback failed:', error);
                showFallback();
            });
        }
    }

    // Check if there's a saved preference
    const savedPreference = localStorage.getItem('stopMotion');
    if (savedPreference === 'true') {
        stopMotionToggle.checked = true;
        handleStopMotion(true);
    }

    // Add event listener for toggle changes
    stopMotionToggle.addEventListener('change', function(e) {
        handleStopMotion(e.target.checked);
        // Save preference
        localStorage.setItem('stopMotion', e.target.checked);
    });

    // Typing animation
    function setupTypingAnimation() {
        const typingElement = document.querySelector('.typing-demo');
        if (!typingElement) return;

        // Get the text content
        const text = typingElement.textContent;
        const charCount = text.length;

        // Make animation faster by reducing the multiplier from 0.1 to 0.05
        // and minimum duration from 2 to 1 second
        const duration = Math.max(charCount * 0.05, 1); // Faster typing speed

        // Get the final width
        const finalWidth = `${typingElement.offsetWidth}px`;

        // Set CSS variables
        typingElement.style.setProperty('--char-count', charCount);
        typingElement.style.setProperty('--typing-duration', `${duration}s`);
        typingElement.style.setProperty('--final-width', finalWidth);

        // Reset the element
        typingElement.style.width = '0';

        // Force a reflow
        void typingElement.offsetWidth;

        // Add the animation class
        typingElement.classList.add('animate');

        // Reset animation when it ends
        typingElement.addEventListener('animationend', function(e) {
            if (e.animationName === 'typing-dynamic') {
                typingElement.style.width = finalWidth;
            }
        });
    }

    // Run the typing animation setup
    setupTypingAnimation();

    // Optional: Reset and replay animation on click
    document.querySelector('.typing-demo')?.addEventListener('click', function() {
        this.classList.remove('animate');
        void this.offsetWidth; // Force reflow
        this.classList.add('animate');
    });

    // Improved video fallback handling
    function setupVideoFallback() {
        if (!video) return;

        // Prevent FOUC (Flash of Unstyled Content)
        video.style.opacity = '0';
        
        // Handle video loading
        function handleVideoLoad() {
            video.style.opacity = '1';
            video.play().catch(error => {
                console.warn('Autoplay failed:', error);
                video.muted = true;
                video.play().catch(() => showFallback());
            });
        }

        // Handle loading errors
        function handleError(e) {
            console.warn('Video loading error:', e);
            showFallback();
        }

        // Add event listeners
        video.addEventListener('loadedmetadata', handleVideoLoad);
        video.addEventListener('error', handleError, true);

        // Handle source-specific errors
        const sources = video.getElementsByTagName('source');
        let sourcesFailed = 0;
        
        Array.from(sources).forEach(source => {
            source.addEventListener('error', function(e) {
                console.warn('Source error:', e);
                sourcesFailed++;
                if (sourcesFailed === sources.length) {
                    handleError(e);
                }
            });
        });
    }

    function showFallback() {
        if (!video || !wrapper) return;
        
        // Hide video gracefully
        video.style.opacity = '0';
        setTimeout(() => {
            video.style.display = 'none';
            
            // Add stop-motion class for the grey background
            wrapper.classList.add('stop-motion');
            videoControls.classList.add('stop-motion');
            
            // Add fallback message if needed
            const fallback = document.querySelector('.video-fallback');
            if (fallback) {
                fallback.style.display = 'block';
            }
        }, 300);
    }

    // Initialize video system
    setupVideoFallback();

    // Add requestAnimationFrame polyfill
    const requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // Use requestAnimFrame for smooth animations
    function animate(element, property, start, end, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            element.style[property] = start + (end - start) * progress;

            if (progress < 1) {
                requestAnimFrame(() => update(performance.now()));
            }
        }

        requestAnimFrame(() => update(performance.now()));
    }

    // Add image preloading
    function preloadImages() {
        const posterImage = new Image();
        posterImage.src = video?.poster || '';
        posterImage.onerror = () => {
            console.warn('Failed to load poster image');
            video.removeAttribute('poster');
        };
    }

    // Call preloadImages after DOM content loaded
    preloadImages();

    // Video loading handler
    if (video) {
        // Force load video if not started automatically
        const loadVideo = () => {
            video.load();
            video.play().catch(function(error) {
                console.log("Video play failed:", error);
                // Add error class to trigger fallback
                video.classList.add('error');
            });
        };

        // Check if video is already playing
        if (video.paused) {
            loadVideo();
        }

        // Show video once it's playing
        video.addEventListener('playing', function() {
            video.style.opacity = '1';
        });

        // Handle video errors
        video.addEventListener('error', function(e) {
            console.log("Video error:", e);
            video.classList.add('error');
        });

        // Try loading video again if initial load failed
        setTimeout(() => {
            if (video.paused && !video.classList.contains('error')) {
                loadVideo();
            }
        }, 1000);
    }
});