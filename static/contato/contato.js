document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    
    form.onsubmit = function(e) {
        e.preventDefault();
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Mensagem enviada com sucesso!';
        successMsg.style.animation = 'slideIn 0.3s ease forwards';
        form.appendChild(successMsg);
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => successMsg.remove(), 300);
        }, 3000);
        
        return false;
    };

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