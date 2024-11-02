// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation on scroll
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillsBars = document.querySelectorAll('.progress');

    // Check if the skills section is in view
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        skillsBars.forEach(bar => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = bar.getAttribute('style');
        });
    }
});

// Glowing text animation on hover
document.querySelectorAll('.glow').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff';
    });
    element.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #0ff';
    });
});

// Growing text effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const growingText = document.querySelector('.grow');
    growingText.classList.add('active');

    growingText.style.transition = 'font-size 1s ease-in-out';
    growingText.style.fontSize = '2em';
});

// Fade-in effect on load for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial fade-in effect for sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation on scroll
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillsBars = document.querySelectorAll('.progress');

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        skillsBars.forEach(bar => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = bar.getAttribute('style');
        });
    }
});

// Glowing text animation on hover
document.querySelectorAll('.glow').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff';
    });
    element.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #0ff';
    });
});

// Growing text effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const growingText = document.querySelector('.grow');
    growingText.classList.add('active');
    growingText.style.transition = 'font-size 1s ease-in-out';
    growingText.style.fontSize = '2em';
});

// Fade-in effect on load for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial fade-in effect for sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
});

// Contact form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // You can replace this alert with an actual submission via AJAX
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
