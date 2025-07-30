document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Close menu when clicking on a menu item
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !phone || !service || !message) {
                formStatus.textContent = 'Please fill in all fields';
                formStatus.style.color = '#ff0000';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = 'Please enter a valid email address';
                formStatus.style.color = '#ff0000';
                return;
            }
            
            // Phone validation - simple check for numbers and common separators
            const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
            if (!phoneRegex.test(phone)) {
                formStatus.textContent = 'Please enter a valid phone number';
                formStatus.style.color = '#ff0000';
                return;
            }
            
            // In a real implementation, you would send the form data to a server here
            // For this demo, we'll simulate a successful submission
            
            // Show loading message
            formStatus.textContent = 'Sending your message...';
            formStatus.style.color = '#000000';
            
            // Simulate server request with timeout
            setTimeout(function() {
                // Success message
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.style.color = '#008000';
                
                // Reset form
                contactForm.reset();
                
                // Clear success message after 5 seconds
                setTimeout(function() {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.service-card, .why-us-card, .approach-card, .expertise-item');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkReveal);
    window.addEventListener('scroll', checkReveal);
});