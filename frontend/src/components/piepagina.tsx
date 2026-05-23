import { useState } from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const WA_URL = 'https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0';

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
    { label: 'Contacto Directo', href: WA_URL, external: true },
  ];

  const legalesLinks = [
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de Cookies', href: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', href: 'https://www.linkedin.com/company/mayia-edgenet/' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: 'https://x.com/EdgenetData' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: 'https://www.facebook.com/MAYiaInteligenciaArtificial?locale=es_LA' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z', href: 'https://www.instagram.com/mayia.inteligencia.artificial/' },
    { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z', href: 'https://www.youtube.com/@MAYIAInteligenciaArtificial' },
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
                  <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} onClick={(e) => !link.external && handleScroll(e, link.href)} onMouseEnter={() => setHoveredLink(link.label)} onMouseLeave={() => setHoveredLink(null)} className="text-gray-500 hover:text-lime-700 transition-colors duration-300 text-sm flex items-center gap-2 group">
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
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} onMouseEnter={() => setHoveredSocial(social.name)} onMouseLeave={() => setHoveredSocial(null)} className="group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }} aria-label={social.name}>
                  <svg className="w-5 h-5 transition-colors" style={{ fill: '#4d7c0f' }} viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  {hoveredSocial === social.name && (
                    <div className="absolute -top-10 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      {social.name}
                    </div>
                  )}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © 2026 <span className="font-bold" style={{ color: '#4d7c0f' }}>MAYiA</span>. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">Hecho con <Heart size={12} className="text-red-500 animate-pulse fill-current" /> en México</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;