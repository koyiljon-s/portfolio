

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-[#f2f4f8]">
      <Navbar />
      <Hero />
    </main>
  );
}
