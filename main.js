document.addEventListener('DOMContentLoaded', function () {
    // Titles and Headings
    document.title = "Base Apparel coming soon page";
    document.querySelector('.content h1').innerHTML = `
        <span class="text-pink">We're</span>
        <span>Comming</span>
        <span>Soon</span>
    `;

    // Descriptions and Error Messages
    document.querySelector('.content p').textContent = "Hello fellow shoppers! We're currently building our new fashion store, Add your email below to stay up-to-date with announcements and our launch deals.";
    document.querySelector('.text-error').textContent = "Please provide us your email"; // Default error message

    // Footer Text
    document.querySelector('.attribution').innerHTML = `
        Bootcamp 2024 by <a href="https://www.mlab.co.za" target="_blank">CodeTribe</a>. 
        Developed by molopeng elmon sekgobela <a href="#">https://github.com/molopeng/Portfolio-website</a>.
    `;

    // Email validation script
    const inputEl = document.querySelector('#email');
    const btn = document.querySelector('#submit');
    const iconErrorEl = document.querySelector('.icon-error');
    const textErrorEl = document.querySelector('.text-error');
    const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let errors = [];

    btn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        errors = []; // Reset errors
        const email = inputEl.value;

        if (!email) {
            errors.push('Please provide us your email');
        } else if (!email.match(RegEmail)) {
            errors.push('Please provide us your valid email');
        }

        if (errors.length > 0) {
            textErrorEl.textContent = errors[0];
            iconErrorEl.style.display = 'block';
        } else {
            iconErrorEl.style.display = 'none';
            textErrorEl.textContent = 'Thank you for subscribing to our newsletter.';
            textErrorEl.classList.add('text-success');
        }
    });
});
