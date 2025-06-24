 let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
    const container = document.getElementById('carouselContainer');
    const indicators = document.querySelectorAll('.indicator');
    
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}


       






         // Mobile Navigation Toggle
        const navToggle = document.getElementById('navToggle');
        const navList = document.getElementById('navList');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle mobile menu
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close mobile menu function
        function closeMobileMenu() {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });




        // Auto-scroll to home section on page load/refresh
window.addEventListener('load', function() {
    // Scroll to top of the page (home section)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

















const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation with specific error messages
function validateForm() {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;
    let errorMsg = '';

    // Reset error states
    [fullName, email, message].forEach(field => {
        field.classList.remove('error');
    });

    // Validate full name
    if (fullName.value.trim() === '') {
        fullName.classList.add('error');
        errorMsg = 'Please fill in your full name.';
        isValid = false;
    }

    // Validate email
    if (email.value.trim() === '') {
        email.classList.add('error');
        errorMsg = errorMsg ? 'Please fill in all required fields.' : 'Please fill in your email address.';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        errorMsg = errorMsg ? 'Please fill in all required fields correctly.' : 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        message.classList.add('error');
        errorMsg = errorMsg ? 'Please fill in all required fields.' : 'Please fill in your message.';
        isValid = false;
    }

    // Update error message text
    if (!isValid) {
        document.getElementById('errorMessage').textContent = errorMsg;
    }

    return isValid;
}

// Form submission handler - Configured for forwork1546@gmail.com
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate form
    if (!validateForm()) {
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';

    try {
        // Send to Formspree - Configured for forwork1546@gmail.com
        const response = await fetch('https://formspree.io/f/movwpavk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                _replyto: document.getElementById('email').value,
                _subject: 'New Contact Form Message from ' + document.getElementById('fullName').value
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        // Show success message
        successMessage.style.display = 'block';
        form.reset();
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    } catch (error) {
        // Show error message
        errorMessage.textContent = 'Failed to send message. Please try again or contact directly at forwork1546@gmail.com.';
        errorMessage.style.display = 'block';
        console.error('Form submission error:', error);
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
    }
});

// Real-time validation feedback
document.getElementById('fullName').addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (this.value.trim() === '' || !emailRegex.test(this.value.trim())) {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }
});

document.getElementById('message').addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }
});


        