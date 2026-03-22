"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TerminalStatus() {
  return (
    <Panel id="status">
      <PanelHeader className="flex items-center gap-3 py-4">
        <Terminal className="size-5 text-muted-foreground" />
        <PanelTitle>Current Status</PanelTitle>
      </PanelHeader>

      <PanelContent className="font-mono text-sm leading-relaxed text-muted-foreground">
        <div className="rounded-xl border border-edge bg-black/5 p-4 dark:bg-black/40 relative overflow-hidden">
          {/* Animated glow background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">➜</span>
              <span className="text-blue-500">~/profile</span>
              <span className="text-foreground">status --current</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-foreground/90 pl-4 border-l-2 border-edge"
            >
              Building next-gen web applications and continuously <br className="hidden sm:block" />
              polishing my algorithms skills. Open to exciting <br className="hidden sm:block" />
              new opportunities in Full Stack Development! 🚀
            </motion.div>

            <div className="flex items-center gap-2 mt-4 text-foreground">
              <span className="text-emerald-500">➜</span>
              <span className="text-blue-500">~/profile</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 bg-emerald-500"
              >
                &nbsp;
              </motion.span>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
