/**
 * Navigation Manager
 * Handles sticky header, mobile drawer menu, scrollspy, and back-to-top actions
 */

export class NavigationManager {
  constructor() {
    this.header = document.querySelector('.header');
    this.mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.backToTopBtn = document.getElementById('back-to-top-btn');

    this.init();
  }

  init() {
    this.bindScrollEvents();
    this.bindMobileMenu();
    this.bindNavLinks();
    this.setupScrollspy();
    this.bindBackToTop();
  }

  bindScrollEvents() {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 30) {
        this.header?.classList.add('scrolled');
      } else {
        this.header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  bindMobileMenu() {
    if (!this.mobileToggleBtn || !this.navMenu) return;

    this.mobileToggleBtn.addEventListener('click', () => {
      const isOpen = this.navMenu.classList.contains('is-open');
      this.toggleMenu(!isOpen);
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navMenu.classList.contains('is-open')) {
        this.toggleMenu(false);
        this.mobileToggleBtn.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        this.navMenu.classList.contains('is-open') &&
        !this.navMenu.contains(e.target) &&
        !this.mobileToggleBtn.contains(e.target)
      ) {
        this.toggleMenu(false);
      }
    });
  }

  toggleMenu(show) {
    if (show) {
      this.navMenu.classList.add('is-open');
      this.mobileToggleBtn.setAttribute('aria-expanded', 'true');
      this.mobileToggleBtn.setAttribute('aria-label', 'Close navigation menu');
    } else {
      this.navMenu.classList.remove('is-open');
      this.mobileToggleBtn.setAttribute('aria-expanded', 'false');
      this.mobileToggleBtn.setAttribute('aria-label', 'Open navigation menu');
    }
  }

  bindNavLinks() {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        // Automatically close mobile menu upon clicking any anchor link
        this.toggleMenu(false);
      });
    });
  }

  setupScrollspy() {
    if (!this.sections.length || !this.navLinks.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          this.navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    this.sections.forEach((section) => observer.observe(section));
  }

  bindBackToTop() {
    if (!this.backToTopBtn) return;

    this.backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
