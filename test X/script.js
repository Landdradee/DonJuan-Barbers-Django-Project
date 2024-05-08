window.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
  
    // Initial style for smooth header reveal on load
    header.style.opacity = 0; // Start header as transparent
    setTimeout(() => {
      header.style.opacity = 1; // Gradually transition to opaque on load
    }, 100); // Adjust delay (in milliseconds) for desired transition speed
  
    const scrollY = window.scrollY || document.documentElement.scrollTop; // Get initial scroll position
    if (scrollY > 50) {
      header.classList.add('sticky');
    }
  });
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  