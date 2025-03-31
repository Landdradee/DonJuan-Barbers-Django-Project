// Smooth fade-in animation for elements
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate numbers counter
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize animations when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Fade in header with delay
    const header = document.querySelector('.header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.opacity = 1;
        header.classList.add('fade-in-visible');
    }, 100);

    // Add fade-in animation to all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        fadeInObserver.observe(element);
    });

    // Initialize counters
    const counterElements = document.querySelectorAll('.counter-number');
    counterElements.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateValue(counter, 0, target, 2000);
    });

    // Initialize parallax effect for images
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});