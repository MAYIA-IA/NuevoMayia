import { useState } from 'react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const descubrirLinks = [
    { label: 'Acerca de MAYiA', href: '#' },
    { label: 'Nuestros precios y planes', href: '#' },
    { label: 'Casos de éxito', href: '#' },
    { label: 'Soluciones IA', href: '#' },
    { label: 'Agentes Consultores', href: '#' },
    { label: 'Píldoras IA', href: '#' },
    { label: 'Blog de tecnología', href: '#' },
  ];

  const licenciaLinks = [
    { label: 'Condiciones de licencia', href: '#' },
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de uso aceptable', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Configuración de cookies', href: '#' },
  ];

  const recursosLinks = [
    { label: 'Academia MAYiA', href: '#' },
    { label: 'Centro de recursos', href: '#' },
    { label: 'Documentación técnica', href: '#' },
    { label: 'Webinars y eventos', href: '#' },
    { label: 'Casos de estudio', href: '#' },
  ];

  const nosotrosLinks = [
    { label: 'Quiénes somos', href: '#' },
    { label: 'Nuestro propósito', href: '#' },
    { label: 'Únete al equipo', href: '#' },
    { label: 'Sala de prensa', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', href: '#' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: '#' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z', href: '#' },
    { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z', href: '#' },
  ];

  const certifications = [
    { name: 'FIRST', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 27001', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 27034', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 27017', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 9001', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 37001', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 42001', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'ISO 27018', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'SOC', logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&h=100&fit=crop' },
    { name: 'NVIDIA Partner', logo: 'https://img.icons8.com/color/512/nvidia.png' },
    { name: 'LENOVO', logo: 'https://img.icons8.com/color/512/nvidia.png'}
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-[#0a1f44] to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Certificaciones */}
        <div className="mb-12 pb-12 border-b border-gray-700/50">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-center text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
              Certificaciones y Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-2xl">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">{cert.name}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Descubrir */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
              Descubrir
            </h3>
            <ul className="space-y-2.5">
              {descubrirLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-lime-400 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licencia y términos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Licencia y términos
            </h3>
            <ul className="space-y-2.5">
              {licenciaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-400 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recursos
            </h3>
            <ul className="space-y-2.5">
              {recursosLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-purple-400 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre nosotros */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Sobre nosotros
            </h3>
            <ul className="space-y-2.5">
              {nosotrosLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-all duration-300 ${hoveredLink === link.label ? 'scale-150' : 'scale-100'}`}></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media y Copyright */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="group relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                  {hoveredSocial === social.name && (
                    <div className="absolute -top-10 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      {social.name}
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2026 <span className="font-bold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">MAYiA</span>. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Hecho con <span className="text-red-500">♥</span> en México
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;