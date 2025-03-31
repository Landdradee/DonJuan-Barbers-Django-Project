document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Review modal
    const reviewModal = document.getElementById('review-modal');
    const addReviewBtn = document.getElementById('add-review-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    const ratingStars = document.querySelectorAll('.rating-star');
    
    addReviewBtn?.addEventListener('click', () => {
        reviewModal.classList.remove('hidden');
        reviewModal.classList.add('flex');
    });

    closeModalBtn?.addEventListener('click', () => {
        reviewModal.classList.add('hidden');
        reviewModal.classList.remove('flex');
    });

    // Star rating system
    let currentRating = 0;
    
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars();
        });
    });

    function updateStars() {
        ratingStars.forEach((star, index) => {
            star.classList.toggle('text-yellow-400', index < currentRating);
            star.classList.toggle('text-gray-400', index >= currentRating);
        });
    }

    // Share profile functionality
    const shareBtn = document.querySelector('.share-profile-btn');
    
    shareBtn?.addEventListener('click', async () => {
        try {
            await navigator.share({
                title: document.title,
                url: window.location.href
            });
        } catch (err) {
            console.log('Share failed:', err.message);
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Profile link copied to clipboard!');
        }
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
}); 