/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update the portfolio — no component changes needed.
 *  Rule of thumb: only put real, verifiable facts in here.
 * ─────────────────────────────────────────────────────────────
 */

export type Skill = {
  name: string;
  /** Simple Icons slug (https://simpleicons.org). Omit for concept chips. */
  slug?: string;
  /** Fallback icon key when there is no brand logo (see components/skill-chip.tsx). */
  icon?: "sql" | "geojson" | "turf" | "ensemble" | "anomaly";
};

export type SkillGroup = { category: string; skills: Skill[] };

export type ProjectLink = { label: "Live" | "Source code"; href: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  context?: string;
  description: string;
  impact: string;
  points: string[];
  tech: string[];
  links: ProjectLink[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  /** Path under /public. If the file is missing, an initials badge is shown. */
  logo: string;
  initials: string;
};

export type Stat = { value: number; decimals?: number; suffix?: string; label: string };

export type Hobby = { emoji: string; category: string; title: string; description?: string };

export const profile = {
  name: "Deep Kumar Sadhukhan",
  firstLine: "Deep Kumar",
  secondLine: "Sadhukhan",
  monogram: "DS",
  role: "Full-Stack Developer & M.Tech Researcher",
  /** Short line in the pill above the name in the hero. */
  headline: "Full-Stack Developer · M.Tech, Jadavpur University",
  location: "Bhangar, South 24 Parganas, West Bengal, India",
  shortLocation: "Kolkata, India",
  email: "deepsadhukhan1234@gmail.com",
  github: "https://github.com/deep03102000",
  githubHandle: "deep03102000",
  linkedin: "https://linkedin.com/in/deep-kumar-sadhukhan-392443322",
  linkedinHandle: "deep-kumar-sadhukhan",
  languages: ["English", "Bengali", "Hindi"],
  photo: "/assets/profile.jpg",
  resume: "/assets/Deep-Kumar-Sadhukhan-Resume.pdf",
  tagline:
    "Full-stack developer and M.Tech student in Distributed & Mobile Computing at Jadavpur University — building and deploying web apps with React, Next.js, Node.js, TypeScript and MongoDB.",
};

/**
 * Link used by every "Email" button. Opens Gmail's compose window in a new tab,
 * which works in any browser — a plain mailto: link does nothing when the
 * visitor has no email app set up.
 */
export const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

export const seo = {
  title: "Deep Kumar Sadhukhan — Full-Stack Developer",
  description: profile.tagline,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "IoT",
    "Edge Computing",
    "Machine Learning",
    "Distributed Computing",
    "Jadavpur University",
    "Deep Kumar Sadhukhan",
  ],
};

export const about = {
  heading: "A bit about me",
  subheading: "A full-stack developer who builds real apps and gets them live.",
  paragraphs: [
    "I'm a full-stack developer and M.Tech student in Distributed and Mobile Computing at Jadavpur University. I build and deploy web apps with React, Next.js, Node.js, TypeScript and MongoDB, taking them from first design to production.",
    "Recent work includes a live map-based AQI dashboard for Kolkata, PingChat (a real-time chat and video calling app), and a machine learning web app that flags unusual clinical readings. Alongside these, my M.Tech thesis builds an edge-based air pollution monitoring system on Raspberry Pi 5.",
  ],
  stats: [
    { value: 3, label: "Deployed Projects" },
    { value: 35, suffix: "+", label: "Technologies" },
    { value: 8.35, decimals: 2, label: "M.Tech CGPA" },
  ] satisfies Stat[],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "C", slug: "c" },
      { name: "Java", slug: "openjdk" },
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Ensemble Learning", icon: "ensemble" },
      { name: "Anomaly Detection", icon: "anomaly" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Flask", slug: "flask" },
      { name: "Clerk", slug: "clerk" },
      { name: "Convex", slug: "convex" },
      { name: "WebRTC", slug: "webrtc" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    category: "Geospatial & Visualisation",
    skills: [
      { name: "Leaflet", slug: "leaflet" },
      { name: "Turf.js", icon: "turf" },
      { name: "GeoJSON", icon: "geojson" },
      { name: "Chart.js", slug: "chartdotjs" },
    ],
  },
  {
    category: "IoT & Tools",
    skills: [
      { name: "Raspberry Pi", slug: "raspberrypi" },
      { name: "MQTT", slug: "mqtt" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "Postman", slug: "postman" },
      { name: "Streamlit", slug: "streamlit" },    ],
  },
];

export const thesis = {
  label: "M.Tech Thesis",
  title: "Edge-Based Air Pollution Monitoring System Using Raspberry Pi 5",
  period: "2026 – 2027",
  status: "Ongoing",
  tools: ["Python", "Raspberry Pi 5", "MQTT / HTTP"],
  points: [
    "Building the Raspberry Pi 5 edge device of a three-tier (sensor, edge, cloud) air quality system.",
    "Writing the code phase by phase, then testing it and fixing the parts that are wrong.",
    "Current work: sensor calibration and validation using CPCB station data as reference.",
  ],
  tiers: [
    { name: "Sensor", detail: "IoT sensor device" },
    { name: "Edge", detail: "Raspberry Pi 5" },
    { name: "Cloud", detail: "Cloud server" },
  ],
};

export const projects: Project[] = [
  {
    slug: "kolkata-aqi-dashboard",
    title: "Interactive AQI Dashboard for Kolkata",
    category: "Geospatial / Web Development",
    context: "M.Tech Mini Project",
    description:
      "React and Node.js web app showing live and historical AQI for 6 Kolkata stations on a map.",
    impact: "6 monitoring stations · live CPCB data + 2024–2025 history · deployed",
    points: [
      "Built and deployed a React and Node.js web app showing live and historical AQI for 6 Kolkata stations on a map.",
      "Combined official live CPCB data with cleaned 2024–2025 history in one common format.",
      "Divided the city by nearest station using Voronoi polygons and coloured each road by its AQI category.",
    ],
    tech: ["React", "Node.js", "Leaflet", "Turf.js", "Chart.js", "CPCB (data.gov.in) API"],
    links: [
      { label: "Live", href: "https://kolkata-aqi-dashboard.netlify.app" },
      { label: "Source code", href: "https://github.com/deep03102000/Kolkata-AQI-Dashboard" },
    ],
  },
  {
    slug: "rural-health-anomaly-detection",
    title: "Rural Health Care Anomaly Detection System",
    category: "Machine Learning / Healthcare",
    context: "Team Project",
    description:
      "Web app that flags unusual clinical readings using a 9-model ensemble, built for non-technical users.",
    impact: "9-model ensemble · 6-step guided workflow · Dockerised on Render",
    points: [
      "Web app that flags unusual clinical readings using a 9-model ensemble, with a guided 6-step workflow for non-technical users.",
      "Packaged with Docker and deployed on Render, kept within latency and RAM limits.",
    ],
    tech: ["Python", "scikit-learn", "PyTorch", "React", "Docker", "Streamlit"],
    links: [
      { label: "Live", href: "https://rural-health-anomaly-dashboard.onrender.com" },
      {
        label: "Source code",
        href: "https://github.com/archisman-das/Health-Care-Anomaly-Detection-System",
      },
    ],
  },
  {
    slug: "pingchat",
    title: "PingChat: Real-Time Chat & Video Calling App",
    category: "Full-Stack Web",
    context: "Solo Project",
    description:
      "Full-stack real-time chat app with one-to-one and group chats plus HD video and voice calls.",
    impact: "Solo build · group chats · HD video & voice calls over WebRTC",
    points: [
      "Built and deployed a full-stack real-time chat app on my own, from design to production.",
      "Added one-to-one and group chats plus HD video and voice calls over WebRTC.",
      "Set up Clerk authentication with protected routes, and used Convex for user data and search.",
      "Built a responsive UI for mobile and desktop with lightweight animations.",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Clerk", "Convex", "Stream (Chat & Video)", "Vercel"],
    links: [
      { label: "Live", href: "https://pingchat-drab.vercel.app" },
      { label: "Source code", href: "https://github.com/deep03102000/pingchat" },
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.Tech in Distributed and Mobile Computing",
    institution: "Jadavpur University, Kolkata",
    period: "Oct 2025 – 2027 (Pursuing)",
    grade: "CGPA: 8.35",
    logo: "/logos/ju.png",
    initials: "JU",
  },
  {
    degree: "B.Tech in Information Technology",
    institution: "Calcutta Institute of Engineering and Management, Kolkata",
    period: "Aug 2020 – Jul 2024",
    grade: "CGPA: 8.21",
    logo: "/logos/ciem.png",
    initials: "CIEM",
  },
  // Add Class XII / Class X here once you have the real details, e.g.:
  // {
  //   degree: "Higher Secondary (Class XII)",
  //   institution: "School Name, Board",
  //   period: "Year",
  //   grade: "Percentage",
  //   logo: "/logos/school.png",
  //   initials: "HS",
  // },
];

export const interests = [
  {
    key: "teaching",
    title: "Teaching",
    items: [
      "Operating Systems",
      "Computer Networks",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Distributed Systems",
      "Mobile Computing",
      "Internet of Things",
      "Machine Learning",
      "Programming (C, Java, Python)",
    ],
  },
  {
    key: "research",
    title: "Research",
    items: [
      "IoT and Edge Computing",
      "Distributed and Mobile Computing",
      "Machine Learning",
      "Anomaly Detection and Ensemble Learning",
      "Geospatial Data Visualisation",
      "Healthcare Data Analytics",
    ],
  },
  {
    key: "labs",
    title: "Labs",
    items: [
      "Operating Systems",
      "Computer Networks",
      "Data Structures (C)",
      "DBMS / SQL",
      "Python / ML",
    ],
  },
];

/** Add hobbies here to enable the /hobbies page and its nav link. */
export const hobbies: Hobby[] = [];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  ...(hobbies.length ? [{ href: "/hobbies", label: "Hobbies" }] : []),
  { href: "/contact", label: "Contact" },
];

/** Section eyebrows, headings and intro lines used across pages. */
export const sections = {
  technologies: {
    eyebrow: "Technologies",
    title: "Tools I work with",
    subtitle: "The languages, frameworks and tools I use across my projects.",
  },
  research: {
    eyebrow: "Current Research",
    title: "What I'm working on",
    subtitle: "My ongoing M.Tech thesis: air-quality sensing, processed at the edge.",
  },
  work: {
    eyebrow: "Projects",
    title: "Featured Work",
    subtitle: "Three deployed projects, each with a live demo and source code.",
  },
  resume: {
    eyebrow: "Resume",
    title: "My resume",
    subtitle: "Everything on one page — projects, education, thesis and skills.",
    cardTitle: "Deep Kumar Sadhukhan — Resume",
    cardDetail: "Full-Stack Developer · M.Tech, Jadavpur University · PDF, 1 page",
    highlights: ["3 deployed projects", "M.Tech thesis (ongoing)", "Technical skills", "Education"],
  },
  education: {
    eyebrow: "Education",
    title: "Academic background",
    subtitle: "Where I've studied and what I've focused on.",
  },
  interests: {
    eyebrow: "Interests",
    title: "Areas of Interest",
    subtitle: "Subjects I am keen to teach, research directions I am exploring, and labs I am interested in.",
  },
};

export const pages = {
  research: {
    eyebrow: "Research",
    title: "Research",
    intro:
      "My M.Tech research sits where IoT, edge computing and machine learning meet, applied to real-world air-quality monitoring.",
    interestsTitle: "Research interests",
    interestsSubtitle: "Directions I'm exploring and keen to work on.",
  },
  projects: {
    eyebrow: "Things I've built",
    title: "Projects",
    intro:
      "A selection of projects across geospatial visualisation, machine learning, and full-stack web development.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    intro: "Reach out about job opportunities, collaborations, or any of my projects. I usually reply within a couple of days.",
  },
};

export const cta = {
  heading: "Have a role or project in mind?",
  subheading: "I'd be glad to hear about it — send me a message or download my resume.",
  button: "Get in touch",
};
