import heroImage from "./assets/icon.png";
import certMLImg from "./assets/machine learning.jpeg";
import certOracleImg from "./assets/oracle ai cert.jpg";
import certMstemImg from "./assets/Jayanti Goyal mstem (1).jpg";
import certForwardImg from "./assets/Forward.jpg";
import certCS50PImg from "./assets/CS50P cert.png";
import certIEEEImg from "./assets/iee open source.png";
import certMSCImg from "./assets/msc certificate.jpg";
import certGDGCPImg from "./assets/GDG CP.png";
import certSWOCImg from "./assets/SWOC.png";
import certAlgoQueenImg from "./assets/algoqueen.png";
import certAWSImg from "./assets/aws.png";
import certLogitechImg from "./assets/logitech.png";

export { heroImage };

export const DATA = {
  name: "Jayanti Goyal",
  title: "Software Developer",
  subtitle: "CS Engineer · ML Enthusiast · Competitive Programmer",
  email: "jayantigoyal1911@gmail.com",
  phone: "8700639384",
  linkedin: "https://www.linkedin.com/in/jayanti-goyal-99b550267/",
  github: "https://github.com/jayantigoyal1",
  leetcode: "https://leetcode.com/u/ioVX0SIZpA/",
  codechef: "https://www.codechef.com/users/jayantigoyal19",
  codeforces: "https://codeforces.com/profile/jayantigoyal",
  codolio: "https://codolio.com/profile/jayantigoyal",
  resumeUrl: "https://drive.google.com/file/d/1vQURsVAd9tj3SJ7SrtCbg9mUf7MWyMkL/view?usp=sharing",
  about: `I'm a Computer Science student at IGDTUW passionate about software development, AI/ML, and building impactful products. I enjoy turning ideas into scalable applications and continuously improving my problem-solving skills through projects and coding.`,

  experience: [
    {
      role: "AI Intern",
      company: "Digitup Solutions",
      period: "Feb 2026 – Apr 2026",
      location: "Gurgaon, India",
      certificateUrl: "https://drive.google.com/file/d/13puLakzeapzdBmF9iw3trkdMWFbSA4W_/view?usp=sharing",
      bullets: [
        "Researched AI automation for the ticketing system; labeled 1,000+ data samples for ML training.",
        "Architected an AI-based text-generation module producing customised problem statements via structured parameters.",
      ],
    },
    {
      role: "Python & ML Intern",
      company: "Anveshan Foundation, IGDTUW",
      period: "Jun 2025 – Jul 2025",
      location: "Delhi, India",
      bullets: [
        "Built a real-time ASL recognition pipeline (TensorFlow + OpenCV) classifying 26 ASL alphabets.",
        "Added multilingual translation support for 8 Indian regional languages.",
      ],
    },
  ],

  projects: [
    {
      name: "FocusGeek",
      tagline: "Plan, study, learn, test, and reflect in one calm workspace",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "AWS Lambda", "DynamoDB", "Amazon Bedrock", "Cognito", "S3"],
      desc: "A responsive study-management platform for planning subjects and deadlines, learning from uploaded notes, generating quizzes, running Pomodoro sessions, and tracking exam readiness. It combines an Amazon Bedrock-powered study assistant with a serverless AWS backend.",
      repo: "https://github.com/jayantigoyal1/FocusGeek",
      demo: "https://focus-geek.vercel.app/",
      tags: ["NEXT.JS", "AWS", "BEDROCK AI"],
    },
    {
      name: "DocIntel-AI",
      tagline: "AI-powered document intelligence platform for classification, information extraction, and document Q&A",
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "LayoutLMv3", "Tesseract OCR", "Streamlit"],
      desc: "Analyses scanned documents using OCR and multimodal transformers, classifying files across 16 document categories with 78.5% accuracy, extracting key entities via NER, and enabling visual question answering through an end-to-end document understanding workflow.",
      repo: "https://github.com/jayantigoyal1/DocIntel-AI",
      demo: "https://huggingface.co/spaces/jayantigoyal/docintel-ai",
      tags: ["FULLSTACK", "Transformers", "Streamlit"],
    },
    {
      name: "TopCorner",
      tagline: "Live football predictions & private leagues",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      desc: "Engineered a full-stack app with 15+ REST endpoints, aggregating live match data across 6 major leagues. Features an automated 3-tier scoring engine with real-time leaderboard updates inside invite-code leagues.",
      repo: "https://github.com/jayantigoyal1/TopCorner",
      demo: "https://top-corner.vercel.app/",
      tags: ["FULLSTACK", "SPORTS", "REST API"],
    },
    {
      name: "ASL Translator",
      tagline: "Real-time sign language → 8 languages",
      tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "NumPy"],
      desc: "Deep-learning pipeline trained on 2,600+ gesture samples achieving 85%+ accuracy for 26 ASL alphabets, with multilingual output across eight Indian regional languages.",
      repo: "https://github.com/jayantigoyal1/ASL_Translator",
      demo: null,
      tags: ["ML", "COMPUTER VISION", "NLP"],
    },
    {
      name: "EcoVive",
      tagline: "Chrome ext that scores product sustainability",
      tech: ["React", "Flask", "Vite", "Tailwind"],
      desc: "Chrome Extension + Flask backend analysing e-commerce pages with a 40+ signal keyword engine across 13 product categories, matched to 50+ sustainable alternatives ranked by eco-score.",
      repo: "https://github.com/jayantigoyal1/Ecovive",
      demo: null,
      tags: ["CHROME EXT", "FLASK", "SUSTAINABILITY"],
    },
  ],

  skills: {
    Languages: ["C++", "Python", "JavaScript"],
    "Machine Learning": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "Matplotlib", "NLP", "LayoutLMv3"],
    Frontend: ["React", "HTML/CSS", "Tailwind CSS", "Vite"],
    "Backend & Databases": ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
    Tools: ["Git", "Hugging Face Hub", "Kaggle (GPU Training)", "Vercel", "Render"],
  },

  achievements: [
    { icon: "🏆", text: "**ICPC AlgoQueen 2026** — Overall Rank 15 and Delhi State Rank 1", featured: true },
    { icon: "🎓", text: "Selected among **Top 100 students in India** for MSTEM Scholarship 2026 by Marvell Technology", featured: true },
    { icon: "🏅", text: "Selected for **Amazon ML Summer School 2026** by Amazon" },
    { icon: "🏆", text: "Flipkart Grid 8.0 **Semi Finalist**" },
    { icon: "🏅", text: "Selected for zonals of **Women Who Master hackathon** by Logitech and Aspire for Her" },
    { icon: "💡", text: "**700+ problems solved** on LeetCode, CodeChef & Codeforces" },
    { icon: "🎓", text: "Completed **McKinsey Forward Program 2026** by McKinsey & Company" },
    { icon: "🏆", text: "**3rd Place** (80+ teams) – Mobile App Dev Hackathon, IGDTUW" },
    { icon: "🥇", text: "**Ranked 1st** – MERN Stack Cohort, MSC Summer Bootcamp 2025" },
    { icon: "🥇", text: "**Ranked 1st** – Competitive Programming Cohort, GDG IGDTUW" },
    { icon: "🏅", text: "**5th Place** (500+ participants) – IEEE Open Source Week 2025" },
    { icon: "🎓", text: "**SheCodes Foundation Scholar 2024**" },
    { icon: "💡", text: "**Top 50**: AlgoVerse 2025 conducted by HackWithIndia IGDTUW" },
    { icon: "🥋", text: "**2nd Place** – Taekwondo (Poomsae), Sangram 2025, IIT Roorkee" },
  ],

  certifications: [
    {
      title: "ICPC AlgoQueen 2026",
      subtitle: "Overall Rank 15 · Delhi State Rank 1",
      url: "https://drive.google.com/file/d/1yAUOXCyFkPYJPr8SJV61tDGvi2yJXeUr/view?usp=sharing",
      image: certAlgoQueenImg,
    },
    {
      title: "Machine Learning Specialization",
      subtitle: "DeepLearning.AI · Stanford Online · Coursera",
      image: certMLImg,
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      subtitle: "Foundations Associate · Oracle · 2025",
      image: certOracleImg,
    },
    {
      title: "Cloud Computing with AWS",
      url: "https://drive.google.com/file/d/1rqyut90HUL759hmm7hmWhkSwTfKUnsu5/view?usp=sharing",
      image: certAWSImg,
    },
    {
      title: "Women Who Master Hackathon",
      subtitle: "Zonal Selection · Logitech × Aspire For Her",
      image: certLogitechImg,
    },
    {
      title: "M-STEM Scholarship",
      subtitle: "Marvell Scholarship for Technical & Engineering Merit",
      image: certMstemImg,
    },
    {
      title: "Forward Program",
      subtitle: "McKinsey.org · Future-of-Work Skills",
      image: certForwardImg,
    },
    {
      title: "CS50P",
      subtitle: "Introduction to Programming with Python (Harvard)",
      image: certCS50PImg,
    },
    {
      title: "IEEE Open Source Week",
      subtitle: "Runner Up · IEEE Open Source Week 2025",
      image: certIEEEImg,
    },
    {
      title: "MERN Stack Cohort",
      subtitle: "Ranked 1st · MSC Summer Bootcamp 2025",
      image: certMSCImg,
    },
    {
      title: "Competitive Programming Cohort",
      subtitle: "Ranked 1st · GDG IGDTUW",
      image: certGDGCPImg,
    },
    {
      title: "Snowscript Winter of Code",
      subtitle: "Top 20 Performers · GDG IGDTUW",
      image: certSWOCImg,
    },
  ],

  education: [
    {
      institution: "Indira Gandhi Delhi Technical University for Women",
      degree: "B.Tech – Computer Science & Engineering",
      period: "2024 – 2028",
      location: "Delhi, India",
      detail: "CGPA: 9.00",
    },
    {
      institution: "St. Columbo Public School",
      degree: "Class XII (PCM) – CBSE",
      period: "2022 – 2023",
      location: "Delhi, India",
      detail: "Percentage: 85.6%",
    },
    {
      institution: "St. Columbo Public School",
      degree: "Class X – CBSE",
      period: "2020 – 2021",
      location: "Delhi, India",
      detail: "Percentage: 93%",
    },
  ],
};
