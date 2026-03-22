import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function GraphiDrawHero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Real-time Collaboration
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          GraphiDraw
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {" "}
            Collaborative Whiteboard
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A web-based collaborative whiteboard that allows teams to draw,
          sketch, and visually organize ideas using a clean hand-drawn style.
          Built with a scalable architecture to support real-time
          collaboration, performance, and future growth.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#demo">
              View Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://graphidraw.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Live
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold">Multi-user</div>
            <div className="text-sm text-muted-foreground">Co-editing</div>
          </div>
          <div>
            <div className="text-3xl font-bold">WebSocket</div>
            <div className="text-sm text-muted-foreground">Sync</div>
          </div>
          <div>
            <div className="text-3xl font-bold">JWT</div>
            <div className="text-sm text-muted-foreground">Sessions</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Scalable</div>
            <div className="text-sm text-muted-foreground">Architecture</div>
          </div>
        </div>
      </div>
    </section>
  );
}
