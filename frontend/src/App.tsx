import { useState, useEffect, lazy, Suspense } from 'react';
import HeaderBanner from './components/headerBanner';
import AcademiaBanner from './components/AcademiaBanner';
import SeoHub from './components/SeoHub';

import { ResponsiveLayout } from './components/ResponsiveLayout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard as DashboardEnterprise } from './components/Dashboard';
import { brandingConfig } from './config/branding';
import './responsive.css';

// Componentes críticos (carga estática)
import MusculosMAYiA from './components/musculosMayia';
import CertificacionesMarquee from './components/CertificacionesMarquee';
import NoticiasTicker from './components/NoticiasTicker';
import EnterpriseDashboard from './components/EnterpriseDashboard';

// Componentes pesados (carga perezosa)
const Analiticos = lazy(() => import('./components/departamentos/Analiticos').then(m => ({ default: m.Analiticos })));
const PartnersSection = lazy(() => import('./components/PartnersSection'));
const EcosistemaMayia = lazy(() => import('./components/EcosistemaMayia'));
const IAEmpresarial = lazy(() => import('./components/IAEmpresarial'));
const EmpleadosDigitales = lazy(() => import('./components/EmpleadosDigitales'));
const PildorasIA = lazy(() => import('./components/PildorasIA'));
const CiberseguridadIA = lazy(() => import('./components/CiberseguridadIA'));
const AcademiaIA = lazy(() => import('./components/AcademiaIA'));
const BrandFooter = lazy(() => import('./components/brandFooter'));
const Footer = lazy(() => import('./components/piepagina'));
const EmbajadoresMayia = lazy(() => import('./components/EmbajadoresMayia'));
const HackatonMarketplace = lazy(() => import('./components/HackatonMarketplace'));
const TermometroIAMexico = lazy(() => import('./components/TermometroIAMexico'));
const NetworkingHub = lazy(() => import('./components/NetworkingHub'));
const Blog = lazy(() => import('./components/Blog'));
const SalaPrensa = lazy(() => import('./components/SalaPrensa'));
const Agente33 = lazy(() => import('./components/Agente33'));
const Lumel = lazy(() => import('./components/Lumel'));

// Fallback de carga premium
const LoadingSection = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0A14' }}>
    <div className="loading-dots" style={{ display: 'flex', gap: '8px' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A4D955', animation: 'pulse 1s infinite' }}></div>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A4D955', animation: 'pulse 1s infinite 0.2s' }}></div>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A4D955', animation: 'pulse 1s infinite 0.4s' }}></div>
    </div>
    <style>{`
      @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.5); opacity: 1; } }
    `}</style>
  </div>
);

/* ── IDs de sección para scroll-spy ── */
const SECTION_IDS = [
  'dashboard', 'enterprise-dashboard', 'analiticos', 'noticias', 'ecosistema', 'partners',
  'ia-empresarial', 'termometro-ia', 'hackaton',
  'empleados-digitales', 'agente-33', 'lumel', 'pildoras-ia', 'ciberseguridad',
  'embajadores', 'academia', 'networking', 'blog', 'sala-prensa',
];

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);
  const { colores } = brandingConfig;

  /* ── Detectar mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Scroll-spy ── */
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const scrollRoot = isMobile ? null : document.getElementById('main-scroll-container');
      
      if (!isMobile && !scrollRoot) {
        return false;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find(e => e.isIntersecting);
          if (visible) {
            setActiveSection(visible.target.id);
          }
        },
        {
          root: scrollRoot,
          threshold: 0,
          rootMargin: '-15% 0px -80% 0px',
        }
      );

      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });

      return true;
    };

    const timerId = setInterval(() => {
      if (setupObserver()) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
      observer?.disconnect();
    };
  }, [isMobile]);

  /* ── Navegación ── */
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (!el) return;

    if (isMobile) {
      const topbarHeight = 56;
      const y = el.getBoundingClientRect().top + window.scrollY - topbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      const container = document.getElementById('main-scroll-container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const y = elRect.top - containerRect.top + container.scrollTop;
        container.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const getTitulo = () => {
    const titulos: Record<string, string> = {
      dashboard: 'Dashboard',
      'enterprise-dashboard': 'Centro de Control',
      analiticos: 'México es MAYiA',
      noticias: 'Noticias IA',
      ecosistema: 'Ecosistema',
      partners: 'Partners',
      'ia-empresarial': 'I.A. Empresarial',
      'termometro-ia': 'Termómetro IA',
      hackaton: 'Hackaton Intel',
      'empleados-digitales': 'Empleados Digitales',
      'pildoras-ia': 'Píldoras IA',
      ciberseguridad: 'Ciberseguridad',
      embajadores: 'Embajadores',
      academia: 'Academia MAYiA',
      networking: 'Networking Hub',
      blog: 'Blog',
      'sala-prensa': 'Sala de Prensa',
      'agente-33': 'Agente 33',
      lumel: 'Lumel',
    };
    return titulos[activeSection] || 'Dashboard';
  };

  /* ── Contenido principal (reorganizado) ── */
  const pageContent = (
    <Suspense fallback={<LoadingSection />}>
      <div style={{ position: 'relative', backgroundColor: colores.fondoPrincipal }}>
        {/* 1. Dashboard welcome (Oculto para prueba de versión compacta) */}
        {/* <div id="dashboard"><DashboardEnterprise onSectionChange={handleNavClick} /></div> */}
        
        {/* 2. Enterprise Dashboard interactivo (Ahora versión compacta y principal) */}
        <div id="dashboard">
          <EnterpriseDashboard />
        </div>
        
        {/* 3. Músculos MAYIA (ahora en gris enterprise) */}
        <MusculosMAYiA />
        
        {/* 4. Analíticos */}
        <div id="analiticos" style={{ background: '#0A0A14' }}><Analiticos /></div>
        
        {/* 5. Certificaciones marquee */}
        <CertificacionesMarquee />
        
        {/* 6. Noticias (con noticias reales indexadas) */}
        <div id="noticias"><NoticiasTicker /></div>
        
        {/* 6.5 Blog y Sala de Prensa */}
        <div id="blog"><Blog /></div>
        <div id="sala-prensa"><SalaPrensa /></div>
        
        {/* 7. Ecosistema MAYIA (partners visuales) */}
        <div id="ecosistema"><EcosistemaMayia /></div>
        
        {/* 8. Partners técnicos */}
        <div id="partners"><PartnersSection /></div>
        
        {/* 9. IA Empresarial */}
        <div id="ia-empresarial"><IAEmpresarial /></div>
        
        {/* 10. Termómetro IA */}
        <div id="termometro-ia"><TermometroIAMexico /></div>
        
        {/* 11. Empleados Digitales */}
        <div id="empleados-digitales"><EmpleadosDigitales /></div>
        
        {/* 11.5 Agentes Especializados */}
        <div id="agente-33"><Agente33 /></div>
        <div id="lumel"><Lumel /></div>
        
        {/* 12. Píldoras IA */}
        <div id="pildoras-ia"><PildorasIA /></div>
        
        {/* 13. Ciberseguridad */}
        <div id="ciberseguridad"><CiberseguridadIA /></div>
        
        {/* 14. Embajadores */}
        <div id="embajadores"><EmbajadoresMayia /></div>
        
        {/* 15. Academia */}
        <div id="academia"><AcademiaIA /></div>
        
        {/* 16. Networking */}
        <div id="networking"><NetworkingHub /></div>
        
        {/* 17. Marketplace (al final del scroll) */}
        <div id="hackaton"><HackatonMarketplace /></div>
        
        {/* 18. Footer */}
        <BrandFooter />
        <Footer />
      </div>
    </Suspense>
  );

  return (
    <div style={{ 
      background: '#0A0A14', 
      minHeight: '100vh',
      ...(isMobile ? {} : { height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' })
    }}>
      {/* AcademiaBanner — siempre visible arriba */}
      {!isMobile && (
        <div style={{ flexShrink: 0, position: 'relative', zIndex: 100 }}>
          {/* HeaderBanner only, AcademiaBanner moved to right sidebar */}
          <HeaderBanner />
        </div>
      )}

      {/* ── DESKTOP: layout panel con sidebar fijo + right sidebar ── */}
      {!isMobile && (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <ResponsiveLayout
            activeSection={activeSection}
            onSectionChange={handleNavClick}
            header={<Header title={getTitulo()} />}
            sidebar={<Sidebar activeSection={activeSection} onSectionChange={handleNavClick} />}
            sidebarR={<SeoHub activeSection={activeSection} onSectionChange={handleNavClick} />}
          >
            {pageContent}
          </ResponsiveLayout>
        </div>
      )}

      {/* ── MOBILE: scroll libre del body ── */}
      {isMobile && (
        <ResponsiveLayout
          activeSection={activeSection}
          onSectionChange={handleNavClick}
          header={<Header title={getTitulo()} />}
          sidebar={<Sidebar activeSection={activeSection} onSectionChange={handleNavClick} />}
        >
          {pageContent}
        </ResponsiveLayout>
      )}
    </div>
  );
}

export default App;