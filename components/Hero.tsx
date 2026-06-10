"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointer2, ArrowRight } from "lucide-react";
import { TubesBackground } from "@/components/ui/neon-flow";

export default function Hero() {
  return (
    <section className="w-full h-screen font-sans">
      <TubesBackground>
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center px-4">
          <motion.div
            className="space-y-4 pointer-events-auto cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] select-none">
              Koyiljon Sultonaliev
            </h1>
          </motion.div>
        </div>
      </TubesBackground>
    </section>
  );
}
