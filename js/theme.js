/**
 * Theme Engine
 * Manages Dark/Light mode, OS preference synchronization, and localStorage persistence
 */

const THEME_STORAGE_KEY = 'portfolio-theme-preference';

export class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    this.moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    this.applyTheme(initialTheme);

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Listen to system theme changes if user hasn't explicitly set preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (this.themeToggleBtn) {
      if (theme === 'dark') {
        this.themeToggleBtn.innerHTML = this.sunIcon;
        this.themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        this.themeToggleBtn.setAttribute('title', 'Switch to light mode');
      } else {
        this.themeToggleBtn.innerHTML = this.moonIcon;
        this.themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        this.themeToggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    this.applyTheme(nextTheme);
  }
}
