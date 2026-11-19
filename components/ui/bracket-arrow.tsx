import { IconArrowNarrowRight } from "@tabler/icons-react";

type BracketArrowProps = {
  /** Icon size in px. Brackets scale with the surrounding font size. */
  size?: number;
  stroke?: number;
  className?: string;
};

/** Renders a "[->]" glyph: square brackets around a Tabler narrow right arrow. */
export function BracketArrow({
  size = 18,
  stroke = 1.5,
  className = "",
}: BracketArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-0.5 leading-none ${className}`}
    >
      <span>[</span>
      <IconArrowNarrowRight size={size} stroke={stroke} />
      <span>]</span>
    </span>
  );
}

export default BracketArrow;
