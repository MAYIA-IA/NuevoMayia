import { useState, useRef, useEffect, memo } from 'react';
import { X } from 'lucide-react';
import video1 from '../assets/PildorasIA/Imagen2.mp4';
import video2 from '../assets/PildorasIA/WhCF.mp4';
import video3 from '../assets/PildorasIA/Recomendadora.mp4';
import video4 from '../assets/PildorasIA/Ciberseguridad.mp4';
import video5 from '../assets/PildorasIA/CamarasSeguridad.mp4';
import video6 from '../assets/PildorasIA/CamarasPlacas.mp4';
import video7 from '../assets/PildorasIA/PrevencionRobo.mp4';
import video8 from '../assets/PildorasIA/OperacionSucursales.mp4';

import logoSrc from '../assets/PildorasIA/Imagen6.png';
import PildoraViewer from './PildoraViewer';
import AgentesConsultores from './AgentesConsultores';

const WA_URL = 'https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0';
const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer');

const THUMBNAILS: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1762151717091-4e0633e0c431?q=80&w=386&auto=format&fit=crop',
  2: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=500&fit=crop',
  3: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
  4: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=500&fit=crop',
  5: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?q=80&w=387&auto=format&fit=crop',
  6: 'https://plus.unsplash.com/premium_photo-1663051055744-c2be7c6fe61f?q=80&w=870&auto=format&fit=crop',
  7: 'https://plus.unsplash.com/premium_photo-1661574784307-3bc01586ccc8?q=80&w=387&auto=format&fit=crop',
  8: 'https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?q=80&w=870&auto=format&fit=crop',
  9: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=1170&auto=format&fit=crop',
  10: 'https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=387&auto=format&fit=crop',
  11: 'https://images.unsplash.com/photo-1559581958-df379578606a?q=80&w=1002&auto=format&fit=crop',
  12: 'https://images.unsplash.com/photo-1580795478949-1b81005b91ba?q=80&w=1170&auto=format&fit=crop',
  13: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1170&auto=format&fit=crop',
  14: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400&auto=format&fit=crop',
};

const PILDORAS_DATA = [
  { id: 1,  title: 'Asesor Contable Fiscal',        category: 'Finanzas',      video: video1, accent: '#a3e635', features: ['Asesoría 24/7', 'Normatividad actualizada'], icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { id: 2,  title: 'WhatsApp Cobro y Facturación',   category: 'Automatización',video: video2, accent: '#22d3ee', features: ['Respuestas automáticas', 'Integración pagos'], icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { id: 3,  title: 'Recomendadora Inteligente',      category: 'Ventas',        video: video3, accent: '#a3e635', features: ['ML personalizado', 'Cross-selling'], icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { id: 4,  title: 'Técnico Ciberseguridad',         category: 'Seguridad',     video: video4, accent: '#22d3ee', features: ['Monitoreo 24/7', 'Alertas en tiempo real'], icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 5,  title: 'Asesor Recursos Humanos',        category: 'RRHH',          video: video1, accent: '#a3e635', features: ['Gestión talento', 'Onboarding'], icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 6,  title: 'Seguridad en el Trabajo',        category: 'Compliance',    video: video2, accent: '#22d3ee', features: ['Protocolos', 'Auditorías'], icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 7,  title: 'Asesor ISO 9001',                category: 'Calidad',       video: video1, accent: '#a3e635', features: ['Certificación', 'Mejora continua'], icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
  { id: 8,  title: 'Operadora con IA',               category: 'Call Center',   video: video2, accent: '#22d3ee', features: ['Atención 24/7', 'Multiidioma'], icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { id: 9,  title: '3 Cámaras Seguridad IA',         category: 'Seguridad',     video: video5, accent: '#a3e635', features: ['Detección movimiento', 'Alertas móvil'], icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { id: 10, title: 'Lectura de Placas IA',           category: 'Acceso',        video: video6, accent: '#22d3ee', features: ['Reconocimiento OCR', 'Base de datos'], icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' },
  { id: 11, title: 'Prevención Robo y Merma',        category: 'Retail',        video: video7, accent: '#a3e635', features: ['Análisis comportamiento', 'Alertas tiempo real'], icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 12, title: 'Operación de Sucursales',        category: 'Gestión',       video: video8, accent: '#22d3ee', features: ['Dashboard central', 'KPIs en vivo'], icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

const FILTERS = ['Todas', 'Finanzas', 'Seguridad', 'Ventas', 'RRHH', 'Automatización'];

const COLLAGE_SIZES: Record<number, string> = {
  1: 'w-[calc(60%-6px)] h-40 flex-grow',
  2: 'w-[calc(40%-6px)] h-40 flex-grow',
  3: 'w-full h-28 flex-grow',
  4: 'w-[calc(33.33%-6px)] h-32 flex-grow',
  5: 'w-[calc(33.33%-6px)] h-32 flex-grow',
  6: 'w-[calc(33.33%-6px)] h-32 flex-grow',
  7: 'w-[calc(50%-6px)] h-48 flex-grow',
  8: 'w-[calc(50%-6px)] h-48 flex-grow',
  9: 'w-full h-32 flex-grow',
  10: 'w-[calc(40%-6px)] h-36 flex-grow',
  11: 'w-[calc(60%-6px)] h-36 flex-grow',
  12: 'w-full h-24 flex-grow',
};

const PildoraExpandible = memo(({ pildora, isHovered, isOtherHovered, onHover, onClick }: any) => {
  const baseSize = COLLAGE_SIZES[pildora.id] || 'w-[calc(50%-6px)] h-32 flex-grow';

  return (
    <div
      onMouseEnter={() => onHover(pildora.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => isHovered && onClick(pildora.id)}
      className={`group relative transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer shrink-0 box-border
        ${isHovered 
          ? 'w-full h-[450px] lg:h-[520px] rounded-[32px] shadow-[0_0_50px_rgba(163,230,53,0.3)] z-50 order-first lg:order-none border-2 border-lime-400/50' 
          : isOtherHovered
            ? 'w-0 h-0 opacity-0 m-0 p-0 border-0'
            : `${baseSize} rounded-2xl shadow-lg border border-white/40 hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)]`
        }
      `}
      style={{ 
         background: isHovered ? '#000' : `linear-gradient(135deg, ${pildora.accent}dd, ${pildora.accent}99)`,
         backdropFilter: 'blur(8px)'
      }}
    >
      {/* Las puertas del ascensor (El color de la píldora original que se parte por la mitad con un brillo) */}
      <div className={`absolute top-0 left-0 w-full h-1/2 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-30 ${isHovered ? '-translate-y-full' : 'translate-y-0'}`} 
           style={{ background: `linear-gradient(to bottom, ${pildora.accent}, ${pildora.accent}ee)`, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-1/2 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-30 ${isHovered ? 'translate-y-full' : 'translate-y-0'}`} 
           style={{ background: `linear-gradient(to top, ${pildora.accent}, ${pildora.accent}ee)`, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
      </div>

      {/* Contenido Píldora Cerrada (Texto visible solo cuando está cerrada) */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1 sm:gap-2 px-4 transition-opacity duration-300 z-40 pointer-events-none ${isHovered ? 'opacity-0 delay-0' : 'opacity-100 delay-[400ms]'}`}>
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900/80 shrink-0 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pildora.icon} />
        </svg>
        <span className="text-sm sm:text-base font-extrabold text-gray-900 text-center leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)] tracking-wide">{pildora.title}</span>
      </div>

      {/* Contenido Píldora Abierta (Revelado detrás de las puertas) */}
      <div className={`absolute inset-0 z-10 bg-black transition-opacity duration-[800ms] ${isHovered ? 'opacity-100 delay-[200ms]' : 'opacity-0'}`}>
        <img src={THUMBNAILS[pildora.id]} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        {isHovered && (
           <video src={pildora.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/70 to-transparent" />
        
        {/* Información revelada gigante */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-[800ms] delay-[300ms] ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] font-extrabold bg-black/40 backdrop-blur-md uppercase tracking-widest text-white border border-white/20 shadow-lg">
            {pildora.category}
          </div>
          
          <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-gray-900 shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform mb-4 lg:mb-6 animate-pulse" style={{ backgroundColor: pildora.accent, border: '2px solid rgba(255,255,255,0.5)' }}>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white text-center leading-tight mb-4 drop-shadow-2xl">{pildora.title}</h3>
          
          <div className="flex flex-wrap gap-2 justify-center max-w-lg mb-6">
            {pildora.features.map((feat: any, i: number) => (
              <span key={i} className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-white/5 text-gray-100 border border-white/10 backdrop-blur-md shadow-inner">{feat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const PildorasIA = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todas');
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredPildoras = activeFilter === 'Todas'
    ? PILDORAS_DATA
    : PILDORAS_DATA.filter(p => p.category === activeFilter);

  const closeVideoModal = () => {
    setSelectedVideo(null);
    if (modalVideoRef.current) modalVideoRef.current.pause();
  };

  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) modalVideoRef.current.play().catch(() => {});
  }, [selectedVideo]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideoModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <section id="pildoras-ia" className="w-full relative overflow-hidden flex flex-col h-[80vh] min-h-[600px] py-4 lg:py-6" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 40%, #f0fdf4 100%)', fontFamily: "'Sora', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
          .dot-grid { background-image: radial-gradient(circle, rgba(163,230,53,0.25) 1px, transparent 1px); background-size: 32px 32px; }
          .badge-pulse { animation: pulseGlow 2.4s infinite; }
          @keyframes pulseGlow { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.02); opacity: 1; } }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { scrollbar-width: none; }
          .btn-spring { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
          .btn-spring:hover { transform: scale(1.05); }
          .modal-in { animation: modalIn 0.4s ease-out; }
          @keyframes modalIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `}</style>

        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        <div className="container m-auto max-w-7xl px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 h-full">
          
          {/* LEFT SIDE: Info & 3D */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center h-full relative">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoSrc} alt="Píldoras IA" className="h-10 lg:h-12 object-contain" />
            </div>
            
            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 lg:mb-6 badge-pulse" style={{ background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.4)' }}>
                <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider" style={{ color: '#4d7c0f' }}>Soluciones IA Pre-configuradas</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight" style={{ color: '#111827' }}>
                Innova.<br className="hidden lg:block"/>Automatiza.<br className="hidden lg:block"/>Crece.
              </h1>
              <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 max-w-sm leading-relaxed">
                Implementa agentes de inteligencia artificial listos para usar en tu empresa desde $1,900 MXN/mes.
              </p>
              <button onClick={openWA} className="btn-spring px-6 py-3 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #a3e635, #65a30d)' }}>
                Agendar ahora
              </button>
            </div>
            
            {/* 3D Viewer subtle in background */}
            <div className="absolute right-0 bottom-0 w-64 h-64 lg:w-96 lg:h-96 opacity-30 pointer-events-none transition-all duration-1000" style={{ transform: 'translate(10%, 10%)' }}>
               <PildoraViewer />
            </div>
          </div>

          {/* RIGHT SIDE: Filters & Expanding Grid */}
          <div className="w-full lg:w-7/12 flex flex-col h-full bg-white/60 rounded-3xl border border-white shadow-2xl backdrop-blur-xl p-4 lg:p-6 overflow-hidden relative z-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 lg:gap-4 shrink-0">
              <h2 className="text-lg lg:text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"/>
                Catálogo Dinámico
              </h2>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {FILTERS.map(f => (
                  <button key={f} onClick={() => setActiveFilter(f)} className="px-2.5 py-1 rounded-full text-[9px] lg:text-[10px] font-bold transition-all hover:scale-105"
                    style={activeFilter === f ? { background: '#a3e635', color: '#111827', boxShadow: '0 4px 12px rgba(163,230,53,0.3)' } : { background: '#fff', border: '1px solid #e5e7eb', color: '#4b5563' }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Expanding Collage Grid container */}
            <div className="flex-1 relative overflow-y-auto pr-3 hide-scrollbar w-full flex flex-wrap content-start gap-2 lg:gap-3 p-1">
              {filteredPildoras.map((p) => (
                <PildoraExpandible 
                  key={p.id} 
                  pildora={p} 
                  isHovered={hoveredId === p.id} 
                  isOtherHovered={hoveredId !== null && hoveredId !== p.id} 
                  onHover={setHoveredId} 
                  onClick={setSelectedVideo} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENTES CONSULTORES OUTSIDE ONESHOT */}
      <section className="relative z-20 bg-white">
        <AgentesConsultores />
      </section>

      {/* Video Modal */}
      {selectedVideo && (() => {
        const pildora = PILDORAS_DATA.find(p => p.id === selectedVideo);
        if (!pildora) return null;
        return (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }} onClick={closeVideoModal}>
            <div className="modal-in relative w-full max-w-[850px] max-h-[90vh] bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }} onClick={e => e.stopPropagation()}>
              
              <button onClick={closeVideoModal} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-20 text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors">
                <X size={18} />
              </button>
              
              {/* Left Column: Video */}
              <div className="flex-1 bg-black relative flex items-center justify-center max-h-[40vh] md:max-h-[90vh]">
                <video ref={modalVideoRef} src={pildora.video} controls autoPlay playsInline className="w-full h-full object-cover" />
              </div>

              {/* Right Column: Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col bg-[#f8f9fa] overflow-y-auto">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 self-start" style={{ backgroundColor: `${pildora.accent}15`, color: pildora.accent }}>
                  {pildora.category}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {pildora.title}
                </h2>
                
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pildora.accent, boxShadow: `0 0 8px ${pildora.accent}` }} />
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">Características Clave</span>
                  </div>
                  {pildora.features.map((feat: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg flex flex-shrink-0 items-center justify-center bg-white border border-gray-100 shadow-sm">
                         <svg className="w-4 h-4" style={{ color: pildora.accent === '#a3e635' ? '#65a30d' : pildora.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span className="text-[14px] font-medium text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex items-end justify-between mb-5">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-1 tracking-wider uppercase">Inversión Mensual</div>
                      <div className="text-3xl font-extrabold text-gray-900">$1,900 <span className="text-sm font-normal text-gray-500">MXN</span></div>
                    </div>
                  </div>
                  <button onClick={openWA} className="btn-spring w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2" style={{ background: pildora.accent === '#a3e635' ? 'linear-gradient(135deg, #a3e635, #65a30d)' : 'linear-gradient(135deg, #22d3ee, #0891b2)', boxShadow: `0 8px 20px ${pildora.accent}40` }}>
                    Implementar ahora
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}
    </>
  );
};

export default PildorasIA;