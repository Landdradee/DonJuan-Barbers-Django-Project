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

// Feedback data with placeholder images
const feedbacks = [
    {
        name: "Ricardo Silva",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        message: "Melhor barbearia que já frequentei! O atendimento é impecável e o resultado sempre supera as expectativas.",
        time: "agora"
    },
    {
        name: "João Pedro",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4.5,
        message: "Ambiente super agradável e profissionais muito atenciosos. Recomendo!",
        time: "há 30 minutos"
    },
    {
        name: "Lucas Mendes",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 5,
        message: "Serviço de primeira qualidade! O barbeiro entendeu exatamente o que eu queria.",
        time: "há 1 hora"
    }
];

// New feedbacks pool with placeholder images
const newFeedbacksPool = [
    {
        name: "Ana Beatriz",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        message: "Profissionais extremamente qualificados! Adorei o resultado.",
        time: "agora"
    },
    {
        name: "Carlos Eduardo",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        message: "Serviço excepcional, ambiente acolhedor e atendimento de primeira.",
        time: "agora"
    },
    {
        name: "Maria Clara",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4.5,
        message: "Sempre saio satisfeita! Equipe muito profissional e atenciosa.",
        time: "agora"
    },
    {
        name: "Pedro Henrique",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        rating: 5,
        message: "Melhor barbearia da cidade! Atendimento nota 10.",
        time: "agora"
    },
    {
        name: "Gabriel Santos",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 5,
        message: "Corte perfeito como sempre! Ambiente muito agradável.",
        time: "agora"
    }
];

// Function to create star rating HTML
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to create feedback card
function createFeedbackCard(feedback) {
    return `
        <div class="testimonial-card live-feedback fade-in">
            <div class="testimonial-header">
                <img src="${feedback.avatar}" alt="Avatar" class="testimonial-avatar" onerror="this.src='https://via.placeholder.com/60x60'">
                <div class="testimonial-user-info">
                    <h4>${feedback.name}</h4>
                    <div class="rating">
                        ${createStarRating(feedback.rating)}
                    </div>
                </div>
                ${feedback.time === "agora" ? '<span class="live-badge">Agora</span>' : ''}
            </div>
            <p class="testimonial-message">${feedback.message}</p>
            <span class="testimonial-time">${feedback.time}</span>
        </div>
    `;
}

// Function to add new feedback
function addNewFeedback() {
    const randomFeedback = newFeedbacksPool[Math.floor(Math.random() * newFeedbacksPool.length)];
    const container = document.querySelector('.live-testimonials-container');
    
    // Update existing feedback times
    const existingFeedbacks = container.querySelectorAll('.testimonial-card');
    existingFeedbacks.forEach(card => {
        const timeSpan = card.querySelector('.testimonial-time');
        const currentTime = timeSpan.textContent;
        if (currentTime === "agora") {
            timeSpan.textContent = "há 5 minutos";
            card.querySelector('.live-badge')?.remove();
        }
    });

    // Add new feedback at the top
    const newCard = document.createElement('div');
    newCard.innerHTML = createFeedbackCard(randomFeedback);
    container.insertBefore(newCard.firstChild, container.firstChild);

    // Remove oldest feedback if there are too many
    if (existingFeedbacks.length >= 5) {
        container.removeChild(container.lastChild);
    }
}

// Initialize feedbacks
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.live-testimonials-container');
    feedbacks.forEach(feedback => {
        container.innerHTML += createFeedbackCard(feedback);
    });

    // Add new feedback every 30 seconds
    setInterval(addNewFeedback, 30000);
}); 