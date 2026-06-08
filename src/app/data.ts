import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGit,
  SiDocker,
  SiFigma,
  SiJest,
  SiVite,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type Tool = { name: string; Icon: IconType; color: string };

export const toolCategories: { label: string; tools: Tool[] }[] = [
  {
    label: "Frontend",
    tools: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Angular (8+)", Icon: SiAngular, color: "#DD0031" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    tools: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    label: "Databases",
    tools: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    label: "Tools",
    tools: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Jest", Icon: SiJest, color: "#C21325" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

export type Project = { title: string; description: string; stack: string[] };

export const projects: Project[] = [
  {
    title: "Real-Time Fintech Trading Dashboard",
    description:
      "Architected a high-frequency trading dashboard streaming live market data to thousands of concurrent users with sub-second latency and zero layout shift.",
    stack: ["React", "TypeScript", "WebSockets", "Redux"],
  },
  {
    title: "Healthtech Patient Portal",
    description:
      "Led the frontend for a HIPAA-compliant patient portal handling appointments, records and secure messaging across web and mobile.",
    stack: ["Angular", "RxJS", "NgRx", "Node.js"],
  },
  {
    title: "Claude AI Integration Platform",
    description:
      "Built a production platform embedding Claude into customer workflows — streaming responses, tool use and graceful fallbacks at scale.",
    stack: ["Next.js", "Anthropic API", "Tailwind", "Edge Functions"],
  },
  {
    title: "Enterprise Angular Design System",
    description:
      "Designed and shipped a 60+ component design system adopted across multiple product teams, cutting feature delivery time by 40%.",
    stack: ["Angular", "Storybook", "SCSS", "Figma"],
  },
];

export type Blog = { title: string; description: string; tag: string; url: string };

export const blogs: Blog[] = [
  {
    title: "Mastering React Server Components",
    description:
      "A practical walkthrough of how RSC changes data fetching, bundle size and the mental model you bring to building React apps.",
    tag: "React",
    url: "#",
  },
  {
    title: "State Management in 2025: Beyond Redux",
    description:
      "Comparing signals, Zustand, Jotai and the server-state era — when to reach for each and what to stop reaching for.",
    tag: "Architecture",
    url: "#",
  },
  {
    title: "Integrating Claude into Production Apps",
    description:
      "Lessons from shipping LLM features for real users: streaming UX, retries, cost control and keeping the interface honest.",
    tag: "AI",
    url: "#",
  },
  {
    title: "Angular Signals: A Practical Guide",
    description:
      "How fine-grained reactivity finally lands in Angular, and how to migrate a real codebase without rewriting everything.",
    tag: "Angular",
    url: "#",
  },
];

export const social = {
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com/",
  github: "https://github.com/FarihaAftab12",
  email: "fariha@example.com",
};
