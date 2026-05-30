const translations = {
  en: {
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
    hero_tag: "AI Engineer | Data Professional | RAG & LLM Applications",
    hero_title: "Building practical AI systems that create measurable business impact.",
    hero_desc: "I design production-minded AI and data solutions across retrieval systems, cloud pipelines, and applied ML. Open to AI Engineer, Data Scientist, and Data Engineer roles in Germany.",
    hero_cta_projects: "Explore Projects",
    stat_exp: "Years Experience", stat_docs: "Enterprise Docs Processed", stat_perf: "Pipeline Runtime Reduction",
    about_title: "About Me",
    about_text: "Data professional with experience across data engineering, machine learning, analytics, and applied GenAI. I have built RAG assistants, ETL pipelines, document AI systems, and predictive models using Python, SQL, Spark, Azure, and modern LLM tooling.",
    skills_title: "Core Skills", projects_title: "Selected Projects", projects_cta: "View Full GitHub",
    thesis_title: "Master Thesis Demo", thesis_text: "Live Hugging Face space showcasing my model deployment and experimentation workflow.",
    contact_title: "Let’s Connect", chat_title: "Ask About Rakesh"
  },
  de: {
    nav_about: "Über mich", nav_skills: "Fähigkeiten", nav_projects: "Projekte", nav_contact: "Kontakt",
    hero_tag: "AI Engineer | Data Professional | RAG- & LLM-Anwendungen",
    hero_title: "Praxisnahe KI-Systeme mit messbarem Business-Impact.",
    hero_desc: "Ich entwickle produktionsnahe KI- und Datenlösungen für Retrieval-Systeme, Cloud-Pipelines und angewandtes ML. Offen für Rollen als AI Engineer, Data Scientist und Data Engineer in Deutschland.",
    hero_cta_projects: "Projekte ansehen",
    stat_exp: "Jahre Erfahrung", stat_docs: "Verarbeitete Unternehmensdokumente", stat_perf: "Weniger Pipeline-Laufzeit",
    about_title: "Über mich",
    about_text: "Datenprofi mit Erfahrung in Data Engineering, Machine Learning, Analytics und angewandter GenAI. Ich habe RAG-Assistenten, ETL-Pipelines, Document-AI-Systeme und Vorhersagemodelle mit Python, SQL, Spark, Azure und modernen LLM-Tools aufgebaut.",
    skills_title: "Kernkompetenzen", projects_title: "Ausgewählte Projekte", projects_cta: "Gesamtes GitHub ansehen",
    thesis_title: "Masterarbeits-Demo", thesis_text: "Live-Hugging-Face-Space zur Präsentation meines Modell-Deployments und Workflows.",
    contact_title: "Kontakt", chat_title: "Fragen zu Rakesh"
  }
};

const skills = [
  "Python", "SQL", "PySpark", "Azure", "Databricks", "LangChain", "RAG", "LLMs", "OpenAI API", "Hugging Face", "Docker", "CI/CD", "Power BI", "FastAPI", "TensorFlow"
];

const projects = [
  {
    title: "Vision-Language Modeling for Chest X-ray Report Generation",
    desc: "Two-view ViT + BioBART architecture for clinical impression generation from frontal/lateral X-rays.",
    img: "./assets/images/vlm-method.png",
    link: "https://github.com/Rakesh9901491946/Vision-Language-Modeling-for-Chest-X-ray-Report-Generation",
    tags: ["ViT", "BioBART", "Healthcare AI"]
  },
  {
    title: "Azure AI-Powered Document Extraction Pipeline",
    desc: "Scalable PDF extraction with Azure Durable Functions, GPT-4 Vision, monitoring and retries.",
    img: "./assets/images/azure-doc-flow.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Azure%20AI-Powered%20Document%20Extraction%20Pipeline",
    tags: ["Azure", "Document AI", "CI/CD"]
  },
  {
    title: "Medical Q&A Chatbot (MedQuAD)",
    desc: "Domain-aware RAG chatbot using embeddings + vector retrieval for reliable medical responses.",
    img: "./assets/images/ocr-output.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Medical%20Q%26A%20Chatbot%20using%20MedQuAD",
    tags: ["RAG", "LangChain", "Streamlit"]
  },
  {
    title: "Olympics Data Analysis Dashboard",
    desc: "Interactive Power BI dashboard for historical, country-level and athlete-level Olympic insights.",
    img: "./assets/images/olympics-overview.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Olympics_Data_Analysis%20using%20Power%20BI",
    tags: ["Power BI", "Analytics", "Storytelling"]
  },
  {
    title: "Spotify Data Analysis using SQL",
    desc: "Schema-driven SQL exploration for trend and behavior insights on Spotify data.",
    img: "./assets/images/spotify-schema.png",
    link: "https://github.com/Rakesh9901491946/Projects/tree/main/Spotify%20Data%20Analysis%20Using%20SQL",
    tags: ["SQL", "Data Modeling", "Insights"]
  }
];

let currentLang = "en";
const projectGrid = document.getElementById("projectGrid");
const skillChips = document.getElementById("skillChips");

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById("enBtn").classList.toggle("active", lang === "en");
  document.getElementById("deBtn").classList.toggle("active", lang === "de");
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
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project";
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

const chatOpen = document.getElementById("chatOpen");
const chatClose = document.getElementById("chatClose");
const chatbot = document.getElementById("chatbot");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");

const kb = {
  experience: "Rakesh has 3+ years across KPMG and AI internship work, delivering ETL, analytics, and GenAI solutions.",
  skills: "Key strengths: Python, SQL, Spark/PySpark, Azure, Databricks, LangChain, RAG, LLM APIs, Docker, CI/CD, Power BI.",
  projects: "Notable projects include VLM for chest X-ray reporting, Azure Document AI pipeline, MedQuAD chatbot, and BI analytics dashboards.",
  thesis: "Master thesis showcase is available on Hugging Face Space: RakeshNJ12345/abc.",
  contact: "Email: rakeshnagaragattajayanna@gmail.com, LinkedIn: rakesh-nagaragatta-jayanna"
};

function addMsg(text, who = "bot") {
  const d = document.createElement("div");
  d.className = `msg ${who}`;
  d.textContent = text;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function answer(q) {
  const s = q.toLowerCase();
  if (s.includes("skill") || s.includes("tech")) return kb.skills;
  if (s.includes("project") || s.includes("portfolio")) return kb.projects;
  if (s.includes("thesis") || s.includes("hugging")) return kb.thesis;
  if (s.includes("contact") || s.includes("email") || s.includes("linkedin")) return kb.contact;
  if (s.includes("experience") || s.includes("kpmg") || s.includes("intern")) return kb.experience;
  return "Rakesh focuses on practical AI + data systems. Ask me about skills, projects, thesis, experience, or contact details.";
}

chatOpen.onclick = () => {
  chatbot.classList.remove("hidden");
  if (!chatLog.children.length) addMsg("Hi, I am the recruiter assistant. Ask me what Rakesh can build.");
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
