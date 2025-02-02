// Objeto com as traduções
const translations = {
  'pt-BR': {
    home: 'Home',
    services: 'Serviços',
    contact: 'Contato',
    about: 'Sobre',
    login: 'Login',
    getInTouch: 'ENTRE EM',
    contact2: 'CONTATO',
    contactInfo: 'informações de contato : Telefone regional',
    name: 'Nome',
    phone: 'Número de telefone',
    message: 'Mensagem',
    cancel: 'Cancelar',
    send: 'Enviar'
  },
  'en': {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    about: 'About',
    login: 'Login',
    getInTouch: 'GET IN',
    contact2: 'TOUCH',
    contactInfo: 'contact information : Regional phone',
    name: 'Name',
    phone: 'Phone number',
    message: 'Message',
    cancel: 'Cancel',
    send: 'Send'
  },
  'es': {
    home: 'Inicio',
    services: 'Servicios',
    contact: 'Contacto',
    about: 'Sobre',
    login: 'Iniciar Sesión',
    getInTouch: 'PÓNGASE EN',
    contact2: 'CONTACTO',
    contactInfo: 'información de contacto : Teléfono regional',
    name: 'Nombre',
    phone: 'Número de teléfono',
    message: 'Mensaje',
    cancel: 'Cancelar',
    send: 'Enviar'
  }
};

window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.style.opacity = 0;
    setTimeout(() => {
      header.style.opacity = 1;
    }, 100);
  
    const updateHeader = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
  
    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // Translation functionality
    function getUserLanguage() {
      const browserLang = navigator.language || navigator.userLanguage;
      const shortLang = browserLang.split('-')[0];
      
      // Check if we have an exact match for the browser language
      if (translations[browserLang]) {
        return browserLang;
      }
      // Check if we have a match for the short language code
      else if (translations[shortLang]) {
        return shortLang;
      }
      // Default to English if no match is found
      return 'en';
    }

    function translatePage(language) {
      const trans = translations[language];
      
      // Translate navigation items
      document.querySelector('a[title="Home"] span').textContent = trans.home;
      document.querySelector('a[title="Serviços"] span').textContent = trans.services;
      document.querySelector('a[title="Contato"] span').textContent = trans.contact;
      document.querySelector('a[title="Sobre"] span').textContent = trans.about;
      
      // Check if user is not logged in before translating login
      const loginLink = document.querySelector('a[title="Login"] span');
      if (loginLink) {
        loginLink.textContent = trans.login;
      }

      // Translate form elements
      const appTitle = document.querySelectorAll('.app-title span');
      appTitle[0].textContent = trans.getInTouch;
      appTitle[1].textContent = trans.contact2;
      
      document.querySelector('.app-contact').textContent = trans.contactInfo;
      
      // Translate form placeholders
      const inputs = document.querySelectorAll('.app-form-control');
      inputs[0].placeholder = trans.name;
      inputs[1].placeholder = 'Email';  // Email is typically the same in most languages
      inputs[2].placeholder = trans.phone;
      inputs[3].placeholder = trans.message;

      // Translate buttons
      const buttons = document.querySelectorAll('.app-form-button');
      buttons[0].textContent = trans.cancel;
      buttons[1].textContent = trans.send;
    }

    // Apply translation based on user's browser language
    const userLanguage = getUserLanguage();
    translatePage(userLanguage);
  });