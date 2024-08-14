// Initialize EmailJS

(function() {
    emailjs.init("rjU5SSP7nu42MyKUO"); // Replace with your actual User ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var formData = {
        to_name: document.getElementById('name').value,  // Recipient’s name
        from_name: document.getElementById('name').value,  // Sender’s name
        email: document.getElementById('email').value,  // Sender’s email
        number: document.getElementById('number').value,  // Sender’s number
        message: document.getElementById('message').value  // Message content
    };

    // Send email using EmailJS
    emailjs.send('service_935avz9', 'template_vxuxqgg', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message was sent successfully!');
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message, please try again.');
        });
});
