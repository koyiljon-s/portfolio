import { ArrowDown, ArrowUpRight } from "lucide-react";

import AnimatedGradient from "@/components/ui/animated-gradient";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#05070d] px-6 text-center text-[#f2f4f8]">
      <AnimatedGradient config={{ preset: "Prism" }} noise={{ opacity: 0.06 }} />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">


      </div>
    </section>
  );
}