import { WovenLightHero } from "@/components/ui/woven-light-hero";

export default function Hero() {
  return (
    <section className="mx-auto flex h-screen w-full bg-[#0a0a0a] max-w-364 items-center gap-8 border-r border-[#262625]">
      <div className="flex-2">
        <h1 className="text-5xl font-semibold leading-tight">
          Hey there! I am Koyilon, a Software Engineer.
        </h1>
        <button className="mt-8 bg-[#6236f5] py-4 px-8 text-sm font-medium text-white transition">
          CONTACT
        </button>
      </div>
      <div className="flex-3">
        <WovenLightHero />
      </div>
    </section>
  );
}