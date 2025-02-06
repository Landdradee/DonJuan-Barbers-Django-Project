window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.opacity = 1;
    }, 100);
});