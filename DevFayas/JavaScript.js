document.addEventListener('DOMContentLoaded', function () {
   
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');
    const toggle = document.getElementById('toggleDark')
   
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});


window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});


    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }

    
    new Typed('.typed-text', {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: false,
        showCursor: true,
        cursorChar: '|'
    });


    emailjs.init("fayas0821@gmail.com");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('fayas0821@gmail.com', 'fayas0821@gmail.com', this)
            .then(function (response) {
                alert('Message sent successfully!');
            }, function (error) {
                alert('Failed to send message.');
            });
    });

    window.onscroll = () => {
        header.classList.toggle('sticky', window.scrollY > 100);

        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

  
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }

    // Initialize ScrollReveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 150
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    ScrollReveal().reveal('.skills-box', { origin: 'bottom', distance: '50px', duration: 100, delay: 100 });
    ScrollReveal().reveal('.education-img', { origin: 'right' });
    ScrollReveal().reveal('.education-content', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });

    // Initialize multiple Typed.js animations
    new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer', 'YouTuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

    document.getElementById('mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

});