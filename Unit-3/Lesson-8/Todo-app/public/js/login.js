// Add event listener to register form submission
document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const response = await fetch('../auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    if (response.redirected) {
        window.location.href = response.url;
    }

    if (response.status >= 400) {
        const data = await response.text();

        const error = document.createElement('p');
        error.style.color = 'red';
        error.textContent = data;
        username.value = '';
        password.value = '';
        document.getElementById('error-container').innerHTML = '';
        document.getElementById('error-container').appendChild(error);
    }
});

// Add event listener to login form submission
document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('../auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    if (response.redirected) {
        window.location.href = response.url;
    }

    if (response.status >= 400) {
        const data = await response.text();

        const error = document.createElement('p');
        error.style.color = 'red';
        error.textContent = data;
        username.value = '';
        password.value = '';
        document.getElementById('error-container').innerHTML = '';
        document.getElementById('error-container').appendChild(error);
    }
});