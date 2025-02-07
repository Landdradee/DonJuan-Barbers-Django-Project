const barbers = [
    { name: "João Silva", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Pedro Santos", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Carlos Oliveira", image: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const reviewTemplates = [
    "Excelente corte com {barber}! Profissionalismo e atenção aos detalhes.",
    "Muito satisfeito com o trabalho do {barber}. Ambiente incrível!",
    "O {barber} entendeu exatamente o que eu queria. Recomendo!",
    "Melhor barbearia da cidade! {barber} é muito talentoso.",
    "Atendimento de primeira com {barber}. Voltarei sempre!"
];

function generateRandomReview() {
    const barber = barbers[Math.floor(Math.random() * barbers.length)];
    const template = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
    const review = template.replace("{barber}", barber.name);
    
    return {
        barber: barber,
        review: review,
        date: new Date()
    };
}

function updateCompanyAge() {
    const startDate = new Date('2024-03-13');
    const currentDate = new Date();
    
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const remainingDays = diffDays % 30;
    
    document.getElementById('company-age').innerHTML = `
        <div class="counter-item">
            <span class="counter-number">${months}</span>
            <span class="counter-label">Meses</span>
        </div>
        <div class="counter-item">
            <span class="counter-number">${remainingDays}</span>
            <span class="counter-label">Dias</span>
        </div>
        <div class="counter-item">
            <span class="counter-number">${diffDays}</span>
            <span class="counter-label">Total de Dias</span>
        </div>
    `;
}

function addNewTestimonial() {
    const review = generateRandomReview();
    const testimonialsList = document.getElementById('testimonials-list');
    
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial-card fade-in';
    testimonialElement.innerHTML = `
        <img src="${review.barber.image}" alt="${review.barber.name}" class="testimonial-image">
        <div class="testimonial-content">
            <p class="testimonial-text">${review.review}</p>
            <p class="testimonial-author">- ${review.barber.name}</p>
            <p class="testimonial-time">Agora mesmo</p>
        </div>
    `;
    
    testimonialsList.insertBefore(testimonialElement, testimonialsList.firstChild);
    
    if (testimonialsList.children.length > 5) {
        testimonialsList.removeChild(testimonialsList.lastChild);
    }
}

// Fake users data for testimonials
const fakeUsers = [
    { name: 'João Silva', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 5 },
    { name: 'Pedro Santos', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', rating: 4 },
    { name: 'Carlos Oliveira', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', rating: 5 },
    // Add more users as needed
];

const testimonialMessages = [
    "Melhor barbearia da cidade! O atendimento é excepcional.",
    "Ambiente super agradável e profissionais muito competentes.",
    "Sempre saio satisfeito, recomendo demais!",
    "Ótimo custo-benefício e um trabalho impecável.",
    // Add more messages
];

function generateRandomTestimonial() {
    const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const message = testimonialMessages[Math.floor(Math.random() * testimonialMessages.length)];
    const time = new Date(Date.now() - Math.random() * 86400000).toLocaleTimeString();
    
    return { user, message, time };
}

function createTestimonialElement(testimonial) {
    const element = document.createElement('div');
    element.className = 'testimonial-card live-feedback fade-in';
    element.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.user.avatar}" alt="${testimonial.user.name}" class="testimonial-avatar">
            <div class="testimonial-user-info">
                <h4>${testimonial.user.name}</h4>
                <div class="rating">
                    ${'★'.repeat(testimonial.user.rating)}${'☆'.repeat(5-testimonial.user.rating)}
                </div>
            </div>
            <span class="live-badge">Ao vivo</span>
        </div>
        <p class="testimonial-message">${testimonial.message}</p>
        <span class="testimonial-time">${testimonial.time}</span>
    `;
    return element;
}

// Initialize and update live testimonials
function initializeLiveTestimonials() {
    const container = document.getElementById('live-testimonials');
    if (!container) return;

    // Add initial testimonials
    for (let i = 0; i < 3; i++) {
        const testimonial = generateRandomTestimonial();
        const element = createTestimonialElement(testimonial);
        container.prepend(element);
    }

    // Add new testimonials periodically
    setInterval(() => {
        const testimonial = generateRandomTestimonial();
        const element = createTestimonialElement(testimonial);
        container.prepend(element);

        // Remove oldest testimonial if there are too many
        if (container.children.length > 5) {
            container.removeChild(container.lastChild);
        }
    }, 15000); // Add new testimonial every 15 seconds
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLiveTestimonials); 