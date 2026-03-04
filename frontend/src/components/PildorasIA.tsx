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
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Thumbnails generados (estos serían los frames de tus videos)
  const thumbnails = {
    1: "https://images.unsplash.com/photo-1762151717091-4e0633e0c431?q=80&w=386&auto=format&fit=crop",
    2: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=500&fit=crop",
    3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    4: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=500&fit=crop",
    5: "https://images.unsplash.com/photo-1740153204804-200310378f2f?q=80&w=387&auto=format&fit=crop",
    6: "https://plus.unsplash.com/premium_photo-1663051055744-c2be7c6fe61f?q=80&w=870&auto=format&fit=crop",
    7: "https://plus.unsplash.com/premium_photo-1661574784307-3bc01586ccc8?q=80&w=387&auto=format&fit=crop",
    8: "https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?q=80&w=870&auto=format&fit=crop",
    9: "https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=1170&auto=format&fit=crop",
    10: "https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=387&auto=format&fit=crop",
    11: "https://images.unsplash.com/photo-1559581958-df379578606a?q=80&w=1002&auto=format&fit=crop",
    12: "https://images.unsplash.com/photo-1580795478949-1b81005b91ba?q=80&w=1170&auto=format&fit=crop"
  };

  const pildoras = [
    {
      id: 1,
      title: "Asesor Contable Fiscal",
      category: "Finanzas",
      video: video1,
      color: "from-lime-500 to-green-600",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      features: ["Asesoría 24/7", "Normatividad actualizada"]
    },
    {
      id: 2,
      title: "WhatsApp Cobro y Facturación",
      category: "Automatización",
      video: video2,
      color: "from-cyan-500 to-blue-600",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      features: ["Respuestas automáticas", "Integración pagos"]
    },
    {
      id: 3,
      title: "Recomendadora Inteligente",
      category: "Ventas",
      video: video3,
      color: "from-purple-500 to-pink-600",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      features: ["ML personalizado", "Cross-selling"]
    },
    {
      id: 4,
      title: "Técnico Ciberseguridad",
      category: "Seguridad",
      video: video4,
      color: "from-orange-500 to-red-600",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      features: ["Monitoreo 24/7", "Alertas en tiempo real"]
    },
    {
      id: 5,
      title: "Asesor Recursos Humanos",
      category: "RRHH",
      video: video1,
      color: "from-lime-500 to-green-600",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      features: ["Gestión talento", "Onboarding"]
    },
    {
      id: 6,
      title: "Seguridad en el Trabajo",
      category: "Compliance",
      video: video2,
      color: "from-cyan-500 to-blue-600",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      features: ["Protocolos", "Auditorías"]
    },
    {
      id: 7,
      title: "Asesor ISO 9001",
      category: "Calidad",
      video: video1,
      color: "from-purple-500 to-pink-600",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      features: ["Certificación", "Mejora continua"]
    },
    {
      id: 8,
      title: "Operadora con IA",
      category: "Call Center",
      video: video2,
      color: "from-orange-500 to-red-600",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      features: ["Atención 24/7", "Multiidioma"]
    },
    {
      id: 9,
      title: "3 Cámaras Seguridad IA",
      category: "Seguridad",
      video: video5,
      color: "from-lime-500 to-green-600",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      features: ["Detección movimiento", "Alertas móvil"]
    },
    {
      id: 10,
      title: "Lectura de Placas IA",
      category: "Acceso",
      video: video6,
      color: "from-cyan-500 to-blue-600",
      icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
      features: ["Reconocimiento OCR", "Base de datos"]
    },
    {
      id: 11,
      title: "Prevención Robo y Merma",
      category: "Retail",
      video: video7,
      color: "from-purple-500 to-pink-600",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      features: ["Análisis comportamiento", "Alertas tiempo real"]
    },
    {
      id: 12,
      title: "Operación de Sucursales",
      category: "Gestión",
      video: video8,
      color: "from-orange-500 to-red-600",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: ["Dashboard central", "KPIs en vivo"]
    }
  ];

  // Autoplay del preview al hacer hover
  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Abrir modal con video completo
  const openVideoModal = (id: number) => {
    setSelectedVideo(id);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  // Reproducir video en modal cuando se abre
  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
    }
  }, [selectedVideo]);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div id="pildoras-ia" className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Soluciones IA Pre-configuradas</span>
          </div>

          {logoSrc ? (
            <div className="mb-6">
              <img
                src={logoSrc}
                alt="Píldoras IA"
                className="h-16 lg:h-20 object-contain mx-auto"
              />
            </div>
          ) : (
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900">Píldoras</span>
              <span className="bg-gradient-to-r from-lime-400 via-cyan-500 to-lime-400 bg-clip-text text-transparent"> IA</span>
            </h1>
          )}

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Implementación inmediata desde <span className="font-bold text-gray-900">$1,900 MXN</span>
          </p>

          {/* Quick filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Todas', 'Finanzas', 'Seguridad', 'Ventas', 'RRHH'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 border-gray-200 hover:border-lime-400 hover:bg-lime-50 text-gray-700 hover:text-gray-900"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de píldoras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pildoras.map((pildora) => (
            <div
              key={pildora.id}
              onMouseEnter={() => handleMouseEnter(pildora.id)}
              onMouseLeave={() => handleMouseLeave(pildora.id)}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-lime-400 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => openVideoModal(pildora.id)}
            >
              {/* Video Preview Section */}
              <div className="relative h-48 bg-black overflow-hidden">
                {/* Thumbnail */}
                <img
                  src={thumbnails[pildora.id as keyof typeof thumbnails]}
                  alt={pildora.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === pildora.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Video preview (primeros segundos en loop) */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[pildora.id] = el;
                  }}
                  src={pildora.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === pildora.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pildora.color} opacity-30 mix-blend-multiply`}></div>

                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div> */}

                {/* Category badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold shadow-lg`}>
                  <span className={`bg-gradient-to-r ${pildora.color} bg-clip-text text-transparent`}>
                    {pildora.category}
                  </span>
                </div>

                {/* Video indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-medium">Video</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Icon y título */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pildora.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-5 h-5 bg-gradient-to-br ${pildora.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pildora.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-cyan-700 transition-colors">
                    {pildora.title}
                  </h3>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pildora.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Precio y CTA */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">PROMOCIÓN</div>
                      <div className="text-2xl font-bold text-gray-900">$1,900</div>
                      <div className="text-xs text-gray-500">MXN/mes</div>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${pildora.color} rounded-full text-white text-xs font-bold`}>
                      -50%
                    </div>
                  </div>

                  <button
                    className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-gradient-to-r ${pildora.color} text-white hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Lógica de compra
                    }}
                  >
                    Comprar ahora
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pildora.color} transform transition-transform duration-300 ${
                hoveredId === pildora.id ? 'scale-x-100' : 'scale-x-0'
              } origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Necesitas una solución personalizada?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Creamos píldoras IA específicas para tu negocio en 2-4 semanas
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Solicitar desarrollo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <button className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
                  Ver catálogo completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeVideoModal}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video player */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={modalVideoRef}
                src={pildoras.find(p => p.id === selectedVideo)?.video}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-2">
                {pildoras.find(p => p.id === selectedVideo)?.title}
              </h3>
              <p className="text-gray-400 text-sm">
                Presiona ESC para cerrar
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PildorasIA;