
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('.typed-text', {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: false,
        showCursor: true,
        cursorChar: '|'
    });
});

emailjs.init("fayas0821@gmail.com"); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('fayas0821@gmail.com', 'fayas0821@gmail.com', this)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message.');
    });
});


window.onscroll = () => {
  
    header.classList.toggle('sticky', window.scrollY > 100);

    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

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


ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 150
 });

 ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'buttom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-content p , about-content', {origin: 'right'});
 ScrollReveal().reveal('.skills-box', { origin: 'bottom', distance: '50px', duration: 1000, delay: 100 });
 ScrollReveal().reveal('.education-img ', {origin: 'right'});
 ScrollReveal().reveal('.education-content ', {origin: 'left'});
 ScrollReveal().reveal('.about-content ', {origin: 'right'});



 const typed = new Typed('.multiple-text',{
    String: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed:70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
 });