import { useState, useEffect } from 'react';

let widthGlobal = typeof window !== 'undefined' ? window.innerWidth : 1200;
let isMobileGlobal = widthGlobal < 1024;
const listeners = new Set<() => void>();

let resizeRegistered = false;

const handleResize = () => {
  if (typeof window === 'undefined') return;
  widthGlobal = window.innerWidth;
  isMobileGlobal = widthGlobal < 1024;
  listeners.forEach(listener => listener());
};

export function useViewport() {
  const [viewport, setViewport] = useState({
    isMobile: isMobileGlobal,
    width: widthGlobal,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!resizeRegistered) {
      window.addEventListener('resize', handleResize);
      resizeRegistered = true;
    }

    const listener = () => {
      setViewport({
        isMobile: isMobileGlobal,
        width: widthGlobal,
      });
    };

    listeners.add(listener);
    // Sync state
    listener();

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0 && resizeRegistered) {
        window.removeEventListener('resize', handleResize);
        resizeRegistered = false;
      }
    };
  }, []);

  return viewport;
}
