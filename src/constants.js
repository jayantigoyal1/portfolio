import {
  SiPython, SiCplusplus, SiJavascript, SiTensorflow, SiKeras, SiPytorch,
  SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiReact, SiHtml5,
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiGit,
  SiHuggingface, SiKaggle, SiVercel, SiRender,
} from "react-icons/si";

/* Icons for tech tiles — only real DATA.skills entries */
export const ICON_MAP = {
  "C++":                    { Icon: SiCplusplus,   color: "#00599C" },
  "Python":                 { Icon: SiPython,      color: "#3776AB" },
  "JavaScript":             { Icon: SiJavascript,  color: "#D7B900" },
  "TensorFlow":             { Icon: SiTensorflow,  color: "#FF6F00" },
  "Keras":                  { Icon: SiKeras,       color: "#D00000" },
  "PyTorch":                { Icon: SiPytorch,     color: "#EE4C2C" },
  "Scikit-learn":           { Icon: SiScikitlearn, color: "#F7931E" },
  "NumPy":                  { Icon: SiNumpy,       color: "#4D77CF" },
  "Pandas":                 { Icon: SiPandas,      color: "#150458" },
  "OpenCV":                 { Icon: SiOpencv,      color: "#5C3EE8" },
  "React":                  { Icon: SiReact,       color: "#149ECA" },
  "HTML/CSS":               { Icon: SiHtml5,       color: "#E34F26" },
  "Tailwind CSS":           { Icon: SiTailwindcss, color: "#0EA5B7" },
  "Vite":                   { Icon: SiVite,        color: "#8B5CF6" },
  "Node.js":                { Icon: SiNodedotjs,   color: "#3C873A" },
  "Express.js":             { Icon: SiExpress,     color: "#2D2D2D" },
  "MongoDB":                { Icon: SiMongodb,     color: "#3FA037" },
  "Git":                    { Icon: SiGit,         color: "#E44C30" },
  "Hugging Face Hub":       { Icon: SiHuggingface, color: "#D89400" },
  "Kaggle (GPU Training)":  { Icon: SiKaggle,      color: "#20BEFF" },
  "Vercel":                 { Icon: SiVercel,      color: "#2D2D2D" },
  "Render":                 { Icon: SiRender,      color: "#1C9C7E" },
};

export const TECH_PREVIEW = [
  "Python", "C++", "JavaScript", "React",
  "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
  "TensorFlow", "PyTorch", "OpenCV", "Git",
];

// Skill groups that need extra width to fit their tiles in one row
export const WIDE_SKILL_GROUPS = ["Machine Learning", "Backend & Databases", "Tools"];

export const NAV_LINKS = [
  ["About",          "/about"],
  ["Certifications", "/certifications"],
  ["Experience",     "/experience"],
  ["Education",      "/education"],
  ["Projects",       "/projects"],
  ["Skills",         "/skills"],
  ["Achievements",   "/achievements"],
];
