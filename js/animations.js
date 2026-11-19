/**
 * Animations & Motion Module
 * IntersectionObserver reveals, dynamic typewriter effect, stat counters, and code copy
 */

export class AnimationManager {
  constructor() {
    this.revealElements = document.querySelectorAll('.reveal');
    this.typewriterElement = document.getElementById('typewriter-text');
    this.statNumbers = document.querySelectorAll('.stat-number');
    this.copyCodeBtn = document.getElementById('copy-code-btn');
    this.timelineTabs = document.querySelectorAll('.timeline-tab-btn');
    this.timelinePanes = document.querySelectorAll('.timeline-pane');

    this.typewriterPhrases = [
      'Senior Frontend Engineer',
      'UI/UX Architecture Specialist',
      'React & TypeScript Craftsman',
      'Web Performance Enthusiast'
    ];
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    this.init();
  }

  init() {
    this.setupScrollReveal();
    this.setupCounters();
    this.startTypewriter();
    this.setupCopyCode();
    this.setupTimelineTabs();
  }

  /* ==========================================================================
     Scroll Reveal
     ========================================================================== */
  setupScrollReveal() {
    if (!this.revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    this.revealElements.forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     Animated Number Counters
     ========================================================================== */
  setupCounters() {
    if (!this.statNumbers.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = el.getAttribute('data-decimal') === 'true';
          const duration = 1800; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOutProgress;

            el.textContent = `${prefix}${isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${isDecimal ? target.toFixed(1) : target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    this.statNumbers.forEach((num) => observer.observe(num));
  }

  /* ==========================================================================
     Dynamic Typewriter Effect
     ========================================================================== */
  startTypewriter() {
    if (!this.typewriterElement) return;

    const tick = () => {
      const currentPhrase = this.typewriterPhrases[this.phraseIndex];

      if (this.isDeleting) {
        this.typewriterElement.textContent = currentPhrase.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.typewriterElement.textContent = currentPhrase.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      let typeSpeed = this.isDeleting ? 40 : 80;

      if (!this.isDeleting && this.charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at full word
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.typewriterPhrases.length;
        typeSpeed = 400; // Pause before typing next
      }

      setTimeout(tick, typeSpeed);
    };

    tick();
  }

  /* ==========================================================================
     Hero Code Snippet Copy
     ========================================================================== */
  setupCopyCode() {
    if (!this.copyCodeBtn) return;

    const codeSnippet = `// Senior Frontend Architecture Snapshot
import { createStore } from '@core/state';
import { optimizeVitals } from '@core/telemetry';

export const useAppEngine = () => {
  const telemetry = optimizeVitals({
    targetLCP: '< 1.2s',
    targetCLS: '0.00',
    targetINP: '< 100ms'
  });

  return { status: 'Production Ready', telemetry };
};`;

    this.copyCodeBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeSnippet);
        const originalHtml = this.copyCodeBtn.innerHTML;
        this.copyCodeBtn.innerHTML = `<span>Copied!</span>`;
        setTimeout(() => {
          this.copyCodeBtn.innerHTML = originalHtml;
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed', err);
      }
    });
  }

  /* ==========================================================================
     About Timeline Tabs
     ========================================================================== */
  setupTimelineTabs() {
    if (!this.timelineTabs.length) return;

    this.timelineTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');

        this.timelineTabs.forEach((t) => t.classList.remove('active'));
        this.timelinePanes.forEach((p) => (p.style.display = 'none'));

        tab.classList.add('active');
        const activePane = document.getElementById(targetId);
        if (activePane) {
          activePane.style.display = 'block';
        }
      });
    });
  }
}
