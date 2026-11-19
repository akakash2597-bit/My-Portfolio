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

// Project Category Filter Logic
const filterTabs = document.querySelectorAll('.filter-tab');
const projectCategories = document.querySelectorAll('.project-category');

if (filterTabs.length > 0 && projectCategories.length > 0) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab button state
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const selectedCategory = tab.getAttribute('data-category');

            // Show / hide matching category sections
            projectCategories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                if (selectedCategory === 'all' || categoryType === selectedCategory) {
                    category.classList.remove('hidden');
                } else {
                    category.classList.add('hidden');
                }
            });
        });
    });
}
