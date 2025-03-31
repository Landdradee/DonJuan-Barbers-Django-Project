document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = 10;

    // Função para atualizar o contador
    function updateCountdown() {
        countdownElement.textContent = timeLeft;
        
        // Adiciona efeito de pulso
        countdownElement.classList.add('pulse');
        setTimeout(() => {
            countdownElement.classList.remove('pulse');
        }, 200);

        if (timeLeft === 0) {
            window.location.href = '/';
        } else {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    // Inicia a contagem regressiva
    updateCountdown();

    // Adiciona efeito de hover no botão
    const button = document.querySelector('a.bg-red-600');
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover:shadow-glow');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover:shadow-glow');
    });
}); 