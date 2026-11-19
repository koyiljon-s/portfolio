import { IconArrowNarrowRight } from "@tabler/icons-react";

type BracketArrowProps = {
  /** Arrow size. Defaults to 1.25em so it scales with the surrounding text. */
  size?: number | string;
  stroke?: number;
  className?: string;
};

/**
 * Renders a "[->]" glyph: square brackets around a Tabler narrow right arrow.
 *
 * Put the `group` class on the parent link/button to get the hover motion:
 * the arrow nudges forward and the brackets open slightly.
 */
export function BracketArrow({
  size = "1.25em",
  stroke = 1.5,
  className = "",
}: BracketArrowProps) {
  const motion =
    "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center leading-none ${className}`}
    >
      <span
        className={`font-light opacity-50 ${motion} group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5`}
      >
        [
      </span>
      <IconArrowNarrowRight
        size={size}
        stroke={stroke}
        className={`${motion} group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5`}
      />
      <span
        className={`font-light opacity-50 ${motion} group-hover:translate-x-1 group-focus-visible:translate-x-1`}
      >
        ]
      </span>
    </span>
  );
}

export default BracketArrow;
