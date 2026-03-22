import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function GraphiDrawCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border bg-linear-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Collaborate on a Shared Canvas?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              GraphiDraw is built to showcase real-time collaboration,
              performance, and scalable architecture for a modern drawing
              experience. Reach out to discuss the product or collaboration
              features.
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

            <div className="mt-12 grid gap-6 text-sm md:grid-cols-3">
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">Live</div>
                <div className="font-medium">Real-time Sync</div>
                <div className="text-muted-foreground">WebSocket Powered</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">CI</div>
                <div className="font-medium">Monorepo Pipelines</div>
                <div className="text-muted-foreground">Automated Testing</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">Secure</div>
                <div className="font-medium">Session Access</div>
                <div className="text-muted-foreground">JWT Auth</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
