// JavaScript for basic form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = this.fullName.value.trim();
    const number = this.number.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!fullName || !number || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset(); // Reset form after submission
});

// Example JavaScript to make responsive adjustments or add interactivity
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        alert('Search functionality is under development.');
    });
});
