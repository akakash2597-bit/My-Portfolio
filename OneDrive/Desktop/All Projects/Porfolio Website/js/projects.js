/**
 * Projects Showcase Module
 * Project filtering and accessible Case Study Modal dialog
 */

const CASE_STUDIES = {
  'nexus-analytics': {
    title: 'Nexus Analytics Cloud Platform',
    category: 'Enterprise Web App',
    timeline: '4 Months · Lead Frontend Engineer',
    description: 'A high-frequency observability and real-time streaming telemetry dashboard serving 200k+ active daily metrics.',
    problem: 'The legacy monitoring console suffered from frequent UI thread lockups during high-frequency telemetry spikes (500+ events/sec), causing canvas lag and degraded Core Web Vitals.',
    solution: 'Engineered a virtualized streaming chart architecture leveraging OffscreenCanvas, Web Workers for data processing, and custom WebSockets backpressure management. Refactored state management with Zustand slice stores.',
    metrics: [
      { label: 'FPS during heavy streaming', value: '60 FPS stable' },
      { label: 'Bundle Size Reduction', value: '-48%' },
      { label: 'Core Web Vitals INP', value: '38ms' }
    ],
    techStack: ['React 18', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com'
  },
  'aura-design-system': {
    title: 'Aura Accessible Design System',
    category: 'Design Systems',
    timeline: '6 Months · Lead UI Architect',
    description: 'An enterprise-grade, WCAG 2.2 AAA-compliant multi-brand design system with 45+ headless and styled primitives.',
    problem: 'Multiple product squads across distributed teams were reinventing form inputs, navigation patterns, and modals, causing inconsistent brand presence and severe accessibility violations.',
    solution: 'Designed and published an automated npm component library built upon Radix UI primitives and styled with CSS custom variables. Integrated automated axe-core testing in CI and interactive Storybook documentation with zero regressions.',
    metrics: [
      { label: 'WCAG Accessibility Rating', value: 'AAA 100%' },
      { label: 'Design-to-Code Delivery', value: '3x Faster' },
      { label: 'Squad Adoption Rate', value: '100% across 6 apps' }
    ],
    techStack: ['TypeScript', 'React', 'Radix UI', 'Storybook', 'Vanilla Extract', 'Jest / Axe'],
    liveUrl: '#',
    githubUrl: 'https://github.com'
  },
  'pulse-commerce': {
    title: 'Pulse Commerce Storefront',
    category: 'Headless E-Commerce',
    timeline: '3 Months · Senior Frontend Dev',
    description: 'An ultra-fast headless e-commerce experience with sub-second page transitions, dynamic inventory streaming, and localized currencies.',
    problem: 'Slow initial load times on 4G mobile devices led to a 28% checkout drop-off and poor SEO organic search rankings on product collection pages.',
    solution: 'Architected on Next.js 14 App Router utilizing Server Components (RSC), Edge caching, partial prerendering, and optimized image delivery with responsive WebP/AVIF formats.',
    metrics: [
      { label: 'Google Lighthouse Score', value: '100 / 100' },
      { label: 'Largest Contentful Paint (LCP)', value: '0.8s' },
      { label: 'Conversion Rate Lift', value: '+32%' }
    ],
    techStack: ['Next.js 14', 'React Server Components', 'Zustand', 'Stripe API', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com'
  },
  'devcanvas-studio': {
    title: 'DevCanvas Web Studio',
    category: 'Web Application',
    timeline: '5 Months · Frontend Specialist',
    description: 'A browser-based node graph editor and workflow visualizer enabling engineers to model microservice topologies interactively.',
    problem: 'Rendering hundreds of interactive connected nodes with real-time bezier curve dragging caused severe DOM re-layout bottlenecks and battery drain.',
    solution: 'Implemented a custom 2D Canvas rendering loop with spatial indexing (R-Tree) for fast hit-testing, zoom-to-cursor transformations, and offline auto-save using IndexedDB.',
    metrics: [
      { label: 'Nodes Rendered Smoothly', value: '10,000+' },
      { label: 'Memory Footprint', value: '< 65MB' },
      { label: 'Offline Sync Reliability', value: '99.9%' }
    ],
    techStack: ['React', 'HTML5 Canvas API', 'TypeScript', 'Web Workers', 'IndexedDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com'
  },
  'hyperfetch-lib': {
    title: 'HyperFetch Client & Cache',
    category: 'Open Source Tool',
    timeline: 'Open Source Contribution',
    description: 'A lightweight (1.8kB gzip), zero-dependency HTTP client with smart deduplication, exponential backoff, and stale-while-revalidate caching.',
    problem: 'Existing client libraries were either bloated (>25kB) or lacked built-in request deduplication and offline fallback capabilities.',
    solution: 'Crafted a modern TypeScript library leveraging native Fetch API, AbortController, and BroadcastChannel for seamless cross-tab cache coordination.',
    metrics: [
      { label: 'Minified & Gzipped Size', value: '1.8 kB' },
      { label: 'GitHub Stars', value: '1.4k+' },
      { label: 'Zero Dependencies', value: '100% Pure TS' }
    ],
    techStack: ['TypeScript', 'Native Fetch', 'BroadcastChannel', 'Vitest', 'Rollup'],
    liveUrl: '#',
    githubUrl: 'https://github.com'
  }
};

export class ProjectsManager {
  constructor() {
    this.filterBtns = document.querySelectorAll('.project-filter-btn');
    this.projectCards = document.querySelectorAll('.project-card');
    this.modalOverlay = document.getElementById('project-modal');
    this.modalContent = document.getElementById('modal-case-study-body');
    this.modalTitle = document.getElementById('modal-case-study-title');
    this.modalCloseBtn = document.getElementById('modal-close-btn');

    this.init();
  }

  init() {
    this.setupFiltering();
    this.setupModal();
  }

  /* ==========================================================================
     Category Filtering
     ========================================================================== */
  setupFiltering() {
    if (!this.filterBtns.length || !this.projectCards.length) return;

    // Also select category headers for showing/hiding
    const categoryHeaders = document.querySelectorAll('.project-category-header');
    const projectsGrids = document.querySelectorAll('.projects-grid');

    this.filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        this.projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });

        // Show/hide category headers and grids based on filter
        categoryHeaders.forEach((header) => {
          if (filter === 'all') {
            header.style.display = 'flex';
          } else {
            // Check if the next sibling grid has any visible cards
            const nextGrid = header.nextElementSibling;
            if (nextGrid && nextGrid.classList.contains('projects-grid')) {
              const visibleCards = nextGrid.querySelectorAll(`.project-card[data-category="${filter}"]`);
              header.style.display = visibleCards.length > 0 ? 'flex' : 'none';
            }
          }
        });

        projectsGrids.forEach((grid) => {
          if (filter === 'all') {
            grid.style.display = 'grid';
          } else {
            const visibleCards = grid.querySelectorAll(`.project-card[data-category="${filter}"]`);
            grid.style.display = visibleCards.length > 0 ? 'grid' : 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     Case Study Modal Dialog
     ========================================================================== */
  setupModal() {
    if (!this.modalOverlay || !this.modalContent) return;

    // Attach click triggers to all "Case Study" buttons
    document.querySelectorAll('.btn-case-study').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        this.openModal(projectId);
      });
    });

    // Close on close button click
    this.modalCloseBtn?.addEventListener('click', () => this.closeModal());

    // Close on backdrop overlay click
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  openModal(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;

    if (this.modalTitle) {
      this.modalTitle.textContent = data.title;
    }

    const metricsHtml = data.metrics
      .map(
        (m) => `
        <div style="background: var(--color-bg-base); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: var(--text-xl); font-weight: 800; color: var(--color-primary);">${m.value}</div>
          <div style="font-size: var(--text-xs); color: var(--color-text-subtle); text-transform: uppercase;">${m.label}</div>
        </div>
      `
      )
      .join('');

    const techBadges = data.techStack
      .map((t) => `<span class="badge badge-primary">${t}</span>`)
      .join(' ');

    this.modalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: space-between;">
          <span class="badge" style="background: var(--color-bg-alt);">${data.category}</span>
          <span style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: 600;">${data.timeline}</span>
        </div>

        <p style="font-size: var(--text-base); color: var(--color-text-main); font-weight: 500;">
          ${data.description}
        </p>

        <div>
          <h4 style="font-size: var(--text-sm); text-transform: uppercase; color: var(--color-primary-light); margin-bottom: var(--space-2);">Technical Challenge</h4>
          <p style="font-size: var(--text-sm); line-height: 1.7; color: var(--color-text-muted);">${data.problem}</p>
        </div>

        <div>
          <h4 style="font-size: var(--text-sm); text-transform: uppercase; color: var(--color-primary-light); margin-bottom: var(--space-2);">Architectural Solution</h4>
          <p style="font-size: var(--text-sm); line-height: 1.7; color: var(--color-text-muted);">${data.solution}</p>
        </div>

        <div>
          <h4 style="font-size: var(--text-sm); text-transform: uppercase; color: var(--color-text-subtle); margin-bottom: var(--space-3);">Key Results & Metrics</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--space-3);">
            ${metricsHtml}
          </div>
        </div>

        <div>
          <h4 style="font-size: var(--text-sm); text-transform: uppercase; color: var(--color-text-subtle); margin-bottom: var(--space-2);">Technologies Used</h4>
          <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
            ${techBadges}
          </div>
        </div>

        <div style="display: flex; gap: var(--space-3); padding-top: var(--space-4); border-top: 1px solid var(--color-border);">
          <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub Repository
          </a>
          <a href="${data.liveUrl}" class="btn btn-primary btn-sm" style="flex: 1;" onclick="alert('Demo environment configured for production deployment.'); return false;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Production Demo
          </a>
        </div>
      </div>
    `;

    this.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
