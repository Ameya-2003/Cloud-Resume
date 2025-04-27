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
    
    // Initialize page transitions
    initPageTransitions();
    
    // Initialize certification card flip effect
    initCertificateCards();
    
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
    const miniChessPieces = document.querySelectorAll('.mini-chess-piece');

    if (!visitorCountElement || !visitorOrdinalElement) return;
    
    // Function to update the visitor count display with fancy animation
    function updateVisitorDisplay(count) {
        // Prepare the counter with fancy animations
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
            offset: '-=400',
            complete: function() {
                // Set the data-value attribute for future reference
                visitorCountElement.setAttribute('data-value', count);
            }
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

        // Update the ordinal text (1st, 2nd, 3rd, etc.)
        let ordinal = 'th';
        if (count % 10 === 1 && count % 100 !== 11) {
            ordinal = 'st';
        } else if (count % 10 === 2 && count % 100 !== 12) {
            ordinal = 'nd';
        } else if (count % 10 === 3 && count % 100 !== 13) {
            ordinal = 'rd';
        }

        // Animate the ordinal text with a typewriter effect
        setTimeout(() => {
            visitorOrdinalElement.textContent = '';
            const finalText = count + ordinal;
            
            // First make the element visible with a subtle animation
            anime({
                targets: visitorOrdinalElement,
                opacity: 1,
                duration: 300,
                easing: 'easeOutQuad',
                complete: function() {
                    // Then do the typewriter effect
                    let i = 0;
                    const typeWriter = setInterval(() => {
                        if (i < finalText.length) {
                            visitorOrdinalElement.textContent += finalText.charAt(i);
                            i++;
                        } else {
                            clearInterval(typeWriter);
                            // Add final visual flourish
                            anime({
                                targets: visitorOrdinalElement,
                                textShadow: [
                                    '0 0 0 rgba(212, 175, 55, 0.0)',
                                    '0 0 10px rgba(212, 175, 55, 0.8)',
                                    '0 0 5px rgba(212, 175, 55, 0.4)'
                                ],
                                duration: 1000,
                                direction: 'alternate',
                                loop: 2,
                                easing: 'easeInOutSine'
                            });
                        }
                    }, 100);
                }
            });
        }, 1200);
        
        // Animate the badge as well
        setTimeout(() => {
            anime({
                targets: '.counter-badge',
                translateY: [20, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }, 2000);
    }

    // Fetch visitor count from the API
    async function fetchVisitorCount() {
        try {
            // In a real implementation, this would be an API call to AWS API Gateway
            // which would trigger a Lambda function to update DynamoDB
            // const response = await fetch('https://your-api-gateway-url/visitors');
            // const data = await response.json();
            // updateVisitorDisplay(data.count);

            // Use the count stored in the data-value attribute
            const simulatedCount = parseInt(visitorCountElement.getAttribute('data-value') || '142');

            // Update with animation
            updateVisitorDisplay(simulatedCount);

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
    
    // Add extra golden glow effect to the counter section header
    anime({
        targets: '.visitor-counter-section .section-header h2',
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

// Chess board pieces animation with sequential moves
function animateChessPieces() {
    const chessPieces = document.querySelectorAll('.chess-piece-container');
    
    // First, let's drop in all pieces
    const mainAnimation = anime({
        targets: chessPieces,
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: anime.stagger(50),
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
        complete: function() {
            // Start sequential piece movement animations for white pieces first
            moveChessPiecesSequentially();
        }
    });
    
    // Glowing title effect for "Strategic Thinking"
    const strategicText = document.querySelector('.text-chess-gold:first-child');
    if (strategicText) {
        anime({
            targets: strategicText,
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

// Function to move chess pieces sequentially - white then black
function moveChessPiecesSequentially() {
    // Get white pieces (rows 6 and 7)
    const whitePieces = [
        ...document.querySelectorAll('.chess-square:nth-child(n+49):nth-child(-n+56) .chess-piece-container'), // row 6 (pawns)
        ...document.querySelectorAll('.chess-square:nth-child(n+57):nth-child(-n+64) .chess-piece-container')  // row 7 (other pieces)
    ];
    
    // Get black pieces (rows 0 and 1)
    const blackPieces = [
        ...document.querySelectorAll('.chess-square:nth-child(n+1):nth-child(-n+8) .chess-piece-container'),  // row 0 (other pieces)
        ...document.querySelectorAll('.chess-square:nth-child(n+9):nth-child(-n+16) .chess-piece-container')  // row 1 (pawns)
    ];
    
    // Set up timeline for white pieces
    let whiteMoveTimeline = anime.timeline({
        easing: 'easeOutExpo',
        complete: function() {
            // After white pieces finish, start black pieces with a short delay
            setTimeout(() => {
                moveBlackPieces();
            }, 500);
        }
    });
    
    // Add white pieces to the timeline with staggered delays
    whitePieces.forEach((piece, index) => {
        // Highlight the piece before moving
        whiteMoveTimeline.add({
            targets: piece,
            boxShadow: [
                '0 0 0 rgba(255,215,0,0)', 
                '0 0 15px rgba(255,215,0,0.7)',
                '0 0 5px rgba(255,215,0,0.3)'
            ],
            scale: [1, 1.1, 1],
            duration: 600,
            offset: index * 200, // Staggered start times
        });
        
        // Move the piece two squares forward (different directions based on piece type)
        whiteMoveTimeline.add({
            targets: piece,
            translateY: (index < 8) ? [-60] : [-40], // Pawns move 2 squares, others move less
            duration: 800,
            offset: index * 200 + 300, // Slightly after the highlight effect starts
        });
    });
    
    // Function to animate black pieces
    function moveBlackPieces() {
        let blackMoveTimeline = anime.timeline({
            easing: 'easeOutExpo',
            complete: function() {
                // After all pieces have moved, make them draggable
                makeChessPiecesDraggable();
            }
        });
        
        // Add black pieces to the timeline with staggered delays
        blackPieces.forEach((piece, index) => {
            // Highlight the piece before moving
            blackMoveTimeline.add({
                targets: piece,
                boxShadow: [
                    '0 0 0 rgba(255,215,0,0)', 
                    '0 0 15px rgba(255,215,0,0.7)',
                    '0 0 5px rgba(255,215,0,0.3)'
                ],
                scale: [1, 1.1, 1],
                duration: 600,
                offset: index * 200, // Staggered start times
            });
            
            // Move the piece two squares forward
            blackMoveTimeline.add({
                targets: piece,
                translateY: (index >= 8) ? [60] : [40], // Pawns move 2 squares, others move less
                duration: 800,
                offset: index * 200 + 300, // Slightly after the highlight effect starts
            });
        });
    }
}

// Easter egg - draggable chess pieces
function makeChessPiecesDraggable() {
    const chessPieces = document.querySelectorAll('.chess-piece-container');
    let draggedPiece = null;
    let startPosition = { x: 0, y: 0 };
    
    chessPieces.forEach(piece => {
        piece.setAttribute('draggable', 'true');
        
        piece.addEventListener('mousedown', (e) => {
            draggedPiece = piece;
            startPosition = {
                x: e.clientX - piece.getBoundingClientRect().left,
                y: e.clientY - piece.getBoundingClientRect().top
            };
            
            piece.style.cursor = 'grabbing';
            piece.style.zIndex = '1000';
            
            // Add subtle scaling to show it's being dragged
            anime({
                targets: piece,
                scale: 1.1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        // Track mouse movement when dragging
        document.addEventListener('mousemove', (e) => {
            if (!draggedPiece) return;
            
            // Calculate new position
            const x = e.clientX - startPosition.x;
            const y = e.clientY - startPosition.y;
            
            // Update piece position
            draggedPiece.style.position = 'absolute';
            draggedPiece.style.left = `${x}px`;
            draggedPiece.style.top = `${y}px`;
        });
        
        // End dragging
        document.addEventListener('mouseup', () => {
            if (!draggedPiece) return;
            
            // Reset scale
            anime({
                targets: draggedPiece,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
            
            draggedPiece.style.cursor = 'grab';
            draggedPiece.style.zIndex = '100';
            draggedPiece = null;
        });
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
    
    // Certifications cards - falling from above like medals
    animateOnScroll('.cert-container', {
        targets: '.cert-card-animated',
        opacity: [0, 1],
        translateY: [-80, 0],
        rotateX: [-30, 0],
        delay: anime.stagger(200),
        duration: 1200,
        easing: 'easeOutElastic(1, 0.5)',
        complete: function() {
            // Add a slight swing effect after they land
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

// Certificate cards 3D flip effect
function initCertificateCards() {
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        // Create back content for the flip effect
        const frontSide = card.cloneNode(true);
        const backSide = document.createElement('div');
        backSide.className = 'cert-card-back';
        backSide.style.position = 'absolute';
        backSide.style.top = '0';
        backSide.style.left = '0';
        backSide.style.width = '100%';
        backSide.style.height = '100%';
        backSide.style.background = 'var(--chess-gold)';
        backSide.style.color = 'var(--chess-black)';
        backSide.style.display = 'flex';
        backSide.style.flexDirection = 'column';
        backSide.style.justifyContent = 'center';
        backSide.style.alignItems = 'center';
        backSide.style.padding = '2rem';
        backSide.style.transform = 'rotateY(180deg)';
        backSide.style.backfaceVisibility = 'hidden';
        
        // Add fun fact content to back
        backSide.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
            <h3 style="margin-bottom: 1rem;">Achievement Unlocked!</h3>
            <p style="text-align: center;">This certification represents hundreds of hours of study and hands-on practice.</p>
        `;
        
        // Set up container for flip effect
        const cardContainer = document.createElement('div');
        cardContainer.className = 'cert-card-container';
        cardContainer.style.position = 'relative';
        cardContainer.style.width = '100%';
        cardContainer.style.height = '100%';
        cardContainer.style.transition = 'transform 0.8s';
        cardContainer.style.transformStyle = 'preserve-3d';
        
        // Set up front side styles
        frontSide.style.position = 'absolute';
        frontSide.style.width = '100%';
        frontSide.style.height = '100%';
        frontSide.style.backfaceVisibility = 'hidden';
        
        // Insert into DOM
        cardContainer.appendChild(frontSide);
        cardContainer.appendChild(backSide);
        card.replaceWith(cardContainer);
        
        // Add hover event for flip effect
        cardContainer.addEventListener('mouseenter', () => {
            cardContainer.style.transform = 'rotateY(180deg)';
        });
        
        cardContainer.addEventListener('mouseleave', () => {
            cardContainer.style.transform = 'rotateY(0)';
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