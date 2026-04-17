import { useState, useRef, useEffect } from 'react';
import video1 from '../assets/PildorasIA/imagen2.mp4';
import video2 from '../assets/PildorasIA/WhCF.mp4';
import video3 from '../assets/PildorasIA/Recomendadora.mp4';
import video4 from '../assets/PildorasIA/Ciberseguridad.mp4';
import video5 from '../assets/PildorasIA/CamarasSeguridad.mp4';
import video6 from '../assets/PildorasIA/CamarasPlacas.mp4';
import video7 from '../assets/PildorasIA/PrevencionRobo.mp4';
import video8 from '../assets/PildorasIA/OperacionSucursales.mp4';

import logoSrc from '../assets/PildorasIA/Imagen6.png';


const PildorasIA = () => {
  // ── STATE ──────────────────────────────────────────────────────────────────
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todas');
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // ── THUMBNAILS ─────────────────────────────────────────────────────────────
  const thumbnails: Record<number, string> = {
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

  // ── DATOS ──────────────────────────────────────────────────────────────────
  const pildoras = [
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

  const filters = ['Todas', 'Finanzas', 'Seguridad', 'Ventas', 'RRHH', 'Automatización'];

  const filteredPildoras = activeFilter === 'Todas'
    ? pildoras
    : pildoras.filter(p => p.category === activeFilter);

  // ── ASESORES para el hero (espacios para media externa) ────────────────────
  // type: 'image' | 'video'
  const advisors = [
    { id: 'a1', label: 'Asesor Contable',      description: 'Automatiza tus procesos fiscales y contables con IA entrenada en normatividad mexicana.', type: 'image' as const, src: '' },
    { id: 'a2', label: 'Agente de Ventas',     description: 'Incrementa tus conversiones con recomendaciones inteligentes y seguimiento automatizado.', type: 'image' as const, src: '' },
    { id: 'a3', label: 'Vigilancia IA',        description: 'Monitoreo inteligente en tiempo real para proteger tus instalaciones y activos.', type: 'image' as const, src: '' },
  ];

  // ── HANDLERS ──────────────────────────────────────────────────────────────
  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) { video.currentTime = 0; video.play().catch(() => {}); }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) { video.pause(); video.currentTime = 0; }
  };

  const openVideoModal  = (id: number) => setSelectedVideo(id);
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

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div
      id="pildoras-ia"
      className="w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 40%, #f0fdf4 100%)', fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── ESTILOS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        /* fondo de puntos */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(163,230,53,0.25) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* glow neon */
        .neon-lime  { text-shadow: 0 0 18px #a3e63599, 0 0 40px #a3e63544; }
        .neon-cyan  { text-shadow: 0 0 18px #22d3ee99, 0 0 40px #22d3ee44; }
        .border-neon-lime  { box-shadow: 0 0 0 1px #a3e63566, inset 0 0 20px rgba(163,230,53,0.04); }
        .border-neon-cyan  { box-shadow: 0 0 0 1px #22d3ee66, inset 0 0 20px rgba(34,211,238,0.04); }

        /* card hover glow */
        .card-hover:hover { transform: translateY(-4px); }

        /* scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0f1e; }
        ::-webkit-scrollbar-thumb { background: #a3e635; border-radius: 2px; }

        /* fade-in animation */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-d1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-d2 { animation-delay: 0.2s; opacity: 0; }
        .fade-up-d3 { animation-delay: 0.3s; opacity: 0; }
        .fade-up-d4 { animation-delay: 0.4s; opacity: 0; }

        /* pill badge pulse */
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px #a3e63544; }
          50%       { box-shadow: 0 0 16px #a3e63588; }
        }
        .badge-pulse { animation: pulseGlow 2.4s ease-in-out infinite; }

        /* nav underline */
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #a3e635;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        /* advisor card shimmer */
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent 0%, rgba(163,230,53,0.06) 50%, transparent 100%);
          background-size: 400px 100%;
          animation: shimmer 3s infinite;
        }

        /* video modal */
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        .modal-in { animation: modalIn 0.25s ease forwards; }

        /* scan line overlay */
        .scan-lines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.06) 2px,
            rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
        }
      `}</style>

      {/* ── FONDO DECORATIVO ── */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* ══════════════════════════════════════════════════════════════════════
          HEADER — solo logo centrado
      ══════════════════════════════════════════════════════════════════════ */}
      <header className="relative z-30 flex items-center justify-center px-6 pt-10 pb-2">
        {logoSrc ? (
          <img src={logoSrc} alt="Píldoras IA" className="h-14 lg:h-16 object-contain" />
        ) : (
          <span className="text-2xl font-extrabold" style={{ color: '#4d7c0f' }}>
            Píldoras<span style={{ color: '#a3e635' }}> IA</span>
          </span>
        )}
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 md:px-12 pt-16 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Texto hero ── */}
          <div className="fade-up fade-up-d1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 badge-pulse"
                 style={{ background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.4)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#65a30d' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4d7c0f' }}>
                Soluciones IA Pre-configuradas
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-6 tracking-tight">
              <span style={{ color: '#111827' }}>Innova.</span><br />
              <span className="neon-lime" style={{ color: '#4d7c0f', textShadow: 'none' }}>Automatiza.</span><br />
              <span style={{ color: '#0891b2' }}>Crece.</span>
            </h1>

            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: '#6b7280' }}>
              Implementa agentes de inteligencia artificial listos para usar en tu empresa.
              Desde <span className="font-bold" style={{ color: '#111827' }}>$1,900 MXN/mes</span> con activación inmediata y soporte continuo.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #a3e635, #65a30d)', color: '#fff', boxShadow: '0 4px 24px rgba(163,230,53,0.35)' }}
              >
                Ver soluciones
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.12)', color: '#374151' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver demo
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              {[
                { value: '12+', label: 'Agentes disponibles' },
                { value: '24/7', label: 'Soporte activo' },
                { value: '48h', label: 'Activación' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold" style={{ color: '#4d7c0f' }}>{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Video hero (espacio para video externo) ── */}
          <div className="fade-up fade-up-d2 relative">
            {/*
              ╔══════════════════════════════════════════════════════════╗
              ║  ESPACIO PARA VIDEO PRINCIPAL                            ║
              ║  Reemplaza el contenido de este div con tu <video> o     ║
              ║  <iframe> según necesites. Ej:                           ║
              ║                                                           ║
              ║  <video src={heroVideo} autoPlay muted loop              ║
              ║    playsInline className="w-full h-full object-cover     ║
              ║    rounded-2xl" />                                        ║
              ╚══════════════════════════════════════════════════════════╝
            */}
            <div
              className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, rgba(163,230,53,0.06) 0%, rgba(34,211,238,0.06) 100%)',
                border: '1px solid rgba(163,230,53,0.3)',
                boxShadow: '0 4px 40px rgba(163,230,53,0.10), 0 0 80px rgba(34,211,238,0.06)',
              }}
            >
              {/* scan lines overlay */}
              <div className="absolute inset-0 scan-lines opacity-30" />

              {/* placeholder content */}
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                     style={{ background: 'rgba(163,230,53,0.1)', border: '1px solid rgba(163,230,53,0.3)' }}>
                  <svg className="w-8 h-8" style={{ color: '#a3e635' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: 'rgba(77,124,15,0.7)' }}>
                  Integra tu video aquí<br />
                  <span className="text-xs" style={{ color: 'rgba(0,0,0,0.3)' }}>
                    Reemplaza este espacio con &lt;video src=&#123;heroVideo&#125; /&gt;
                  </span>
                </p>
              </div>

              {/* corner decorators */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-6 h-6`}
                     style={{
                       borderTop:    pos.includes('top')    ? '2px solid #a3e635' : 'none',
                       borderBottom: pos.includes('bottom') ? '2px solid #a3e635' : 'none',
                       borderLeft:   pos.includes('left')   ? '2px solid #a3e635' : 'none',
                       borderRight:  pos.includes('right')  ? '2px solid #a3e635' : 'none',
                     }} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ADVISOR CARDS  (espacios para imagen / video)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.5))' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#65a30d' }}>
              Agentes especializados
            </span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(163,230,53,0.5), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, idx) => (
              <div
                key={advisor.id}
                className="fade-up relative rounded-2xl overflow-hidden group"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                  background: '#fff',
                  border: '1px solid rgba(163,230,53,0.25)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,230,53,0.55)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(163,230,53,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(163,230,53,0.25)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
                }}
              >
                {/*
                  ╔═══════════════════════════════════════════════════════════╗
                  ║  ESPACIO PARA IMAGEN / VIDEO DEL ASESOR #{idx + 1}        ║
                  ║  Reemplaza el contenido de este bloque con:               ║
                  ║    <img src={advisorImg} className="w-full h-full         ║
                  ║      object-cover" />                                      ║
                  ║  o bien:                                                   ║
                  ║    <video src={advisorVideo} autoPlay muted loop           ║
                  ║      playsInline className="w-full h-full object-cover" /> ║
                  ╚═══════════════════════════════════════════════════════════╝
                */}
                <div
                  className="relative w-full flex items-center justify-center"
                  style={{
                    height: '220px',
                    background: 'linear-gradient(160deg, rgba(163,230,53,0.06), rgba(34,211,238,0.05))',
                    borderBottom: '1px solid rgba(163,230,53,0.15)',
                  }}
                >
                  <div className="shimmer-bg absolute inset-0" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                         style={{ background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.25)' }}>
                      <svg className="w-6 h-6" style={{ color: '#a3e635' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-center px-4" style={{ color: 'rgba(77,124,15,0.5)' }}>
                      Integra imagen o video<br />del asesor aquí
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#65a30d' }} />
                    <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#4d7c0f' }}>
                      {advisor.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {advisor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FILTROS + GRID DE PÍLDORAS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Header sección */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#65a30d' }}>
                — Catálogo completo
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: '#111827' }}>
                Implementación inmediata desde{' '}
                <span style={{ color: '#4d7c0f' }}>$1,900 MXN</span>
              </h2>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                  style={
                    activeFilter === f
                      ? { background: '#a3e635', color: '#0a0f1e', boxShadow: '0 0 14px rgba(163,230,53,0.4)' }
                      : { background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.2)', color: 'rgba(255,255,255,0.6)' }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPildoras.map((pildora) => (
              <div
                key={pildora.id}
                onMouseEnter={() => handleMouseEnter(pildora.id)}
                onMouseLeave={() => handleMouseLeave(pildora.id)}
                onClick={() => openVideoModal(pildora.id)}
                className="card-hover group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-400"
                style={{
                  background: '#fff',
                  border: `1px solid ${hoveredId === pildora.id ? pildora.accent + '88' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: hoveredId === pildora.id ? `0 8px 32px ${pildora.accent}28` : '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'all 0.35s ease',
                }}
              >
                {/* Video/thumbnail */}
                <div className="relative h-44 bg-black overflow-hidden">
                  <img
                    src={thumbnails[pildora.id]}
                    alt={pildora.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredId === pildora.id ? 0 : 1 }}
                  />
                  <video
                    ref={el => { if (el) videoRefs.current[pildora.id] = el; }}
                    src={pildora.video}
                    muted loop playsInline preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredId === pildora.id ? 1 : 0 }}
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0"
                       style={{ background: `linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)` }} />

                  {/* category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full backdrop-blur-md text-xs font-bold"
                       style={{ background: 'rgba(10,15,30,0.75)', border: `1px solid ${pildora.accent}55`, color: pildora.accent }}>
                    {pildora.category}
                  </div>

                  {/* video indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-md"
                       style={{ background: 'rgba(10,15,30,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-white">Video</span>
                  </div>

                  {/* play icon center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                         style={{ background: 'rgba(163,230,53,0.15)', border: `1px solid ${pildora.accent}88` }}>
                      <svg className="w-5 h-5 ml-0.5" style={{ color: pildora.accent }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                         style={{ background: `${pildora.accent}14`, border: `1px solid ${pildora.accent}33` }}>
                      <svg className="w-4 h-4" style={{ color: pildora.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pildora.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold leading-tight mt-1"
                        style={{ color: hoveredId === pildora.id ? '#111827' : '#374151', transition: 'color 0.3s' }}>
                      {pildora.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pildora.features.map((feat, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: 'rgba(0,0,0,0.05)', color: '#6b7280', border: '1px solid rgba(0,0,0,0.08)' }}>
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Precio + CTA */}
                  <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: '#9ca3af' }}>PROMOCIÓN</div>
                        <div className="text-2xl font-extrabold" style={{ color: '#111827' }}>$1,900</div>
                        <div className="text-xs" style={{ color: '#9ca3af' }}>MXN/mes</div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full text-xs font-bold"
                           style={{ background: `${pildora.accent}22`, color: pildora.accent, border: `1px solid ${pildora.accent}44` }}>
                        −50%
                      </div>
                    </div>

                    <button
                      className="w-full py-2.5 rounded-xl font-bold text-xs transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                      onClick={e => { e.stopPropagation(); }}
                      style={{
                        background: `linear-gradient(135deg, ${pildora.accent}, ${pildora.accent === '#a3e635' ? '#65a30d' : '#0891b2'})`,
                        color: '#0a0f1e',
                        boxShadow: `0 0 16px ${pildora.accent}44`,
                      }}
                    >
                      Comprar ahora
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* bottom neon line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform transition-transform duration-300 origin-left"
                     style={{
                       background: `linear-gradient(90deg, ${pildora.accent}, transparent)`,
                       transform: hoveredId === pildora.id ? 'scaleX(1)' : 'scaleX(0)',
                     }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-14"
            style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)',
              border: '1px solid rgba(163,230,53,0.35)',
              boxShadow: '0 4px 40px rgba(163,230,53,0.12)',
            }}
          >
            <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

            <div className="relative z-10 text-center">
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#65a30d' }}>
                — Desarrollo personalizado
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#111827' }}>
                ¿Necesitas una solución<br />
                <span style={{ color: '#4d7c0f' }}>a la medida?</span>
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
                Creamos píldoras IA específicas para tu negocio en 2 – 4 semanas,
                integradas con tus sistemas existentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #a3e635, #65a30d)', color: '#fff', boxShadow: '0 4px 24px rgba(163,230,53,0.35)' }}
                >
                  Solicitar desarrollo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.12)', color: '#374151' }}
                >
                  Ver catálogo completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VIDEO MODAL
      ══════════════════════════════════════════════════════════════════════ */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={closeVideoModal}
        >
          <div className="relative w-full max-w-4xl modal-in" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="rounded-2xl overflow-hidden"
                 style={{ background: '#000', border: '1px solid rgba(163,230,53,0.3)', boxShadow: '0 0 60px rgba(163,230,53,0.2)' }}>
              <video
                ref={modalVideoRef}
                src={pildoras.find(p => p.id === selectedVideo)?.video}
                controls autoPlay
                className="w-full aspect-video"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white">{pildoras.find(p => p.id === selectedVideo)?.title}</h3>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Presiona ESC para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PildorasIA;