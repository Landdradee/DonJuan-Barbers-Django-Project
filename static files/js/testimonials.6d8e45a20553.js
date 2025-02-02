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