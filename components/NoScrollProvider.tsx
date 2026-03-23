'use client';

import { useEffect, useRef } from 'react';

export default function NoScrollProvider({ children }: { children: React.ReactNode }) {
  const isApplied = useRef(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

    if (!isMobile) {
      document.body.classList.add('no-scroll');
      isApplied.current = true;
    }

    const handleResize = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window;
      if (!mobile && !isApplied.current) {
        document.body.classList.add('no-scroll');
        isApplied.current = true;
      } else if (mobile && isApplied.current) {
        document.body.classList.remove('no-scroll');
        isApplied.current = false;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (isApplied.current) {
        document.body.classList.remove('no-scroll');
      }
    };
  }, []);

  return <>{children}</>;
}
