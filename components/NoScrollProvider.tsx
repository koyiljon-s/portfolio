'use client';

import { useEffect } from 'react';

export default function NoScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return <>{children}</>;
}
