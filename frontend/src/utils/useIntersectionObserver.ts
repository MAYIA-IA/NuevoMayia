import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

type Callback = (isIntersecting: boolean) => void;

const subscribers = new Map<Element, Callback>();

let globalObserver: IntersectionObserver | null = null;

const getGlobalObserver = (): IntersectionObserver => {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = subscribers.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: '100px', // trigger slightly before entering viewport
      }
    );
  }
  return globalObserver;
};

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  callback?: Callback
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersection = (intersecting: boolean) => {
      setIsIntersecting(intersecting);
      if (callback) {
        callback(intersecting);
      }
    };

    subscribers.set(element, handleIntersection);
    const observer = getGlobalObserver();
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      subscribers.delete(element);
      if (subscribers.size === 0 && globalObserver) {
        globalObserver.disconnect();
        globalObserver = null;
      }
    };
  }, [ref, callback]);

  return isIntersecting;
}
