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


        