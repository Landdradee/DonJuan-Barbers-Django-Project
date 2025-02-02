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
    email: 'Email',
    message: 'Mensagem',
    cancel: 'Cancelar',
    send: 'Enviar',
    address: 'Rua Example, 123 - São Paulo',
    socialFollow: 'Siga-nos nas redes sociais',
    messageSent: 'Mensagem enviada com sucesso!'
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
    email: 'Email',
    message: 'Message',
    cancel: 'Cancel',
    send: 'Send',
    address: 'Example Street, 123 - São Paulo',
    socialFollow: 'Follow us on social media',
    messageSent: 'Message sent successfully!'
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
    email: 'Correo electrónico',
    message: 'Mensaje',
    cancel: 'Cancelar',
    send: 'Enviar',
    address: 'Calle Example, 123 - São Paulo',
    socialFollow: 'Síguenos en las redes sociales',
    messageSent: 'Mensaje enviado exitosamente!'
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
      inputs[1].placeholder = trans.email;
      inputs[2].placeholder = trans.phone;
      inputs[3].placeholder = trans.message;

      // Translate buttons
      const buttons = document.querySelectorAll('.app-form-button');
      buttons[0].textContent = trans.cancel;
      buttons[1].textContent = trans.send;
    }

    // Handle form submission
    window.handleSubmit = function(event) {
      event.preventDefault();
      const submitBtn = event.target.querySelector('.btn-primary');
      const form = event.target;
      
      // Add loading state
      submitBtn.classList.add('loading');
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = trans.messageSent;
        successMsg.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(45deg, #4CAF50, #45a049);
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          animation: slideIn 0.3s ease forwards;
          z-index: 1000;
        `;
        
        document.body.appendChild(successMsg);
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
          successMsg.style.animation = 'slideOut 0.3s ease forwards';
          setTimeout(() => successMsg.remove(), 300);
        }, 3000);
      }, 1500);
      
      return false;
    };

    // Apply translation based on user's browser language
    const userLanguage = getUserLanguage();
    translatePage(userLanguage);

    // Add these animations to your CSS
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      </style>
    `);

    // Add input animations
    document.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });
  });