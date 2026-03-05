// ─── All portfolio content lives here ───────────────────────────────────────

export const personalInfo = {
  name: 'Shreyas Patil',
  title: 'AI / ML Developer',
  taglines: ['AI / ML Developer', 'LLM Engineer', 'GenAI Builder', 'MLOps Practitioner'],
  email: 'shreyas.syp@outlook.com',
  phone: '+91 7620280740',
  location: 'Mumbai, Maharashtra, India',
  github: 'https://github.com/Shreyxpatil?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/shreypatil/',
  resume: './SHREYAS_AI_RESUME.pdf',
  bio: [
    'AI/ML Developer with 1.5 years of experience building production-grade intelligent systems. I specialize in LLMs, Generative AI, Agentic Workflows, RAG pipelines, and MLOps — delivering scalable, real-world AI solutions across EdTech, healthcare, railway monitoring, and mental wellness domains.',
    'Currently at Cloud Analogy, I architect end-to-end AI pipelines integrating IoT telemetry, β-VAE anomaly detection, and LLM-powered intelligence.',
  ],
  stats: [
    { value: '15+', label: 'Real-world Projects' },
    { value: '95%+', label: 'Model Accuracy' },
    { value: '500+', label: 'Students Mentored' },
    { value: '6+', label: 'Certifications' },
  ],
}

export const skillCategories = [
  {
    label: '// ml & ai',
    title: 'Machine Learning & AI',
    icon: 'FaBrain',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'β-VAE', 'CNN / LSTM', 'Signal Processing', 'Time-Series Forecasting'],
  },
  {
    label: '// genai & llms',
    title: 'Generative AI & LLM Ecosystem',
    icon: 'FaRobot',
    skills: ['Generative AI', 'LLM Fine-tuning (LoRA/QLoRA)', 'LangChain', 'LangGraph', 'RAG (Hybrid Search)', 'Whisper (STT)', 'Fish-Speech (TTS)', 'Prompt Engineering'],
  },
  {
    label: '// transformers',
    title: 'LLMs & Transformer Models',
    icon: 'FaCode',
    skills: ['Llama-3', 'Qwen-2.5', 'Mistral', 'BERT', 'HuggingFace Transformers', 'Pinecone / ChromaDB', 'NLP / Tokenization', 'OpenCV / Computer Vision'],
  },
  {
    label: '// mlops & cloud',
    title: 'MLOps, Cloud & Deployment',
    icon: 'FaCloud',
    skills: ['Docker', 'AWS', 'Azure', 'Oracle Cloud (OCI)', 'FastAPI / Flask', 'CI/CD Pipelines', 'Git / GitHub', 'Power BI / Dashboards'],
  },
]

// ─── PROFESSIONAL PROJECTS ──────────────────────────────────────────────────
export const professionalProjects = [
  {
    id: 'p1',
    title: 'Energy 7 (E7) – Railway Predictive Monitoring AI Pipeline',
    company: 'Cloud Analogy',
    description: 'End-to-end AI pipeline for 200+ Railway Signaling (IXL) and Point Machine (TWS) units handling high-frequency telemetry. Developed a β-VAE model to learn latent health features and applied K-Means/DBSCAN clustering to detect early anomaly/degradation clusters. Engineered the ETL pipeline achieving 99%+ signal compression, 90% cost-efficient tokenization, and 20× faster processing for real-time monitoring.',
    tech: ['Python', 'FastAPI', 'β-VAE', 'Signal Processing', 'ETL', 'Docker', 'LangChain'],
    period: 'Oct 2025 – Present',
    icon: 'FaTrain',
    github: null,
  },
  {
    id: 'p2',
    title: 'NeuraDub – Multilingual Voice Cloning System',
    company: 'Cloud Analogy',
    description: 'Complete Python inference pipeline for Fish-Speech 1.5, entirely replacing the official CLI workflow. Features automatic speaker-token extraction from WAV files, multi-sentence batch synthesis, and 13-language voice cloning with full checkpoint and VQGAN support. Released internally as a modular repository with LFS tracking.',
    tech: ['Python', 'Fish-Speech 1.5', 'VQGAN', 'PyTorch', 'Audio DSP'],
    period: 'Oct – Dec 2025',
    icon: 'FaMicrophone',
    github: null,
  },
  {
    id: 'p3',
    title: 'GateTutor AI Learning Platform',
    company: 'GateTutor InfoEdge',
    description: 'Production-grade AI learning platform integrating 5 core modules: RAG-based MCQ generation (OpenAI API), a Hybrid Retrieval Chatbot (FAISS + TF-IDF), an Intelligent Diagram Generation engine (Matplotlib/GraphQL sandboxing), a Code Plagiarism Detection system (95% accuracy via exact-match and AST similarity), and a Performance Analytics module for adaptive student recommendations at scale.',
    tech: ['Python', 'FastAPI', 'Flask', 'OpenAI API', 'FAISS', 'TF-IDF', 'Docker', 'SQL Server'],
    period: 'Jan – Sep 2025',
    icon: 'FaGraduationCap',
    github: null,
  },
]

// ─── PERSONAL PROJECTS ──────────────────────────────────────────────────────
export const personalProjects = [
  {
    id: 'pp1',
    title: 'InnerTone – AI Mental Wellness Consultation Platform',
    description: 'Full-stack mental wellness platform with real-time voice/video/text AI consultations via WebSockets and WebRTC. 3D browser-based AI avatar with dynamic lip-sync animations. RAG pipeline grounding Gemini LLM on Psychology/CBT PDFs via FAISS. Multi-layered safety guardrails for crisis detection and rerouting.',
    tech: ['Python', 'FastAPI', 'React Three Fiber', 'WebRTC', 'FAISS', 'Gemini API', 'PostgreSQL'],
    period: 'Feb 2026 – Present',
    icon: 'FaBrain',
    github: 'https://github.com/Shreyxpatil/InnerTone',
    featured: true,
  },
  {
    id: 'pp2',
    title: 'SideKick – Intelligent Job Application & Scraping Assistant',
    description: 'Chrome Extension enabling one-click profile injection across career portals. Python scraping pipeline covering 10+ major job boards. Intelligent resume-parsing backend for dynamic role suggestions. Encrypted local storage for secure profile management.',
    tech: ['JavaScript', 'Chrome Extensions API', 'Python', 'Web Scraping', 'REST APIs'],
    period: 'Feb 2026 – Present',
    icon: 'FaBriefcase',
    github: 'https://github.com/Shreyxpatil/SideKick',
    featured: true,
  },
  {
    id: 'pp4',
    title: 'Tesseract 5 CAPTCHA Fine-Tuning',
    description: 'Fine-tuned Tesseract 5 OCR engine on custom CAPTCHA datasets to push recognition accuracy toward 100%. Implemented data augmentation pipelines, hard-negative mining, and LSTMF training. Analyzed residual errors for targeted dataset expansion.',
    tech: ['Python', 'Tesseract 5', 'OCR', 'LSTM', 'Data Augmentation'],
    period: '2026',
    icon: 'FaCode',
    github: 'https://github.com/Shreyxpatil/tesseract5-captcha-finetuning',
    mini: true,
  },
  {
    id: 'pp5',
    title: 'Fast Hindi OCR Extractor',
    description: 'High-performance Hindi OCR pipeline processing 550+ pages in under 15 minutes. Multi-layered text extraction combining Tesseract, EasyOCR, and custom preprocessing. Achieves 85%+ exact-match accuracy on complex scanned Hindi documents.',
    tech: ['Python', 'Tesseract', 'EasyOCR', 'OpenCV', 'NLP'],
    period: '2026',
    icon: 'FaLanguage',
    github: 'https://github.com/Shreyxpatil/fast-hindi-ocr-extractor',
    mini: true,
  },
  {
    id: 'pp6',
    title: 'Fish-Speech Inference Engine',
    description: 'Built a full Python inference pipeline for Fish-Speech replacing the default CLI workflow. Implemented automatic speaker-token extraction, multi-sentence batch synthesis, and a 13-language voice-cloning system with VQGAN checkpoint support.',
    tech: ['Python', 'Fish-Speech 1.5', 'VQGAN', 'Voice Cloning'],
    period: 'Oct 2025 – Nov 2025',
    icon: 'FaMicrophone',
    github: 'https://github.com/Shreyxpatil/fish-speech_inference_',
    mini: true,
  },
  {
    id: 'pp3',
    title: 'Adaptive Text-to-SQL Fine-Tuning (Qwen 2.5 Instruct)',
    description: 'Fine-tuned Qwen 2.5 Instruct on a 1M+ multi-domain Text-to-SQL dataset. Built automated data cleaning and merging pipeline for SQL datasets. Evaluated with Exact Match and Execution Accuracy metrics. Used LoRA to drastically cut GPU costs while retaining accuracy.',
    tech: ['Qwen 2.5', 'LoRA/QLoRA', 'Text-to-SQL', 'Python', 'HuggingFace'],
    period: 'Nov 2025',
    icon: 'FaDatabase',
    github: null,
    mini: true,
  },
]

// ─── ACADEMIC PROJECTS ──────────────────────────────────────────────────────
export const academicProjects = [
  {
    id: 'ac1',
    title: 'Alzheimer\'s Stage Detection using Deep Learning',
    description: 'CNN model to predict dementia stages from 86,000+ MRI images with 87% accuracy. Applied image augmentation, dropout, and normalization. Deployed via Flask REST API for real-time inference.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Flask', 'Medical AI'],
    period: 'Sep 2023 – Jan 2024',
    icon: 'FaBrain',
    github: 'https://github.com/Shreyxpatil/Updated_Alzheimer-Disease-Detection-using-Deep-Learning-Public',
  },
  {
    id: 'ac2',
    title: 'Facial Emotion Detection for E-Learning',
    description: 'ResNet-based CNN model achieving 88% accuracy on DAiSEE dataset of 50,000 video samples. Real-time analytics pipeline with Python + OpenCV at 12 FPS. Classifies Boredom, Engagement, Confusion, and Frustration.',
    tech: ['Python', 'ResNet', 'OpenCV', 'Computer Vision', 'PyTorch'],
    period: 'Apr – Sep 2024',
    icon: 'FaSmile',
    github: null,
  },
  {
    id: 'ac3',
    title: 'SAR Satellite Image Colorization',
    description: 'Image-to-image deep learning model to colorize grayscale SAR satellite images with 85% accuracy. Enabled detection of climate patterns, illegal activity zones, and agriculture trends across 5,000+ images.',
    tech: ['Python', 'CNN', 'Deep Learning', 'Image Processing'],
    period: '2024',
    icon: 'FaSatellite',
    github: null,
  },
  {
    id: 'ac4',
    title: 'Stock Price Prediction using LSTM Networks',
    description: 'Trained LSTM model on historical data to forecast stock prices for 5+ companies. Incorporated RSI, MACD, and moving averages to boost prediction accuracy by 15%.',
    tech: ['Python', 'LSTM', 'PyTorch', 'Time Series', 'Finance AI'],
    period: '2024',
    icon: 'FaChartLine',
    github: null,
  },
  {
    id: 'ac5',
    title: 'AI Chatbot with Real-Time Sentiment Analysis',
    description: 'Flask-based chatbot with NLP sentiment detection using PyTorch. Handled 2,000+ user inputs with 90% accuracy in classifying emotional tone.',
    tech: ['Python', 'Flask', 'NLP', 'PyTorch', 'Sentiment Analysis'],
    period: '2023',
    icon: 'FaComments',
    github: null,
  },
  {
    id: 'ac6',
    title: 'Multi-Role Hybrid FAQ Chatbot',
    description: 'RAG-based multi-role FAQ chatbot combining FAISS dense vector search and TF-IDF lexical search. MPNet embeddings with fine-tuning for semantic matching. Flask REST API with role-based endpoints.',
    tech: ['FAISS', 'TF-IDF', 'MPNet', 'Flask API', 'RAG'],
    period: 'Sep 2025',
    icon: 'FaRobot',
    github: 'https://github.com/Shreyxpatil/multi-role-faq-chatbot',
  },
  {
    id: 'ac7',
    title: 'Movie Recommendation System',
    description: 'Content-based and collaborative filtering recommendation engine using Python and ML techniques to suggest relevant movies based on user preferences.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Collaborative Filtering'],
    period: '2023',
    icon: 'FaFilm',
    github: 'https://github.com/Shreyxpatil/Movie-recommendation',
  },
]

export const experiences = [
  {
    company: 'Cloud Analogy CRM Specialist Limited',
    role: 'AI/ML Developer',
    period: 'Oct 2025 – Present',
    type: 'Full-time',
    highlights: [
      'Built a scalable data-cleaning ETL pipeline for 200+ Railway Signaling and Point Machine units, handling noise and drift in telemetry.',
      'Developed a β-VAE model to learn latent health features from electrical signals without manual labeling.',
      'Generated latent embeddings and applied K-Means/DBSCAN clustering to detect early anomaly and degradation clusters.',
      'Engineered the end-to-end Energy7 AI pipeline achieving 99%+ signal compression, 90% reduced tokenization costs, and 20× faster ETL.',
      'Implemented NeuraDub: a complete Python inference pipeline for Fish-Speech 1.5 replacing the CLI workflow.',
      'Built 13-language voice cloning with automatic speaker-token extraction, batch synthesis, and VQGAN support.',
    ],
    tech: 'Python · FastAPI · LangChain · β-VAE · Signal Processing · Docker',
    color: 'var(--accent-cyan)',
  },
  {
    company: 'GateTutor InfoEdge Pvt. Ltd.',
    role: 'Machine Learning Developer',
    period: 'Jan 2025 – Sep 2025',
    type: 'Full-time',
    highlights: [
      'Built a production-grade AI learning platform integrating MCQ generation, chatbot support, diagram rendering, code plagiarism detection, and performance analytics.',
      'Developed a RAG-based MCQ generation pipeline using OpenAI APIs and curated academic content for context-aware questions.',
      'Implemented a hybrid retrieval chatbot (FAISS + TF-IDF) improving response relevance for students and faculty.',
      'Created an intelligent diagram-generation engine rendering high-quality diagrams via Flask routing and sandboxed execution.',
      'Built a code plagiarism detection system achieving 95% accuracy using exact-match and token similarity.',
      'Developed a performance analytics module delivering topic-wise progress tracking and adaptive recommendations.',
    ],
    tech: 'Python · FastAPI · Flask · OpenAI API · FAISS · Docker · SQL Server',
    color: 'var(--accent-purple)',
  },
  {
    company: 'EdTech Society, IIT Bombay',
    role: 'AI/ML Intern',
    period: 'Apr 2024 – Sep 2024',
    type: 'Remote Internship',
    highlights: [
      'ResNet facial emotion recognition model – 88% accuracy on DAiSEE (50k samples)',
      'Real-time analytics pipeline at 12 FPS using Python + OpenCV',
    ],
    tech: 'Python · PyTorch · ResNet · OpenCV · Matplotlib',
    color: 'var(--accent-violet)',
  },
  {
    company: 'Prarambh Development Cell',
    role: 'Machine Learning Intern',
    period: 'Sep 2023 – Jan 2024',
    type: 'Internship',
    highlights: [
      "Alzheimer's stage CNN classifier – 87% accuracy on 5,000 MRI images",
      'Deployed Flask REST API for real-time medical inference',
    ],
    tech: 'Python · TensorFlow · CNN · Flask',
    color: '#10b981',
  },
  {
    company: 'Simdaa Technologies',
    role: 'Data Analyst Intern',
    period: 'Jun 2023 – Jul 2023',
    type: 'Internship',
    highlights: [
      'Power BI dashboards for 100,000+ records with 30% load-time reduction',
      'SQL + DAX query optimization and sales forecasting models',
    ],
    tech: 'SQL · Power BI · Excel · DAX',
    color: '#f59e0b',
  },
]

export const certifications = [
  { title: 'Generative AI Professional', issuer: 'Oracle Cloud Infrastructure 2025', color: '#f80000' },
  { title: 'AI Foundations Associate', issuer: 'Oracle Cloud Infrastructure 2025', color: '#f80000' },
  { title: 'Data Science Professional', issuer: 'Oracle Cloud Infrastructure 2025', color: '#f80000' },
  { title: 'Python for Data Science, AI & Development', issuer: 'IBM / Coursera', color: '#1d7fe5' },
  { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', color: '#76b900' },
  { title: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', color: '#1ba0d7' },
]

export const achievements = [
  { stat: '88%', desc: 'accuracy on facial emotion recognition (ResNet, DAiSEE, 50k samples)' },
  { stat: '95%', desc: 'code plagiarism detection accuracy at GateTutor InfoEdge' },
  { stat: '99%+', desc: 'signal compression in Energy 7 ETL pipeline (200+ railway units)' },
  { stat: '87%', desc: "accuracy on Alzheimer's stage CNN classifier (5,000 MRI images)" },
  { stat: '30%', desc: 'dashboard load-time reduction via SQL & Power BI optimization' },
  { stat: '20×', desc: 'faster ETL processing in Energy 7 real-time monitoring pipeline' },
  { stat: '15+', desc: 'real-world AI/ML systems across healthcare, EdTech, railways, and fintech' },
  { stat: '500+', desc: 'students mentored through workshops and ML/AI training sessions' },
]

export const leadership = [
  'Head – Microsoft Learn Student Ambassadors (DYPCET): Conducted 20+ tech workshops, mentored 500+ students.',
  'Secretary – ASPIRE (AI/ML Student Association): Organized hackathons, events, and tech sessions.',
  'Internship Coordinator – T&P Cell: Managed internship outreach and onboarding for 300+ students.',
  'Technical Coordinator – Prarambh Development Cell: Led ML project teams and deployed real-world solutions.',
  'Held 5+ leadership roles across technical, community, and training initiatives.',
]
