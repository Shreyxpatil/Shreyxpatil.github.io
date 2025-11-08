// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const navbar = document.querySelector('.navbar');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(120, 119, 198, 0.3)';
        navbar.style.borderBottom = '1px solid rgba(120, 119, 198, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(120, 119, 198, 0.2)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Floating elements animation
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    const speed = card.getAttribute('data-speed') || 1;
    const delay = index * 0.5;
    
    card.style.animationDelay = `${delay}s`;
    card.style.animationDuration = `${6 / speed}s`;
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = parseFloat(element.getAttribute('data-speed')) || 1;
        const yPos = -(scrolled * speed * 0.1);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success state
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.style.background = '#28a745';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
            
        } catch (error) {
            // Error state
            submitButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error!';
            submitButton.style.background = '#dc3545';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.animate-on-scroll');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    
    // Add staggered animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animation to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(120, 119, 198, 0.4);
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Back to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    revealOnScroll();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Add loading animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary')) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Neural Network Animation System
class NeuralNetworkAnimation {
    constructor() {
        this.nodes = [];
        this.connections = [];
        this.init();
    }

    init() {
        this.createNeuralNodes();
        this.createConnections();
        this.startAnimation();
    }

    createNeuralNodes() {
        const neuralNetwork = document.querySelector('.neural-network');
        if (!neuralNetwork) return;

        // Create additional dynamic nodes
        for (let i = 0; i < 8; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node dynamic-node';
            
            // Random positioning
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 80 + 10;
            
            node.style.left = x + '%';
            node.style.top = y + '%';
            node.style.animationDelay = Math.random() * 2 + 's';
            
            neuralNetwork.appendChild(node);
            this.nodes.push(node);
        }
    }

    createConnections() {
        const neuralNetwork = document.querySelector('.neural-network');
        if (!neuralNetwork) return;

        // Create dynamic connections between nodes
        for (let i = 0; i < 6; i++) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection dynamic-connection';
            
            const startX = Math.random() * 80 + 10;
            const startY = Math.random() * 80 + 10;
            const length = Math.random() * 200 + 100;
            const angle = Math.random() * 360;
            
            connection.style.left = startX + '%';
            connection.style.top = startY + '%';
            connection.style.width = length + 'px';
            connection.style.transform = `rotate(${angle}deg)`;
            connection.style.animationDelay = Math.random() * 3 + 's';
            
            neuralNetwork.appendChild(connection);
            this.connections.push(connection);
        }
    }

    startAnimation() {
        // Add pulsing effect to nodes
        this.nodes.forEach((node, index) => {
            setInterval(() => {
                node.style.transform = `scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.2})`;
            }, 50);
        });

        // Add flowing effect to connections
        this.connections.forEach((connection, index) => {
            setInterval(() => {
                const opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.4;
                connection.style.opacity = opacity;
            }, 50);
        });
    }
}

// Circuit Board Animation
class CircuitBoardAnimation {
    constructor() {
        this.init();
    }

    init() {
        this.createCircuitElements();
        this.startCircuitAnimation();
    }

    createCircuitElements() {
        const body = document.body;
        
        // Create floating circuit elements
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.className = 'circuit-element';
            
            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 5;
            
            element.style.width = size + 'px';
            element.style.height = size + 'px';
            element.style.left = x + '%';
            element.style.top = y + '%';
            element.style.animationDelay = delay + 's';
            
            body.appendChild(element);
        }
    }

    startCircuitAnimation() {
        // Add CSS for circuit elements
        const style = document.createElement('style');
        style.textContent = `
            .circuit-element {
                position: fixed;
                background: rgba(120, 219, 255, 0.6);
                border-radius: 50%;
                animation: circuitFloat 8s ease-in-out infinite;
                pointer-events: none;
                z-index: -1;
            }
            
            @keyframes circuitFloat {
                0%, 100% {
                    transform: translateY(0px) scale(1);
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(-20px) scale(1.2);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Particle System for Background
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.init();
    }

    init() {
        this.createParticles();
        this.animateParticles();
    }

    createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 10;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(120, 219, 255, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                animation: particleFloat ${10 + Math.random() * 10}s linear infinite;
                animation-delay: ${delay}s;
            `;
            
            particleContainer.appendChild(particle);
            this.particles.push(particle);
        }

        // Add particle animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(100vh) translateX(0px) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    animateParticles() {
        this.particles.forEach(particle => {
            setInterval(() => {
                const newX = Math.random() * 100;
                particle.style.left = newX + '%';
            }, 5000 + Math.random() * 5000);
        });
    }
}

// Glitch Effect for Text
class GlitchEffect {
    constructor() {
        this.init();
    }

    init() {
        this.addGlitchToTitles();
    }

    addGlitchToTitles() {
        const titles = document.querySelectorAll('h1, h2, .gradient-text');
        
        titles.forEach(title => {
            title.addEventListener('mouseenter', () => {
                this.triggerGlitch(title);
            });
        });
    }

    triggerGlitch(element) {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let glitchText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.3) {
                glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchText += originalText[i];
            }
        }
        
        element.textContent = glitchText;
        
        setTimeout(() => {
            element.textContent = originalText;
        }, 200);
    }
}

// Console welcome message
console.log(`
🚀 Welcome to Shreyas's Neural Network Portfolio!
🧠 AI/ML Engineer with Brain-Inspired Design
🔗 Built with HTML, CSS, and JavaScript
📧 Contact: shreyas.syp@outlook.com
`);

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Initialize all functionality safely
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize neural network animations
        new NeuralNetworkAnimation();
        
        // Initialize circuit board animation
        new CircuitBoardAnimation();
        
        // Initialize particle system
        new ParticleSystem();
        
        // Initialize glitch effect
        new GlitchEffect();
        
        // Add enhanced hover effects to skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px) scale(1.05)';
                item.style.boxShadow = '0 10px 25px rgba(120, 119, 198, 0.4)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(5px) scale(1)';
                item.style.boxShadow = '0 5px 15px rgba(120, 119, 198, 0.2)';
            });
        });

        // Add project card tilt effect
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
        
        console.log('Neural Network Portfolio website initialized successfully!');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});
