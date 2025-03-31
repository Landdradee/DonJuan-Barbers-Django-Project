document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const loginForm = document.querySelector('.login-form-element');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Clear any existing error messages
            clearErrors();
            
            // Validate form
            if (validateForm(this)) {
                const button = this.querySelector('.login-cta');
                const buttonText = button.querySelector('.button-text');
                
                // Add loading state
                button.classList.add('loading');
                if (buttonText) {
                    buttonText.textContent = 'Entrando...';
                }
                
                // Submit the form programmatically
                this.submit();
            }
        });
    }

    // Form validation function
    function validateForm(form) {
        let isValid = true;
        const email = form.querySelector('#user');
        const password = form.querySelector('#pwd');
        
        // Validate email/username
        if (!email.value.trim()) {
            showError(email, 'Por favor, insira seu email ou usuário');
            isValid = false;
        }
        
        // Validate password
        if (!password.value) {
            showError(password, 'Por favor, insira sua senha');
            isValid = false;
        }
        
        return isValid;
    }

    // Show error message
    function showError(input, message) {
        const formGroup = input.closest('.login-form-group');
        const error = document.createElement('div');
        error.className = 'field-error';
        error.innerHTML = `<p>${message}</p>`;
        
        // Add error class to input
        input.classList.add('input-error');
        
        // Add error message if it doesn't exist
        if (!formGroup.querySelector('.field-error')) {
            formGroup.appendChild(error);
        }
    }

    // Clear all errors
    function clearErrors() {
        document.querySelectorAll('.field-error').forEach(error => error.remove());
        document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
    }

    // Clear error when user starts typing
    document.querySelectorAll('.login-form-group input').forEach(input => {
        input.addEventListener('input', function() {
            const formGroup = this.closest('.login-form-group');
            const error = formGroup.querySelector('.field-error');
            if (error) {
                error.remove();
            }
            this.classList.remove('input-error');
        });
    });

    // Password visibility toggle
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.querySelector('#pwd');
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
    }

    // Form field animations
    document.querySelectorAll('.login-form-group input').forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.login-form-group').classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.login-form-group').classList.remove('focused');
            }
        });

        // Set initial state for fields with values
        if (input.value) {
            input.closest('.login-form-group').classList.add('focused');
        }
    });

    // Add ripple effect to button
    const buttons = document.querySelectorAll('.login-cta');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add smooth transitions for form elements
document.querySelectorAll('.login-form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Enhance button interactions
document.querySelector('.login-cta').addEventListener('mouseenter', function(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    
    this.style.setProperty('--x', `${x}px`);
    this.style.setProperty('--y', `${y}px`);
});
  