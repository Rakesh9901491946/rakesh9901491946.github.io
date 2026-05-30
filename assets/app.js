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

const projects = [
  {
    title: "Vision-Language Modeling for Chest X-ray Report Generation",
    desc: "Two-view ViT + BioBART architecture for clinically meaningful impression generation from dual-view X-rays.",
    img: "./assets/images/vlm-method.png",
    link: "https://github.com/Rakesh9901491946/Vision-Language-Modeling-for-Chest-X-ray-Report-Generation",
    tags: ["ViT", "BioBART", "Healthcare AI"]
  },
  {
    title: "Azure AI-Powered Document Extraction Pipeline",
    desc: "Production-oriented PDF extraction pipeline with Azure Durable Functions, GPT-4 Vision, retries, monitoring and CI/CD.",
    img: "./assets/images/azure-doc-flow.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Azure%20AI-Powered%20Document%20Extraction%20Pipeline",
    tags: ["Azure", "Document AI", "CI/CD"]
  },
  {
    title: "Medical Q&A Chatbot (MedQuAD)",
    desc: "Domain-aware medical RAG chatbot with vector retrieval for grounded, explainable responses.",
    img: "./assets/images/ocr-output.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Medical%20Q%26A%20Chatbot%20using%20MedQuAD",
    tags: ["RAG", "LangChain", "Streamlit"]
  },
  {
    title: "Olympics Data Analysis Dashboard",
    desc: "Interactive Power BI storytelling dashboard for country-wise and athlete-level Olympic trends.",
    img: "./assets/images/olympics-overview.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Olympics_Data_Analysis%20using%20Power%20BI",
    tags: ["Power BI", "Analytics", "Data Storytelling"]
  },
  {
    title: "Spotify Data Analysis using SQL",
    desc: "Schema-first SQL analytics project turning raw Spotify tables into decision-friendly insights.",
    img: "./assets/images/spotify-schema.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Spotify%20Data%20Analysis%20Using%20SQL",
    tags: ["SQL", "Data Modeling", "Insights"]
  }
];

const kb = {
  impact: "Rakesh improved data workflows with up to 35% lower pipeline runtime and built AI retrieval systems over 1000+ enterprise documents.",
  experience: "He has 3+ years across KPMG and AI internship roles, delivering ETL pipelines, analytics platforms, RAG assistants, and production-ready PoCs.",
  skills: "Core stack: Python, SQL, Spark/PySpark, Azure, Databricks, LangChain, RAG, vector databases, Docker, CI/CD, MLOps, Power BI.",
  projects: "Featured projects: chest X-ray vision-language modeling, Azure document AI extraction, medical RAG chatbot, and business dashboards.",
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
}

function renderSkills() {
  skillChips.innerHTML = "";
  skills.forEach((s) => {
    const chip = document.createElement("span");
    chip.textContent = s;
    skillChips.appendChild(chip);
  });
}

function renderProjects() {
  projectGrid.innerHTML = "";
  projects.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "project reveal";
    card.style.animationDelay = `${0.08 * idx}s`;
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <p><a href="${p.link}" target="_blank" rel="noreferrer">GitHub</a></p>
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
