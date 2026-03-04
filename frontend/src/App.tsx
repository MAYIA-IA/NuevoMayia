import { useState } from 'react';
import HeaderBanner from './components/headerBanner';
import NavigationBar from './components/navigationBar';
import SubNavigation from './components/subNavigation';
import BrandFooter from './components/brandFooter';
import ImageCarousel from './components/imageCarousel';
import IAEmpresarial from './components/IAEmpresarial';
import AgentesConsultores from './components/AgentesConsultores';
import IAPorSector from './components/IAporSector';
import EmpleadosDigitales from './components/EmpleadosDigitales';
import PildorasIA from './components/PildorasIA';
import CiberseguridadIA from './components/CiberseguridadIA';
import AcademiaIA from './components/AcademiaIA';
import Footer from './components/piepagina';
import ChatWidget from './components/ChatAgente';
import MusculosMAYiA from './components/musculosMayia';

function App() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <HeaderBanner />
      <NavigationBar />
      <SubNavigation />
      <BrandFooter />
      <MusculosMAYiA />
      <ImageCarousel />
      <IAEmpresarial />
      <AgentesConsultores />
      <IAPorSector />
      <EmpleadosDigitales />
      <PildorasIA />
      <CiberseguridadIA />
      <AcademiaIA />
      <Footer />

      <ChatWidget 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

    </div>
  );
}

export default App;