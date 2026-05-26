import { useState } from 'react';
import hechoEnMexicoLogo from '../assets/logosNativos/hechoEnMexicoRed.jpg';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const plataformaLinks = [
    { label: 'Dashboard Principal', href: '#dashboard' },
    { label: 'Píldoras IA', href: '#pildoras-ia' },
    { label: 'Academia MAYiA', href: '#academia' },
    { label: 'Networking Hub', href: '#networking' },
    { label: 'Hackatón Marketplace', href: '#hackaton' },
  ];

  const solucionesLinks = [
    { label: 'México es MAYiA', href: '#analiticos' },
    { label: 'Empleados Digitales', href: '#empleados-digitales' },
    { label: 'Ciberseguridad IA', href: '#ciberseguridad' },
    { label: 'IA Empresarial', href: '#ia-empresarial' },
    { label: 'IA por Sectores', href: '#ia-sectores' },
  ];

  const comunidadLinks = [
    { label: 'Embajadores MAYiA', href: '#embajadores' },
    { label: 'Partners y Alianzas', href: '#partners' },
    { label: 'Organigrama', href: '#organigrama' },
    { label: 'Noticias IA', href: '#noticias' },
  ];

  const legalesLinks = [
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de Cookies', href: '#' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full text-gray-700 pt-16 pb-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)', borderTop: '1px solid #d1fae5' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a4d95510_1px,transparent_1px),linear-gradient(to_bottom,#a4d95510_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Plataforma */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4d7c0f' }}>Plataforma</h3>
            <ul className="space-y-2.5">
              {plataformaLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} onMouseEnter={() => setHoveredLink(link.label)} onMouseLeave={() => setHoveredLink(null)} className="text-gray-500 hover:text-lime-700 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className={`w-1.5 h-1.5 rounded-full bg-lime-300 group-hover:bg-lime-600 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluciones IA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4d7c0f' }}>Soluciones IA</h3>
            <ul className="space-y-2.5">
              {solucionesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} onMouseEnter={() => setHoveredLink(link.label)} onMouseLeave={() => setHoveredLink(null)} className="text-gray-500 hover:text-lime-700 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className={`w-1.5 h-1.5 rounded-full bg-lime-300 group-hover:bg-lime-600 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidad */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4d7c0f' }}>Comunidad</h3>
            <ul className="space-y-2.5">
              {comunidadLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} onMouseEnter={() => setHoveredLink(link.label)} onMouseLeave={() => setHoveredLink(null)} className="text-gray-500 hover:text-lime-700 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className={`w-1.5 h-1.5 rounded-full bg-lime-300 group-hover:bg-lime-600 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legales */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#4d7c0f' }}>Legal</h3>
            <ul className="space-y-2.5">
              {legalesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onMouseEnter={() => setHoveredLink(link.label)} onMouseLeave={() => setHoveredLink(null)} className="text-gray-500 hover:text-lime-700 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className={`w-1.5 h-1.5 rounded-full bg-lime-300 group-hover:bg-lime-600 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-lime-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src={hechoEnMexicoLogo}
                alt="Hecho en México" 
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © 2026 <span className="font-bold" style={{ color: '#4d7c0f' }}>MAYiA</span>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
