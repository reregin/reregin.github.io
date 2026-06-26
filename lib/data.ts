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
  xUrl?: string;
  vercelUrl?: string;
  colosseumUrl?: string;
  deepsurgeUrl?: string;
  description: string;
  tags: string[];
  featured?: boolean;
  placeholderLayout?: "square" | "landscape-double";
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
  imageUrl?: string;
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
  subtitle: "Bachelor of Computer Science Fresh Graduate",
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
  "MODEL OUTPUT",
  "now building: NEUROKIT",
  "ON-CHAIN SYSTEMS",
  "DATA PIPELINES",
  "HUMAN-CENTERED AI",
  "BLOCK HEIGHT: ███",
  "EXPERIMENT LOG",
  "CONFIDENCE SCORE: 0.94",
  "ATTENTION + MEMORY",
];

export const builderNotes = [
  'My favorite English word is "determination." I feel like it is the root of every success, and of every wonderful story people tell.',
  'I believe everyone has a strength within them that is still waiting to awaken, and sometimes it starts when we say "yes" to something we do not yet realize will change our life.',
  "I want to contribute something genuinely meaningful to the world. I admire the people shaping AI and Web3 because they may not always feel it, but they are helping steer the world's advancement, and I think that is incredibly cool.",
  "When I'm not training models or shipping on-chain, I'm probably editing videos or rewatching Hunter x Hunter.",
];

export const aboutText = [
  "I am an AI/ML Engineer and recent Computer Science graduate with a strong foundation in Database and Software Engineering. During my university years, I focused on building and shipping architectures under pressure. This practical experience earned me a Bronze Medal at PIMNAS and a Finalist spot at Gemastik.",
  "My engineering work focuses on the intersection of data and software. I take models from research environments and integrate them into functional systems.",
  "Beyond technology, I am an avid filmmaker and video editor. I enjoy the process of taking raw footage or data and structuring it into a polished final product.",
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
    tags: ["Generative AI", "Gamification", "Neurotherapeutic", "PKM", "PIMNAS", "Flutter"],
    featured: true,
  },
  {
    title: "FISH FRESHNESS CLASSIFICATION",
    subtitle: "MULTIMODAL FUSION TRANSFORMER",
    period: "Jul 2025 - Aug 2025",
    description:
      "This research classifies fish freshness using multimodal sensor and visual image data as indicators of food quality. By combining contrastive learning and a parallel fusion transformer, the model integrates MQ-135 and TGS 2602 gas sensor patterns with tuna image data from the DaFiF dataset. Achieving 85.4% accuracy and 84.3% macro F1-score, this research brought my team to the GEMASTIK 2025 finals and earned the Most Inspiring Team title.",
    tags: ["AI/ML", "Computer Vision", "Multimodal", "Transformer", "GEMASTIK", "Data Mining"],
  },
  {
    title: "ANTHROPOMETRIC MINING",
    subtitle: "ERGONOMIC ASSOCIATION RULE MINING",
    period: "2024",
    description:
      "This research applies association rule mining, specifically Apriori and Eclat algorithms, to an Indonesian elderly anthropometric dataset of 38 physical measurements. By analyzing 182 records, the project extracted seven crucial rules linking body dimensions to public facility design requirements. These analytical guidelines promote inclusive and ergonomic infrastructure for vulnerable populations, aligning with Sustainable Development Goals. This analytical approach to improving the quality of life for the elderly successfully brought our team to the GEMASTIK 2024 national finals.",
    tags: ["AI/ML", "Data Mining", "Apriori", "Eclat", "Ergonomics", "GEMASTIK"],
  },
  {
    title: "CORA",
    subtitle: "PvP On-Chain Aptitude Arena",
    period: "Apr 2026 - Present",
    githubUrl: "https://github.com/ahmdtrdi/Cora",
    xUrl: "https://x.com/playcora",
    vercelUrl: "https://cora-gamefi.vercel.app/",
    colosseumUrl: "https://arena.colosseum.org/projects/explore/cora",
    description:
      "CORA is a Solana-based web3 aptitude battle platform where players connect wallets, stake wagers in escrow, and compete in real-time best-of-three question matches. It supports public queue matchmaking and private Blink challenges, both settling outcomes on-chain with refund and reclaim paths. The stack combines a Next.js frontend, Bun/Hono backend, WebSockets, shared game logic, and Solana programs, with optional MagicBlock delegated state to make live battle progression more verifiable and transparent. The project originally started at the Colosseum Solana Frontier Hackathon.",
    tags: ["Solana", "Next.js", "WebSockets", "Bun", "Hono", "On-Chain Escrow"],
    featured: true,
    placeholderLayout: "landscape-double",
  },
  {
    title: "LINOW",
    subtitle: "AI Audit Agent with Verifiable Memory",
    period: "May 2026 - Present",
    githubUrl: "https://github.com/linowlabs/linow",
    xUrl: "https://x.com/linow_ai",
    vercelUrl: "https://linow.vercel.app/",
    deepsurgeUrl: "https://www.deepsurge.xyz/projects/b89834d0-4c8f-481b-8bf5-0308e3e1ad8f",
    description:
      "Linow is an AI audit agent that helps companies compliance prepare audit evidence quickly and helps auditors review engagements efficiently. The Sui are our tamper proof layer, more verifiable audit. Linow leverages Walrus portable memory for keeping the agent's context private even for sensitive company data and combines with contextual-retrieval and reranking mechanism layers to enhance our accurate agent, decrease failure rate and token efficiency. Linow AI made audit more verifiably, quickly, and automated.",
    tags: ["AI/ML", "Sui", "Walrus", "Next.js", "Web3", "Auditing"],
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
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Sui", "Solana", "NestJS", "Flutter"],
  },
  {
    category: "Language",
    skills: ["Indonesian (Native)", "English (Fluent)"],
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
    imageUrl: "https://res.cloudinary.com/dvofzfezh/image/upload/f_auto,q_auto/v1779110108/IMG_2770_os0fb9.jpg",
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
    imageUrl: "https://res.cloudinary.com/dvofzfezh/image/upload/f_auto,q_auto/v1779856714/IMG_4048.JPG_uyc7uh.jpg",
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
    imageUrl: "https://res.cloudinary.com/dvofzfezh/image/upload/f_auto,q_auto/v1779856408/IMG_4592_jhtt9c.jpg",
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
