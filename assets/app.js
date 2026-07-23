const translations = {
  en: {
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
    hero_tag: "AI + Data Engineer | RAG | MLOps | Cloud Pipelines",
    hero_title: "Designing AI products and data platforms that scale from prototype to production.",
    hero_desc: "I build recruiter-ready outcomes: LLM applications, retrieval systems, ETL/ELT pipelines, and model-backed analytics workflows. I combine software engineering discipline with practical AI delivery across Python, SQL, Spark, Azure, and modern GenAI tooling.",
    hero_cta_projects: "Explore Projects",
    stat_exp: "Years Experience", stat_docs: "Enterprise Docs Processed", stat_perf: "Pipeline Runtime Reduction",
    about_title: "About Me",
    about_text: "I am an AI + Data Engineer with 3+ years of experience delivering applied machine learning and end-to-end data systems. My work spans RAG assistants, document intelligence pipelines, medical and vision-language modeling, and business analytics platforms. I focus on reliable systems with data quality, observability, and deployment readiness.",
    skills_title: "Core Skills", projects_title: "Selected Projects", projects_cta: "View Full GitHub",
    thesis_title: "Master Thesis Demo", thesis_text: "Live Hugging Face space showcasing my model deployment and experimentation workflow.",
    contact_title: "Let’s Connect", chat_title: "Ask About Rakesh",
    chat_placeholder: "Ask about AI projects, data engineering, impact, or availability..."
  },
  de: {
    nav_about: "Über mich", nav_skills: "Fähigkeiten", nav_projects: "Projekte", nav_contact: "Kontakt",
    hero_tag: "AI- und Data Engineer | RAG | MLOps | Cloud-Pipelines",
    hero_title: "Ich entwickle KI-Produkte und Datenplattformen von Prototyp bis Produktion.",
    hero_desc: "Ich liefere recruiter-relevante Ergebnisse: LLM-Anwendungen, Retrieval-Systeme, ETL/ELT-Pipelines und modellgestützte Analytics-Workflows. Dabei kombiniere ich Software-Engineering-Disziplin mit praxisnaher KI-Umsetzung in Python, SQL, Spark, Azure und modernem GenAI-Stack.",
    hero_cta_projects: "Projekte ansehen",
    stat_exp: "Jahre Erfahrung", stat_docs: "Verarbeitete Unternehmensdokumente", stat_perf: "Weniger Pipeline-Laufzeit",
    about_title: "Über mich",
    about_text: "Ich bin AI- und Data Engineer mit mehr als 3 Jahren Erfahrung in angewandtem Machine Learning und End-to-End-Datensystemen. Meine Arbeit umfasst RAG-Assistenten, Document-Intelligence-Pipelines, medizinische Vision-Language-Modelle und Business-Analytics-Plattformen. Mein Fokus liegt auf zuverlässigen Systemen mit Datenqualität, Observability und produktionsreifem Deployment.",
    skills_title: "Kernkompetenzen", projects_title: "Ausgewählte Projekte", projects_cta: "Gesamtes GitHub ansehen",
    thesis_title: "Masterarbeits-Demo", thesis_text: "Live-Hugging-Face-Space zur Präsentation meines Modell-Deployments und Workflows.",
    contact_title: "Kontakt", chat_title: "Fragen zu Rakesh",
    chat_placeholder: "Frage zu KI-Projekten, Data Engineering, Impact oder Verfügbarkeit..."
  }
};

const skills = [
  "Python", "SQL", "PySpark", "Azure", "Databricks", "LangChain", "RAG", "LLMs", "OpenAI API", "Hugging Face", "Docker", "CI/CD", "Power BI", "FastAPI", "TensorFlow", "MLOps"
];

const projectFilters = [
  { key: "all", en: "All", de: "Alle" },
  { key: "ai-ml", en: "AI & ML", de: "KI & ML" },
  { key: "genai", en: "GenAI & LLM", de: "GenAI & LLM" },
  { key: "data-engineering", en: "Data Engineering", de: "Data Engineering" },
  { key: "data-science", en: "Data Science", de: "Data Science" }
];

const categoryIcons = {
  "ai-ml": '<svg viewBox="0 0 24 24"><path d="M9 2v2H7a2 2 0 0 0-2 2v2H2v2h3v2H2v2h3v2H2v2h3v2a2 2 0 0 0 2 2h2v3h2v-3h2v3h2v-3h2a2 2 0 0 0 2-2v-2h3v-2h-3v-2h3v-2h-3V8h3V6h-3V4a2 2 0 0 0-2-2h-2V0h-2v2h-2V0h-2v2H9zm-2 4h10v12H7V6z"/></svg>',
  "genai": '<svg viewBox="0 0 24 24"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2zm7 12l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14zM5 13l.7 2 2 .7-2 .7L5 18l-.7-2-2-.7 2-.7L5 13z"/></svg>',
  "data-engineering": '<svg viewBox="0 0 24 24"><path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4zm2-10h2v2H6V6zm0 6h2v2H6v-2zm0 6h2v2H6v-2z"/></svg>',
  "data-science": '<svg viewBox="0 0 24 24"><path d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20v-7h3v7h-3z"/></svg>'
};

const githubIcon = '<svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';

const projects = [
  {
    title: "Vision-Language Modeling for Chest X-ray Report Generation",
    desc: "Two-view ViT + BioBART architecture for clinically meaningful impression generation from dual-view X-rays.",
    img: "./assets/images/vlm-method.png",
    link: "https://github.com/Rakesh9901491946/Vision-Language-Modeling-for-Chest-X-ray-Report-Generation",
    tags: ["ViT", "BioBART", "Healthcare AI"],
    cat: ["ai-ml"]
  },
  {
    title: "Azure AI-Powered Document Extraction Pipeline",
    desc: "Production-oriented PDF extraction pipeline with Azure Durable Functions, GPT-4 Vision, retries, monitoring and CI/CD.",
    img: "./assets/images/azure-doc-flow.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Azure%20AI-Powered%20Document%20Extraction%20Pipeline",
    tags: ["Azure", "Document AI", "CI/CD"],
    cat: ["data-engineering", "genai"]
  },
  {
    title: "Medical Q&A Chatbot (MedQuAD)",
    desc: "Domain-aware medical RAG chatbot with vector retrieval for grounded, explainable responses.",
    img: "./assets/images/ocr-output.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Medical%20Q%26A%20Chatbot%20using%20MedQuAD",
    tags: ["RAG", "LangChain", "Streamlit"],
    cat: ["genai"]
  },
  {
    title: "Olympics Data Analysis Dashboard",
    desc: "Interactive Power BI storytelling dashboard for country-wise and athlete-level Olympic trends.",
    img: "./assets/images/olympics-overview.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Olympics_Data_Analysis%20using%20Power%20BI",
    tags: ["Power BI", "Analytics", "Data Storytelling"],
    cat: ["data-science"]
  },
  {
    title: "Spotify Data Analysis using SQL",
    desc: "Schema-first SQL analytics project turning raw Spotify tables into decision-friendly insights.",
    img: "./assets/images/spotify-schema.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Spotify%20Data%20Analysis%20Using%20SQL",
    tags: ["SQL", "Data Modeling", "Insights"],
    cat: ["data-science"]
  },
  {
    title: "Compass – Agentic Demand Planning & Decision Memory",
    desc: "Hackathon project: human-in-the-loop demand planning where specialised AI agents give evidence-based recommendations, reconciled by Claude Opus 4.8, with decision memory in DuckDB.",
    img: "./assets/images/compass-agentic.svg",
    link: "https://github.com/Rakesh9901491946/Compass-a-human-centred-agentic-demand-planning-system",
    tags: ["Multi-Agent", "Claude API", "DuckDB"],
    cat: ["genai"]
  },
  {
    title: "Dynamic Content Generation with RAG",
    desc: "RAG application that searches, summarizes, and answers questions from internal documents via embedding-based retrieval.",
    img: "./assets/images/rag-application.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/0de306c9e3b84cd564b5cb11604b911338219e12/RAG_Application",
    tags: ["RAG", "LangChain", "FAISS"],
    cat: ["genai"]
  },
  {
    title: "Aircraft Engine Remaining Useful Life Prediction",
    desc: "LSTM-based time-series model predicting Remaining Useful Life on the NASA Turbofan dataset for predictive maintenance.",
    img: "./assets/images/aircraft-rul.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Predicting%20Lifespan%20Of%20Aircraft%20Engine%20using%20LSTM",
    tags: ["LSTM", "Time-Series", "Predictive Maintenance"],
    cat: ["ai-ml"]
  },
  {
    title: "Fashion Image Generation using GANs",
    desc: "Generative adversarial network producing realistic fashion images from Fashion MNIST, tuned for training stability.",
    img: "./assets/images/fashion-gan.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Fashion%20Image%20Generation%20using%20Generative%20Adversarial%20Networks%20(GANs)",
    tags: ["GANs", "TensorFlow", "Computer Vision"],
    cat: ["ai-ml"]
  },
  {
    title: "Extract Text from Images using Tesseract OCR",
    desc: "Python OCR pipeline extracting text from images and PDFs, with OpenCV preprocessing for accuracy and batch processing.",
    img: "./assets/images/ocr-tesseract.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Extract-Text-from-images-using-Tesseract-OCR",
    tags: ["OCR", "OpenCV", "NLP Prep"],
    cat: ["ai-ml"]
  },
  {
    title: "Azure End-to-End Data Engineering Project",
    desc: "End-to-end Azure pipeline using Data Factory, Data Lake, Databricks and PySpark for business-ready Power BI reporting.",
    img: "./assets/images/azure-e2e-de.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Azure%20End-to-End%20Data%20Engineering%20Project%20%7C%20AdventureWorks%20Dataset",
    tags: ["Azure Data Factory", "Databricks", "Power BI"],
    cat: ["data-engineering"]
  },
  {
    title: "King County House Sales Dashboard",
    desc: "Dynamic Tableau dashboard analyzing King County house sales with interactive filters for date, size and build year.",
    img: "./assets/images/king-county-tableau.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/King%20County%20House%20Sales%20Dashboard",
    tags: ["Tableau", "Real Estate Analytics", "Dashboards"],
    cat: ["data-science"]
  },
  {
    title: "Customer Ad-Hoc Analysis for Atliq Hardwares",
    desc: "SQL-based ad-hoc analysis answering 10+ business questions on sales trends, top channels and product performance.",
    img: "./assets/images/atliq-sql.svg",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Project-Customer-Ad-Hoc-Analysis",
    tags: ["SQL", "Business Analytics", "Insights"],
    cat: ["data-science"]
  }
];

let activeFilter = "all";

const kb = {
  impact: "Rakesh improved data workflows with up to 35% lower pipeline runtime and built AI retrieval systems over 1000+ enterprise documents.",
  experience: "He has 3+ years across KPMG and AI internship roles, delivering ETL pipelines, analytics platforms, RAG assistants, and production-ready PoCs.",
  skills: "Core stack: Python, SQL, Spark/PySpark, Azure, Databricks, LangChain, RAG, vector databases, Docker, CI/CD, MLOps, Power BI.",
  projects: "13 projects across AI & ML, GenAI/LLM, Data Engineering, and Data Science - use the category filters on the Projects section to browse by area.",
  thesis: "Master thesis demo is deployed on Hugging Face Space: RakeshNJ12345/abc.",
  roles: "Target roles: AI Engineer, Data Engineer, Applied ML Engineer, and GenAI Engineer in Germany.",
  contact: "Email: rakeshnagaragattajayanna@gmail.com | LinkedIn: rakesh-nagaragatta-jayanna | Location: Mannheim, Germany"
};

const fallback = "Rakesh specializes in AI + Data Engineering with measurable business outcomes. Ask about skills, projects, impact, thesis, roles, or contact.";

let currentLang = "en";
const projectGrid = document.getElementById("projectGrid");
const skillChips = document.getElementById("skillChips");
const chatOpen = document.getElementById("chatOpen");
const chatClose = document.getElementById("chatClose");
const chatbot = document.getElementById("chatbot");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");
const chatSuggestions = document.getElementById("chatSuggestions");

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  chatInput.placeholder = translations[lang].chat_placeholder;
  document.getElementById("enBtn").classList.toggle("active", lang === "en");
  document.getElementById("deBtn").classList.toggle("active", lang === "de");
  renderSuggestionChips();
  renderProjectFilters();
}

function renderSkills() {
  skillChips.innerHTML = "";
  skills.forEach((s) => {
    const chip = document.createElement("span");
    chip.textContent = s;
    skillChips.appendChild(chip);
  });
}

function renderProjectFilters() {
  const projectFiltersEl = document.getElementById("projectFilters");
  projectFiltersEl.innerHTML = "";
  projectFilters.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = f[currentLang];
    btn.classList.toggle("active", activeFilter === f.key);
    btn.onclick = () => {
      activeFilter = f.key;
      renderProjectFilters();
      renderProjects();
    };
    projectFiltersEl.appendChild(btn);
  });
}

function renderProjects() {
  projectGrid.innerHTML = "";
  const visible = projects.filter((p) => activeFilter === "all" || p.cat.includes(activeFilter));
  visible.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "project reveal";
    card.style.animationDelay = `${0.08 * idx}s`;
    const media = p.img
      ? `<img src="${p.img}" alt="${p.title}" />`
      : `<div class="thumb-placeholder thumb-${p.cat[0]}">${categoryIcons[p.cat[0]]}<span class="thumb-tag">${p.cat[0].replace("-", " ")}</span></div>`;
    card.innerHTML = `
      ${media}
      <div class="content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <p><a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">${githubIcon}GitHub</a></p>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function addMsg(text, who = "bot") {
  const d = document.createElement("div");
  d.className = `msg ${who}`;
  d.textContent = text;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function answer(q) {
  const s = q.toLowerCase();
  const has = (...keys) => keys.some((k) => s.includes(k));

  if (has("impact", "result", "business", "value", "outcome", "mehrwert")) return kb.impact;
  if (has("skill", "stack", "tech", "tools", "fähigkeit", "technologie")) return kb.skills;
  if (has("project", "portfolio", "case study", "referenz")) return kb.projects;
  if (has("thesis", "hugging", "model", "master")) return kb.thesis;
  if (has("role", "position", "open", "job", "available", "verfügbar")) return kb.roles;
  if (has("experience", "kpmg", "intern", "exp", "erfahrung")) return kb.experience;
  if (has("contact", "email", "linkedin", "reach", "kontakt")) return kb.contact;

  return fallback;
}

function renderSuggestionChips() {
  const suggestions = currentLang === "de"
    ? ["Welche KI-Projekte?", "Data-Engineering Impact?", "Tech-Stack?", "Für welche Rollen offen?"]
    : ["Best AI projects?", "Data engineering impact?", "Tech stack?", "Open to which roles?"];

  chatSuggestions.innerHTML = "";
  suggestions.forEach((text) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = text;
    btn.onclick = () => {
      addMsg(text, "user");
      addMsg(answer(text), "bot");
    };
    chatSuggestions.appendChild(btn);
  });
}

chatOpen.onclick = () => {
  chatbot.classList.remove("hidden");
  if (!chatLog.children.length) {
    addMsg(currentLang === "de"
      ? "Hallo, ich bin der Recruiter-Assistent. Frag mich nach Skills, Projekten, Impact oder Verfügbarkeit."
      : "Hi, I am the recruiter assistant. Ask me about skills, projects, impact, or role fit.");
  }
};

chatClose.onclick = () => chatbot.classList.add("hidden");

chatForm.onsubmit = (e) => {
  e.preventDefault();
  const q = chatInput.value.trim();
  if (!q) return;
  addMsg(q, "user");
  addMsg(answer(q), "bot");
  chatInput.value = "";
};

document.getElementById("enBtn").onclick = () => setLang("en");
document.getElementById("deBtn").onclick = () => setLang("de");

renderSkills();
renderProjects();
setLang("en");
