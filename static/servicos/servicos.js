// Remove all translation-related code and keep only essential functionality
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading screen
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 500);
    }

    // Improved mobile menu handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.navigation');
    const body = document.body;
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navigation.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking navigation items
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Add touch event handling for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;

        // If scrolling up significantly while at top, show header
        if (diff < -50 && window.scrollY < 100) {
            header.style.transform = 'translateY(0)';
        }
    }, { passive: true });

    // Header scroll effect with throttle
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    function handleScroll() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        header.style.background = currentScroll > 50 
            ? 'rgba(18, 18, 18, 0.98)'
            : 'rgba(18, 18, 18, 0.95)';
            
        lastScroll = currentScroll;
    }

    // Throttle scroll event
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                handleScroll();
                scrollTimeout = null;
            }, 100);
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('loading');
            setTimeout(() => this.classList.remove('loading'), 1000);
        });
    });

    // Service booking buttons
    const bookingButtons = document.querySelectorAll('.service-card .btn');
    bookingButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.booking').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
});
