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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderBanner />
      <NavigationBar />
      <SubNavigation />
      <BrandFooter />
      <ImageCarousel />
      <IAEmpresarial />
      <AgentesConsultores />
      <IAPorSector />
      <EmpleadosDigitales />
      <PildorasIA />
      <CiberseguridadIA />
      <AcademiaIA />
      <Footer />
    </div>
  );
}

export default App;