// ─── Types ───────────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  period?: string;
  githubUrl?: string;
  instagramUrl?: string;
  description: string;
  tags: string[];
  featured?: boolean;
  featuredDetails?: {
    role: string;
    achievement: string;
    bullets: string[];
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  credentialUrl?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  association: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Regina Maria Samantha George",
  title: "ML engineer & web3 builder",
  subtitle: "Informatics Engineering Student",
  email: "reginageo22@gmail.com",
  linkedin: "www.linkedin.com/in/regina-george",
  linkedinUrl: "https://www.linkedin.com/in/regina-george",
  location: "North Sulawesi, Indonesia",
  instagram: "regingeo",
  phone: "+62 823-4797-8059",
};

export const profileBadges = [
  "PIMNAS Bronze Medalist",
  "GEMASTIK Finalist x2",
  "CompTIA Data+",
  "Solana Builder",
];

export const signalStrip = [
  "now building: NEUROKIT",
  "ml & data",
  "web3 curious",
  "on-chain products that matter",
  "attention + memory",
  "editing videos after commits",
];

export const builderNotes = [
  'My favorite English word is "determination." I feel like it is the root of every success, and of every wonderful story people tell.',
  'I believe everyone has a strength within them that is still waiting to awaken, and sometimes it starts when we say "yes" to something we do not yet realize will change our life.',
  "I want to contribute something genuinely meaningful to the world. I admire the people shaping AI and Web3 because they may not always feel it, but they are helping steer the world's advancement, and I think that is incredibly cool.",
  "When I'm not training models or shipping on-chain, I'm probably editing videos or rewatching Hunter x Hunter.",
];

export const aboutText = [
  "I'm a final-year Informatics Engineering student with a strong passion for the IT industry, especially in Data Mining, Machine Learning, and Databases.",
  "I have gained experience through various projects, competitions, internships, and community-based technology initiatives. My strong problem-solving skills and detail-oriented approach drive my commitment to applying knowledge and energy to meaningful causes while continuously growing my technical and professional skills.",
  "Beyond technology, I also enjoy filmmaking and editing, allowing me to combine creativity with technical thinking.",
];

export const experiences: Experience[] = [
  {
    role: "Risk Management Intern",
    company: "PT. Bank SulutGo (BSG)",
    period: "June 2025 – August 2025",
    bullets: [
      "Collaborated in a 3-person team to conceptualize a POC / design system for a digitized monitoring dashboard.",
      "Translated requirements for 3 distinct user roles to proactively track and mitigate credit risk.",
      "Facilitated cross-functional communication between divisions to align assessment workflows.",
      "Supported operational risk mitigation during daily procedures.",
    ],
  },
  {
    role: "Data Analytics with BI Tools Mentee",
    company: "Metrodata Academy",
    period: "September 2024 – December 2024",
    bullets: [
      "Developed data analysis and business intelligence skills through the Studi Independen Bersertifikat / SIBKM Batch 7 program.",
      "Gained proficiency in Microsoft Office Suite, Office 365, Power BI, and Power Query.",
      "Successfully passed the CompTIA Data+ certification exam.",
    ],
  },
  {
    role: "ML Engineer — SPARK Project",
    company: "UNSRAT IT Community",
    period: "August 2024 – December 2024",
    bullets: [
      "Collaborated with 15+ Machine Learning Engineers to build a chatbot using generative AI.",
      "Implemented fine-tuning on Llama 3.1.",
      "Contributed to TECHOFEST 2024 through the SPARK project.",
    ],
  },
  {
    role: "Senior ML Engineer — WEBDEV.xML",
    company: "UNSRAT IT Community",
    period: "May 2024 – July 2024",
    bullets: [
      "Led 8+ Machine Learning Engineers to build a chatbot for the UNITY / UNSRAT IT Community website.",
      "Implemented cosine similarity using an FAQ dataset to develop the chatbot.",
    ],
  },
  {
    role: "ML Engineer — Deepfake Project",
    company: "UNSRAT IT Community",
    period: "July 2023 – November 2023",
    bullets: [
      "Collaborated with 15+ Machine Learning Engineers to build a deepfake model.",
      "Implemented voice conversion using KNN-VC.",
      "Contributed to TECHOFEST 2023 through the Deepfake project.",
    ],
  },
  {
    role: "Member — Machine Learning Division",
    company: "UNSRAT IT Community",
    period: "January 2024 – December 2024",
    bullets: [
      "Participated in weekly meetings to study the fundamentals of Machine Learning with Python.",
    ],
  },
  {
    role: "Member — Mobile Development Division",
    company: "UNSRAT IT Community",
    period: "April 2023 – December 2023",
    bullets: [
      "Participated in weekly meetings to study the fundamentals of Mobile Development.",
      "Focused on learning the Flutter framework.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "NEUROKIT",
    subtitle: "Multimodal Neurotherapeutic Toolkit",
    period: "Jul 2025 - Nov 2025",
    githubUrl: "https://github.com/reregin/neurokit",
    instagramUrl: "https://www.instagram.com/neurokit.pkmkc/",
    description:
      "NEUROKIT is a multimodal neurotherapeutic-based dynamic toolkit integrated with gamification and generative AI to improve students' attention span and memory retention. This toolkit originated as a collaboration between Informatics Engineering and the Medical field, developed for participation in the 2025 Program Kreativitas Mahasiswa (PKM). It was later selected to be presented at the 2025 Pekan Ilmiah Mahasiswa Nasional (PIMNAS), hosted by Universitas Hasanuddin in Makassar, where it earned a Bronze Medal under the Karsa Cipta scheme.",
    tags: ["Generative AI", "Gamification", "Neurotherapeutic", "PKM", "PIMNAS"],
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "ML & Data",
    skills: ["Python", "Pandas", "Scikit-Learn", "MySQL", "MLflow"],
  },
  {
    category: "Web3 & Web2",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Solana", "NestJS"],
  },
  {
    category: "Builder Kit",
    skills: ["Generative AI", "Llama 3.1", "Cosine Similarity", "KNN-VC"],
  },
  {
    category: "Creative Side",
    skills: ["Video Editing", "Filmmaking", "Research", "Storytelling"],
  },
];

export const certifications: Certification[] = [
  {
    name: "CompTIA Data+",
    credentialUrl:
      "https://www.linkedin.com/in/regina-george/overlay/1734742617080/single-media-viewer/?profileId=ACoAADa_6JwBzikWJVEiij2Yky-0imzerh6HSew",
  },
  {
    name: "Project Management Fundamentals",
    credentialUrl:
      "https://www.credly.com/badges/3eb371ce-c03e-47bf-b107-2a0911ecc5a3/public_url",
  },
  {
    name: "Hadoop 101 Course",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/3c4fb0a7609a46a3a16d471fdbd5a18f",
  },
  {
    name: "SQL Basic Assessment",
    credentialUrl: "https://www.hackerrank.com/certificates/a005675157a2",
  },
  {
    name: "C++ Beginner Course",
    credentialUrl: "https://www.sololearn.com/certificates/CT-IQY1GNKN",
  },
  {
    name: "SQL Beginner Course",
    credentialUrl: "https://www.sololearn.com/certificates/CT-2RIOALFA",
  },
];

export const awards: Award[] = [
  {
    title: "Bronze Medalist in PKM-KC at PIMNAS",
    issuer: "Direktorat Pembelajaran dan Kemahasiswaan / Belmawa",
    date: "November 2025",
    association: "Universitas Sam Ratulangi",
    bullets: [
      "Proposed a prototype-scale solution in the PKM Karsa Cipta scheme to help address attention span and memory retention problems using a multimodal neurotherapeutic device.",
      "Designed the innovation around light therapy, music therapy, and a connected mobile application with gamification and positive affirmation powered by generative AI.",
      "Received funding for the proposal and contributed to ethical clearance preparation, 3D case design, IoT tools/materials preparation, Flutter mobile app development, testing, and report writing.",
      "Presented progress at PKP2.",
      "Qualified to present at PIMNAS in front of three judges from top Indonesian universities.",
      "Awarded Bronze Medalist.",
    ],
  },
  {
    title: "The Most Inspiring Team — Data Mining at GEMASTIK",
    issuer: "Direktorat Pembelajaran dan Kemahasiswaan / Belmawa",
    date: "October 2025",
    association: "Universitas Sam Ratulangi",
    bullets: [
      "Built a classification model to identify fish freshness categories: fresh, marginal, and rotten — supporting food quality and safety.",
      "Competed against top teams and solved complex classification problems on an image dataset within a strict 5-hour timeframe.",
      "Awarded The Most Inspiring Team, selected from 220 finalists across 11 divisions, with 20 teams per division.",
    ],
  },
  {
    title: "Finalist in Data Mining at GEMASTIK",
    issuer: "Pusat Prestasi Nasional / Puspresnas",
    date: "September 2024",
    association: "Universitas Sam Ratulangi",
    bullets: [
      "Applied association rule mining to generate an ergonomic public facility design guide tailored for elderly users.",
      "Competed against top teams and solved complex classification problems on a tabular dataset within a strict 5-hour timeframe.",
      "Recognized as a Finalist in Data Mining at GEMASTIK.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Sam Ratulangi",
    degree: "Informatics Engineering",
    period: "2022 – 2026",
  },
  {
    institution: "SMAN 9 Manado",
    degree: "Natural Sciences",
    period: "July 2019 – May 2022",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];
