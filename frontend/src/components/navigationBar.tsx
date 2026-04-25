import { useState, useEffect } from 'react';
import mayiaLogo from '../assets/logosNativos/mayiaLogoBlanco.png';

interface NavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'Cuartel de IA Ciudadana', href: 'https://app.learnbrite.com/scenario_3.0/?spaceId=spc970276cba97879fd8849d8&worldId=wrl431b8a8cb8f6e8b011a286' },
  { label: 'Oficinas Virtuales en Vivo', href: 'https://app.learnbrite.com/scenario_3.0/?spaceId=spc970276cba97879fd8849d8&worldId=wrl431b8a8cb8f6e8b011a286' },
  { label: 'Centro de Convenciones Digital', href: 'https://app.learnbrite.com/scenario_3.0/?spaceId=spc970276cba97879fd8849d8&worldId=wrl431b8a8cb8f6e8b011a286' },
  { label: 'Sala de Prensa con IA', href: 'https://app.learnbrite.com/scenario_3.0/?spaceId=spc970276cba97879fd8849d8&worldId=wrl431b8a8cb8f6e8b011a286' },
  { label: 'Academia de IA', href: 'https://app.learnbrite.com/scenario_3.0/?spaceId=spc970276cba97879fd8849d8&worldId=wrl431b8a8cb8f6e8b011a286' }
];

export default function NavigationBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="w-full z-50 transition-all duration-500"
      style={{
        position: 'sticky',
        top: 0,
        background: scrolled
          ? 'rgba(10, 10, 20, 0.96)'
          : '#0A0A14',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(164, 217, 85, 0.15)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: scrolled
          ? '0 4px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(164,217,85,0.08)'
          : 'none',
      }}
    >
      {/* Animated top border line */}
      {scrolled && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent 0%, #A4D955 30%, #7FD1FF 60%, #A4D955 80%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'navBorderSlide 3s linear infinite',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src={mayiaLogo}
              alt="MAYiA Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300"
              style={{
                filter: scrolled
                  ? 'drop-shadow(0 0 12px rgba(164,217,85,0.35))'
                  : 'none',
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end">
            {mainNavItems.map((item, index) => (
              <button
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 xl:px-5 py-2.5 font-semibold text-white text-xs xl:text-sm
                           tracking-wide transition-all duration-300 uppercase
                           hover:scale-105 active:scale-95"
                onClick={() => window.open(item.href, '_blank')}
              >
                <span className="relative z-10">{item.label}</span>

                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #A4D955, #7FD1FF)' }}
                />

                <div
                  className={`absolute -inset-1 rounded-lg blur-md transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-50' : 'opacity-0'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #A4D955, #7FD1FF)' }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            {mainNavItems.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-4 py-3 text-white font-semibold text-sm
                           bg-gray-800 hover:bg-lime-400 hover:text-gray-900 rounded-lg
                           transition-all duration-300 uppercase"
                onClick={() => {
                  window.open(item.href, '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes navBorderSlide {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </nav>
  );
}