import type { Metadata } from "next";
import { ArrowLeft, Cpu, Activity, BarChart, HardDrive } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CPU Scheduler Simulator - Chirag Yadav",
};

export default function SchedulerPage() {
  return (
    <div className="py-20 text-foreground">
      <div className="mx-auto max-w-4xl px-4 md:px-0">
        <Button variant="ghost" asChild className="mb-8 border border-edge bg-card">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Intelligent CPU Scheduler Simulator</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          A powerful web-based educational tool engineered to simulate, visualize, and analyze complex Operating System CPU scheduling algorithms in real-time.
        </p>

        <h2 className="mb-6 text-2xl font-bold">Project Details</h2>
        <div className="mb-12 rounded-xl border bg-card p-8 leading-relaxed text-muted-foreground shadow-sm">
          <p className="mb-4">
            Understanding OS algorithms is pivotal in computer science. This simulator breathes life into theoretical concepts like Completely Fair Scheduler (CFS), Shortest Job First (SJF), and Priority Scheduling by generating dynamic Gantt charts and calculating meticulous execution statistics.
          </p>
          <p>
            Built entirely using pure JavaScript, HTML5 Canvas, and advanced DOM manipulation, the tool dynamically updates resource usage and queuing sequences without external charting libraries, optimizing rendering performance significantly.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Algorithms Implemented</h2>
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          {["CFS (Linux Standard)", "SJF (Shortest Job First)", "Round Robin", "Priority Base Scheduling"].map((algo, i) => (
            <div key={i} className="flex items-center justify-center text-center gap-3 rounded-xl border bg-card p-6 shadow-sm">
              <span className="font-semibold text-card-foreground">{algo}</span>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-2xl font-bold">Core Modules</h2>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <BarChart className="mb-4 h-10 w-10 text-blue-500" />
            <h3 className="mb-3 text-xl font-semibold">Dynamic Gantt Charts</h3>
            <p className="text-sm text-muted-foreground">
              Real-time rendering engine visualizing process timelines, waiting periods, and context switch points.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <Activity className="mb-4 h-10 w-10 text-rose-500" />
            <h3 className="mb-3 text-xl font-semibold">Metrics Calculation</h3>
            <p className="text-sm text-muted-foreground">
              Computes vital statistics including Average Turnaround Time, Waiting Time intervals, and Throughput efficiencies.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <Cpu className="mb-4 h-10 w-10 text-emerald-500" />
            <h3 className="mb-3 text-xl font-semibold">Resource Profiling</h3>
            <p className="text-sm text-muted-foreground">
              Profiles multithreaded queueing behaviors and visualizes simulated memory allocation overhead blocks.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
