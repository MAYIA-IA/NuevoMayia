import { useState, useEffect } from 'react';

interface SubNavItem {
  label: string;
  href: string;
}

const subNavItems: SubNavItem[] = [
  { label: 'I.A. Empresarial', href: '#' },
  { label: 'Píldoras I.A Pymes', href: '#' },
  { label: 'Nube Flai IA', href: '#' },
  { label: 'Agentes IA Empleados IA', href: '#' },
  { label: 'IA Sectores', href: '#' },
  { label: 'Fábrica IA edgenet', href: '#' },
  { label: 'Academia Mayia', href: '#' },
  { label: 'Robotics Gaming Quantum', href: '#' },
  { label: 'Ciberseguridad Monitoreo', href: '#' },
  { label: 'Soberanía de datos', href: '#' }
];

export default function SubNavigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedItems = isDesktop 
    ? subNavItems 
    : (showAll ? subNavItems : subNavItems.slice(0, 6));

  return (
    <div className="w-full bg-black py-4 sm:py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {displayedItems.map((item, index) => (
            <button
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm 
                         font-medium transition-all duration-300 rounded-md
                         hover:scale-105 active:scale-95"
              onClick={() => window.location.href = item.href}
            >
              <span className="relative z-10">{item.label}</span>
              
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-lime-400 to-yellow-300 
                           rounded-md transition-all duration-300
                           ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
              
              <div 
                className={`absolute -inset-1 bg-gradient-to-r from-lime-400 to-yellow-300 
                           rounded-md blur-sm transition-all duration-300
                           ${hoveredIndex === index ? 'opacity-40' : 'opacity-0'}`}
              />
            </button>
          ))}
        </div>

        {/* Show More button - solo visible en mobile */}
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