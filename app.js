const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Validation logic
    if (!username) {
        res.status(400).send('Username is required');
    } else {
        res.send(`Username is $yalemu`);
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Example of basic form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill out all fields');
        event.preventDefault(); // Prevent form submission
    }
});
