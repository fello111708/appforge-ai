// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.feature-card, .project-card').forEach((el) => {
    observer.observe(el);
});

// Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});

// Analytics
function trackEvent(category, action, label) {
    if (typeof gtag === 'function') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Add event tracking to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('button', 'click', button.textContent.trim());
    });
});
