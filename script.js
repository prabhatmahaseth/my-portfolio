/* ================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive Functionality & Animations
   ================================ */

// ================================
// NAVIGATION & HAMBURGER MENU
// ================================

// Get DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ================================

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================================
// SCROLL TO TOP BUTTON
// ================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

// Animate sections as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'revealSection 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ================================
// SKILL BARS ANIMATION
// ================================

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Call after page loads
window.addEventListener('load', animateSkillBars);

// ================================
// CONTACT FORM HANDLING
// ================================

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message
    showFormMessage('✓ Message received! Thanks for reaching out. I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Optional: Log form data (in real scenario, you'd send this to a server)
    console.log({
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString()
    });
});

function showFormMessage(message, type) {
    formNote.textContent = message;
    formNote.style.color = type === 'success' ? '#00d4ff' : '#ff6b6b';
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formNote.textContent = '';
    }, 5000);
}

// ================================
// RESUME DOWNLOAD BUTTON
// ================================

const resumeBtn = document.getElementById('resumeBtn');

resumeBtn.addEventListener('click', () => {
    // Create a simple resume file (you can replace this with actual PDF)
    const resumeContent = `
    PRABHAT KUMAR MAHASETH
    Java Full Stack Developer | Fresher
    
    Email: mahasethprabhat@gmail.com
    LinkedIn: https://www.linkedin.com/in/prabhat-kumar-mahaseth-b68b25276/
    GitHub: https://github.com/prabhatmahaseth
    
    ========================================
    PROFESSIONAL SUMMARY
    ========================================
    Dynamic and ambitious B.Tech Computer Science and Engineering student (2022–2026) 
    seeking an entry-level software development role. Experienced in Java, Spring Boot, 
    SQL, and frontend technologies. Passionate about building real-world applications 
    and continuously improving skills.
    
    ========================================
    EDUCATION
    ========================================
    B.Tech Computer Science & Engineering
    DRIEMS University, Cuttack, Odisha | 2022 – 2026
    
    Intermediate (12th)
    J.N. College, Madhubani, Bihar (BSEB) | 2020 – 2022
    
    Matriculation (10th)
    B.Y.J High School Khaira, Madhubani, Bihar (BSEB) | 2019 – 2020
    
    ========================================
    TECHNICAL SKILLS
    ========================================
    Programming Languages: Java, HTML, CSS, JavaScript, C, C++
    Backend & Database: Spring Boot, PostgreSQL, SQL, JDBC
    Frontend: HTML5, CSS3, JavaScript (ES6+)
    Tools & Platforms: Git, GitHub, JDBC
    
    ========================================
    PROJECTS
    ========================================
    1. Hospital Management System
       Technologies: Java, SQL, JDBC
       - Patient registration and appointment scheduling
       - Medical records management
       - Staff and pharmacy operations
       - Improved efficiency and reduced paperwork
    
    2. ATM Simulation System
       Technologies: Java, SQL, JDBC
       - Secure login and authentication
       - Balance inquiry, withdrawal, and deposit
       - PIN management
       - Transaction processing
    
    3. Myntra Clone (E-Commerce Web Application)
       Technologies: HTML, CSS, JavaScript
       - Product listing and search functionality
       - Filter and sort capabilities
       - Shopping cart management
       - Responsive UI design
    
    ========================================
    TRAINING
    ========================================
    Java Full Stack Developer Training – QSpiders
    Currently undergoing intensive training in:
    - Core Java
    - Spring Boot & REST APIs
    - Frontend Technologies (React, HTML, CSS, JavaScript)
    - MySQL Database
    - Real-world project development
    
    ========================================
    STRENGTHS
    ========================================
    - Strong problem-solving skills
    - Quick learner and adaptable
    - Team player with good communication
    - Passion for continuous learning
    - Full-stack development capabilities
    
    Generated from Portfolio Website
    Date: ${new Date().toLocaleDateString()}
    `;
    
    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prabhat_Kumar_Mahaseth_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Show feedback
    showFormMessage('✓ Resume downloaded successfully!', 'success');
});

// ================================
// TYPING ANIMATION FOR HERO SECTION
// ================================

function createTypingEffect() {
    const text = "Java Full Stack Developer | Fresher";
    const subtitle = document.querySelector('.hero-subtitle');
    let index = 0;
    
    // Clear existing text
    subtitle.textContent = '';
    
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing when page loads
    type();
}

window.addEventListener('load', createTypingEffect);

// ================================
// PARALLAX EFFECT ON SCROLL
// ================================

window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const elementOffset = element.offsetTop;
        const distance = scrollPosition - elementOffset;
        
        if (Math.abs(distance) < window.innerHeight) {
            element.style.transform = `translateY(${distance * 0.5}px)`;
        }
    });
});

// ================================
// PROJECT CARD INTERACTION
// ================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    // Add slight delay for staggered appearance
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add hover sound effect (visual feedback)
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// ================================
// COUNTER ANIMATION
// ================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 30;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counters when stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

// ================================
// ADD ACTIVE CLASS TO NAV LINKS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// INIT FUNCTION
// ================================

function init() {
    // Any additional initialization code can go here
    console.log('Portfolio website loaded successfully!');
    
    // Add version info
    console.log('Version: 1.0 | Pure HTML, CSS & JavaScript');
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Debounce function for scroll events
function debounce(func, wait) {
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

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll event logic
}, 100));

// ================================
// ACCESSIBILITY IMPROVEMENTS
// ================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Home key scrolls to top
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ================================
// DYNAMIC YEAR IN FOOTER
// ================================

// Optional: Update copyright year dynamically
const yearElements = document.querySelectorAll('[data-year]');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// ================================
// LOCAL STORAGE FOR PREFERENCES
// ================================

// Example: Save scroll position
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Restore scroll position on page load
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});

// ================================
// PRINT STYLES
// ================================

window.addEventListener('beforeprint', () => {
    // Hide non-essential elements during print
    document.querySelector('nav').style.display = 'none';
    document.querySelector('.scroll-to-top').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    // Show elements after print
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.scroll-to-top').style.display = 'flex';
});

console.log(
    '%cWelcome to Prabhat\'s Portfolio!',
    'font-size: 20px; font-weight: bold; color: #00d4ff;'
);
console.log(
    '%cFeel free to explore the code and reach out for opportunities!',
    'font-size: 14px; color: #a0a0a0;'
);
