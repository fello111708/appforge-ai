// Navigation
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Interactions
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    // Add click animation
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });

    // Add hover effects
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });

    // Add active state
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(1px)';
        button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Button Click Handlers
function handleDemoClick(e) {
    const demoButton = e.target.closest('.primary-btn');
    if (!demoButton) return;
    
    const ripple = document.createElement('span');
    const rect = demoButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    demoButton.appendChild(ripple);
    
    // Add demo functionality
    console.log('Starting demo...');
    alert('Demo functionality will be added here!');
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

function handleBuildClick(e) {
    const buildButton = e.target.closest('.secondary-btn');
    if (!buildButton) return;
    
    const ripple = document.createElement('span');
    const rect = buildButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    buildButton.appendChild(ripple);
    
    // Add build functionality
    console.log('Starting building process...');
    alert('Building process will be added here!');
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

// Make functions globally accessible
window.handleDemoClick = handleDemoClick;
window.handleBuildClick = handleBuildClick;

// Initialize buttons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add click animation
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });

        // Add hover effects
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });

        // Add active state
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(1px)';
            button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

// Add ripple effect style
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple 1s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize buttons
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add click animation
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });

        // Add hover effects
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });

        // Add active state
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(1px)';
            button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
    });

    mobileMenuOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });
}

// Smooth Scroll for All Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add hover effects to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// Add click handlers for demo and building buttons
function startDemo() {
    console.log('Demo started');
    // Add your demo functionality here
}

function startBuilding() {
    console.log('Building started');
    // Add your building functionality here
}

// Add click handlers for pricing buttons
document.querySelectorAll('.pricing-card button').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.closest('.pricing-card').querySelector('h3').textContent;
        console.log(`Selected plan: ${plan}`);
        // Add your pricing selection logic here
    });
});

// Add click handlers for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        const feature = card.querySelector('h3').textContent;
        console.log(`Feature selected: ${feature}`);
        // Add your feature selection logic here
    });
});
