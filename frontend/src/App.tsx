import { useState } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';
import ImageCarousel from './components/imageCarousel';
import MusculosMAYiA from './components/musculosMayia';
import CertificacionesMarquee from './components/CertificacionesMarquee';
import SubNavigation from './components/subNavigation';
import IAEmpresarial from './components/IAEmpresarial';
import IAPorSector from './components/IAporSector';
import EmpleadosDigitales from './components/EmpleadosDigitales';
import PildorasIA from './components/PildorasIA';
import CiberseguridadIA from './components/CiberseguridadIA';
import AcademiaIA from './components/AcademiaIA';
import BrandFooter from './components/brandFooter';
import Footer from './components/piepagina';
import ChatWidget from './components/ChatAgente';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A14]">
      {/* 1. Identidad */}
      <NavigationBar />

      {/* 2. Urgencia / evento */}
      <HeaderBanner />

      {/* 3. Propuesta de valor — quiénes somos */}
      <MusculosMAYiA />

      {/* Sintillo de Certificaciones */}
      <CertificacionesMarquee />

      {/* 4. Impacto visual inmediato */}
      <ImageCarousel />

      {/* 5. Índice navegable */}
      <SubNavigation />

      <IAEmpresarial />
      <IAPorSector />
      <EmpleadosDigitales />
      <PildorasIA />
      <CiberseguridadIA />
      <AcademiaIA />

      {/* 7. Cierre de marca */}
      <BrandFooter />
      <Footer />

      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  );
}

export default App;