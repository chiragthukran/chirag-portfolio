import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "the-every-kitchen",
    title: "Recipe Sharing & Cooking Tips Portal", // The link they provided says this
    period: { start: "12.2025" },
    link: "https://github.com/chiragthukran/Recipe_Sharing_Cooking_Tips_Portal",
    skills: ["React Router", "MERN Stack", "Responsive Web Design"],
    isExpanded: true,
    description: `A theme-driven UI project providing custom styling and modern layout patterns.
    
**Key Features**
- Reusable component architecture with MERN Stack
- Client-side navigation using React Router
- Fully responsive web design`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Recipe+Sharing",
  },
  {
    id: "cpu-scheduler-simulator",
    title: "Intelligent CPU Scheduler Simulator",
    period: { start: "04.2025" },
    link: "https://github.com/chiragthukran/sheduling-algo-simulators",
    skills: ["JavaScript", "CPU Scheduling Algorithms"],
    description: `A web-based simulator for CPU scheduling algorithms like CFS, SJF, Round Robin, and Priority scheduling.

**Key Features**
- Dynamic Gantt chart generation
- Execution statistics (wait time, turnaround time)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=CPU+Scheduler",
  },
  {
    id: "velvo-ride-sharing",
    title: "Velvo — Ride Sharing Platform",
    period: { start: "03.2025" },
    link: "https://github.com/chiragthukran/Velvo",
    skills: ["PHP", "JavaScript", "HTML", "CSS"],
    description: `A role-based ride sharing system featuring distinct workflows for drivers and customers.

**Key Features**
- Secure auth/session handling in PHP
- Modular backend APIs (auth, driver, customer modules)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Velvo",
  }
];
