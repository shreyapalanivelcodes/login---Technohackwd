// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loginMessage = document.getElementById('login-message');

    let valid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    loginMessage.textContent = '';

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password is required';
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        valid = false;
    }

    if (!valid) return;

    // Simple hash function for demonstration (not secure for real use)
    function hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    const hashedPassword = hashPassword(password);
    loginMessage.textContent = `Logging in with username: ${username} and hashed password: ${hashedPassword}`;
});
