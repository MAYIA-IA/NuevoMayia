import { useState } from 'react';
import NavigationBar from './components/navigationBar';
import HeaderBanner from './components/headerBanner';
import ImageCarousel from './components/imageCarousel';
import MusculosMAYiA from './components/musculosMayia';
import SubNavigation from './components/subNavigation';
import IAEmpresarial from './components/IAEmpresarial';
import AgentesConsultores from './components/AgentesConsultores';
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

      {/* 3. Impacto visual inmediato */}
      <ImageCarousel />

      {/* 4. Propuesta de valor — quiénes somos */}
      <MusculosMAYiA />

      {/* 5. Índice navegable — ya saben qué es MAYiA */}
      <SubNavigation />

      {/* 6. Secciones de producto en orden lógico */}
      <IAEmpresarial />
      <AgentesConsultores />
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