 // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Form Validation
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     const name = document.getElementById('name');
        //     const email = document.getElementById('email');
        //     const message = document.getElementById('message');
            
        //     const nameError = document.getElementById('nameError');
        //     const emailError = document.getElementById('emailError');
        //     const messageError = document.getElementById('messageError');
            
        //     let isValid = true;
            
        //     // Reset errors
        //     nameError.style.display = 'none';
        //     emailError.style.display = 'none';
        //     messageError.style.display = 'none';
            
        //     // Validate name
        //     if (name.value.trim() === '') {
        //         nameError.style.display = 'block';
        //         isValid = false;
        //     }
            
        //     // Validate email
        //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     if (!emailRegex.test(email.value.trim())) {
        //         emailError.style.display = 'block';
        //         isValid = false;
        //     }
            
        //     // Validate message
        //     if (message.value.trim() === '') {
        //         messageError.style.display = 'block';
        //         isValid = false;
        //     }
            
        //     if (isValid) {
        //         // In a real application, you would send the form data to a server here
        //         alert('Thank you for your message! I will get back to you ASAP!');
        //         contactForm.reset();
        //     }
        // });

        // Animate skill bars when scrolled into view
        const skillBars = document.querySelectorAll('.skill-level');
        
        const animateSkillBars = () => {
            skillBars.forEach(skillBar => {
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = level + '%';
            });
        };

        // Scroll reveal animation
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.section, .portfolio-item, .about-content, .contact-container');
            
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                    
                    // If it's the about section, animate the skill bars
                    if (element.classList.contains('about-content')) {
                        animateSkillBars();
                    }
                }
            });
        };

        // Add active class to elements when they come into view
        window.addEventListener('scroll', revealOnScroll);
        
        // Initial check on page load
        window.addEventListener('load', () => {
            revealOnScroll();
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'white';
                header.style.backdropFilter = 'none';
            }
        });
