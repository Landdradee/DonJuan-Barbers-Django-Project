document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        keyboard: {
            enabled: true,
        },
        grabCursor: true,
        on: {
            init: function () {
                handleImageLoading();
            },
            slideChange: function () {
                handleImageLoading();
            }
        }
    });

    // Handle image loading
    function handleImageLoading() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img) {
                if (img.complete) {
                    img.classList.add('loaded');
                } else {
                    img.onload = function() {
                        img.classList.add('loaded');
                    };
                }
            }
        });
    }

    // Form interactions
    document.querySelectorAll('.login-form-group input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Button hover effect
    const loginButton = document.querySelector('.login-cta');
    if (loginButton) {
        loginButton.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
        });
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add smooth transitions for form elements
document.querySelectorAll('.login-form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Enhance button interactions
document.querySelector('.login-cta').addEventListener('mouseenter', function(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    
    this.style.setProperty('--x', `${x}px`);
    this.style.setProperty('--y', `${y}px`);
});

// Add loading state to form submission
document.querySelector('#messageForm').addEventListener('submit', function(e) {
    const button = this.querySelector('.login-cta');
    button.classList.add('loading');
    // Remove loading state after response (simulated here)
    setTimeout(() => button.classList.remove('loading'), 2000);
});
  