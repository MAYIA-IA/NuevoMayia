import { useState, useEffect } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';

import { ResponsiveLayout } from './components/ResponsiveLayout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard as DashboardEnterprise } from './components/Dashboard';
import { Analiticos } from './components/departamentos/Analiticos';
import { brandingConfig } from './config/branding';
import './responsive.css';

import NoticiasTicker from './components/NoticiasTicker';
import PartnersSection from './components/PartnersSection';
import MusculosMAYiA from './components/musculosMayia';
import CertificacionesMarquee from './components/CertificacionesMarquee';
import IAEmpresarial from './components/IAEmpresarial';
import IAPorSector from './components/IAporSector';
import EmpleadosDigitales from './components/EmpleadosDigitales';
import PildorasIA from './components/PildorasIA';
import CiberseguridadIA from './components/CiberseguridadIA';
import AcademiaIA from './components/AcademiaIA';
import BrandFooter from './components/brandFooter';
import Footer from './components/piepagina';
import Organigrama from './components/Organigrama';
import EmbajadoresMayia from './components/EmbajadoresMayia';
import HackatonMarketplace from './components/HackatonMarketplace';
import TermometroIAMexico from './components/TermometroIAMexico';
import NetworkingHub from './components/NetworkingHub';

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
    const setupObserver = () => {
      // En mobile el root es el documento; en desktop es el contenedor del panel
      const scrollRoot = isMobile ? null : document.getElementById('main-scroll-container');

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter(e => e.isIntersecting);
          if (visible.length > 0) setActiveSection(visible[0].target.id);
        },
        {
          root: scrollRoot,
          threshold: 0,
          rootMargin: '-20% 0px -70% 0px',
        }
      );

      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return observer;
    };

    const t = setTimeout(() => {
      const obs = setupObserver();
      return () => obs.disconnect();
    }, 800);

    return () => clearTimeout(t);
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