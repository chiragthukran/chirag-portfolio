import {
  Gauge,
  GitBranch,
  MousePointer2,
  Pencil,
  ShieldCheck,
  Shapes,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Multiple users can draw and edit simultaneously with updates synced across every connected board.",
  },
  {
    icon: Pencil,
    title: "Rich Drawing Tools",
    description:
      "Create freehand sketches, lines, and shapes with a clean hand-drawn look built for ideation.",
  },
  {
    icon: MousePointer2,
    title: "Live Cursors",
    description:
      "See who is active with live cursor positions and canvas changes that update instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Authentication and session-based access keep shared boards protected and organized.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Optimized rendering and scalable architecture to keep the canvas fast as teams grow.",
  },
  {
    icon: GitBranch,
    title: "Automated Testing + CI",
    description:
      "Monorepo-ready setup with automated testing and CI pipelines for reliable releases.",
  },
];

export function GraphiDrawFeatures() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need to Collaborate Visually
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for real-time teamwork with a focus on speed, clarity, and
            extensibility
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
