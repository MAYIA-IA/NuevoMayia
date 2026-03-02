import { useState } from 'react';
import mayiaLogo from '../assets/logosNativos/mayiaLogoBlanco.png';

interface NavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'HACKATHON', href: '#' },
  { label: 'STARTUPS', href: '#' },
  { label: 'ESPECIALISTAS', href: '#' },
  { label: 'SALA PRENSA', href: '#' },
  { label: 'Mesa de Servicio', href: '#' }
];

export default function NavigationBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src={mayiaLogo}
              alt="MAYiA Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
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
                onClick={() => window.location.href = item.href}
              >
                <span className="relative z-10">{item.label}</span>
                
                <div 
                  className={`absolute inset-0 bg-lime-400 rounded-lg transition-all duration-300
                             ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                />
                
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-lime-300 to-yellow-300 
                             rounded-lg blur-md transition-all duration-300
                             ${hoveredIndex === index ? 'opacity-60' : 'opacity-0'}`}
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
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
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
                  window.location.href = item.href;
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}