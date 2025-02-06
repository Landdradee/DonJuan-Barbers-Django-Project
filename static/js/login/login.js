document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const loginForm = document.querySelector('.login-form-element');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const button = this.querySelector('.login-cta');
            const buttonText = button.querySelector('.button-text');
            
            // Add loading state
            button.classList.add('loading');
            if (buttonText) {
                buttonText.textContent = 'Entrando...';
            }

            // The form will be handled by Django
            // The loading state will be cleared on page reload
        });
    }

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

// Add loading state to form submission
document.querySelector('#messageForm').addEventListener('submit', function(e) {
    const button = this.querySelector('.login-cta');
    button.classList.add('loading');
    // Remove loading state after response (simulated here)
    setTimeout(() => button.classList.remove('loading'), 2000);
});
  