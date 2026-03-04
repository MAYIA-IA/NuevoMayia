import { useState, useEffect } from 'react';

interface SubNavItem {
  label: string;
  href: string;
}

// Orden según App.tsx de arriba hacia abajo
const subNavItems: SubNavItem[] = [
  { label: 'I.A. Empresarial',         href: '#ia-empresarial' },
  { label: 'Agentes IA Empleados IA',  href: '#agentes-ia' },
  { label: 'IA Sectores',              href: '#ia-sectores' },
  { label: 'Empleados Digitales',      href: '#empleados-digitales' },
  { label: 'Píldoras I.A Pymes',       href: '#pildoras-ia' },
  { label: 'Ciberseguridad Monitoreo', href: '#ciberseguridad' },
  { label: 'Academia Mayia',           href: '#academia' },
  { label: 'Nube Flai IA',             href: '#flai' },
  { label: 'Fábrica IA edgenet',       href: '#spaces' },
  { label: 'Robotics Gaming Quantum',  href: '#robotics' },
  { label: 'Soberanía de datos',       href: '#soberania' },
];

export default function SubNavigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeHref, setActiveHref]     = useState<string>('');
  const [showAll, setShowAll]           = useState(false);
  const [isDesktop, setIsDesktop]       = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Highlight the active section as the user scrolls
  useEffect(() => {
    const sectionIds = subNavItems.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHref(href);
    }
  };

  const displayedItems = isDesktop
    ? subNavItems
    : showAll ? subNavItems : subNavItems.slice(0, 6);

  return (
    <div className="w-full bg-black py-4 sm:py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {displayedItems.map((item, index) => {
            const isActive = activeHref === item.href;
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
                <span className="relative z-10" style={{ color: isActive ? '#111' : undefined }}>
                  {item.label}
                </span>

                {/* Hover highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-lime-400 to-yellow-300
                             rounded-md transition-all duration-300
                             ${hoveredIndex === index || isActive ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-lime-400 to-yellow-300
                             rounded-md blur-sm transition-all duration-300
                             ${hoveredIndex === index || isActive ? 'opacity-40' : 'opacity-0'}`}
                />

                {/* Active underline dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Show More — mobile only */}
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