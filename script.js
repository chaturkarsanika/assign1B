document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    // Store user data in localStorage
    var userData = { username: username, email: email };
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the data list page after successful registration
    window.location.href = 'dataList.html';
});
