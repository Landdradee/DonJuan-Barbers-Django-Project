document.addEventListener('DOMContentLoaded', function() {
    // Get user's browser language
    const userLang = navigator.language || navigator.userLanguage;
    const currentPath = window.location.pathname;
    
    // Function to set language cookie
    function setLanguageCookie(lang) {
        document.cookie = `django_language=${lang}; path=/; max-age=31536000`; // Cookie expires in 1 year
    }

    // Function to get current language from cookie
    function getLanguageCookie() {
        const name = "django_language=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    // If no language cookie is set, set it based on browser language
    if (!getLanguageCookie()) {
        let lang = userLang.toLowerCase().split('-')[0];
        // Add your supported languages here
        const supportedLanguages = ['pt', 'en', 'es'];
        
        if (!supportedLanguages.includes(lang)) {
            lang = 'en'; // Default to English if language is not supported
        }
        
        setLanguageCookie(lang);
        if (!currentPath.startsWith('/' + lang + '/')) {
            window.location.reload();
        }
    }
}); 