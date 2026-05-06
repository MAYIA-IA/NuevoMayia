import { useState, useEffect } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';

// Importaciones del layout tipo dashboard
import { ResponsiveLayout } from './components/ResponsiveLayout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard as DashboardEnterprise } from './components/Dashboard';
import { Analiticos } from './components/departamentos/Analiticos';
import { brandingConfig } from './config/branding';
import './responsive.css';

// Importaciones de NuevoMayia
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

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const { colores } = brandingConfig;

  const getTitulo = () => {
    const titulos: Record<string, string> = {
      dashboard: 'Dashboard General',
      rh: 'Recursos Humanos',
      finanzas: 'Finanzas y Contabilidad',
      operaciones: 'Operaciones',
      ventas: 'Ventas y Marketing',
      ti: 'Tecnologías de la Información',
      administracion: 'Administración',
      ciberseguridad: 'CiberSeguridad',
      playground: 'Playground',
      academia: 'Academia',
      analiticos: 'México es MAYiA',
    };
    return titulos[activeSection] || 'Dashboard';
  };

  // Configuración de IntersectionObserver para actualizar el sidebar al hacer scroll
  useEffect(() => {
    const ids = [
      'dashboard', 'analiticos', 'ia-empresarial', 'ia-sectores',
      'empleados-digitales', 'pildoras-ia', 'ciberseguridad', 'academia'
    ];

    // Esperamos a que el DOM esté listo
    setTimeout(() => {
      const scrollContainer = document.getElementById('main-scroll-container');

      const observer = new IntersectionObserver((entries) => {
        // Obtenemos todas las secciones visibles
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Si hay varias visibles, tomamos la que está más cerca de la parte superior (top >= 0)
          // o la que abarque mayor parte de la pantalla.
          // Para simplificar, la última que cruzó el umbral funciona bien con rootMargin asimétrico.
          setActiveSection(visibleEntries[0].target.id);
        }
      }, {
        root: scrollContainer,
        // Al usar threshold 0, se dispara en cuanto cualquier píxel entra en el rootMargin
        threshold: 0,
        // El margen se ajusta para detectar qué elemento está en el 30% superior de la pantalla
        rootMargin: '-20% 0px -70% 0px'
      });

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 800); // Dar más tiempo para que React renderice todos los componentes hijos
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderContent = () => {
    return (
      <div style={{ position: 'relative' }}>
        <div id="dashboard">
          <DashboardEnterprise onSectionChange={handleNavClick} />
        </div>
        <MusculosMAYiA />
        <div id="analiticos" className="w-full relative z-10" style={{ background: '#0A0A14' }}>
          <Analiticos />
        </div>
        <CertificacionesMarquee />
        <NoticiasTicker />
        <PartnersSection />

        <div id="ia-empresarial"><IAEmpresarial /></div>
        <div id="ia-sectores"><IAPorSector /></div>
        <TermometroIAMexico />
        <HackatonMarketplace />
        <div id="empleados-digitales"><EmpleadosDigitales /></div>
        <div id="pildoras-ia"><PildorasIA /></div>
        <div id="ciberseguridad"><CiberseguridadIA /></div>
        <EmbajadoresMayia />
        <Organigrama />
        <div id="academia"><AcademiaIA /></div>
        <NetworkingHub />

        <BrandFooter />
        <Footer />
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-[#0A0A14] min-h-screen">
      {/* 1. y 2. Identidad y Urgencia (fijos arriba en el flujo normal) */}
      <div className="flex-shrink-0 z-[100] relative">
        <NavigationBar />
        <HeaderBanner />
      </div>

      {/* El dashboard toma el 100% del alto de la pantalla (100vh) por sí solo. 
          Así el usuario puede hacer scroll hacia abajo para "entrar" en el dashboard 
          sin que quede todo apretado. */}
      <div className="h-screen relative overflow-hidden">
        <ResponsiveLayout
          activeSection={activeSection}
          onSectionChange={handleNavClick}
          header={<Header title={getTitulo()} />}
          sidebar={
            <Sidebar
              activeSection={activeSection}
              onSectionChange={handleNavClick}
            />
          }
        >
          <div style={{ minHeight: '100%', overflow: 'auto', backgroundColor: colores.fondoPrincipal }}>
            {renderContent()}
          </div>
        </ResponsiveLayout>
      </div>

    </div>
  );
}

export default App;