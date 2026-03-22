'use client';

import { useEffect, useRef } from 'react';
import { useThemeMode } from './ThemeProvider';

interface VantaInstance {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA?: {
      CLOUDS?: (options: Record<string, unknown>) => VantaInstance;
      CLOUDS2?: (options: Record<string, unknown>) => VantaInstance;
    };
    THREE?: unknown;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<VantaInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    let mounted = true;

    const effectName = mode === 'light' ? 'CLOUDS' : 'CLOUDS2';

    const initVanta = () => {
      if (!mounted || !containerRef.current || !window.VANTA?.[effectName]) return;

      if (vantaRef.current) {
        vantaRef.current.destroy();
      }

      const options: Record<string, unknown> = {
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        speed: 1,
      };

      if (mode === 'light') {
        Object.assign(options, {
          backgroundColor: 0xffffff,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
        });
        } else {
          Object.assign(options, {
            backgroundColor: 0x0,
            skyColor: 0x5ca6ca,
            cloudColor: 0x334d80,
            lightColor: 0xffffff,
            speed: 1,
            texturePath: '/noise.png',
          });
        }

      vantaRef.current = window.VANTA[effectName](options);
    };

    const loadScripts = () => {
      const scriptUrl = mode === 'light'
        ? 'https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.clouds.min.js'
        : 'https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.clouds2.min.js';

      if (window.VANTA?.[effectName]) {
        initVanta();
        return;
      }

      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      threeScript.async = true;
      threeScript.onload = () => loadVantaScript(scriptUrl);
      document.head.appendChild(threeScript);
    };

    const loadVantaScript = (src: string) => {
      if (!mounted) return;
      if (window.VANTA?.[effectName]) {
        initVanta();
        return;
      }
      const vantaScript = document.createElement('script');
      vantaScript.src = src;
      vantaScript.async = true;
      vantaScript.onload = () => {
        if (mounted) initVanta();
      };
      document.head.appendChild(vantaScript);
    };

    loadScripts();

    return () => {
      mounted = false;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [mode]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}
