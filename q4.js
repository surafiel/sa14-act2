function validateForm(username, email, password) {
    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const isValidUsername = usernameRegex.test(username);
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if (!isValidUsername) {
        console.error('Invalid username. Username must be at least 6 characters long and contain only letters, numbers, or underscores.');
    }
    if (!isValidEmail) {
        console.error('Invalid email address.');
    }
    if (!isValidPassword) {
        console.error('Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter and one digit.');
    }

    if (isValidUsername && isValidEmail && isValidPassword) {
        console.log('Form submission successful.');
        // Additional logic for form submission
    }
}

// Example usage for Form Handling and Validation
const username = 'example_user';
const email = 'example@example.com';
const password = 'Password1';
validateForm(username, email, password);
