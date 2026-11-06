import axios from "axios";
import type { Project, Profile, ContactForm } from "./types";
import { portfolioData } from "../data/portfolioData";

// Use environment variable or fallback to local development
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE ||
  "http://localhost:4000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Global response interceptor for logging
api.interceptors.response.use(
  (response) => {
    console.log(
      `✅ API Success: ${response.config.method?.toUpperCase()} ${
        response.config.url
      }`
    );
    return response;
  },
  (error) => {
    console.error(
      `❌ API Error: ${error.config?.method?.toUpperCase()} ${
        error.config?.url
      }`,
      error.response?.status,
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

// --- Projects API ---
export async function getProjects(featured?: boolean): Promise<Project[]> {
  try {
    const params: any = {};
    if (featured) params.featured = "true";
    params._t = Date.now(); // Cache buster

    console.log(
      `📡 Fetching projects from: ${api.defaults.baseURL}/api/projects`
    );

    const { data } = await api.get("/api/projects", { params });
    const projects = Array.isArray(data) ? data : [];

    console.log(`✅ Projects fetched:`, projects.length, "projects");

    // Limit to 4 projects as specified
    return projects.slice(0, 5);
  } catch (error) {
    console.warn("⚠️ Failed to fetch projects from API, using fallback data");
    return getFallbackProjects();
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    console.log(`📡 Fetching project: ${slug}`);
    const { data } = await api.get(`/api/projects/${slug}`);
    return data;
  } catch (error) {
    console.warn(`⚠️ Failed to fetch project ${slug}, checking fallback`);
    const fallbackProjects = getFallbackProjects();
    return fallbackProjects.find((p) => p.slug === slug) || null;
  }
}

// --- Profile API ---
export async function getProfile(): Promise<Profile | null> {
  try {
    console.log(
      `📡 Fetching profile from: ${api.defaults.baseURL}/api/profile`
    );
    const { data } = await api.get("/api/profile");
    return data;
  } catch (error) {
    console.warn("⚠️ Failed to fetch profile from API, using fallback data");
    return getFallbackProfile();
  }
}

// --- Contact API ---
export async function submitContactForm(
  formData: ContactForm
): Promise<boolean> {
  try {
    console.log("📡 Submitting contact form");
    const { data } = await api.post("/api/contact", formData);
    return data.success || false;
  } catch (error: unknown) {
    console.error("❌ Error submitting contact form:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to submit contact form. Please try again later.");
  }
}

// --- Resume API ---
export async function downloadResume(): Promise<void> {
  try {
    const resumeUrl = portfolioData.personal.resumePdf || "/Damini_Gudape_Resume.pdf";
    console.log(`📡 Downloading resume from: ${resumeUrl}`);

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Damini_Gudape_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("❌ Error downloading resume:", error);
    // Fallback: Try API endpoint if direct download fails
    try {
      const apiResumeUrl = `${API_BASE_URL}/api/resume/download`;
      window.open(apiResumeUrl, "_blank");
    } catch (fallbackError) {
      console.error("❌ Fallback download also failed:", fallbackError);
      // Final fallback: direct public folder access
      window.open(portfolioData.personal.resumePdf || "/Damini_Gudape_Resume.pdf", "_blank");
    }
  }
}

// --- Health check ---
export async function checkHealth(): Promise<boolean> {
  try {
    console.log(`📡 Health check: ${api.defaults.baseURL}/api/health`);
    const { data } = await api.get("/api/health");
    return data.status === "OK";
  } catch (error: unknown) {
    console.warn("⚠️ Health check failed:", error instanceof Error ? error.message : "Unknown error");
    return false;
  }
}

// --- Fallback data ---
function getFallbackProjects(): Project[] {
  return portfolioData.projects;
}

function getFallbackProfile(): Profile {
  return {
    name: portfolioData.personal.fullName,
    title: portfolioData.personal.title,
    bio: portfolioData.personal.bio,
    location: portfolioData.personal.location,
    contact: {
      email: portfolioData.contact.email,
      linkedin: portfolioData.contact.linkedin,
      github: portfolioData.contact.github,
      phone: portfolioData.contact.phone,
    },
    resume: {
      url: portfolioData.personal.resumePdf,
      filename: "Damini_Gudape_Resume.pdf",
      uploadedAt: new Date(),
    },
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "JWT Auth",
    ],
    experience: portfolioData.experience,
    education: portfolioData.education.map((edu) => ({
      institution: edu.institution,
      degree: edu.degree,
      cgpa: edu.score,
      year: edu.duration,
    })),
    achievements: portfolioData.hackathons.map(
      (h) => `${h.icon} ${h.award} - ${h.title}`
    ),
    stats: {
      gfgProblems: portfolioData.dsaStats.problemsSolved,
      maxRating: portfolioData.dsaStats.maxRating,
      rank: portfolioData.dsaStats.rank,
      youtubeSubscribers: portfolioData.dsaStats.extraMetricValue,
    },
  };
}
