// Objeto com as traduções
const translations = {
    'pt-BR': {
        'home-service': 'Se estilize em casa',
        'home-service-desc': 'Oferecemos serviço em casa, com o barbeiro indo até você para um corte, no conforto do seu lar.',
        'store-service': 'Atendimento no Estabelecimento',
        'store-service-desc': 'Visite um dos nossos estabelecimentos e tenha uma experiência com cortes, num ambiente criado para o seu e bem-estar.',
        'partnership': 'Parcerias',
        'partnership-desc': 'Permita-nos aumentar seu lucro, fortalecendo seu público, e dando um gás no seu negócio!',
        'become-one': 'Se torne um',
        'become-one-desc': 'Empresas parceiras podem estar procurando por novos talentos, veja se você se encaixa!',
        'schedule-now': 'Agende já!',
        'register': 'Cadastre-se'
    },
    'en': {
        'home-service': 'Style at Home',
        'home-service-desc': 'We offer home service, with the barber coming to you for a cut, in the comfort of your home.',
        'store-service': 'In-Store Service',
        'store-service-desc': 'Visit one of our establishments and have a cutting experience in an environment created for your well-being.',
        'partnership': 'Partnerships',
        'partnership-desc': 'Let us increase your profit, strengthening your audience, and giving your business a boost!',
        'become-one': 'Become One',
        'become-one-desc': 'Partner companies may be looking for new talent, see if you fit in!',
        'schedule-now': 'Schedule Now!',
        'register': 'Register'
    },
    'es': {
        'home-service': 'Estilízate en Casa',
        'home-service-desc': 'Ofrecemos servicio a domicilio, con el barbero yendo a tu casa para un corte, en la comodidad de tu hogar.',
        'store-service': 'Servicio en el Establecimiento',
        'store-service-desc': 'Visita uno de nuestros establecimientos y ten una experiencia de corte en un ambiente creado para tu bienestar.',
        'partnership': 'Asociaciones',
        'partnership-desc': '¡Permítanos aumentar sus ganancias, fortalecer su audiencia y dar un impulso a su negocio!',
        'become-one': 'Conviértete en Uno',
        'become-one-desc': '¡Las empresas asociadas pueden estar buscando nuevos talentos, mira si encajas!',
        'schedule-now': '¡Agenda Ahora!',
        'register': 'Regístrate'
    }
};

// Função para detectar o idioma do navegador
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];
    
    // Verifica se temos tradução para o idioma detectado
    if (translations[browserLang]) {
        return browserLang;
    } else if (translations[shortLang]) {
        return shortLang;
    }
    
    // Retorna o idioma padrão se não houver tradução
    return document.documentElement.getAttribute('data-default-lang') || 'pt-BR';
}

// Função para traduzir a página
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Atualiza o atributo lang do HTML
    document.documentElement.lang = language;
}

// Inicializa a tradução quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const userLanguage = detectLanguage();
    translatePage(userLanguage);
});
