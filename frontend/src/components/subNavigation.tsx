import { useState, useEffect, useRef } from 'react';

interface SubNavItem {
  label: string;
  href: string;
}

const subNavItems: SubNavItem[] = [
  { label: 'I.A. Empresarial',         href: '#ia-empresarial' },
  { label: 'Agentes IA',               href: '#agentes-ia' },
  { label: 'IA Sectores',              href: '#ia-sectores' },
  { label: 'Empleados Digitales',      href: '#empleados-digitales' },
  { label: 'Píldoras IA',              href: '#pildoras-ia' },
  { label: 'Ciberseguridad',           href: '#ciberseguridad' },
  { label: 'Academia MAYiA',           href: '#academia' },
  { label: 'Nube Flai IA',             href: '#flai' },
  { label: 'Fábrica Edgenet',          href: '#spaces' },
  { label: 'Robotics & Quantum',       href: '#robotics' },
  { label: 'Soberanía de datos',       href: '#soberania' },
];

export default function SubNavigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeHref, setActiveHref]     = useState<string>('');
  const [visitedHrefs, setVisitedHrefs] = useState<Set<string>>(new Set());
  const [isVertical, setIsVertical]     = useState<boolean>(false);
  const [showAll, setShowAll]           = useState(false);
  const [isDesktop, setIsDesktop]       = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const navRef = useRef<HTMLDivElement>(null);

  // ── Resize ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Trigger horizontal ↔ vertical based on #ia-empresarial position ─────────
  useEffect(() => {
    const trigger = document.getElementById('ia-empresarial');
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastTop = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setIsVertical(pastTop);

        // FIX 3: reset visited & active when user scrolls back above the trigger
        if (!pastTop) {
          setVisitedHrefs(new Set());
          setActiveHref('');
        }
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  // ── Active section tracker ───────────────────────────────────────────────────
  useEffect(() => {
    const sectionIds = subNavItems.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            setActiveHref(href);
            setVisitedHrefs((prev) => new Set(prev).add(href));
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Click handler ────────────────────────────────────────────────────────────
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHref(href);
      setVisitedHrefs((prev) => new Set(prev).add(href));
    }
  };

  const displayedItems = isDesktop
    ? subNavItems
    : showAll ? subNavItems : subNavItems.slice(0, 6);

  // ── VERTICAL SIDEBAR (desktop + mobile) ─────────────────────────────────────
  if (isVertical) {
    return (
      <>
        {/* Layout placeholder so page doesn't jump */}
        <div className="w-full h-0" aria-hidden="true" />

        <nav
          ref={navRef}
          aria-label="Navegación de secciones"
          className="fixed z-40 flex flex-col items-end"
          style={{
            // Desktop: centered vertically on the right edge
            // Mobile: bottom-right corner, smaller
            ...(isDesktop
              ? {
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  paddingRight: '6px',
                  gap: '4px',
                }
              : {
                  right: 0,
                  bottom: '80px',
                  paddingRight: '5px',
                  gap: '3px',
                }),
            animation: 'slideInRight 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both',
          }}
        >
          {/* Pill container with dark bg so dots are always visible */}
          <div
            className="flex flex-col"
            style={{
              background: 'rgba(8, 8, 18, 0.72)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: isDesktop ? '10px 0' : '8px 0',
              gap: 0,
              alignItems: 'center',
              width: isDesktop ? 24 : 18,
            }}
          >
            {subNavItems.map((item, index) => {
              const isActive  = activeHref === item.href;
              const isVisited = visitedHrefs.has(item.href);
              const isHovered = hoveredIndex === index;

              // On mobile hide labels entirely — only show dots
              const showLabel = isDesktop && isHovered;

              return (
                <div key={item.label} className="relative flex flex-col items-center">
                  <button
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={(e) => handleClick(e, item.href)}
                    className="relative flex items-center justify-center focus:outline-none"
                    style={{ width: isDesktop ? 24 : 18, height: isDesktop ? 24 : 18 }}
                    title={item.label}
                  >
                    {/* Label — floats to the left on hover, desktop only */}
                    {isDesktop && (
                      <span
                        className="absolute right-full text-xs font-semibold whitespace-nowrap px-2.5 py-1 rounded-lg select-none pointer-events-none"
                        style={{
                          marginRight: 10,
                          background: isActive
                            ? 'linear-gradient(90deg, #A4D955, #7FD1FF)'
                            : 'rgba(8,8,18,0.92)',
                          color: isActive ? '#0A0A14' : isVisited ? '#A4D955' : '#9ca3af',
                          border: `1px solid ${
                            isActive
                              ? 'transparent'
                              : isVisited
                              ? 'rgba(164,217,85,0.35)'
                              : 'rgba(255,255,255,0.08)'
                          }`,
                          opacity: showLabel ? 1 : 0,
                          transform: showLabel ? 'translateX(0)' : 'translateX(6px)',
                          transition: 'opacity 0.2s ease, transform 0.22s ease',
                          boxShadow: isActive ? '0 2px 12px rgba(164,217,85,0.25)' : undefined,
                        }}
                      >
                        {item.label}
                      </span>
                    )}

                    {/* Dot — always centered */}
                    <div
                      className="rounded-full flex-shrink-0 transition-all duration-300"
                      style={{
                        width: isActive
                          ? (isDesktop ? 12 : 9)
                          : isHovered
                          ? (isDesktop ? 10 : 8)
                          : isVisited
                          ? (isDesktop ? 8 : 6)
                          : (isDesktop ? 6 : 5),
                        height: isActive
                          ? (isDesktop ? 12 : 9)
                          : isHovered
                          ? (isDesktop ? 10 : 8)
                          : isVisited
                          ? (isDesktop ? 8 : 6)
                          : (isDesktop ? 6 : 5),
                        background: isActive
                          ? 'linear-gradient(135deg, #A4D955, #7FD1FF)'
                          : isVisited
                          ? '#A4D955'
                          : isHovered
                          ? '#7FD1FF'
                          : 'rgba(255,255,255,0.25)',
                        boxShadow: isActive
                          ? '0 0 10px rgba(164,217,85,0.9), 0 0 20px rgba(127,209,255,0.4)'
                          : isVisited
                          ? '0 0 5px rgba(164,217,85,0.5)'
                          : isHovered
                          ? '0 0 5px rgba(127,209,255,0.5)'
                          : 'none',
                      }}
                    />
                  </button>

                  {/* Connector line — centered under the dot */}
                  {index < subNavItems.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: isDesktop ? 7 : 5,
                        background: isVisited
                          ? 'linear-gradient(to bottom, rgba(164,217,85,0.6), rgba(164,217,85,0.1))'
                          : 'rgba(255,255,255,0.1)',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <style>{`
          @keyframes slideInRight {
            from { opacity: 0; transform: translateY(-50%) translateX(48px); }
            to   { opacity: 1; transform: translateY(-50%) translateX(0); }
          }
          @media (max-width: 1023px) {
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(40px); }
              to   { opacity: 1; transform: translateX(0); }
            }
          }
        `}</style>
      </>
    );
  }

  // ── HORIZONTAL BAR (original inline) ────────────────────────────────────────
  return (
    <div ref={navRef} className="w-full bg-black py-4 sm:py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {displayedItems.map((item, index) => {
            const isActive  = activeHref === item.href;
            const isVisited = visitedHrefs.has(item.href);

            return (
              <button
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => handleClick(e, item.href)}
                className="relative px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm
                           font-medium transition-all duration-300 rounded-md
                           hover:scale-105 active:scale-95"
              >
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{
                    color: isActive ? '#111' : isVisited ? '#A4D955' : undefined,
                  }}
                >
                  {item.label}
                </span>

                {/* Hover / active background */}
                <div
                  className={`absolute inset-0 rounded-md transition-all duration-300
                    ${hoveredIndex === index || isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'linear-gradient(90deg, #A4D955, #7FD1FF)' }}
                />

                {/* Glow */}
                <div
                  className={`absolute -inset-1 rounded-md blur-sm transition-all duration-300
                    ${hoveredIndex === index || isActive ? 'opacity-35' : 'opacity-0'}`}
                  style={{ background: 'linear-gradient(90deg, #A4D955, #7FD1FF)' }}
                />

                {isVisited && !isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-400 opacity-70" />
                )}
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #A4D955, #7FD1FF)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Ver más — mobile only */}
        {!isDesktop && subNavItems.length > 6 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-lime-400 text-gray-900 font-semibold text-sm rounded-lg
                         hover:bg-lime-500 transition-all duration-300"
            >
              {showAll ? 'Ver menos' : `Ver más (${subNavItems.length - 6})`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}