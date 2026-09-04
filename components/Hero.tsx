import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import LatticeBackground from "@/components/ui/lattice-background";

export default function Hero() {
  return (
    <LatticeBackground
      title=""
      subtitle=""
      description=""
      className="min-h-screen"
    >
      <h1 className="text-center text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-9xl">
        <span className="text-[#deeb4d]">K</span>oyiljon
        <br />
        <span className="text-[#deeb4d]">S</span>ultonaliyev
      </h1>
      <p className="mt-8 text-xl font-normal tracking-[-0.04em] text-[#deeb4d] sm:text-2xl md:text-3xl">
        Software Engineer
      </p>
      <div className="pointer-events-auto mt-6 flex gap-5">
        <a
          href="https://github.com/koyiljon-s"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#deeb4d] transition-colors hover:text-white"
        >
          <GitHub sx={{ fontSize: 28 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/koyiljon/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#deeb4d] transition-colors hover:text-white"
        >
          <LinkedIn sx={{ fontSize: 28 }} />
        </a>
        <a
          href="https://www.instagram.com/koyiljon7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#deeb4d] transition-colors hover:text-white"
        >
          <Instagram sx={{ fontSize: 28 }} />
        </a>
      </div>
    </LatticeBackground>
  );
}
