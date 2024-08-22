// Sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = e.target.username.value;
    let email = e.target.email.value.toLowerCase();
    let password = e.target.password.value;
    let confirmPassword = e.target['confirm-password'].value;

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    let userExists = storedUsers.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('Username or Email already exists. Please use a different one.');
        return;
    }

    let passwordPattern = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_+{}|:"<>?]).{6,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 6 characters long, include at least one capital letter, two digits, and one special character.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    let newUser = {
        username: username,
        email: email,
        password: password
    };

    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Sign up successful! You can now log in.');
    window.location.href = 'index3.html';

    e.target.reset();
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let loginEmail = e.target.email.value.toLowerCase();
    let loginPassword = e.target.password.value;

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    let validUser = storedUsers.find(user => 
        (user.email === loginEmail || user.username === loginEmail) && user.password === loginPassword
    );

    if (validUser) {
        alert('Login successful!');
        window.location.href = 'index3.html';
    } else {
        alert('Invalid credentials!');
    }
});
