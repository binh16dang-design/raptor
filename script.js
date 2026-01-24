// ========================================
// Navigation Scroll Effect
// ========================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Handle scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Attend Button Toggle
// ========================================

const attendButtons = document.querySelectorAll('.attend-btn');
const willAttendInput = document.getElementById('willAttend');

attendButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        attendButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Update hidden input value
        const value = button.getAttribute('data-value');
        if (willAttendInput) {
            willAttendInput.value = value;
        }
    });
});

// ========================================
// Form Submission Handler
// ========================================

const waitlistForm = document.getElementById('waitlistForm');

if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            willAttend: document.getElementById('willAttend').value,
            expectation: document.getElementById('expectation').value
        };

        // For demo purposes, log the data and show success message
        console.log('Form submitted:', formData);

        // Show success message
        showSuccessMessage();

        // Reset form
        waitlistForm.reset();

        // Reset attend buttons
        attendButtons.forEach(btn => btn.classList.remove('active'));
        attendButtons[0].classList.add('active');
        if (willAttendInput) {
            willAttendInput.value = 'yes';
        }
    });
}

// ========================================
// Success Message
// ========================================

function showSuccessMessage() {
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00f2fe 0%, #e4158b 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1.5rem;
        font-weight: 900;
        font-size: 1.5rem;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.5s ease-out;
    `;
    successMsg.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <div>Thanks for joining!</div>
        <div style="font-size: 1rem; font-weight: 700; margin-top: 0.5rem; opacity: 0.9;">
            We'll be in touch soon
        </div>
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    // Add to body
    document.body.appendChild(successMsg);

    // Remove after 3 seconds
    setTimeout(() => {
        successMsg.style.animation = 'slideIn 0.5s ease-out reverse';
        setTimeout(() => {
            successMsg.remove();
            style.remove();
        }, 500);
    }, 3000);
}

// ========================================
// Intersection Observer for Animations
// ========================================

// Observe sections for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply initial styles and observe sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    // Skip hero section
    if (index === 0) return;

    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    sectionObserver.observe(section);
});

// ========================================
// Product Cards Hover Effect
// ========================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.product-image');
        if (image) {
            image.style.transition = 'transform 0.5s ease-out';
            image.style.transform = 'scale(1.1) rotate(0deg)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.product-image');
        if (image) {
            const originalRotation = image.classList.contains('rotate-right') ? 'rotate(15deg)' :
                image.classList.contains('rotate-left') ? 'rotate(-15deg)' :
                    'rotate(5deg)';
            image.style.transform = `scale(1) ${originalRotation}`;
        }
    });
});

// ========================================
// Product Showcase Thumbnail Click Handler
// ========================================

const thumbnails = document.querySelectorAll('.thumbnail');
const showcaseLargeImage = document.getElementById('showcaseLargeImage');
const productTitle = document.getElementById('productTitle');
const productDesc = document.getElementById('productDesc');
const productPrice = document.getElementById('productPrice');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));

        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');

        // Get product data from thumbnail
        const newImage = thumbnail.getAttribute('data-image');
        const newTitle = thumbnail.getAttribute('data-title');
        const newDesc = thumbnail.getAttribute('data-desc');
        const newPrice = thumbnail.getAttribute('data-price');

        // Fade out current image
        if (showcaseLargeImage) {
            showcaseLargeImage.style.opacity = '0';
            showcaseLargeImage.style.transform = 'scale(0.95)';

            setTimeout(() => {
                // Update image source
                showcaseLargeImage.src = newImage;

                // Fade in new image
                showcaseLargeImage.style.opacity = '1';
                showcaseLargeImage.style.transform = 'scale(1)';
            }, 250);
        }

        // Update product info with smooth transition
        if (productTitle) {
            productTitle.style.opacity = '0';
            setTimeout(() => {
                productTitle.textContent = newTitle;
                productTitle.style.opacity = '1';
            }, 150);
        }

        if (productDesc) {
            productDesc.style.opacity = '0';
            setTimeout(() => {
                productDesc.textContent = newDesc;
                productDesc.style.opacity = '1';
            }, 150);
        }

        if (productPrice) {
            productPrice.style.opacity = '0';
            setTimeout(() => {
                productPrice.textContent = newPrice;
                productPrice.style.opacity = '1';
            }, 150);
        }
    });

    // Add hover effect for thumbnails
    thumbnail.addEventListener('mouseenter', () => {
        if (!thumbnail.classList.contains('active')) {
            thumbnail.style.transform = 'scale(1.05)';
        }
    });

    thumbnail.addEventListener('mouseleave', () => {
        if (!thumbnail.classList.contains('active')) {
            thumbnail.style.transform = 'scale(1)';
        }
    });
});


// ========================================
// Parallax Effect for Hero Section
// ========================================

const heroImage = document.querySelector('.hero-image');
const heroContent = document.querySelector('.hero-content');

if (heroImage && heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;

        heroImage.style.transform = `translateY(${rate}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
}

// ========================================
// Event Card Click Handler
// ========================================

const eventButtons = document.querySelectorAll('.event-btn');

eventButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const eventCard = button.closest('.event-card');
        const cityName = eventCard.querySelector('.event-city').textContent;
        const eventDay = eventCard.querySelector('.event-day').textContent;
        const eventTime = eventCard.querySelector('.time-value').textContent;

        // Show event details (you can customize this)
        alert(`Event Details:\n\nCity: ${cityName}\nDay: ${eventDay}\nTime: ${eventTime}\n\nClick "Join Waitlist" to register!`);

        // Scroll to waitlist section
        setTimeout(() => {
            const waitlistSection = document.getElementById('waitlist');
            if (waitlistSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = waitlistSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    });
});

// ========================================
// Logo Animation on Click
// ========================================

const navLogo = document.querySelector('.nav-logo');

if (navLogo) {
    navLogo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Input Focus Effects
// ========================================

const formInputs = document.querySelectorAll('.form-input, .form-textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)';
    });
});

// ========================================
// Preload Critical Images
// ========================================

function preloadImages() {
    const criticalImages = [
        'https://badathaiyen.my.canva.site/de-luxe-room/_assets/media/a572ee60bacbfa37bd8139e18d78864b.jpg',
        'https://badathaiyen.my.canva.site/de-luxe-room/_assets/media/ca455c95123b81e76d80906850739960.png',
        'https://badathaiyen.my.canva.site/de-luxe-room/_assets/media/29841932fae9df2ba5c3ec01910b6376.png'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);

// ========================================
// Add Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Easter Egg
// ========================================

console.log('%c🛹 RAPTOR X SCATER 🛹', 'font-size: 24px; font-weight: 900; color: #00f2fe; text-shadow: 2px 2px 0 #e4158b;');
console.log('%cOne push. One slam. One "again".', 'font-size: 14px; font-weight: 700; color: #324254;');
console.log('%cInterested in working with us? Email: info@scaters.co.uk', 'font-size: 12px; color: #6b7280;');

// ========================================
// Error Handling
// ========================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Handle form validation errors gracefully
if (waitlistForm) {
    const inputs = waitlistForm.querySelectorAll('input[required]');

    inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.style.boxShadow = '0 0 0 4px rgba(228, 21, 139, 0.5)';

            setTimeout(() => {
                input.style.boxShadow = '';
            }, 2000);
        });
    });
}

console.log('✅ Website initialized successfully!');

// ========================================
// Chatbot Functionality
// ========================================

const chatButton = document.getElementById('chatButton');
const chatPopup = document.getElementById('chatPopup');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const chatNotification = document.querySelector('.chat-notification');

// Toggle chat popup
if (chatButton && chatPopup) {
    chatButton.addEventListener('click', () => {
        chatPopup.classList.toggle('active');
        if (chatPopup.classList.contains('active')) {
            chatInput.focus();
            // Hide notification when opened
            if (chatNotification) {
                chatNotification.style.display = 'none';
            }
        }
    });
}

// Close chat
if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatPopup.classList.remove('active');
    });
}

// Send message function
function sendMessage(text) {
    if (!text.trim()) return;

    // Add user message
    addMessage(text, 'user');

    // Clear input
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Generate bot response after delay
    setTimeout(() => {
        hideTypingIndicator();
        const response = getBotResponse(text.toLowerCase());
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Add message to chat
function addMessage(text, type = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'bot' ? '🤖' : '👤';

    const content = document.createElement('div');
    content.className = 'message-content';

    const p = document.createElement('p');
    p.textContent = text;

    content.appendChild(p);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingMessage = chatMessages.querySelector('.typing-message');
    if (typingMessage) {
        typingMessage.remove();
    }
}

// Bot responses
function getBotResponse(message) {
    // Roadshow info
    if (message.includes('roadshow') || message.includes('event') || message.includes('when')) {
        return "Our Spring Break Roadshow '24 includes 3 events:\n• Monday in LONDON (Birmingham - Creation Skatepark)\n• Wednesday in BIRMINGHAM (Manchester - Projekts MCR)\n• Friday in MANCHESTER (Liverpool - Pier Head)\nAll events start at 3:00 PM! 🛹";
    }

    // Products info
    if (message.includes('product') || message.includes('board') || message.includes('skateboard') || message.includes('deck')) {
        return "We have 7 amazing skateboard decks ranging from $69.99 to $119.99:\n• Classic Cruiser ($69.99)\n• Street Style ($79.99)\n• Urban Explorer ($85.99)\n• Premium Deck ($89.99)\n• Freestyle Master ($92.99)\n• Pro Series ($99.99)\n• Competition Elite ($119.99)\nScroll down to see them all! 🛹";
    }

    // Locations info
    if (message.includes('location') || message.includes('where') || message.includes('address')) {
        return "Event locations:\n📍 Creation Skatepark: 582 Moseley Rd, Birmingham\n📍 Projekts MCR: 97 London Road, Manchester\n📍 Pier Head: Liverpool L3 1BY\nCheck out the interactive maps on our site!";
    }

    // Price info
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
        return "Our skateboard decks range from $69.99 to $119.99. The Classic Cruiser is our most affordable option, while the Competition Elite is our premium choice. All boards are high-quality with 7-ply Canadian maple! 💰";
    }

    // Contact info
    if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
        return "📞 Contact us:\nEmail: info@scaters.co.uk\nTel: 02476 016496\nAddress: Scaters Ltd, Liverpool, UK\n\nFollow us on social media for updates! 💙";
    }

    // Greetings
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
        return "Hey! 👋 Welcome to RAPTOR X SCATER! How can I help you today? Feel free to ask about our roadshow, products, or locations!";
    }

    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
        return "You're welcome! 😊 Is there anything else you'd like to know about RAPTOR X SCATER? Happy to help!";
    }

    // Waitlist
    if (message.includes('join') || message.includes('waitlist') || message.includes('register')) {
        return "Awesome! 🎉 Scroll down to the 'Join the Waitlist' section at the bottom of the page. Fill out the form and you'll be the first to ride Raptor!";
    }

    // Default response
    return "I'm here to help! 🤖 You can ask me about:\n• Roadshow events 📅\n• Skateboard products 🛹\n• Event locations 📍\n• Pricing 💰\n• Contact info 📞\n\nWhat would you like to know?";
}

// Send message on button click
if (chatSend) {
    chatSend.addEventListener('click', () => {
        sendMessage(chatInput.value);
    });
}

// Send message on Enter key
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(chatInput.value);
        }
    });
}

// Quick reply buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        const message = e.target.getAttribute('data-message');
        sendMessage(message);
        // Remove quick replies after use
        e.target.parentElement.remove();
    }
});

console.log('✅ Chatbot initialized!');
