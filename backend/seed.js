import mongoose from "mongoose";
import dotenv from "dotenv";
import { Project, Profile } from "./models/Project.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Clear old data
    await Project.deleteMany({});
    await Profile.deleteMany({});
    console.log("🧹 Old data removed");

    // Add Profile Data from Resume
    const profile = {
      name: "Damini Ganesh Gudape",
      title: "Product Engineer | Full-Stack Developer",
      bio: "B.E. Computer Science graduate (2026) and Full-Stack Developer with internship experience building web applications across frontend, backend, APIs, databases, and deployment. Hands-on experience with React.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs, authentication, admin workflows, and payment integration.",
      location: "Maharashtra, India",
      contact: {
        email: "gudapedamini@gmail.com",
        linkedin: "https://linkedin.com/in/damini-gudape",
        github: "https://github.com/gudapedamini-code",
        phone: "+91-9322424879",
      },
      resume: {
        url: "/static/Damini_Gudape_Resume.pdf",
        filename: "Damini_Gudape_Resume.pdf",
        uploadedAt: new Date(),
      },
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Java",
        "Python",
        "C",
        "C++",
        "SQL",
        "REST APIs",
        "JWT Auth",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
        "Cloudinary",
        "Razorpay API",
        "Docker",
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
      education: [
        {
          institution: "College of Engineering and Technology, Akola",
          degree: "Bachelor of Engineering – Computer Science & Engineering",
          cgpa: "7.33",
          year: "2022 - 2026",
        },
      ],
      achievements: [
        "Java Full Stack Developer Intern at Agrozone Technology Pvt. Ltd.",
        "Full Stack Web Developer Intern at CodeAlpha",
        "Built Medical Vendor Management System deployed live on Vercel",
        "Integrated Razorpay payment processing in Jewellery E-Commerce Platform",
      ],
      stats: {
        gfgProblems: "500+",
        maxRating: "7.33",
        rank: "COET Akola",
        youtubeSubscribers: "2 Internships",
      },
    };

    await Profile.create(profile);
    console.log("✅ Profile created successfully");

    // Add Projects Data from Resume
    const projects = [
      {
        title: "Medical Vendor Management System",
        slug: "medical-vendor",
        role: "Full Stack Developer",
        short:
          "Web-based system covering vendors, medical stores, doctors, products, sales transactions, and incentive distribution.",
        description:
          "Developed a web-based system covering vendors, medical stores, doctors, products, sales transactions, and incentive distribution. Connected responsive frontend workflows with backend REST services; contributed to feature development, debugging, and deployment.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        highlights: [
          "Developed web-based system covering vendors, medical stores, doctors, products, sales transactions, and incentive distribution",
          "Connected responsive frontend workflows with backend REST services; contributed to feature development, debugging, and deployment",
          "Built role-based dashboard with real-time data handling and reporting",
        ],
        cover: "/medical-vendor.png",
        demo: {
          type: "snack",
          url: "https://medical-vendor-web.vercel.app",
        },
        repo: "https://github.com/gudapedamini-code",
        liveUrl: "https://medical-vendor-web.vercel.app",
        featured: true,
        duration: "2026",
      },
      {
        title: "DevFolio – Full-Stack Portfolio Platform",
        slug: "devfolio",
        role: "Full Stack Developer",
        short:
          "Full-Stack Portfolio Platform with 3D animations and CMS.",
        description:
          "Built and deployed a MERN portfolio platform with JWT-protected admin access and CRUD-based content management. Integrated Cloudinary for image uploads and created reusable, responsive React components using Tailwind CSS.",
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
        liveUrl: "https://devfolio-six-omega.vercel.app",
        featured: true,
        duration: "2025",
        demo: {
          type: "none",
          url: "",
        },
      },
      {
        title: "Jewellery E-Commerce Platform",
        slug: "jewellery-ecommerce",
        role: "Full Stack Developer",
        short:
          "Full-featured online jewellery shopping platform with OTP verification and Razorpay payment integration.",
        description:
          "Implemented product catalogue, shopping cart, OTP-based email verification, checkout, order management, and admin dashboard workflows. Integrated Razorpay payment processing and connected frontend shopping flows with backend services.",
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Razorpay API",
          "Tailwind CSS",
        ],
        highlights: [
          "Implemented product catalogue, shopping cart, OTP-based email verification, checkout, order management, and admin dashboard workflows",
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
        short:
          "College information chatbot concept to help users access information about departments, courses, admissions, fees, and contacts.",
        description:
          "Developed a college information chatbot concept to help users access information about departments, courses, admissions, fees, facilities, and contacts. Worked on chat UI, language selection, backend request handling, and database-backed college information.",
        tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Chatbot UI"],
        highlights: [
          "Developed a college information chatbot to help users access departments, courses, admissions, fees, and campus facilities",
          "Worked on modern chat UI, language selection, backend request handling, and database-backed college information",
          "Streamlined enquiry workflows for prospective students and parents",
        ],
        cover: "/campuscore.jpg",
        repo: "https://github.com/gudapedamini-code",
        liveUrl: "https://collage-chatbot-gamma.vercel.app/",
        featured: true,
        duration: "2025",
        demo: {
          type: "snack",
          url: "https://collage-chatbot-gamma.vercel.app/",
        },
      },
      {
        title: "Socially – Social Media Platform",
        slug: "socially",
        role: "Full Stack Developer",
        short:
          "Modern social networking platform with user authentication, profiles, posts, likes, comments, and media sharing.",
        description:
          "Developing user authentication, profiles, posts, likes, comments, media uploads, and frontend-to-backend API integration.",
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
    ];

    await Project.insertMany(projects);
    console.log("✅ Projects seeded successfully");

    console.log("\n🎉 Seeding completed successfully!");
    console.log(`📊 Created ${projects.length} projects`);
    console.log("👤 Created 1 profile with resume");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();
