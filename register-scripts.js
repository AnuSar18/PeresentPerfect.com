document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    if (localStorage.getItem(username)) {
        alert('Username already taken.');
        return;
    }

    if (localStorage.getItem(email)) {
        alert('Email already registered.');
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    localStorage.setItem(email, username);

    alert('Registration successful.');
    window.location.href = 'signin.html';
});
