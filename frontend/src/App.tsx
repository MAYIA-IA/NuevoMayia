import { useState, useEffect, lazy, Suspense } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';

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

// Componentes pesados (carga perezosa)
const Analiticos = lazy(() => import('./components/departamentos/Analiticos').then(m => ({ default: m.Analiticos })));
const PartnersSection = lazy(() => import('./components/PartnersSection'));
const IAEmpresarial = lazy(() => import('./components/IAEmpresarial'));
const IAPorSector = lazy(() => import('./components/IAporSector'));
const EmpleadosDigitales = lazy(() => import('./components/EmpleadosDigitales'));
const PildorasIA = lazy(() => import('./components/PildorasIA'));
const CiberseguridadIA = lazy(() => import('./components/CiberseguridadIA'));
const AcademiaIA = lazy(() => import('./components/AcademiaIA'));
const BrandFooter = lazy(() => import('./components/brandFooter'));
const Footer = lazy(() => import('./components/piepagina'));
const Organigrama = lazy(() => import('./components/Organigrama'));
const EmbajadoresMayia = lazy(() => import('./components/EmbajadoresMayia'));
const HackatonMarketplace = lazy(() => import('./components/HackatonMarketplace'));
const TermometroIAMexico = lazy(() => import('./components/TermometroIAMexico'));
const NetworkingHub = lazy(() => import('./components/NetworkingHub'));

// Fallback de carga premium
const LoadingSection = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fdf1' }}>
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
  'dashboard', 'analiticos', 'noticias', 'partners',
  'ia-empresarial', 'ia-sectores', 'termometro-ia', 'hackaton',
  'empleados-digitales', 'pildoras-ia', 'ciberseguridad',
  'embajadores', 'organigrama', 'academia', 'networking',
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

  /* ── Scroll-spy: funciona tanto en el body (mobile) como en #main-scroll-container (desktop) ── */
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const scrollRoot = isMobile ? null : document.getElementById('main-scroll-container');
      
      // Si estamos en desktop y no encontramos el contenedor, reintentamos en un momento
      if (!isMobile && !scrollRoot) {
        return false;
      }

      observer = new IntersectionObserver(
        (entries) => {
          // Buscamos la sección que esté más visible en la parte superior
          const visible = entries.find(e => e.isIntersecting);
          if (visible) {
            setActiveSection(visible.target.id);
          }
        },
        {
          root: scrollRoot,
          threshold: 0,
          // Detectamos cuando la sección entra en el 20% superior de la pantalla
          rootMargin: '-15% 0px -80% 0px',
        }
      );

      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });

      return true;
    };

    // Intentamos configurar el observador con un pequeño delay para permitir que el DOM se asiente
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

  /* ── Navegación desde sidebar / bottom nav ── */
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (!el) return;

    if (isMobile) {
      // En mobile, el scroll es del body
      const topbarHeight = 56;
      const y = el.getBoundingClientRect().top + window.scrollY - topbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // En desktop, el scroll es del contenedor del panel
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
      dashboard: 'Dashboard', analiticos: 'México es MAYiA',
      noticias: 'Noticias IA', partners: 'Partners',
      'ia-empresarial': 'I.A. Empresarial', 'ia-sectores': 'IA Sectores',
      'termometro-ia': 'Termómetro IA', hackaton: 'Hackaton Intel',
      'empleados-digitales': 'Empleados Digitales', 'pildoras-ia': 'Píldoras IA',
      ciberseguridad: 'Ciberseguridad', embajadores: 'Embajadores',
      organigrama: 'Organigrama', academia: 'Academia MAYiA',
      networking: 'Networking Hub',
    };
    return titulos[activeSection] || 'Dashboard';
  };

  /* ── Contenido de la página (igual para mobile y desktop) ── */
  const pageContent = (
    <Suspense fallback={<LoadingSection />}>
      <div style={{ position: 'relative', backgroundColor: colores.fondoPrincipal }}>
        <div id="dashboard"><DashboardEnterprise onSectionChange={handleNavClick} /></div>
        <MusculosMAYiA />
        <div id="analiticos" style={{ background: '#0A0A14' }}><Analiticos /></div>
        <CertificacionesMarquee />
        <div id="noticias"><NoticiasTicker /></div>
        <div id="partners"><PartnersSection /></div>
        <div id="ia-empresarial"><IAEmpresarial /></div>
        <div id="ia-sectores"><IAPorSector /></div>
        <div id="termometro-ia"><TermometroIAMexico /></div>
        <div id="hackaton"><HackatonMarketplace /></div>
        <div id="empleados-digitales"><EmpleadosDigitales /></div>
        <div id="pildoras-ia"><PildorasIA /></div>
        <div id="ciberseguridad"><CiberseguridadIA /></div>
        <div id="embajadores"><EmbajadoresMayia /></div>
        <div id="organigrama"><Organigrama /></div>
        <div id="academia"><AcademiaIA /></div>
        <div id="networking"><NetworkingHub /></div>
        <BrandFooter />
        <Footer />
      </div>
    </Suspense>
  );

  return (
    <div style={{ background: '#0A0A14', minHeight: '100vh' }}>
      {/* NavigationBar + HeaderBanner — sólo en desktop (mobile los omite el propio componente o quedan antes del panel) */}
      {!isMobile && (
        <div style={{ position: 'relative', zIndex: 100 }}>
          <NavigationBar />
          <HeaderBanner />
        </div>
      )}

      {/* ── DESKTOP: layout panel con sidebar fijo ── */}
      {!isMobile && (
        <div style={{ height: 'calc(100vh - 0px)', position: 'relative', overflow: 'hidden' }}>
          <ResponsiveLayout
            activeSection={activeSection}
            onSectionChange={handleNavClick}
            header={<Header title={getTitulo()} />}
            sidebar={<Sidebar activeSection={activeSection} onSectionChange={handleNavClick} />}
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