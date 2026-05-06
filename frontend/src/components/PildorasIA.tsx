import { useState, useRef, useEffect, memo } from 'react';
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

const PildoraCard = memo(({ pildora, isHovered, onHover, onClick }: any) => {
  return (
    <div
      onMouseEnter={() => onHover(pildora.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(pildora.id)}
      className="card-hover group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer shrink-0 snap-start w-[280px] sm:w-[320px]"
      style={{
        background: '#fff',
        border: `1px solid ${isHovered ? pildora.accent + '88' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: isHovered ? `0 12px 40px ${pildora.accent}30` : '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div className="relative h-44 bg-black overflow-hidden">
        <img
          src={THUMBNAILS[pildora.id]}
          alt={pildora.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        {isHovered && (
          <video
            src={pildora.video}
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: 1 }}
          />
        )}

        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)` }} />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full backdrop-blur-md text-xs font-bold"
             style={{ background: 'rgba(10,15,30,0.75)', border: `1px solid ${pildora.accent}55`, color: pildora.accent }}>
          {pildora.category}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-md"
             style={{ background: 'rgba(10,15,30,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-white">Video</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
               style={{ background: 'rgba(163,230,53,0.15)', border: `1px solid ${pildora.accent}88` }}>
            <svg className="w-5 h-5 ml-0.5" style={{ color: pildora.accent }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
               style={{ background: `${pildora.accent}14`, border: `1px solid ${pildora.accent}33` }}>
            <svg className="w-4 h-4" style={{ color: pildora.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pildora.icon} />
            </svg>
          </div>
          <h3 className="text-sm font-bold leading-tight mt-1" style={{ color: isHovered ? '#111827' : '#374151', transition: 'color 0.3s' }}>
            {pildora.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pildora.features.map((feat: any, i: number) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.05)', color: '#6b7280', border: '1px solid rgba(0,0,0,0.08)' }}>
              {feat}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-xs mb-0.5" style={{ color: '#9ca3af' }}>PROMOCIÓN</div>
              <div className="text-2xl font-extrabold" style={{ color: '#111827' }}>$1,900</div>
              <div className="text-xs" style={{ color: '#9ca3af' }}>MXN/mes</div>
            </div>
            <div className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${pildora.accent}22`, color: pildora.accent, border: `1px solid ${pildora.accent}44` }}>
              −50%
            </div>
          </div>
          <button className="btn-spring w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2" onClick={(e) => { e.stopPropagation(); openWA(); }}
            style={{ background: `linear-gradient(135deg, ${pildora.accent}, ${pildora.accent === '#a3e635' ? '#65a30d' : '#0891b2'})`, color: '#0a0f1e', boxShadow: `0 0 16px ${pildora.accent}44` }}>
            Agendar ahora
          </button>
        </div>
      </div>
    </div>
  );
});

const PildorasIA = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const cardWidth = 340;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div id="pildoras-ia" className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 40%, #f0fdf4 100%)', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        .dot-grid { background-image: radial-gradient(circle, rgba(163,230,53,0.25) 1px, transparent 1px); background-size: 32px 32px; }
        .badge-pulse { animation: pulseGlow 2.4s infinite; }
        @keyframes pulseGlow { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.02); opacity: 1; } }
        .card-hover { transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px) scale(1.01); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
        .btn-spring { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .btn-spring:hover { transform: scale(1.05); }
        .modal-in { animation: modalIn 0.4s ease-out; }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <header className="relative z-30 flex items-center justify-center px-6 pt-10 pb-2">
        <img src={logoSrc} alt="Píldoras IA" className="h-14 lg:h-16 object-contain" />
      </header>

      <section className="relative z-10 px-6 md:px-12 pt-16 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 badge-pulse" style={{ background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.4)' }}>
              <span className="text-xs font-semibold uppercase" style={{ color: '#4d7c0f' }}>Soluciones IA Pre-configuradas</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6" style={{ color: '#111827' }}>Innova. Automatiza. Crece.</h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg">Implementa agentes de inteligencia artificial listos para usar en tu empresa desde $1,900 MXN/mes.</p>
            <button onClick={openWA} className="btn-spring px-8 py-4 rounded-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #a3e635, #65a30d)' }}>Agendar ahora</button>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <PildoraViewer />
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <AgentesConsultores />
      </div>

      <section className="relative z-10 px-6 md:px-12 pb-24 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Catálogo de Píldoras</h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={activeFilter === f ? { background: '#a3e635', color: '#111827' } : { background: '#fff', border: '1px solid #e5e7eb' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div ref={scrollContainerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="flex overflow-x-auto gap-5 pb-8 snap-x hide-scrollbar">
            {filteredPildoras.map((p) => (
              <PildoraCard key={p.id} pildora={p} isHovered={hoveredId === p.id} onHover={setHoveredId} onClick={setSelectedVideo} />
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (() => {
        const pildora = PILDORAS_DATA.find(p => p.id === selectedVideo);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }} onClick={closeVideoModal}>
            <div className="modal-in relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black" onClick={e => e.stopPropagation()}>
              <video ref={modalVideoRef} src={pildora?.video} controls autoPlay className="w-full aspect-video" />
              <button onClick={closeVideoModal} className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full">✕</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default PildorasIA;