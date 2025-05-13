// Chess-themed Portfolio - JavaScript check

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the chess board
    initChessBoard();

    // Initialize the mobile menu
    initMobileMenu();

    // Initialize form submission
    initContactForm();

    // Initialize visitor counter
    initVisitorCounter();

    // Initialize scroll progress bar
    initScrollProgressBar();

    // Initialize animations
    initAnimations();

    // Initialize page transitions
    initPageTransitions();

    // Initialize skill icon effects
    initSkillEffects();

    // Initialize project spotlight effect
    initProjectSpotlight();

    // Create the soft floating chess stars in background
    createFloatingChessStars();
});

// Chess board initialization
function initChessBoard() {
    const chessBoard = document.getElementById('chess-board');
    if (!chessBoard) return;

    // Chess piece positions for the standard starting position
    const initialBoardPosition = {
        '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛',
        '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
        '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟',
        '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
        '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙',
        '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙',
        '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕',
        '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖'
    };

    // Tech logos to replace chess pieces
    const techLogos = {

        //White Pieces

        '0,0': { icon: '<i class="fab fa-aws"></i>', name: 'AWS' },
        '0,2': { icon: '<i class="fab fa-docker"></i>', name: 'Docker' },
        '0,4': { icon: '<i class="fab fa-github-alt"></i>', name: 'GitHub' },
        '0,6': { icon: '<i class="fab fa-linux"></i>', name: 'Linux' },
        '1,1': { icon: '<i class="fas fa-cloud"></i>', name: 'Cloud' },
        '1,3': { icon: '<i class="fas fa-file-alt"></i>', name: 'YAML' },
        '1,5': { icon: '<i class="fas fa-network-wired"></i>', name: 'Network' },
        '1,7': { icon: '<i class="fab fa-jenkins"></i>', name: 'Jenkins' },

        //Black Pieces

        '6,1': { icon: '<i class="fab fa-python"></i>', name: 'Python' },
        '6,3': { icon: '<i class="fas fa-exchange-alt"></i>', name: 'API' },
        '6,5': { icon: '<i class="fas fa-cloud-upload-alt"></i>', name: 'Deploy' },
        '6,7': { icon: '<i class="fas fa-cogs"></i>', name: 'DevOps' },
        '7,0': { icon: '<i class="fas fa-database"></i>', name: 'MySQL' },
        '7,2': { icon: '<i class="fas fa-chart-line"></i>', name: 'Monitoring' },
        '7,4': { icon: '<i class="fas fa-sync-alt"></i>', name: 'CI/CD' },
        '7,6': { icon: '<i class="fas fa-file-code"></i>', name: 'IaC' },

    };

    // Generate the chess board
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = `chess-square ${(row + col) % 2 === 0 ? 'bg-white' : 'bg-black'}`;
            square.style.backgroundColor = (row + col) % 2 === 0 ? '#f0f0f0' : '#333333';

            // Add tech logo if needed
            const pieceKey = `${row},${col}`;
            if (techLogos[pieceKey]) {
                const logoContainer = document.createElement('div');
                logoContainer.className = 'chess-piece-container tech-logo';

                // Determine if logo should be dark or light based on position
                const isDark = row < 2;
                logoContainer.style.color = isDark ? '#333333' : '#f0f0f0';

                // Add the logo icon and tooltip
                logoContainer.innerHTML = techLogos[pieceKey].icon;
                logoContainer.setAttribute('title', techLogos[pieceKey].name);
                square.appendChild(logoContainer);
            }

            chessBoard.appendChild(square);
        }
    }

    // Add hover effect to chess pieces
    const chessPieces = document.querySelectorAll('.chess-piece-container');
    chessPieces.forEach(piece => {
        piece.addEventListener('mouseenter', () => {
            piece.classList.add('animate-piece-hover');
        });

        piece.addEventListener('mouseleave', () => {
            piece.classList.remove('animate-piece-hover');
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;

        // In a real implementation, this would send the data to a backend service
        // For the AWS Cloud Resume Challenge, this could be a serverless function
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Thank you for your message! In a real implementation, this would be sent to a serverless function.');

        // Reset form
        contactForm.reset();
    });
}

// Visitor counter functionality
function initVisitorCounter() {
    const visitorCountElement = document.getElementById('visitor-count');
    const visitorOrdinalElement = document.getElementById('visitor-ordinal');
    const miniChessPieces = document.querySelectorAll('.mini-chess-piece');

    if (!visitorCountElement || !visitorOrdinalElement) return;

    // Set initial loading state
    visitorCountElement.textContent = '...';
    visitorOrdinalElement.textContent = '';

    // Function to update the visitor count display with fancy animation
    function updateVisitorDisplay(count) {
        if (!count && count !== 0) {
            visitorCountElement.textContent = 'Error';
            visitorOrdinalElement.textContent = '';
            return;
        }

        // First set the count immediately to avoid undefined
        visitorCountElement.textContent = count;
        visitorCountElement.setAttribute('data-value', count);

        // Update the ordinal text (1st, 2nd, 3rd, etc.)
        let ordinal = 'th';
        if (count % 10 === 1 && count % 100 !== 11) {
            ordinal = 'st';
        } else if (count % 10 === 2 && count % 100 !== 12) {
            ordinal = 'nd';
        } else if (count % 10 === 3 && count % 100 !== 13) {
            ordinal = 'rd';
        }

        // Set the ordinal text immediately
        visitorOrdinalElement.textContent = count + ordinal;

        // Then start the animations
        anime.timeline({
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.counter-card',
            scale: [0.95, 1],
            opacity: [0.8, 1],
            boxShadow: [
                '0 0 0 rgba(212, 175, 55, 0.0)',
                '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 25px rgba(212, 175, 55, 0.4)'
            ],
            duration: 1200
        })
        .add({
            targets: '.counter-crown',
            rotate: ['-10deg', '10deg', '0deg'],
            translateY: ['-10px', '0px'],
            scale: [0.8, 1.2, 1],
            opacity: [0, 1],
            duration: 1200,
            offset: '-=900'
        })
        .add({
            targets: '.counter-decoration',
            scale: [0, 1.2, 1],
            opacity: [0, 1],
            rotate: ['-20deg', '20deg', '0deg'],
            duration: 800,
            delay: anime.stagger(200),
            offset: '-=800'
        })
        .add({
            targets: visitorCountElement,
            innerHTML: [0, count],
            round: 1,
            duration: 2500,
            easing: 'easeInOutExpo',
            offset: '-=400'
        });

        // Update the mini chess pieces with different floating animations
        miniChessPieces.forEach((piece, index) => {
            const delay = index * 300;
            const duration = 5000 + (index * 1000);

            anime({
                targets: piece,
                opacity: [0, 0.7],
                translateY: function() {
                    return anime.random(-30, 30);
                },
                translateX: function() {
                    return anime.random(-20, 20);
                },
                scale: [0.5, 1],
                rotate: [0, anime.random(-25, 25)],
                delay: delay,
                duration: 1200,
                easing: 'easeOutElastic(1, .6)',
                complete: function() {
                    // After appearing, start floating animation
                    anime({
                        targets: piece,
                        translateY: ['-10px', '10px'],
                        translateX: ['-5px', '5px'],
                        rotate: ['-5deg', '5deg'],
                        duration: duration,
                        direction: 'alternate',
                        loop: true,
                        easing: 'easeInOutSine'
                    });
                }
            });
        });

        // Animate the badge
        anime({
            targets: '.counter-badge',
            translateY: [20, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutQuad'
        });
    }}

    // Fetch and update visitor count
    document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = 'https://4bfefcldxk.execute-api.us-east-1.amazonaws.com/Prod/visitor';
        const visitorCountElement = document.getElementById('visitor-count');
        const visitorOrdinalElement = document.getElementById('visitor-ordinal');
        const visitorMessageElement = document.querySelector('.counter-footer p:first-of-type'); // Assuming this is the paragraph for the message

        // Function to update the display elements
        function updateVisitorDisplay(count) {
            if (visitorCountElement) {
                visitorCountElement.textContent = count;
            }
            if (visitorOrdinalElement && visitorMessageElement) {
                // You might adjust the message based on whether it's the 1st visitor
                if (count === 1) {
                     visitorMessageElement.innerHTML = `Congratulations on being my <span id="visitor-ordinal" class="gold-text">${getOrdinalSuffix(count)}</span> visitor!`;
                } else if (count > 0) {
                     visitorMessageElement.innerHTML = `Congratulations on being my <span id="visitor-ordinal" class="gold-text">${getOrdinalSuffix(count)}</span> visitor!`;
                } else {
                     // Handle case where count is 0 or less (shouldn't happen with incrementing)
                     visitorMessageElement.innerHTML = `<span id="visitor-ordinal" class="gold-text">...</span>`; // Or some placeholder
                }

                 // Ensure the ordinal span gets the correct ID back if you overwrite innerHTML
                 const updatedOrdinalSpan = visitorMessageElement.querySelector('#visitor-ordinal');
                 if(updatedOrdinalSpan) {
                     updatedOrdinalSpan.textContent = getOrdinalSuffix(count);
                 }
            }
        }

        // Helper function to add ordinal suffix (same as before)
        function getOrdinalSuffix(num) {
            if (typeof num !== 'number') return ''; // Handle non-numeric input
            const j = num % 10;
            const k = num % 100;

            if (j === 1 && k !== 11) {
                return num + "st";
            }
            if (j === 2 && k !== 12) {
                return num + "nd";
            }
            if (j === 3 && k !== 13) {
                return num + "rd";
            }

            return num + "th";
        }

        // 1. Send a POST request to trigger visitor count increment (handled by backend uniqueness check)
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // No body is needed for this simple visitor tracking
            }
        })
        .then(response => {
            if (!response.ok) {
                // Log non-200 responses from the POST request
                console.warn(`POST request to visitor API failed with status: ${response.status}`);
                // Don't stop here, still try to fetch the current count
            }
             // Regardless of POST success/failure (for a returning visitor), proceed to fetch the count
             // You might want to log success messages if needed based on response body
             return response.json().catch(() => ({})); // Handle potential empty response body for POST
        })
        .then(postData => {
            // Optional: Log the result of the POST request
            console.log('POST request result:', postData);

            // 2. After the POST request is processed, fetch the *current* visitor count with a GET request
            return fetch(apiUrl, {
                method: 'GET',
                headers: {
                     'Content-Type': 'application/json'
                 }
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GET request to visitor API failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extract and update the visitor count
            let count = data.visitorCount; // Based on the refined Lambda GET response

            // Handle cases where count might be missing or unexpected (though less likely with refined Lambda)
            if (typeof count !== 'number' || count < 0) {
                 console.warn('Received unexpected visitor count:', count);
                 count = 0; // Default to 0 or handle as an error
            }

            updateVisitorDisplay(count);

            // Add extra golden glow effect to the counter section header
            const headerElement = document.querySelector('.visitor-counter-section .section-header h2');
            if (headerElement && typeof anime !== 'undefined') { // Check if anime.js is loaded
                anime({
                    targets: headerElement,
                    textShadow: [
                        '0 0 0 rgba(255,215,0,0)',
                        '0 0 10px rgba(255,215,0,0.7)',
                        '0 0 5px rgba(255,215,0,0.5)',
                        '0 0 0 rgba(255,215,0,0)'
                    ],
                    opacity: [0.9, 1, 0.95, 1],
                    duration: 3000,
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    loop: true
                });
            } else if (!headerElement) {
                 console.warn("Visitor counter section header not found for animation.");
            } else {
                console.warn("anime.js library not found. Animation will not run.");
            }
        })
        .catch(error => {
            console.error('Visitor count fetch error:', error);
            if (visitorCountElement) visitorCountElement.textContent = 'Error';
            if (visitorOrdinalElement) visitorOrdinalElement.textContent = '';
             if (visitorMessageElement) visitorMessageElement.textContent = 'Could not load visitor count.';
        });
    });

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Bar
function initScrollProgressBar() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;

        anime({
            targets: scrollProgress,
            width: scrolled + '%',
            duration: 100,
            easing: 'linear'
        });
    });
}

// Initialize all animations
function initAnimations() {
    // Hero section animations
    animateHeroSection();

    // Animate elements on scroll
    initScrollAnimations();

    // Initialize chess board piece animations
    animateChessPieces();

    // Initialize button hover animations
    initButtonAnimations();

    // Initialize counter animations
    initCounterAnimations();
}

// Hero section animations - Header elements fade in sequentially
function animateHeroSection() {
    // Animate logo and navigation
    anime({
        targets: '.logo .animated-element, .nav-links .animated-element',
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutQuad'
    });

    // Headline animation with staggered elements
    anime({
        targets: '.hero-text-element',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200, {start: 400}),
        duration: 1000,
        easing: 'easeOutQuad'
    });
}

// Chess board pieces animation with sequential moves
function animateChessPieces() {
    const chessBoard = document.getElementById('chess-board');
    if (!chessBoard) return;

    // First, let's drop in all pieces
    const chessPieces = document.querySelectorAll('.chess-piece-container');
    const mainAnimation = anime({
        targets: chessPieces,
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: anime.stagger(50),
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
        complete: function() {
            // Start the specific piece movements
            moveSpecificPieces();
        }
    });

    // Glowing title effect for "Strategic Thinking"
    const strategic = document.querySelector('.header-text h1 .text-chess-gold:first-child');
    if (strategic) {
        anime({
            targets: strategic,
            textShadow: [
                '0 0 0 rgba(255,215,0,0)',
                '0 0 10px rgba(255,215,0,0.7)',
                '0 0 5px rgba(255,215,0,0.5)',
                '0 0 0 rgba(255,215,0,0)'
            ],
            opacity: [0.8, 1, 0.9, 1],
            easing: 'easeInOutSine',
            duration: 3000,
            loop: true
        });
    }

    // Glowing title effect for "Calculated"
    const calculated = document.querySelector('.header-text h1 .text-chess-gold:nth-child(3)');
    if (calculated) {
        anime({
            targets: calculated,
            textShadow: [
                '0 0 0 rgba(255,215,0,0)',
                '0 0 10px rgba(255,215,0,0.7)',
                '0 0 5px rgba(255,215,0,0.5)',
                '0 0 0 rgba(255,215,0,0)'
            ],
            opacity: [0.8, 1, 0.9, 1],
            easing: 'easeInOutSine',
            duration: 3000,
            loop: true
        });
    }
}

function moveSpecificPieces() {
    const whitePawn = document.getElementById('white-pawn');
    const blackPawn = document.getElementById('black-pawn');

    if (!whitePawn || !blackPawn) {
        console.error('Could not find chess pieces');
        return;
    }

    const timeline = anime.timeline({
        easing: 'easeOutQuad',
        duration: 800
    });

    // White Pawn moves down 2 squares
    timeline.add({
        targets: whitePawn,
        translateY: '200%', // 2 squares down (each 100%)
        duration: 800,
        easing: 'easeOutQuad',
        complete: function() {
            anime({
                targets: whitePawn,
                scale: [1, 1.1, 1],
                duration: 600
            });
        }
    });

    // Black Pawn moves up 2 squares
    timeline.add({
        targets: blackPawn,
        translateY: '-200%', // 2 squares up
        duration: 800,
        easing: 'easeOutQuad',
        complete: function() {
            anime({
                targets: blackPawn,
                scale: [1, 1.1, 1],
                duration: 600
            });
        }
    });
}

// Trigger movement after page loads
document.addEventListener('DOMContentLoaded', moveSpecificPieces);


// Button hover animations
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Initialize counter animations
function initCounterAnimations() {
    const statItems = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = parseInt(target.getAttribute('data-value'));

                anime({
                    targets: target,
                    innerHTML: [0, value],
                    round: 1,
                    duration: 2000,
                    easing: 'easeInOutExpo'
                });

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(item => {
        observer.observe(item);
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Create observers for different types of elements

    // Section headers with drawing effect
    animateOnScroll('.section-header-animated', {
        targets: '.section-header-animated h2',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad',
        complete: function() {
            // After the heading appears, animate the divider like a drawing line
            anime({
                targets: '.section-header-animated .section-divider',
                width: [0, '100%'],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeInOutQuad'
            });
        }
    });

    // About section text animations
    animateOnScroll('.about-text', {
        targets: '.about-text .animated-element',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutQuad'
    });

  // Basic scroll-trigger animation function
function animateOnScroll(triggerSelector, animationSettings) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            ...animationSettings
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(triggerSelector).forEach(el => {
      observer.observe(el);
    });
  }

  // Certifications cards - 3D flip-in from left/right
  animateOnScroll('.cert-container', {
    targets: '.cert-card-animated',
    opacity: [0, 1],
    translateY: [-80, 0],
    rotateY: [90, 0],
    delay: anime.stagger(200),
    duration: 1400,
    easing: 'easeOutElastic(1, 0.5)',
    complete: function() {
      anime({
        targets: '.cert-card-animated',
        rotateZ: [1, -1, 0],
        duration: 1600,
        easing: 'easeOutElastic(2, 0.3)',
        delay: anime.stagger(150)
      });
    }
  });


    // Skills items - cascade effect from the center
    animateOnScroll('.skills-grid', {
        targets: '.skill-item-animated',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(50, {grid: [8, 3], from: 'center'}),
        duration: 600,
        easing: 'easeOutQuad',
        complete: function() {
            // After all skills appear, add subtle persistent glow to icons
            anime({
                targets: '.skill-item i',
                boxShadow: ['0 0 0 rgba(255, 215, 0, 0)', '0 0 10px rgba(255, 215, 0, 0.3)', '0 0 5px rgba(255, 215, 0, 0)'],
                opacity: [0.9, 1, 0.95],
                loop: true,
                duration: 3000,
                easing: 'easeInOutSine',
                delay: anime.stagger(200)
            });
        }
    });

    // Projects
    animateOnScroll('.projects-grid', {
        targets: '.project-card-animated',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutQuad',
        complete: function() {
            // After project cards appear, animate the tech tags
            anime({
                targets: '.project-tech span',
                opacity: [0.5, 1],
                scale: [0.9, 1],
                delay: anime.stagger(100),
                duration: 600,
                easing: 'easeOutQuad'
            });
        }
    });

    // Visitor counter with bounce effect
    animateOnScroll('.visitor-counter-section', {
        targets: '.visitor-counter-section .stat-number',
        opacity: [0, 1],
        scale: [0.7, 1.05, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .6)'
    });

    // Contact form
    animateOnScroll('.contact-info', {
        targets: '.contact-info .animated-element',
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutQuad'
    });

    animateOnScroll('.contact-form', {
        targets: '.form-control-animated',
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutQuad'
    });

    // Footer content
    animateOnScroll('.footer', {
        targets: '.footer-logo, .footer-text, .footer-links, .aws-challenge-badge, .anime-credit',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutQuad',
        complete: function() {
            // Animate tech icons with staggered delay
            anime({
                targets: '.tech-icons-container .tech-icon',
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.8, 1],
                delay: anime.stagger(100),
                duration: 600,
                easing: 'easeOutQuad',
                complete: function() {
                    // Add rotating glow effect to tech icons
                    anime({
                        targets: '.tech-icons-container .tech-icon i',
                        rotate: [0, 360],
                        opacity: [0.8, 1, 0.8],
                        color: ['#d4af37', '#ffcc00', '#d4af37'],
                        duration: 8000,
                        loop: true,
                        easing: 'easeInOutSine',
                        delay: anime.stagger(1000)
                    });
                }
            });

            // Special animation for AWS Challenge badge
            anime({
                targets: '.aws-challenge-badge',
                backgroundColor: [
                    'rgba(30, 30, 30, 0)',
                    'rgba(30, 30, 30, 0.3)',
                    'rgba(30, 30, 30, 0)'
                ],
                boxShadow: [
                    '0 0 0 rgba(255, 215, 0, 0)',
                    '0 0 10px rgba(255, 215, 0, 0.3)',
                    '0 0 0 rgba(255, 215, 0, 0)'
                ],
                borderRadius: ['0px', '5px', '0px'],
                paddingLeft: ['0px', '10px', '0px'],
                paddingRight: ['0px', '10px', '0px'],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });
        }
    });
}

// Helper function to trigger animations on scroll - optimized version
function animateOnScroll(selector, animationConfig) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    // Smart ScrollObserver - animation triggers only when 60% visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                anime(animationConfig);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize page transitions for anchor links
function initPageTransitions() {
    // Create page transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'var(--chess-black)';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'opacity 0.5s ease';
    document.body.appendChild(overlay);

    // Enhance anchor links with fade transition
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Start the transition
                overlay.style.opacity = '0.8';
                overlay.style.pointerEvents = 'all';

                // After brief delay, scroll to the section and fade out
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'auto' // Use auto here because we're handling the animation ourselves
                    });

                    // Wait for scroll to complete, then fade out overlay
                    setTimeout(() => {
                        overlay.style.opacity = '0';
                        overlay.style.pointerEvents = 'none';
                    }, 400);
                }, 400);
            }
        });
    });
}

// Enhance skill icons with clash animation
function initSkillEffects() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Knight clash vibration effect
            anime({
                targets: item,
                translateX: [0, -3, 5, -5, 4, -2, 0],
                translateY: [0, 2, -3, 1, -2, 1, 0],
                duration: 600,
                easing: 'easeInOutQuad'
            });

            // Also create a mastery bar that fills up
            if (!item.querySelector('.skill-mastery-bar')) {
                const masteryBar = document.createElement('div');
                masteryBar.className = 'skill-mastery-bar';
                masteryBar.style.position = 'absolute';
                masteryBar.style.bottom = '0';
                masteryBar.style.left = '0';
                masteryBar.style.height = '3px';
                masteryBar.style.width = '0%';
                masteryBar.style.backgroundColor = 'var(--chess-gold)';
                item.style.position = 'relative';
                item.appendChild(masteryBar);

                // Animate the mastery bar filling
                anime({
                    targets: masteryBar,
                    width: ['0%', '100%'],
                    duration: 1200,
                    easing: 'easeInOutQuart'
                });
            }
        });
    });
}

// Project spotlight effect
function initProjectSpotlight() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.querySelector('.projects-section');

    if (!projectsSection || projectCards.length === 0) return;

    // Create the overlay for the spotlight effect
    const overlay = document.createElement('div');
    overlay.className = 'spotlight-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    overlay.style.zIndex = '1';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'background-color 0.3s ease';
    projectsSection.style.position = 'relative';
    projectsSection.appendChild(overlay);

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Dim the overall section
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

            // Highlight the current card
            card.style.position = 'relative';
            card.style.zIndex = '2';
            card.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)';
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            // Remove the dim effect
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';

            // Remove the highlight from the card
            card.style.zIndex = '1';
            card.style.boxShadow = '';
            card.style.transform = '';
        });
    });
}

// Create floating chess star particles for background
function createFloatingChessStars() {
    const chessStarsContainer = document.createElement('div');
    chessStarsContainer.className = 'chess-stars-container';
    chessStarsContainer.style.position = 'fixed';
    chessStarsContainer.style.top = '0';
    chessStarsContainer.style.left = '0';
    chessStarsContainer.style.width = '100%';
    chessStarsContainer.style.height = '100%';
    chessStarsContainer.style.overflow = 'hidden';
    chessStarsContainer.style.pointerEvents = 'none';
    chessStarsContainer.style.zIndex = '0';
    document.body.appendChild(chessStarsContainer);

    // Create several floating chess piece stars
    const pieceTypes = ['♟', '♞', '♝', '♜', '♛', '♚'];
    const numStars = 12; // Keep count low for performance

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const pieceType = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];

        star.className = 'chess-star';
        star.textContent = pieceType;
        star.style.position = 'absolute';
        star.style.color = 'rgba(255, 215, 0, 0.1)';
        star.style.fontSize = Math.random() * 20 + 10 + 'px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';

        chessStarsContainer.appendChild(star);

        // Animate with parallax effect
        anime({
            targets: star,
            translateX: () => {
                const moveDistance = Math.random() * 200 - 100;
                return [0, moveDistance];
            },
            translateY: () => {
                const moveDistance = Math.random() * 200 - 100;
                return [0, moveDistance];
            },
            opacity: [0.2, 0.1, 0.2],
            easing: 'easeInOutSine',
            duration: () => Math.random() * 15000 + 15000,
            loop: true,
            direction: 'alternate'
        });
    }

    // Add parallax effect based on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const stars = document.querySelectorAll('.chess-star');

        stars.forEach((star, index) => {
            const parallaxSpeed = 0.05 * (index % 3 + 1);
            const translateY = scrollY * parallaxSpeed;
            star.style.transform = `translateY(${translateY}px)`;
        });
    });
}