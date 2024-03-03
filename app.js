// Example of basic form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill out all fields');
        event.preventDefault(); // Prevent form submission
    }
});
