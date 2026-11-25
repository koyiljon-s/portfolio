const COLORS: Record<string, string> = { w: "#ffffff", n: "#011421", c: "#0ff7ff", m: "#ff04d5", v: "#4100cf" };

/** Draws rows of characters as square pixels. "." is empty. */
export function Pixels({ rows, className, label }: { rows: string[]; className?: string; label?: string }) {
  return (
    <svg
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      className={className}
      shapeRendering="crispEdges"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={COLORS[ch] ?? "currentColor"} />,
        ),
      )}
    </svg>
  );
}

export const BUBBLE = [
  ".ccccccc.",
  "ccccccccc",
  "ccnncnncc",
  "ccnncnncc",
  "ccccccccc",
  ".ccccccc.",
  ".cc......",
  ".c.......",
];

/** One icon and one pair of ground shades per project, in PROJECTS order. */
const ART: { ground: [string, string]; icon: string[] }[] = [
  {
    // LLM Fine-Tuning: a chip.
    ground: ["#0ff7ff", "#8ffbff"],
    icon: [
      "..n.n.n.n..", ".nnnnnnnnn.", "nnvvvvvvvnn", ".nvwwwwwvn.", "nnvwmmmwvnn", ".nvwmmmwvn.",
      "nnvwmmmwvnn", ".nvwwwwwvn.", "nnvvvvvvvnn", ".nnnnnnnnn.", "..n.n.n.n..",
    ],
  },
  {
    // WakilAI: scales.
    ground: ["#4100cf", "#6a35e0"],
    icon: [
      ".....c.....", ".wwwwwwwww.", ".w...w...w.", "w.w..w..w.w", "w.w..w..w.w", "mmm..w..mmm",
      "mmm..w..mmm", ".....w.....", ".....w.....", "...wwwww...", "..wwwwwww..",
    ],
  },
  {
    // KumushAI: a microphone.
    ground: ["#ff04d5", "#ff5be4"],
    icon: [
      "....www....", "...wwwww...", "...wcwcw...", "...wwwww...", ".n.wcwcw.n.", ".n.wwwww.n.",
      ".n..www..n.", "..n.....n..", "...nnnnn...", ".....n.....", "...nnnnn...",
    ],
  },
  {
    // Scaleworks: database discs.
    ground: ["#dcebf2", "#c3d9e4"],
    icon: [
      "..nnnnnnn..", ".ncccccccn.", ".nnnnnnnnn.", ".nwwwwwwwn.", ".nnnnnnnnn.", ".nmmmmmmmn.",
      ".nnnnnnnnn.", ".nwwwwwwwn.", ".nnnnnnnnn.", ".nvvvvvvvn.", "..nnnnnnn..",
    ],
  },
  {
    // Academy Platform: a terminal.
    ground: ["#0a3350", "#114768"],
    icon: [
      "wwwwwwwwwww", "wmmwwwwwwww", "wwwwwwwwwww", "wnnnnnnnnnw", "wncnnnnnnnw", "wnncnnnnnnw",
      "wnnncnnnnnw", "wnncnnnnnnw", "wncnnmmmnnw", "wnnnnnnnnnw", "wwwwwwwwwww",
    ],
  },
];

export function ProjectArt({ index, className }: { index: number; className?: string }) {
  const { ground, icon } = ART[index];
  const cols = 16;
  const rows = 10;
  return (
    <div className={className} style={{ background: ground[0] }}>
      <svg viewBox={`0 0 ${cols} ${rows}`} preserveAspectRatio="xMidYMid slice" shapeRendering="crispEdges" aria-hidden="true">
        {Array.from({ length: cols * rows }, (_, i) =>
          // A fixed scatter, so server and browser draw the same tiles.
          (i * 73 + index * 31 + ((i * i) % 17) * 11) % 5 < 2 ? (
            <rect key={i} x={i % cols} y={Math.floor(i / cols)} width="1" height="1" fill={ground[1]} />
          ) : null,
        )}
      </svg>
      <Pixels rows={icon} />
    </div>
  );
}

const FONT: Record<string, string[]> = {
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
  O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  Y: ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
  I: ["###", ".#.", ".#.", ".#.", ".#.", ".#.", "###"],
  L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
  J: ["..###", "...#.", "...#.", "...#.", "...#.", "#..#.", ".##.."],
  N: ["#...#", "##..#", "#.#.#", "#.#.#", "#..##", "#...#", "#...#"],
};

export const NAME = Array.from({ length: 7 }, (_, y) => [..."KOYILJON"].map((ch) => FONT[ch][y]).join("."));
