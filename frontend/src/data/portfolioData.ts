import type { Project, Profile } from "../lib/types";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  duration: string;
  location: string;
  highlights: { label: string; icon: string }[];
}

export interface HackathonItem {
  title: string;
  event: string;
  award: string;
  description: string;
  icon: string;
}

export interface LeadershipItem {
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string; icon: string }[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  color: string;
}

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    logoTitle: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    availableForOpportunities: boolean;
    profilePhoto: string;
    resumePdf: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  heroBadges: {
    name: string;
    icon: string;
    color: string;
  }[];
  heroStats: StatItem[];
  dsaStats: {
    platform: string;
    problemsSolved: string;
    maxRating: string;
    rank: string;
    extraMetricLabel: string;
    extraMetricValue: string;
  };
  technicalSkills: {
    category: string;
    skills: string[];
    color: string;
  }[];
  experience: ExperienceItem[];
  leadership: LeadershipItem;
  hackathons: HackathonItem[];
  education: EducationItem[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: "Damini",
    lastName: "Gudape",
    fullName: "Damini Ganesh Gudape",
    logoTitle: "Damini.dev",
    title: "Product Engineer | Full-Stack Developer",
    tagline: "Building Scalable Web Applications & Digital Products",
    bio: "Computer Science graduate (2026) and Full-Stack Developer experienced in React.js, Node.js, Express.js, and MongoDB. Passionate about building robust client-server architectures, payment integrations, and intuitive user experiences.",
    location: "Maharashtra, India",
    availableForOpportunities: true,
    profilePhoto: "/damini-gudape.jpg",
    resumePdf: "/Damini_Gudape_Resume.pdf",
  },

  contact: {
    email: "gudapedamini@gmail.com",
    phone: "+91-9322424879",
    linkedin: "https://linkedin.com/in/damini-gudape",
    github: "https://github.com/gudapedamini-code",
  },

  heroBadges: [
    { name: "Full-Stack Dev", icon: "🚀", color: "from-purple-500 to-blue-500" },
    { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js & Express", icon: "🛠️", color: "from-cyan-500 to-green-500" },
    { name: "MongoDB", icon: "🍃", color: "from-emerald-500 to-teal-500" },
  ],

  heroStats: [
    {
      value: "5+",
      label: "Full Stack Projects",
      sublabel: "MERN & APIs",
      color: "from-emerald-400 to-teal-500",
    },
    {
      value: "2",
      label: "Internships",
      sublabel: "Agrozone & CodeAlpha",
      color: "from-blue-400 to-cyan-500",
    },
    {
      value: "7.33",
      label: "B.E. CGPA",
      sublabel: "Computer Science",
      color: "from-purple-400 to-pink-500",
    },
    {
      value: "100%",
      label: "Production Ready",
      sublabel: "Vercel & Render",
      color: "from-yellow-400 to-orange-500",
    },
  ],

  dsaStats: {
    platform: "Full-Stack & APIs",
    problemsSolved: "500+",
    maxRating: "7.33",
    rank: "COET Akola",
    extraMetricLabel: "Internships",
    extraMetricValue: "2 Completed",
  },

  technicalSkills: [
    {
      category: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "CRUD Operations"],
      color: "from-emerald-400 to-teal-500",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase", "Firestore"],
      color: "from-purple-400 to-pink-500",
    },
    {
      category: "Tools & Deployment",
      skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "Razorpay API", "Cloudinary", "Docker"],
      color: "from-yellow-400 to-orange-500",
    },
  ],

  experience: [
    {
      company: "Agrozone Technology Pvt. Ltd.",
      role: "Java Full Stack Developer Intern",
      duration: "2026",
      description: [
        "Contributed to AI-driven and full-stack application development using React.js, Node.js, Express.js, and MongoDB.",
        "Worked on implementing application features, integrating REST APIs, debugging issues, and improving existing workflows.",
        "Used AI-assisted development tools for coding support while reviewing and validating generated implementation.",
      ],
    },
    {
      company: "CodeAlpha",
      role: "Full Stack Web Developer Intern",
      duration: "2026",
      description: [
        "Built responsive web application interfaces using HTML, CSS, and JavaScript, and connected UI components with backend logic.",
        "Worked with REST API-based client–server flows and strengthened practical debugging and integration skills.",
      ],
    },
  ],

  leadership: {
    title: "Engineering Practices & Code Quality",
    subtitle: "End-to-End Product Engineering",
    description:
      "Experienced in architecting clean client-server flows, secure authentication with JWT, API debugging, and seamless cloud deployments.",
    stats: [
      { label: "Clean Code", value: "SOLID", icon: "Code" },
      { label: "Deployment", value: "CI/CD", icon: "Trophy" },
    ],
  },

  hackathons: [
    {
      title: "Agrozone AI Tech Intern",
      event: "AI-Driven Full Stack Solutions (2026)",
      award: "Featured Intern",
      description: "Contributed to AI-driven full-stack application development with modern React and Node.js microservices.",
      icon: "🌱",
    },
    {
      title: "CodeAlpha Web Development",
      event: "Full Stack Engineering Program (2026)",
      award: "Completion Award",
      description: "Strengthened practical debugging, component reusability, and REST API integration across client-server workflows.",
      icon: "💻",
    },
  ],

  education: [
    {
      institution: "College of Engineering and Technology, Akola",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science & Engineering",
      score: "7.33 CGPA",
      scoreType: "CGPA",
      duration: "2022 - 2026",
      location: "Akola, Maharashtra, India",
      highlights: [
        { label: "CGPA: 7.33", icon: "🎯" },
        { label: "Computer Science & Engineering", icon: "💻" },
        { label: "Full-Stack & Product Engineering", icon: "🚀" },
      ],
    },
  ],

  projects: [
    {
      title: "Medical Vendor Management System",
      slug: "medical-vendor",
      role: "Full Stack Developer",
      short: "Web-based management platform covering vendors, medical stores, doctors, products, sales transactions, and incentives.",
      description:
        "Comprehensive web platform covering vendors, medical stores, doctors, products, sales transactions, and incentive distribution. Connected responsive frontend workflows with backend REST services.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      highlights: [
        "Developed full-featured system covering vendors, medical stores, doctors, sales transactions, and incentive distribution",
        "Connected responsive frontend workflows with backend REST services; contributed to feature development, debugging, and deployment",
        "Built role-based dashboard with real-time data handling and reporting",
      ],
      cover: "/fallback-hero.png",
      demo: {
        type: "snack",
        url: "https://medical-vendor-web.vercel.app",
      },
      liveUrl: "https://medical-vendor-web.vercel.app",
      repo: "https://github.com/gudapedamini-code",
      featured: true,
      duration: "2026",
    },
    {
      title: "DevFolio – Full-Stack Portfolio Platform",
      slug: "devfolio",
      role: "Full Stack Developer",
      short: "Production-ready MERN portfolio platform with JWT-protected admin access, 3D interactive hero, and dynamic content management.",
      description:
        "Engineered and deployed a MERN portfolio platform with JWT authentication, Cloudinary uploads, glassmorphic 3D hero, and high performance optimization.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Tailwind CSS",
        "Three.js",
      ],
      highlights: [
        "Built and deployed a MERN portfolio platform with JWT-protected admin access and CRUD-based content management",
        "Integrated Cloudinary for image uploads and created reusable, responsive React components using Tailwind CSS",
        "Deployed with Vercel, Render, and MongoDB Atlas with 100% responsive design",
      ],
      cover: "/devfolio.jpg",
      repo: "https://github.com/gudapedamini-code/devfolio",
      liveUrl: "https://devfolio-main-buj9.vercel.app/",
      featured: true,
      duration: "2025",
      demo: {
        type: "snack",
        url: "https://devfolio-main-buj9.vercel.app/",
      },
    },
    {
      title: "Jewellery E-Commerce Platform",
      slug: "jewellery-ecommerce",
      role: "Full Stack Developer",
      short: "Complete online jewellery shopping store with product catalog, cart, OTP email verification, and Razorpay payment gateway.",
      description:
        "Full-fledged e-commerce application featuring product catalog, shopping cart, OTP email verification, checkout, order management, and admin dashboard workflows.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Tailwind CSS",
      ],
      highlights: [
        "Implemented product catalogue, shopping cart, OTP-based email verification, checkout, order management, and admin dashboard",
        "Integrated Razorpay payment processing and connected frontend shopping flows with backend services",
        "Optimized checkout pipeline and database queries for fast product rendering",
      ],
      cover: "/orderhub.jpg",
      repo: "https://github.com/gudapedamini-code",
      liveUrl: "https://django-jewelry-shop-navy.vercel.app/",
      featured: true,
      duration: "2025",
      demo: {
        type: "snack",
        url: "https://django-jewelry-shop-navy.vercel.app/",
      },
    },
    {
      title: "College Chatbot – COET Akola AI Guide",
      slug: "college-chatbot",
      role: "Web & Chatbot Developer",
      short: "Interactive college information assistant helping students access departments, courses, admissions, fees, and contacts.",
      description:
        "College information chatbot concept to help users access information about departments, courses, admissions, fees, facilities, and contacts.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Chatbot UI"],
      highlights: [
        "Developed a college information chatbot to help users access departments, courses, admissions, fees, and campus facilities",
        "Worked on modern chat UI, language selection, backend request handling, and database-backed college information",
        "Streamlined enquiry workflows for prospective students and parents",
      ],
      cover: "/campuscore.jpg",
      repo: "https://github.com/gudapedamini-code",
      featured: true,
      duration: "2025",
      demo: {
        type: "none",
        url: "",
      },
    },
    {
      title: "Socially – Social Media Platform",
      slug: "socially",
      role: "Full Stack Developer",
      short: "Modern social networking platform with user authentication, profiles, posts, likes, comments, and media sharing.",
      description:
        "Full-stack social platform featuring user authentication, profile customization, feed posts, likes, comments, media uploads, and protected REST APIs.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      highlights: [
        "Developing user authentication, profiles, posts, likes, comments, media uploads, and frontend-to-backend API integration",
        "Architecting scalable database schemas and protected REST routes for real-time engagement",
        "Designed clean mobile-first UI with responsive navigation and smooth transitions",
      ],
      cover: "/jobit.jpg",
      repo: "https://github.com/gudapedamini-code",
      liveUrl: "https://socially-nu-seven.vercel.app/",
      featured: true,
      duration: "2026",
      demo: {
        type: "snack",
        url: "https://socially-nu-seven.vercel.app/",
      },
    },
  ],
};
