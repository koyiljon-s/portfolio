type CursorProps = {
  className?: string;
};

/**
 * A terminal-style blinking cursor bar. Sized in em, so it scales with the
 * surrounding text, and drawn in the current text colour. Stays solid (no
 * blinking) for users who prefer reduced motion.
 */
export function Cursor({ className = "" }: CursorProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[0.9em] w-[0.3em] bg-current motion-safe:animate-blink ${className}`}
    />
  );
}

export default Cursor;
