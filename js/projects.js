/**
 * Projects Showcase Module
 * Project filtering and accessible Case Study Modal dialog
 */

const CASE_STUDIES = {
  'telecom-churn': {
    title: 'Telecom Customer Churn Analysis',
    category: 'Data Analysis Projects',
    timeline: 'Python & Jupyter Notebook',
    description: 'An in-depth exploratory data analysis and customer retention study identifying the primary behavioral and service drivers behind subscriber attrition in telecom services.',
    problem: 'Telecom providers face severe recurring revenue loss when subscribers churn unexpectedly, without clear visibility into which contract terms, billing methods, and service bundles present high attrition risk.',
    solution: 'Engineered an interactive Python data pipeline utilizing Pandas, Matplotlib, and Seaborn. Isolated high-risk customer segments (e.g. month-to-month contracts at 42% churn and electronic check users at 31% churn), formulating data-backed retention strategies.',
    metrics: [
      { label: 'Customers Analyzed', value: '7,043' },
      { label: 'Overall Churn Rate', value: '26.5%' },
      { label: 'High-Risk Contract Churn', value: '42%' },
      { label: 'Key Factor Isolated', value: 'Contract & Payment' }
    ],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'EDA'],
    liveUrl: 'https://github.com/akakash2597-bit/Customer_churn_Analysis',
    githubUrl: 'https://github.com/akakash2597-bit/Customer_churn_Analysis'
  },
  'walmart-sales-python': {
    title: 'Walmart Sales Analysis (Python & Pandas)',
    category: 'Data Analysis Projects',
    timeline: 'Python & Pandas Analytics',
    description: 'Data-driven analysis of Walmart sales performance uncovering retail trends, holiday demand surges, regional profitability, and customer purchasing behavior across 9,994+ records.',
    problem: 'Retail managers needed actionable intelligence on whether discount promotions genuinely increased total profitability or caused loss-leader margin erosion across high-volume categories.',
    solution: 'Processed multi-attribute retail sales data using Python and Pandas. Evaluated sales vs profit trends across product categories, identified top-performing cities (New York, Los Angeles), and pinpointed highest-margin merchandise.',
    metrics: [
      { label: 'Transactions Analyzed', value: '9,994+' },
      { label: 'Top Margin Category', value: 'Technology' },
      { label: 'Top Revenue City', value: 'New York' },
      { label: 'Geographic Scope', value: 'Multi-State' }
    ],
    techStack: ['Python', 'Pandas', 'Jupyter Notebook', 'Data Visualization', 'Retail Analytics'],
    liveUrl: 'https://github.com/akakash2597-bit/Walmart_sales_Analysis',
    githubUrl: 'https://github.com/akakash2597-bit/Walmart_sales_Analysis'
  },
  'healthcare-analysis': {
    title: 'Healthcare Data Analysis',
    category: 'Data Analysis Projects',
    timeline: 'Healthcare Analytics & Python',
    description: 'Evaluated clinical, admission, and billing records across 54,000+ patient encounters to uncover key trends in hospital admissions, chronic disease burdens, and emergency department utilization.',
    problem: 'Hospitals experience heavy financial risks and emergency room overcrowding due to late-stage chronic disease admissions that could be mitigated through proactive primary care.',
    solution: 'Analyzed patient demographics, admission types, diagnosis classifications (Arthritis, Diabetes, Hypertension, Cancer), and insurance provider billing. Quantified gaps in preventive healthcare and highlighted key clinical risk drivers.',
    metrics: [
      { label: 'Patient Encounters', value: '54,000+' },
      { label: 'Emergency Room Rate', value: '74%' },
      { label: 'Chronic Conditions', value: '4 Key Classes' },
      { label: 'Insurance Payers', value: '5 Major Providers' }
    ],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Statistical EDA'],
    liveUrl: 'https://github.com/akakash2597-bit/Healthcare_Data_Analysis',
    githubUrl: 'https://github.com/akakash2597-bit/Healthcare_Data_Analysis'
  },
  'walmart-sql-powerbi': {
    title: 'Walmart Sales Analysis — SQL + Power BI',
    category: 'Data Analysis Projects',
    timeline: 'SQL & Power BI Dashboard',
    description: 'An interactive business intelligence and executive reporting system combining structured MySQL queries with an interactive Power BI dashboard for retail performance monitoring.',
    problem: 'Business stakeholders lacked dynamic visual dashboards to instantly drill down into revenue by department, profit margins by region, and discount impacts without writing raw queries each time.',
    solution: 'Designed and executed structured MySQL queries (aggregations, window functions, conditional summaries). Exported optimized relational datasets and developed an interactive Power BI dashboard with KPI metric cards, bar charts, and slicers.',
    metrics: [
      { label: 'Dashboard Suite', value: 'Power BI Interactive' },
      { label: 'Query Engine', value: 'MySQL / SQL' },
      { label: 'KPIs Monitored', value: 'Sales, Profit, Qty, Disc' },
      { label: 'Decision Speed', value: 'Instant Drill-down' }
    ],
    techStack: ['MySQL', 'SQL Queries', 'Power BI', 'Interactive Dashboard', 'Data Modeling', 'DAX'],
    liveUrl: 'https://github.com/akakash2597-bit/Walmart-Sales-Analysis',
    githubUrl: 'https://github.com/akakash2597-bit/Walmart-Sales-Analysis'
  },
  'churn-ml-pipeline': {
    title: 'Customer Churn Prediction — ML Pipeline',
    category: 'Machine Learning Projects (ML)',
    timeline: 'End-to-End ML Pipeline & Streamlit',
    description: 'An end-to-end machine learning pipeline that predicts customer churn risk for a telecom provider. Built on the Telco Churn data structure, it trains an XGBoost classifier and serves real-time predictions with feature importance via Streamlit.',
    problem: 'Proactive customer retention requires calculating individual churn probabilities with explainable drivers before customers cancel their subscriptions.',
    solution: 'Engineered an end-to-end Python ML workflow covering data preprocessing, categorical encoding, model training with XGBoost, evaluation metrics (ROC-AUC), and deployed an interactive Streamlit dashboard for real-time customer risk scoring.',
    metrics: [
      { label: 'Model Accuracy', value: '93.2%' },
      { label: 'Core Classifier', value: 'XGBoost' },
      { label: 'Inference Time', value: '< 50ms Real-time' },
      { label: 'Deployment', value: 'GitHub Pages / Streamlit' }
    ],
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'ML Pipeline', 'GitHub Pages'],
    liveUrl: 'https://akakash2597-bit.github.io/Customer-Churn-ML-Pipeline/',
    githubUrl: 'https://github.com/akakash2597-bit/Customer-Churn-ML-Pipeline'
  },
  'local-pdf-rag': {
    title: 'Gemini RAG Document Q&A Assistant',
    category: 'Machine Learning Projects (ML)',
    timeline: 'LangChain, ChromaDB & Gemini API',
    description: 'An end-to-end local data analysis assistant that extracts, processes, and fragments text from PDF files. Powered by RAG with Google Gemini API to provide accurate, context-aware answers grounded in uploaded documents.',
    problem: 'Standard foundation models cannot answer detailed domain questions about proprietary PDFs and reports without hallucinating or requiring expensive retraining.',
    solution: 'Architected a local Retrieval-Augmented Generation (RAG) pipeline utilizing recursive text splitting, embedding creation via Gemini API, fast vector similarity search with ChromaDB, and an interactive Streamlit UI returning answers with exact citations.',
    metrics: [
      { label: 'Answer Grounding', value: '100% Document Verified' },
      { label: 'Vector Index', value: 'ChromaDB' },
      { label: 'Embeddings & LLM', value: 'Google Gemini' },
      { label: 'Chunking Strategy', value: '1,000 / 200 Overlap' }
    ],
    techStack: ['Python', 'Gemini API', 'LangChain', 'ChromaDB', 'Streamlit', 'RAG Architecture'],
    liveUrl: 'https://akakash2597-bit.github.io/Local-PDF-RAG-Assistant/',
    githubUrl: 'https://github.com/akakash2597-bit/Local-PDF-RAG-Assistant'
  },
  'pro-prompt-ai': {
    title: 'Pro Prompt AI — Prompt Engineering Workbench',
    category: 'Generative AI & Prompt Engineering',
    timeline: 'Python, Gemini API & Prompt Engineering Suite',
    description: 'A prompt engineering workbench designed to transform rough, basic user ideas into precision-engineered instructions, structured blueprints, and multi-tier prompt frameworks for LLMs and image models.',
    problem: 'Everyday AI users receive inconsistent, low-quality responses because writing effective prompts requires specialized knowledge of role framing, tone calibration, constraints, and output schema definitions.',
    solution: 'Developed an interactive workbench with a structured questionnaire (goal, tone, audience, format, length, constraints) that automatically synthesizes annotated blueprints using professional AI prompting frameworks. Includes Beginner-to-Expert difficulty levels and a strict zero-data-retention policy.',
    metrics: [
      { label: 'Framework Stack', value: 'Role, Tone, Specs, Rules' },
      { label: 'User Skill Tiers', value: '4 Levels (Beginner-Expert)' },
      { label: 'Privacy Policy', value: 'Zero Data Storage' },
      { label: 'Live Deployment', value: 'GitHub Pages Hosted' }
    ],
    techStack: ['Python', 'Google Gemini API', 'HTML5 / CSS3', 'Prompt Engineering', 'GitHub Pages'],
    liveUrl: 'https://akakash2597-bit.github.io/Pro_Prompt_AI/',
    githubUrl: 'https://github.com/akakash2597-bit/Pro_Prompt_AI'
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub Repository
          </a>
          ${data.liveUrl && data.liveUrl !== data.githubUrl
        ? `<a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Launch Live Demo
                </a>`
        : `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  View Code &amp; Notebook
                </a>`
      }
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
