const nav = document.querySelector('nav');
const toggleNav = document.getElementById('hamburger');
const closeNav = document.getElementById('close');
const navLinks = document.querySelectorAll('.nav-links');
const emailInput = document.getElementById('emailInput');
const submitEmail = document.getElementById('submitEmail');
const emailError = document.getElementById('emailError');

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

submitEmail.addEventListener('click', function() {
    const email = emailInput.value;
    if (validateEmail(email)) {
        emailError.style.display = 'none';
        alert('Email is valid!');
        // You can add more code here to handle a valid email submission
    } else {
        emailError.style.display = 'block';
    }
});

toggleNav.addEventListener('click', function() {
    nav.classList.toggle('active');
});

closeNav.addEventListener('click', function() {
    nav.classList.remove('active');
});

navLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});
