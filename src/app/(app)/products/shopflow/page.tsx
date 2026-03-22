import type { Metadata } from "next";

import {
  GraphiDrawCTA,
  GraphiDrawDemo,
  GraphiDrawFeatures,
  GraphiDrawHero,
  GraphiDrawTechStack,
} from "@/features/products/graphidraw/components";

export const metadata: Metadata = {
  title: "GraphiDraw - Collaborative Whiteboard",
  description:
    "A web-based collaborative whiteboard that enables teams to draw, sketch, and organize ideas in a clean hand-drawn style.",
  openGraph: {
    title: "GraphiDraw - Collaborative Whiteboard",
    description:
      "A web-based collaborative whiteboard that enables teams to draw, sketch, and organize ideas in a clean hand-drawn style.",
    type: "website",
  },
};

export default function ShopFlowPage() {
  return (
    <div className="flex flex-col">
      <GraphiDrawHero />
      <GraphiDrawDemo />
      <GraphiDrawFeatures />
      <GraphiDrawTechStack />
      <GraphiDrawCTA />
    </div>
  );
}
