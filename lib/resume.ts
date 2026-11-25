/** Content for the portfolio, taken from Koyiljon's resume. */
export const CONTACT = {
  email: "mail@koyiljon.com",
  github: "https://github.com/koyiljon-s",
  linkedin: "https://www.linkedin.com/in/koyiljon/",
  location: "Incheon, South Korea",
};

export type Project = {
  name: string;
  org?: string;
  dates: string;
  points: string[];
  tech: string[];
  url?: string;
};

// Oldest first. The pixel art in components/portfolio/pixels.tsx follows this order.
export const PROJECTS: Project[] = [
  {
    name: "LLM Fine-Tuning",
    dates: "Jul 2025 to Aug 2025",
    points: [
      "Implemented Stanford Alpaca self-instruction and generated a 23K instruction dataset with the OpenAI API.",
      "Fine-tuned Mistral-7B using QLoRA on an AWS g5.xlarge GPU, and published the dataset on Hugging Face.",
    ],
    tech: ["OpenAI API", "Mistral-7B", "QLoRA", "Hugging Face", "AWS"],
  },
  {
    name: "WakilAI",
    org: "Bee Intelligence Global",
    dates: "Nov 2025 to Apr 2026",
    points: [
      "Developed the admin analytics dashboard tracking the activity of 4,500+ users.",
      "Migrated the chat codebase from Next.js to Nuxt.js, which significantly decreased response latency. Contributed to the landing page.",
    ],
    tech: ["FastAPI", "TypeScript", "Material UI", "MongoDB"],
  },
  {
    name: "KumushAI",
    org: "Bee Intelligence Global",
    dates: "Feb 2026 to Apr 2026",
    points: [
      "Implemented LiveKit audio reactivity and waveform visualization.",
      "Redesigned the live call UI using MUI segmented controls.",
    ],
    tech: ["Next.js", "TypeScript", "Docker", "ElevenLabs"],
  },
  {
    name: "Scaleworks.tech",
    dates: "Mar 2026 to present",
    points: [
      "Designed a Dockerized PostgreSQL service with PgBouncer pooling, automated S3 backups and restore tooling.",
      "Automated backend deployment with Terraform to reduce manual configuration.",
    ],
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Cloudflare", "Docker", "Terraform", "AWS", "Go"],
    url: "https://scaleworks.tech",
  },
  {
    name: "Academy Platform",
    org: "Bee Intelligence Global",
    dates: "May 2026 to Jun 2026",
    points: [
      "Integrated the Judge0 engine for running and testing code in real time.",
      "Implemented PM2 clustering across 8 CPU cores, and Sentry for error monitoring.",
    ],
    tech: ["Node.js", "TypeScript", "Material UI", "Docker", "Sentry", "PostgreSQL"],
  },
];

export const EXPERIENCE = {
  role: "Software Engineer",
  org: "Bee Intelligence Global",
  dates: "Sep 2025 to Jun 2026",
  points: [
    "Migrated the frontend from Next.js to Nuxt.js, improving performance and reducing response latency.",
    "Developed a Telegram bot for WakilAI with Payme and Click payments, and automated phone number authentication.",
    "Built an admin analytics dashboard tracking 4,500+ user activity with Next.js and Material UI.",
    "Redesigned the landing page to meet Google Cloud for Startups requirements for credit approval.",
  ],
};

export const EDUCATION = {
  degree: "Bachelor of AI & Big Data",
  school: "Woosong University, Daejeon",
  dates: "Sep 2023 to Aug 2027",
};

export const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Go"] },
  { group: "Frameworks", items: ["FastAPI", "Next.js", "Node.js", "Tailwind CSS", "Material UI", "Ant Design", "shadcn/ui"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { group: "Infrastructure", items: ["Docker", "AWS", "Cloudflare", "Linux"] },
  { group: "Tools", items: ["Git", "Linear", "Postman", "Sentry"] },
];

export const NUMBERS = [
  { value: "23K", label: "instructions generated to fine-tune Mistral-7B" },
  { value: "4,500+", label: "user activity tracked by the WakilAI dashboard" },
  { value: "370+", label: "applicants on the Academy Platform" },
  { value: "8", label: "CPU cores clustered with PM2" },
];
