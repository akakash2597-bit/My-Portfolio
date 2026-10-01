// Toggle Mobile Navigation Menu
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Theme Switcher Logic
function toggleThemeMenu() {
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function setTheme(themeName) {
    document.body.className = '';
    if (themeName !== 'default') {
        document.body.classList.add('theme-' + themeName);
    }
    const menu = document.getElementById('themeMenu');
    if (menu) {
        menu.classList.remove('active');
    }
}

// Resume Viewer Modal Logic
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close Modal / Theme Menu on Outside Click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('resumeModal');
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeMenu = document.getElementById('themeMenu');

    if (e.target === modal) {
        closeResumeModal();
    }

    if (themeMenu && themeBtn && !themeBtn.contains(e.target) && !themeMenu.contains(e.target)) {
        themeMenu.classList.remove('active');
    }
});

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contactForm').reset();
}