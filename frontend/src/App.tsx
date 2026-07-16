import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import HeaderBanner from './components/headerBanner';
import SeoHub from './components/SeoHub';

import { ResponsiveLayout } from './components/ResponsiveLayout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { brandingConfig } from './config/branding';
import './responsive.css';

import { useViewport } from './utils/useViewport';

// Componentes críticos (carga estática)
import CertificacionesMarquee from './components/CertificacionesMarquee';
import SocialPopover from './components/SocialPopover';

// Componentes pesados (carga perezosa)
const NoticiasTicker = lazy(() => import('./components/NoticiasTicker'));
const CalendarModal = lazy(() => import('./components/CalendarModal'));

// Componentes pesados (carga perezosa)
const EnterpriseDashboard = lazy(() => import('./components/EnterpriseDashboard'));
const Analiticos = lazy(() => import('./components/departamentos/Analiticos').then(m => ({ default: m.Analiticos })));
const HubsDigitales = lazy(() => import('./components/HubsDigitales'));
const IAEmpresarial = lazy(() => import('./components/IAEmpresarial'));
const IAporSector = lazy(() => import('./components/IAporSector'));
const EmpleadosDigitales = lazy(() => import('./components/EmpleadosDigitales'));
const PildorasIA = lazy(() => import('./components/PildorasIA'));
const CiberseguridadIA = lazy(() => import('./components/CiberseguridadIA'));
const FlaiInfoModal = lazy(() => import('./components/FlaiInfoModal'));
const FabricaIaModal = lazy(() => import('./components/FabricaIaModal'));
const MayiaLakehouseModal = lazy(() => import('./components/MayiaLakehouseModal'));
const SquadsMayiaModal = lazy(() => import('./components/SquadsMayiaModal'));
const AcademiaIA = lazy(() => import('./components/AcademiaIA'));
const Footer = lazy(() => import('./components/piepagina'));
const EmbajadoresMayia = lazy(() => import('./components/EmbajadoresMayia'));
const HackatonMarketplace = lazy(() => import('./components/HackatonMarketplace'));
const TermometroIAMexico = lazy(() => import('./components/TermometroIAMexico'));
const NetworkingHub = lazy(() => import('./components/NetworkingHub'));
const Blog = lazy(() => import('./components/Blog'));
const SalaPrensa = lazy(() => import('./components/SalaPrensa'));
const AsistenteIAChat = lazy(() => import('./components/modules/AsistenteIAChat').then(m => ({ default: m.AsistenteIAChat })));
const QuienesSomosModal = lazy(() => import('./components/QuienesSomosModal'));
const DiagnosticoEmpresaModal = lazy(() => import('./components/DiagnosticoEmpresaModal'));
const OrigenMarcaModal = lazy(() => import('./components/OrigenMarcaModal'));

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

// Contenedor inteligente de carga perezosa para optimizar la carga de toda la página
function LazySection({ children, height = '300px', ...props }: any) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px' } // Renderiza la sección cuando está a 300px o menos
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: shouldRender ? 'auto' : height }} {...props}>
      {shouldRender ? (
        <Suspense fallback={<LoadingSection />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

/* ── IDs de sección para scroll-spy ── */
const SECTION_IDS = [
  'dashboard', 'enterprise-dashboard', 'analiticos', 'noticias', 'hubs-digitales',
  'ia-empresarial', 'ia-por-sector', 'termometro-ia', 'hackaton',
  'empleados-digitales', 'pildoras-ia', 'ciberseguridad',
  'embajadores', 'academia', 'networking', 'blog', 'sala-prensa',
];

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeSocialModal, setActiveSocialModal] = useState<string | null>(null);
  const [socialModalYPos, setSocialModalYPos] = useState(0);
  const [preselectedState, setPreselectedState] = useState<string | null>(null);
  const [globalCalendarPos, setGlobalCalendarPos] = useState<{x: number, y: number} | null>(null);
  const { isMobile } = useViewport();
  const [hideBanner, setHideBanner] = useState(false);
  const { colores } = brandingConfig;

  useEffect(() => {
    (window as any).openCalendly = (rect: { x: number, y: number }) => {
      setGlobalCalendarPos(rect);
    };
    return () => {
      (window as any).openCalendly = undefined;
    };
  }, []);

  /* ── Ocultar banner en scroll (Throttled) ── */
  useEffect(() => {
    let lastTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastTime < 100) return;
      lastTime = now;
      const container = document.getElementById('main-scroll-container');
      if (container) {
        const shouldHide = container.scrollTop > 20;
        setHideBanner(prev => {
          if (prev !== shouldHide) return shouldHide;
          return prev;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  /* ── Scroll-spy (Reactive MutationObserver) ── */
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

    if (setupObserver()) {
      return () => observer?.disconnect();
    }

    const mutationObserver = new MutationObserver(() => {
      if (setupObserver()) {
        mutationObserver.disconnect();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, [isMobile]);

  /* ── Navegación ── */
  const handleNavClick = (section: string) => {
    if (section === 'polos-desarrollo') {
      handleOpenSocialModal('analiticos', window.innerHeight / 2);
      return;
    }
    if (section === 'fabrica-ia') {
      handleOpenSocialModal('fabrica-ia', window.innerHeight / 2);
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

  const handleOpenSocialModal = (id: string, yPos: number, stateId?: string) => {
    setSocialModalYPos(yPos);
    setActiveSocialModal(id);
    setPreselectedState(stateId || null);
  };

  const getTitulo = () => {
    const titulos: Record<string, string> = {
      dashboard: 'Dashboard',
      'enterprise-dashboard': 'Centro de Control',
      analiticos: 'Motores Económicos de México',
      noticias: 'Noticias IA',
      'hubs-digitales': 'Hubs Digitales',
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
            onOpenMap={(stateId) => handleOpenSocialModal('analiticos', window.innerHeight / 2, stateId)} 
            onOpenFlaiInfo={() => handleOpenSocialModal('flai-info', window.innerHeight / 2)}
            onOpenFabricaInfo={() => handleOpenSocialModal('fabrica-ia', window.innerHeight / 2)}
            onOpenDiagnostico={() => handleOpenSocialModal('diagnostico-empresa', window.innerHeight / 2)}
            onOpenLakehouseInfo={() => handleOpenSocialModal('lakehouse-info', window.innerHeight / 2)}
            onOpenSquadsInfo={() => handleOpenSocialModal('squads-info', window.innerHeight / 2)}
          />
        </div>
        
        {/* 5. Certificaciones marquee */}
        <CertificacionesMarquee />
        
        {/* Las secciones sociales (Noticias, Blog, Sala Prensa, Embajadores, Networking) 
            fueron extraídas al SocialPopover */}
        
        {/* 7. Hubs Digitales */}
        <LazySection id="hubs-digitales" height="400px"><HubsDigitales /></LazySection>
        
        {/* 9. IA Empresarial */}
        <LazySection id="ia-empresarial" height="400px"><IAEmpresarial /></LazySection>
        
        {/* 9.5 IA por Sector */}
        <LazySection id="ia-por-sector" height="400px"><IAporSector /></LazySection>
        
        {/* 11. Empleados Digitales */}
        <LazySection id="empleados-digitales" height="400px"><EmpleadosDigitales /></LazySection>
        
        {/* 11.5 Marketplace de Soluciones */}
        <LazySection id="hackaton" height="400px"><HackatonMarketplace /></LazySection>

        {/* 12. Píldoras IA */}
        <LazySection id="pildoras-ia" height="400px"><PildorasIA /></LazySection>
        
        {/* 13. Ciberseguridad */}
        <LazySection id="ciberseguridad" height="400px"><CiberseguridadIA /></LazySection>
        
        {/* 15. Academia */}
        <LazySection id="academia" height="400px"><AcademiaIA /></LazySection>
        
        {/* 18. Footer */}
        <LazySection height="200px"><Footer /></LazySection>
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
        <div style={{ 
          flexShrink: 0, 
          position: 'relative', 
          zIndex: 100,
          maxHeight: hideBanner ? '0px' : '180px',
          opacity: hideBanner ? 0 : 1,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out',
        }}>
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
          sidebarR={<SeoHub activeSection={activeSection} onSectionChange={handleNavClick} onOpenSocialModal={handleOpenSocialModal} />}
          onOpenChat={() => handleOpenSocialModal('chat-ia', window.innerHeight / 2)}
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
          {activeSocialModal === 'analiticos' && <Analiticos initialSelectedEstado={preselectedState} />}
          {activeSocialModal === 'flai-info' && <FlaiInfoModal />}
          {activeSocialModal === 'fabrica-ia' && <FabricaIaModal />}
          {activeSocialModal === 'lakehouse-info' && <MayiaLakehouseModal />}
          {activeSocialModal === 'squads-info' && <SquadsMayiaModal />}
          {activeSocialModal === 'chat-ia' && <div style={{ height: '500px', display: 'flex', flexDirection: 'column' }}><AsistenteIAChat /></div>}
          {activeSocialModal === 'quienes' && <QuienesSomosModal />}
          {activeSocialModal === 'diagnostico-empresa' && <DiagnosticoEmpresaModal onClose={() => setActiveSocialModal(null)} />}
          {activeSocialModal === 'origen-marca' && <OrigenMarcaModal />}
        </Suspense>
      </SocialPopover>

      {globalCalendarPos && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99999,
          backgroundColor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(2px)'
        }} onClick={() => setGlobalCalendarPos(null)}>
          <div style={{
            position: 'absolute',
            left: window.innerWidth < 600 ? '50%' : `${Math.min(globalCalendarPos.x, window.innerWidth - 460)}px`,
            top: window.innerWidth < 600 ? '50%' : `${Math.max(20, Math.min(globalCalendarPos.y, window.innerHeight - 640))}px`,
            transform: window.innerWidth < 600 ? 'translate(-50%, -50%)' : 'none',
          }} onClick={e => e.stopPropagation()}>
            <Suspense fallback={<LoadingSection />}>
              <CalendarModal onClose={() => setGlobalCalendarPos(null)} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;