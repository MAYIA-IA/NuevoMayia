import { useState, useEffect, lazy, Suspense } from 'react';
import HeaderBanner from './components/headerBanner';
import SeoHub from './components/SeoHub';

import { ResponsiveLayout } from './components/ResponsiveLayout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { brandingConfig } from './config/branding';
import './responsive.css';

// Componentes críticos (carga estática)
import CertificacionesMarquee from './components/CertificacionesMarquee';
import NoticiasTicker from './components/NoticiasTicker';
import EnterpriseDashboard from './components/EnterpriseDashboard';
import SocialPopover from './components/SocialPopover';

// Componentes pesados (carga perezosa)
const Analiticos = lazy(() => import('./components/departamentos/Analiticos').then(m => ({ default: m.Analiticos })));
const PartnersSection = lazy(() => import('./components/PartnersSection'));
const EcosistemaMayia = lazy(() => import('./components/EcosistemaMayia'));
const IAEmpresarial = lazy(() => import('./components/IAEmpresarial'));
const IAporSector = lazy(() => import('./components/IAporSector'));
const EmpleadosDigitales = lazy(() => import('./components/EmpleadosDigitales'));
const PildorasIA = lazy(() => import('./components/PildorasIA'));
const CiberseguridadIA = lazy(() => import('./components/CiberseguridadIA'));
const FlaiInfoModal = lazy(() => import('./components/FlaiInfoModal'));
const AcademiaIA = lazy(() => import('./components/AcademiaIA'));
const Footer = lazy(() => import('./components/piepagina'));
const EmbajadoresMayia = lazy(() => import('./components/EmbajadoresMayia'));
const HackatonMarketplace = lazy(() => import('./components/HackatonMarketplace'));
const TermometroIAMexico = lazy(() => import('./components/TermometroIAMexico'));
const NetworkingHub = lazy(() => import('./components/NetworkingHub'));
const Blog = lazy(() => import('./components/Blog'));
const SalaPrensa = lazy(() => import('./components/SalaPrensa'));

// Fallback de carga premium
const LoadingSection = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
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
  'ia-empresarial', 'ia-por-sector', 'termometro-ia', 'hackaton',
  'empleados-digitales', 'pildoras-ia', 'ciberseguridad',
  'embajadores', 'academia', 'networking', 'blog', 'sala-prensa',
];

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeSocialModal, setActiveSocialModal] = useState<string | null>(null);
  const [socialModalYPos, setSocialModalYPos] = useState(0);
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
    if (section === 'polos-desarrollo') {
      handleOpenSocialModal('analiticos', window.innerHeight / 2);
      return;
    }
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

  const handleOpenSocialModal = (id: string, yPos: number) => {
    setSocialModalYPos(yPos);
    setActiveSocialModal(id);
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
      'ia-por-sector': 'IA por Sector',
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
        <div id="dashboard" className="scroll-mt-20">
          <EnterpriseDashboard 
            onOpenMap={() => handleOpenSocialModal('analiticos', window.innerHeight / 2)} 
            onOpenFlaiInfo={() => handleOpenSocialModal('flai-info', window.innerHeight / 2)}
          />
        </div>
        
        {/* 5. Certificaciones marquee */}
        <CertificacionesMarquee />
        
        {/* Las secciones sociales (Noticias, Blog, Sala Prensa, Embajadores, Networking) 
            fueron extraídas al SocialPopover */}
        
        {/* 7. Ecosistema MAYIA (partners visuales) */}
        <div id="ecosistema"><EcosistemaMayia /></div>
        
        {/* 8. Partners técnicos */}
        <div id="partners"><PartnersSection /></div>
        
        {/* 9. IA Empresarial */}
        <div id="ia-empresarial"><IAEmpresarial /></div>
        
        {/* 9.5 IA por Sector */}
        <div id="ia-por-sector"><IAporSector /></div>
        
        {/* 11. Empleados Digitales */}
        <div id="empleados-digitales"><EmpleadosDigitales /></div>
        
        {/* 11.5 Marketplace de Soluciones */}
        <div id="hackaton"><HackatonMarketplace /></div>

        {/* 12. Píldoras IA */}
        <div id="pildoras-ia"><PildorasIA /></div>
        
        {/* 13. Ciberseguridad */}
        <div id="ciberseguridad"><CiberseguridadIA /></div>
        
        {/* 15. Academia */}
        <div id="academia"><AcademiaIA /></div>
        
        {/* 18. Footer */}
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
            sidebarR={<SeoHub activeSection={activeSection} onSectionChange={handleNavClick} onOpenSocialModal={handleOpenSocialModal} />}
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

      {/* ── SOCIAL POPOVER MODAL ── */}
      <SocialPopover 
        isOpen={activeSocialModal !== null} 
        onClose={() => setActiveSocialModal(null)} 
        yPos={socialModalYPos}
      >
        <Suspense fallback={<LoadingSection />}>
          {activeSocialModal === 'noticias-rt' && <NoticiasTicker />}
          {activeSocialModal === 'blog' && <Blog />}
          {activeSocialModal === 'sala-prensa' && <SalaPrensa />}
          {activeSocialModal === 'embajadores' && <EmbajadoresMayia />}
          {activeSocialModal === 'red-ia' && <NetworkingHub />}
          {activeSocialModal === 'temp-ia' && <TermometroIAMexico />}
          {activeSocialModal === 'analiticos' && <Analiticos />}
          {activeSocialModal === 'flai-info' && <FlaiInfoModal />}
        </Suspense>
      </SocialPopover>
    </div>
  );
}

export default App;