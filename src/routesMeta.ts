export interface RouteMeta {
  title: string;
  description: string;
}

export const siteUrl = "https://ramirezstefano.com";

export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Stefano Ramirez — Software Engineer",
    description:
      "Portfolio of Stefano Ramirez, a software engineer based in Costa Rica building AI-powered products with React, TypeScript, and Cloudflare. See experience, skills, and projects.",
  },
  "/education": {
    title: "Education — Stefano Ramirez",
    description:
      "Academic background of Stefano Ramirez: B.S. in Computer Science from UC Santa Cruz and an International Baccalaureate Diploma from the British School of Costa Rica.",
  },
  "/experience": {
    title: "Experience — Stefano Ramirez",
    description:
      "Work history of Stefano Ramirez, a software engineer who has built production software at Financial Advisors, babapp.io, and HoneyGrid using React, TypeScript, and Cloudflare.",
  },
  "/portfolio": {
    title: "Portfolio — Stefano Ramirez",
    description:
      "Selected projects by Stefano Ramirez, including an AI-powered financial advisory platform, babapp.io, HoneyGrid, and open-source contributions.",
  },
  "/skills": {
    title: "Skills — Stefano Ramirez",
    description:
      "Technical skills of Stefano Ramirez: React, TypeScript, Astro, Cloudflare Workers, AI integrations with Claude, GPT, and Gemini, and modern web tooling.",
  },
};

export const defaultRouteMeta: RouteMeta = routeMeta["/"];

export const getRouteMeta = (pathname: string): RouteMeta =>
  routeMeta[pathname] ?? defaultRouteMeta;
