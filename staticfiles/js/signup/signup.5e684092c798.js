document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const signupForm = document.querySelector('.signup-form-element');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const button = this.querySelector('.signup-cta');
            const buttonText = button.querySelector('.button-text');
            
            // Add loading state
            button.classList.add('loading');
            if (buttonText) {
                buttonText.textContent = 'Registrando...';
            }

            // The form will be handled by Django
            // The loading state will be cleared on page reload
        });
    }

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Form field animations
    document.querySelectorAll('.signup-form-group input').forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.signup-form-group').classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.signup-form-group').classList.remove('focused');
            }
        });

        // Set initial state for fields with values
        if (input.value) {
            input.closest('.signup-form-group').classList.add('focused');
        }
    });

    // Password match validation
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const signupButton = document.querySelector('.signup-cta');

    function validatePasswords() {
        if (password2.value && password1.value !== password2.value) {
            password2.setCustomValidity('As senhas não coincidem');
        } else {
            password2.setCustomValidity('');
        }
    }

    if (password1 && password2) {
        password1.addEventListener('change', validatePasswords);
        password2.addEventListener('keyup', validatePasswords);
    }
}); 