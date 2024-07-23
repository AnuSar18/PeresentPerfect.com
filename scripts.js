document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = localStorage.getItem(username);

    if (!user) {
        alert('User not registered.');
        return;
    }

    const userData = JSON.parse(user);

    if (userData.password === password) {
        alert('Sign in successful.');
        // Redirect to startpg.html
        window.location.href = 'startpg.html';
    } else {
        alert('Incorrect password.');
    }
});
