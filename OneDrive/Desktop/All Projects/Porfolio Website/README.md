# Alex Chen - Senior Frontend Engineer Portfolio

A modern, responsive, high-performance portfolio website for a Senior Frontend Developer & UI/UX Specialist. Engineered with clean semantic HTML5, modular CSS3, and modern ES6+ JavaScript.

![Light & Dark Mode Support](https://img.shields.io/badge/Theme-Dark%20%7C%20Light-6366f1)
![WCAG 2.2](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AAA-10b981)
![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-06b6d4)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20External-a855f7)

---

## 🌟 Key Features

- **🌓 Dynamic Theme Engine**: Seamless Dark Mode and Light Mode with system preference detection (`prefers-color-scheme`) and persistent `localStorage`.
- **📱 Fully Responsive Design**: Mobile-first architecture with smooth sliding navigation drawer, touch-friendly targets, and fluid `clamp()` typography.
- **✨ Smooth Motion & Animations**:
  - Performant `IntersectionObserver` scroll reveals without bloated external animation libraries.
  - Dynamic typewriter effect highlighting core competencies.
  - Animated statistics counters.
  - Micro-interactions: Card hover lifts, button glows, and glassmorphic blur effects.
- **💼 Interactive Projects Showcase**:
  - Live category filtering (Web Applications, Design Systems, Open Source Tools).
  - Accessible Case Study modal dialogs (`role="dialog"`, `aria-modal="true"`, focus trapping, ESC key listener).
- **⚡ Technical Skills Meter**:
  - Interactive skill filtering across core domains (Frontend, Architecture, Tools, UI/UX).
  - Animated proficiency meters.
- **📬 Interactive Contact Module**:
  - Real-time client-side form validation with inline feedback.
  - Simulated asynchronous submission with loading spinner state.
  - Non-intrusive floating toast notifications.
  - One-click copy buttons for email and phone numbers.
- **♿ Inclusive Accessibility**: Full keyboard navigability, semantic HTML landmarks, visible focus rings, and screen-reader friendliness.

---

## 📁 Project Structure

```
├── index.html                 # Semantic HTML5 document
├── css/
│   ├── variables.css          # Design tokens, color palettes, spacing, typography
│   ├── base.css               # Reset, typography defaults, layout containers
│   ├── components.css         # Buttons, cards, modals, tabs, form controls, toast
│   ├── sections.css           # Header, Hero, About, Skills, Projects, Contact, Footer
│   └── style.css              # Master stylesheet importing all modules
├── js/
│   ├── theme.js               # Dark/Light mode manager & OS listener
│   ├── navigation.js          # Sticky header, mobile drawer & scrollspy
│   ├── animations.js          # Scroll reveals, typewriter effect, counters
│   ├── skills.js              # Skill category filtering & progress meters
│   ├── projects.js            # Project filtering & case study modal dialog
│   ├── contact.js             # Form validation & toast notification engine
│   └── main.js                # Application entry point & coordinator
└── README.md                  # Comprehensive documentation
```

---

## 🚀 Getting Started

Since this project utilizes native ES Modules (`<script type="module">`), it should be served via a local web server:

### Option 1: Python 3 Built-in Server (Recommended)
```bash
python -m http.server 8000
```
Then open your browser at `http://localhost:8000`.

### Option 2: VS Code Live Server
Right-click `index.html` in VS Code and click **"Open with Live Server"**.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 🛠️ Tech Stack & Standards

- **Markup**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dialog>`)
- **Styling**: Modern CSS3 (Custom Properties, Flexbox, CSS Grid, `clamp()`, `backdrop-filter`, `@media`)
- **Scripting**: Modern ES6+ JavaScript (ES Modules, `IntersectionObserver`, `Clipboard API`, `requestAnimationFrame`)
- **Typography**: Inter & JetBrains Mono
