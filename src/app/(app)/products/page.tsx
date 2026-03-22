import { ArrowRight, ChefHat, Cpu, CarFront } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products - Chirag Yadav",
  description: "Explore my products and projects built with modern technologies.",
};

const products = [
  {
    id: "recipe-sharing",
    name: "Recipe Sharing & Cooking Tips Portal",
    description: "A theme-driven UI project providing custom styling and modern layout patterns. Features client-side navigation using React Router.",
    href: "/products/recipe-sharing",
    status: "Completed",
    tech: ["React Router", "MERN Stack", "Responsive Web Design"],
    Icon: ChefHat,
  },
  {
    id: "cpu-scheduler-simulator",
    name: "Intelligent CPU Scheduler Simulator",
    description: "A web-based simulator for CPU scheduling algorithms like CFS, SJF, Round Robin, and Priority scheduling with performance metrics and Gantt charts.",
    href: "/products/scheduler",
    status: "Completed",
    tech: ["JavaScript", "Algorithms", "HTML5", "CSS3"],
    Icon: Cpu,
  },
  {
    id: "velvo-ride-sharing",
    name: "Velvo — Ride Sharing Platform",
    description: "A role-based ride sharing system featuring distinct workflows for drivers and customers, complete with secure REST APIs in PHP.",
    href: "/products/velvo",
    status: "Completed",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    Icon: CarFront,
  },
];

export default function ProductsPage() {
  return (
    <div className="py-20 text-foreground">
      <div className="mx-auto max-w-5xl px-4 md:px-0">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            My Projects & Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Custom-built solutions showcasing full stack web development capabilities
          </p>
        </div>

        <div className="grid gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="grid gap-6 p-8 md:grid-cols-3">
                <div className="flex items-center justify-center overflow-hidden rounded-lg bg-card/50 border border-edge md:col-span-1 py-12">
                  <product.Icon className="h-24 w-24 text-primary opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100" />
                </div>

                <div className="md:col-span-2">
                  <div className="mb-4 flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {product.status}
                    </span>
                  </div>

                  <p className="mb-4 text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href={product.href}>
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
