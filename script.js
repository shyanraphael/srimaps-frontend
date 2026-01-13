// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        }
    });
});

// Launch app button
function launchApp() {
    alert('Launching ශ්‍රීMaps Application!\n\nIn production, this would redirect to your Application URL.');
}

// Contact form submission
function handleSubmit(e) {
    e.preventDefault();

    // Get form elements
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = 'Sending... ⏳';
    submitBtn.disabled = true;

    // Get form data
    const inputs = form.querySelectorAll('input, textarea');
    const contactData = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value,
        timestamp: new Date().toISOString()
    };

    // Your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwT6s_Vwg3W6TB1UTyWHS6si6z-lx98vaciSAoOeTrpCLIFGwviqqLp6g7xKir1xlZiZw/exec';

    // Send to Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
    })
        .then(() => {
            // Success - note: with no-cors mode, we can't read the response
            alert('✅ Thank you for your message!\n\nWe\'ll get back to you soon.');
            form.reset();
        })
        .catch((error) => {
            // Error handling
            console.error('Error:', error);
            alert('❌ Something went wrong. Please try again or email us at contact@srimaps.lk');
        })
        .finally(() => {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card, .step, .team-member').forEach(el => {
        observer.observe(el);
    });
});

// Add keyboard accessibility for menu toggle
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});