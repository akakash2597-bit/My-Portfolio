/**
 * Skills Module
 * Interactive filtering and animated progress indicators for technical skills
 */

export class SkillsManager {
  constructor() {
    this.filterBtns = document.querySelectorAll('.skill-filter-btn');
    this.skillCards = document.querySelectorAll('.skill-card');

    this.init();
  }

  init() {
    this.setupFiltering();
    this.animateProgressBars();
  }

  setupFiltering() {
    if (!this.filterBtns.length || !this.skillCards.length) return;

    this.filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        this.skillCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  animateProgressBars() {
    const progressFills = document.querySelectorAll('.skill-progress-fill');
    if (!progressFills.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const targetWidth = fill.getAttribute('data-progress') || '85%';
            fill.style.width = targetWidth;
            obs.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );

    progressFills.forEach((fill) => observer.observe(fill));
  }
}
