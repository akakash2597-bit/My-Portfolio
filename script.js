/* =====================================================
   EDIT THIS SECTION WHEN YOU FINISH A NEW PROJECT
   Copy one { ... } block, paste it at the end of the list
   (before the closing ]), and change the text and links.
   The Projects counter at the top updates by itself.
===================================================== */

const projects = [
    {
        title: "Netflix Movies Analysis",
        icon: "fa-film",
        file: "netflix_analysis.ipynb",
        description:
            "Exploratory analysis of Netflix's catalog: cleaning the data and charting top genres, ratings, release years and countries to spot content trends.",
        tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
        demo: "https://github.com/akakash2597-bit/Netflix-Movies-Analysis/blob/main/netflix_analysis.ipynb",
        github: "https://github.com/akakash2597-bit/Netflix-Movies-Analysis"
    },
    {
        title: "Amazon Data Analysis",
        icon: "fa-cart-shopping",
        file: "amazon-analysis.ipynb",
        description:
            "Analysis of Amazon product data: cleaned prices and rating counts, derived a sales estimate per product and visualised the results.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
        demo: "https://github.com/akakash2597-bit/Amazon-Data-Analysis/blob/main/amazon-analysis.ipynb",
        github: "https://github.com/akakash2597-bit/Amazon-Data-Analysis"
    },
    {
        title: "Uber Data Analysis",
        icon: "fa-car",
        file: "Uber_data_analysis.ipynb",
        description:
            "Analysis of Uber trip records: extracted hour, day and month from timestamps and explored trip categories, purposes, distances and popular routes.",
        tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
        demo: "https://github.com/akakash2597-bit/Uber_Data_Analysis/blob/main/Uber_data_analysis.ipynb",
        github: "https://github.com/akakash2597-bit/Uber_Data_Analysis"
    }
];

/* Contact form: to receive messages straight in your inbox, create a free
   form at formspree.io, then paste its URL between the quotes below
   (looks like https://formspree.io/f/abcdwxyz).
   Leave it empty and the form opens the visitor's email app instead. */
const FORM_ENDPOINT = "";
const MY_EMAIL = "akakash2597@gmail.com";


/* =====================================================
   Everything below runs the site - no need to edit
===================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Projects ----------
$("#projectGrid").innerHTML = projects.map(p => `
    <article class="project-card">
        <div class="project-head">
            <i class="fa-solid ${p.icon}" aria-hidden="true"></i>
            <code>${p.file}</code>
        </div>
        <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
            <div class="project-links">
                <a href="${p.demo}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-book-open"></i> View Notebook</a>
                <a class="ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </div>
    </article>`).join("");

// ---------- Counters (calculated, so they can never be out of date) ----------
$("#countProjects").textContent = projects.length;
$("#countSkills").textContent = $$("#skills .skill-card:not(.soft) span").length;

// ---------- Typing animation ----------
const words = [
    "Aspiring Data Analyst",
    "Future AI Engineer",
    "Python Developer",
    "Problem Solver"
];
const typingEl = $("#typing");

if (!reduceMotion) {
    let w = 0, c = 0, deleting = false;
    (function type() {
        const word = words[w];
        typingEl.textContent = word.substring(0, c);
        if (!deleting && c === word.length) { deleting = true; return setTimeout(type, 1200); }
        if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
        c += deleting ? -1 : 1;
        setTimeout(type, deleting ? 45 : 90);
    })();
}

// ---------- Mobile menu ----------
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}"></i>`;
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
$$("a", navLinks).forEach(a => a.addEventListener("click", () => setMenu(false)));

// ---------- Scroll progress + active nav link ----------
const bar = $("#progress");
const navAnchors = $$(".nav-links a");
const navTargets = navAnchors.map(a => $(a.getAttribute("href")));

function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;

    let current = 0;
    navTargets.forEach((sec, i) => { if (sec && scrollY >= sec.offsetTop - 140) current = i; });
    navAnchors.forEach((a, i) => a.classList.toggle("active", i === current));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Theme (mode + accent), remembered between visits ----------
const root = document.documentElement;
const dockBtn = $("#dockBtn");
const panel = $("#themePanel");
const modeBtns = $$("[data-mode]");
const swatches = $$("[data-accent]");

// Colours that need dark text on top of them
function inkFor(hex) {
    const n = parseInt(hex.slice(1), 16);
    const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
    return lum > 0.55 ? "#04121C" : "#FFFFFF";
}

function save(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

function applyMode(mode) {
    root.setAttribute("data-theme", mode);
    modeBtns.forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === mode));
    save("theme", mode);
}
function applyAccent(hex) {
    root.style.setProperty("--accent", hex);
    root.style.setProperty("--accent-ink", inkFor(hex));
    swatches.forEach(s => s.setAttribute("aria-pressed", s.dataset.accent.toLowerCase() === hex.toLowerCase()));
    save("accent", hex);
}

applyMode(root.getAttribute("data-theme") || "dark");
applyAccent(getComputedStyle(root).getPropertyValue("--accent").trim() || "#38BDF8");

modeBtns.forEach(b => b.addEventListener("click", () => applyMode(b.dataset.mode)));
swatches.forEach(s => s.addEventListener("click", () => applyAccent(s.dataset.accent)));

dockBtn.addEventListener("click", () => {
    const open = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !open);
    dockBtn.setAttribute("aria-expanded", open);
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !panel.hasAttribute("hidden")) { panel.setAttribute("hidden", ""); dockBtn.setAttribute("aria-expanded", "false"); dockBtn.focus(); }
});

// ---------- Contact form ----------
const form = $("#contactForm");
const statusEl = $("#formStatus");
const sendBtn = $("#sendBtn");

function say(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "form-status " + (type || "");
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    say("");

    // basic validation
    let ok = true;
    $$("input[required], textarea[required]", form).forEach(f => {
        const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
        f.classList.toggle("invalid", bad);
        if (bad) ok = false;
    });
    if (!ok) return say("Please fill in every field with a valid email address.", "err");

    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return;             // a bot filled the hidden field

    // Option A: real delivery through Formspree
    if (FORM_ENDPOINT) {
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error("bad response");
            form.reset();
            say("Thanks! Your message was sent - I'll reply soon.", "ok");
        } catch (err) {
            say(`Couldn't send right now. Please email me directly at ${MY_EMAIL}.`, "err");
        }
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message";
        return;
    }

    // Option B (no setup needed): open the visitor's email app, pre-filled
    const body = `${data.message}\n\n- ${data.name} (${data.email})`;
    window.location.href =
        `mailto:${MY_EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    say("Opening your email app - just press Send there.", "ok");
});

$$("input, textarea", form).forEach(f => f.addEventListener("input", () => f.classList.remove("invalid")));

// ---------- Footer year ----------
$("#year").textContent = new Date().getFullYear();