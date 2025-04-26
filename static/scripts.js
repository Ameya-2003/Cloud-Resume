// Chess-themed Portfolio - JavaScript

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
        '0,0': { icon: '<i class="fab fa-aws"></i>', name: 'AWS' },
        '0,1': { icon: '<i class="fas fa-cloud"></i>', name: 'Cloud' },
        '0,2': { icon: '<i class="fab fa-docker"></i>', name: 'Docker' },
        '0,3': { icon: '<i class="fab fa-kubernetes"></i>', name: 'K8s' },
        '0,4': { icon: '<i class="fab fa-github-alt"></i>', name: 'GitHub' },
        '0,5': { icon: '<i class="fab fa-jenkins"></i>', name: 'Jenkins' },
        '0,6': { icon: '<i class="fab fa-linux"></i>', name: 'Linux' },
        '0,7': { icon: '<i class="fab fa-python"></i>', name: 'Python' },
        '1,0': { icon: '<i class="fab fa-js-square"></i>', name: 'JS' },
        '1,1': { icon: '<i class="fab fa-html5"></i>', name: 'HTML5' },
        '1,2': { icon: '<i class="fab fa-css3-alt"></i>', name: 'CSS3' },
        '1,3': { icon: '<i class="fab fa-node-js"></i>', name: 'Node.js' },
        '1,4': { icon: '<i class="fas fa-database"></i>', name: 'DB' },
        '1,5': { icon: '<i class="fas fa-network-wired"></i>', name: 'Network' },
        '1,6': { icon: '<i class="fas fa-server"></i>', name: 'Server' },
        '1,7': { icon: '<i class="fas fa-shield-alt"></i>', name: 'Security' },
        '6,0': { icon: '<i class="fab fa-terraform"></i>', name: 'Terraform' },
        '6,1': { icon: '<i class="fas fa-code-branch"></i>', name: 'Git' },
        '6,2': { icon: '<i class="fas fa-terminal"></i>', name: 'CLI' },
        '6,3': { icon: '<i class="fas fa-exchange-alt"></i>', name: 'API' },
        '6,4': { icon: '<i class="fas fa-project-diagram"></i>', name: 'Infra' },
        '6,5': { icon: '<i class="fas fa-cloud-upload-alt"></i>', name: 'Deploy' },
        '6,6': { icon: '<i class="fas fa-code"></i>', name: 'Code' },
        '6,7': { icon: '<i class="fas fa-cogs"></i>', name: 'DevOps' },
        '7,0': { icon: '<i class="fab fa-slack"></i>', name: 'Slack' },
        '7,1': { icon: '<i class="fas fa-robot"></i>', name: 'Automation' },
        '7,2': { icon: '<i class="fas fa-chart-line"></i>', name: 'Monitoring' },
        '7,3': { icon: '<i class="fas fa-sitemap"></i>', name: 'Architecture' },
        '7,4': { icon: '<i class="fas fa-box"></i>', name: 'Containers' },
        '7,5': { icon: '<i class="fas fa-tachometer-alt"></i>', name: 'Performance' },
        '7,6': { icon: '<i class="fas fa-file-code"></i>', name: 'IaC' },
        '7,7': { icon: '<i class="fas fa-clipboard-check"></i>', name: 'Testing' }
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

    if (!visitorCountElement || !visitorOrdinalElement) return;

    // Function to update the visitor count display
    function updateVisitorDisplay(count) {
        // Update the counter number
        visitorCountElement.textContent = count;

        // Update the ordinal text (1st, 2nd, 3rd, etc.)
        let ordinal = 'th';
        if (count % 10 === 1 && count % 100 !== 11) {
            ordinal = 'st';
        } else if (count % 10 === 2 && count % 100 !== 12) {
            ordinal = 'nd';
        } else if (count % 10 === 3 && count % 100 !== 13) {
            ordinal = 'rd';
        }

        visitorOrdinalElement.textContent = count + ordinal;
    }

    // Fetch visitor count from the API
    async function fetchVisitorCount() {
        try {
            // In a real implementation, this would be an API call to AWS API Gateway
            // which would trigger a Lambda function to update DynamoDB
            // const response = await fetch('https://your-api-gateway-url/visitors');
            // const data = await response.json();
            // updateVisitorDisplay(data.count);

            // For development/demo purposes, this is a simulated count
            // This would be replaced by the actual API call to the AWS backend
            const simulatedCount = 142;

            // Show loading state for a realistic effect
            setTimeout(() => {
                updateVisitorDisplay(simulatedCount);
            }, 1000);

        } catch (error) {
            console.error('Error fetching visitor count:', error);
            visitorCountElement.textContent = 'Error';
        }
    }

    // Increment visitor count
    async function incrementVisitorCount() {
        try {
            // In a real implementation, this would be a POST request to the API
            // const response = await fetch('https://your-api-gateway-url/visitors', {
            //    method: 'POST'
            // });
            // const data = await response.json();
            // updateVisitorDisplay(data.count);

            // Call fetch to get the current count
            fetchVisitorCount();

        } catch (error) {
            console.error('Error incrementing visitor count:', error);
        }
    }

    // Call the increment function when the page loads
    incrementVisitorCount();
}

// Helper function to add ordinal suffix to numbers (1st, 2nd, 3rd, etc.)
function getOrdinalSuffix(num) {
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

// Chess board pieces animation
function animateChessPieces() {
    const chessPieces = document.querySelectorAll('.chess-piece-container');
    
    anime({
        targets: chessPieces,
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: anime.stagger(50),
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
    });
}

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
    
    // Section headers
    animateOnScroll('.section-header-animated', {
        targets: '.section-header-animated h2, .section-header-animated .section-divider',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(300),
        duration: 800,
        easing: 'easeOutQuad'
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
    
    // Certifications cards
    animateOnScroll('.cert-container', {
        targets: '.cert-card-animated',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutQuad'
    });
    
    // Skills items
    animateOnScroll('.skills-grid', {
        targets: '.skill-item-animated',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(50, {grid: [8, 3], from: 'center'}),
        duration: 600,
        easing: 'easeOutQuad'
    });
    
    // Projects
    animateOnScroll('.projects-grid', {
        targets: '.project-card-animated',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutQuad'
    });
    
    // Visitor counter
    animateOnScroll('.counter-container', {
        targets: '.counter-container.animated-element',
        opacity: [0, 1],
        scale: [0.9, 1],
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
    
    // Footer
    animateOnScroll('.footer-content', {
        targets: '.footer-icon-animated',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuad'
    });
}

// Helper function to trigger animations on scroll
function animateOnScroll(selector, animationConfig) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime(animationConfig);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}