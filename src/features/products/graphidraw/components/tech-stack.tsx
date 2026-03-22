import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "React framework for scalable web apps",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Modern UI library for building interactive interfaces",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Type-safe JavaScript for robust applications",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first styling for rapid UI development",
  },
  {
    name: "WebSocket",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    description: "Real-time bidirectional updates for collaboration",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description: "State management for complex canvas interactions",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for scalable backend services",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Powerful, open-source relational database",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Reliable relational data store",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    description: "Next-generation ORM for type-safe database access",
  },
  {
    name: "JWT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    description: "Secure authentication and authorization system",
  },
];

export function GraphiDrawTechStack() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built with Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by industry-leading technologies for reliability and
              performance
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center rounded-xl border bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 dark:invert-[0.9]"
                  />
                </div>
                <h3 className="mb-2 font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border bg-background p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Key Technical Features
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">WebSocket Sync</div>
                  <div className="text-sm text-muted-foreground">
                    Live canvas updates with low latency
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">Session Security</div>
                  <div className="text-sm text-muted-foreground">
                    JWT-based authentication and access control
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">Scalable Architecture</div>
                  <div className="text-sm text-muted-foreground">
                    Designed for growth and collaboration at scale
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">Monorepo CI</div>
                  <div className="text-sm text-muted-foreground">
                    Automated tests and pipeline checks
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">Drawing Performance</div>
                  <div className="text-sm text-muted-foreground">
                    Smooth rendering for shapes and freehand strokes
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[10px] font-bold text-green-600 dark:text-green-400">
                  OK
                </div>
                <div>
                  <div className="font-medium">Type Safety</div>
                  <div className="text-sm text-muted-foreground">
                    End-to-end TypeScript for reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
