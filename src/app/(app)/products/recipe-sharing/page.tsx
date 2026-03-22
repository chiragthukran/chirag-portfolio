import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Layers, Server, Database, Globe, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Recipe Sharing Portal - Chirag Yadav",
};

export default function RecipeSharingPage() {
  return (
    <div className="py-20 text-foreground">
      <div className="mx-auto max-w-4xl px-4 md:px-0">
        <Button variant="ghost" asChild className="mb-8 border border-edge bg-card">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Recipe Sharing & Cooking Tips Portal</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          A sleek MERN stack application designed to serve as a comprehensive culinary platform. The portal connects food enthusiasts, enabling them to share recipes, discover cooking tips, and interact with a vibrant community.
        </p>

        <h2 className="mb-6 text-2xl font-bold">Deep Dive & Technical Insights</h2>
        <div className="mb-12 rounded-xl border bg-card p-8 leading-relaxed text-muted-foreground shadow-sm">
          <p className="mb-4">
            This project focuses heavily on creating a fluid, responsive user experience utilizing React Router for seamless client-side navigation. The MERN stack (MongoDB, Express.js, React.js, Node.js) forms the core architecture, allowing for lightning-fast data retrieval and scalable backend API design.
          </p>
          <p>
            The UI is theme-driven, featuring custom unified styling and modern layout patterns to elevate the visual hierarchy of food imagery and typography. A central state management paradigm ensures that users can dynamically search, filter, and instantly preview recipes without page refresh delays.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold">System Architecture</h2>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-6">
            <Globe className="mb-4 h-8 w-8 text-blue-500" />
            <h3 className="mb-2 font-semibold">Frontend Layer</h3>
            <p className="text-sm text-muted-foreground">React & React Router establishing a robust SPA setup with Tailwind CSS styling.</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Server className="mb-4 h-8 w-8 text-emerald-500" />
            <h3 className="mb-2 font-semibold">RESTful APIs</h3>
            <p className="text-sm text-muted-foreground">Node.js and Express.js micro-services handling recipe uploads, user authentication, and search indexing.</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Database className="mb-4 h-8 w-8 text-amber-500" />
            <h3 className="mb-2 font-semibold">Data Persistence</h3>
            <p className="text-sm text-muted-foreground">MongoDB providing a highly flexible schema design for complex recipe structures and media links.</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Lightbulb className="mb-4 h-8 w-8 text-purple-500" />
            <h3 className="mb-2 font-semibold">UX Patterns</h3>
            <p className="text-sm text-muted-foreground">Implementation of grid layouts, infinite scrolling, and skeleton loaders to minimize perceived latency.</p>
          </div>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Key Project Achievements</h2>
        <ul className="mb-12 space-y-4">
          {[
            "Engineered a fully reusable and modular component architecture.",
            "Integrated sophisticated client-side navigation yielding zero page reloads.",
            "Optimized interactive responsiveness for mobile, tablet, and large desktop screens.",
            "Established a versatile, theme-driven environment with accessible color contrasts."
          ].map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-lg text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
