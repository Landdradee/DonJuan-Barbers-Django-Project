window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.style.opacity = 0;
    setTimeout(() => {
      header.style.opacity = 1;
    }, 100);
  
    function getUserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0];
        
        if (translations[browserLang]) {
            return browserLang;
        }
        else if (translations[shortLang]) {
            return shortLang;
        }
        return 'pt-BR';
    }

    function updatePageContent(lang) {
        const content = translations[lang];
        
        document.querySelector('.sec-title .title').textContent = content.about;
        
        const pioneerTitle = document.querySelector('.sec-title h2');
        pioneerTitle.innerHTML = `${content.pioneers} <br> ${content.marketTitle}`;
        
        document.querySelector('.text').textContent = content.description;
        document.querySelector('.theme-btn').textContent = content.readMore;
        
        const yearBox = document.querySelector('.year-box');
        yearBox.innerHTML = `<span class="number">1</span> ${content.experience} <br> ${content.experienceText} <br> ${content.sector}`;
    }

    const userLang = getUserLanguage();
    updatePageContent(userLang);
});