
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (email === 'cinebee@gmail.com' && password === 'demo123') {
        alert("Login successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid credentials! Please try again.");
    }
});