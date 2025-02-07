document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const signupForm = document.querySelector('.signup-form-element');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Clear any existing error messages
            clearErrors();
            
            // Validate form
            if (validateForm(this)) {
                const button = this.querySelector('.signup-cta');
                const buttonText = button.querySelector('.button-text');
                
                // Add loading state
                button.classList.add('loading');
                if (buttonText) {
                    buttonText.textContent = 'Registrando...';
                }
                
                // Submit the form programmatically
                this.submit();
            }
        });
    }

    // Form validation function
    function validateForm(form) {
        let isValid = true;
        const username = form.querySelector('#username');
        const email = form.querySelector('#email');
        const password1 = form.querySelector('#password1');
        const password2 = form.querySelector('#password2');
        
        // Validate username
        if (!username.value.trim()) {
            showError(username, 'Por favor, escolha um nome de usuário');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Por favor, insira seu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        }
        
        // Validate password
        if (!password1.value) {
            showError(password1, 'Por favor, crie uma senha');
            isValid = false;
        } else if (password1.value.length < 8) {
            showError(password1, 'A senha deve ter pelo menos 8 caracteres');
            isValid = false;
        }
        
        // Validate password confirmation
        if (!password2.value) {
            showError(password2, 'Por favor, confirme sua senha');
            isValid = false;
        } else if (password1.value !== password2.value) {
            showError(password2, 'As senhas não coincidem');
            isValid = false;
        }
        
        return isValid;
    }

    // Email validation helper
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Show error message
    function showError(input, message) {
        const formGroup = input.closest('.signup-form-group');
        const existingError = formGroup.querySelector('.field-error');
        
        if (existingError) {
            existingError.remove();
        }
        
        const error = document.createElement('div');
        error.className = 'field-error';
        error.innerHTML = `<p>${message}</p>`;
        
        // Add error class to input wrapper if it's a password field
        const inputWrapper = input.closest('.password-input-wrapper');
        if (inputWrapper) {
            inputWrapper.classList.add('input-error');
        } else {
            input.classList.add('input-error');
        }
        
        // Insert error after input or input wrapper
        const targetElement = inputWrapper || input;
        targetElement.parentNode.insertBefore(error, targetElement.nextSibling);
        
        // Shake animation for the input
        input.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => input.style.animation = '', 500);
    }

    // Clear all errors
    function clearErrors() {
        document.querySelectorAll('.field-error').forEach(error => error.remove());
        document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
    }

    // Clear error when user starts typing
    document.querySelectorAll('.signup-form-group input').forEach(input => {
        input.addEventListener('input', function() {
            const formGroup = this.closest('.signup-form-group');
            const error = formGroup.querySelector('.field-error');
            if (error) {
                error.remove();
            }
            this.classList.remove('input-error');
        });
    });

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

    // Add password strength indicator
    function updatePasswordStrength(password) {
        const strengthMeter = document.querySelector('.password-strength-meter');
        const strengthText = document.querySelector('.password-strength-text');
        const requirements = document.querySelectorAll('.requirement');
        
        if (!strengthMeter || !strengthText) return;
        
        // Reset classes
        strengthMeter.className = 'password-strength-meter';
        
        // Check requirements
        const checks = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };
        
        // Update requirement indicators
        requirements.forEach(req => {
            const requirement = req.dataset.requirement;
            if (checks[requirement]) {
                req.classList.add('met');
            } else {
                req.classList.remove('met');
            }
        });
        
        // Calculate strength
        const strength = Object.values(checks).filter(Boolean).length;
        
        // Update strength meter and text
        if (password.length === 0) {
            strengthMeter.className = 'password-strength-meter';
            strengthText.textContent = 'Força da senha';
            strengthText.style.color = '#666';
        } else if (strength <= 2) {
            strengthMeter.className = 'password-strength-meter strength-weak';
            strengthText.textContent = 'Fraca';
            strengthText.style.color = 'var(--error-color)';
        } else if (strength <= 4) {
            strengthMeter.className = 'password-strength-meter strength-medium';
            strengthText.textContent = 'Média';
            strengthText.style.color = '#ffd700';
        } else {
            strengthMeter.className = 'password-strength-meter strength-strong';
            strengthText.textContent = 'Forte';
            strengthText.style.color = '#2ecc71';
        }
    }

    // Add password input listener
    document.querySelector('#password1').addEventListener('input', function() {
        updatePasswordStrength(this.value);
    });
}); 