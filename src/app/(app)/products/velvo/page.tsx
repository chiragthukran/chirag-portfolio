import type { Metadata } from "next";
import { ArrowLeft, Car, ShieldCheck, AppWindow, Route } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Velvo Ride Sharing - Chirag Yadav",
};

export default function VelvoPage() {
  return (
    <div className="py-20 text-foreground">
      <div className="mx-auto max-w-4xl px-4 md:px-0">
        <Button variant="ghost" asChild className="mb-8 border border-edge bg-card">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Velvo — Ride Sharing Platform</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          A scalable, role-based ride sharing system featuring custom administrative, tracking, and customer workflows, supported by secure PHP-driven REST APIs.
        </p>

        <h2 className="mb-6 text-2xl font-bold">Concept & Architecture</h2>
        <div className="mb-12 rounded-xl border bg-card p-8 leading-relaxed text-muted-foreground shadow-sm">
          <p className="mb-4">
            Velvo solves the complexities of dynamic ride dispatching through strict session controls and a compartmentalized modular backend. Written extensively in raw PHP interacting with relational databases, it segregates driver privileges from rider interactions effortlessly.
          </p>
          <p>
            The frontend interface binds these interactions utilizing JavaScript asynchronous requests to maintain live session states, fetching driver proximities and route metrics while ensuring top-tier security against unauthorized data access through rigid API middlewares.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Platform Capabilities</h2>
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-edge bg-card p-8 shadow-sm">
            <ShieldCheck className="mb-4 h-10 w-10 text-rose-500" />
            <h3 className="mb-3 text-xl font-semibold">Secure Authentication & RBAC</h3>
            <p className="text-muted-foreground">
              Deeply integrated session handling in PHP with rigorous validations, verifying varied clearance levels for Customers, Drivers, and overarching System Administrators.
            </p>
          </div>
          <div className="rounded-xl border border-edge bg-card p-8 shadow-sm">
            <Route className="mb-4 h-10 w-10 text-amber-500" />
            <h3 className="mb-3 text-xl font-semibold">Modular Dispatch Workflows</h3>
            <p className="text-muted-foreground">
              Decoupled backend modules strictly outlining constraints for driver allocations, customer onboarding pipelines, geographic data, and financial trip analytics.
            </p>
          </div>
          <div className="rounded-xl border border-edge bg-card p-8 shadow-sm md:col-span-2">
            <AppWindow className="mb-4 h-10 w-10 text-indigo-500" />
            <h3 className="mb-3 text-xl font-semibold">Real-time Client Interfaces</h3>
            <p className="text-muted-foreground">
              Frontend clients crafted with responsive frameworks leveraging pure JavaScript integration. This facilitates asynchronous updates to present continuous map feeds, immediate driver statuses, and ride fulfillment metrics securely without redundant DOM re-rendering.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
