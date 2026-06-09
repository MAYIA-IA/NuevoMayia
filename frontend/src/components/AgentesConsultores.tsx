import { useState, useRef, useEffect } from 'react';

import img1 from "../assets/AgentesConsultores/Agente1.webp";
import img2 from "../assets/AgentesConsultores/Agente2.webp";
import img3 from "../assets/AgentesConsultores/Agente3.webp";
import img4 from "../assets/AgentesConsultores/Agente4.webp";

import video1 from "../assets/AgentesConsultores/Agente1.webm";
import video2 from "../assets/AgentesConsultores/Agente2.webm";
import video3 from "../assets/AgentesConsultores/Agente3.webm";
import video4 from "../assets/AgentesConsultores/Agente4.webm";

interface Consultor {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoPath: string;
  color: string;
  features: string[];
  badge: string;
}

interface VideoRefs {
  [key: number]: HTMLVideoElement | null;
}

const AgentesConsultores = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});
  const [videoLoaded, setVideoLoaded] = useState<{[key: number]: boolean}>({});
  const [userInteracted, setUserInteracted] = useState<{[key: number]: boolean}>({});
  const videoRefs = useRef<VideoRefs>({});
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const consultores: Consultor[] = [
    {
      id: 1,
      title: "ROI IA",
      subtitle: "Análisis de Retorno de Inversión",
      description: "Cuantifica y mide resultados de negocio desde el análisis previo hasta la medición de beneficios, incluyendo probabilidad y riesgo.",
      image: img1,
      videoPath: video1, 
      color: "from-cyan-500 to-blue-600",
      features: ["Análisis de valor", "Medición ROI", "Gestión de riesgo"],
      badge: "Más vendido"
    },
    {
      id: 2,
      title: "Estrategia IA",
      subtitle: "Planificación Estratégica Integral",
      description: "Desarrolla estrategia empresarial mediante planificación coordinada de sistemas IA y evolución de competencias laborales.",
      image: img2,
      videoPath: video2,
      color: "from-lime-500 to-green-600",
      features: ["Portafolio IA", "Roadmap", "Capacitación"],
      badge: "Recomendado"
    },
    {
      id: 3,
      title: "Ciber Riesgo IA",
      subtitle: "Seguridad y Cumplimiento",
      description: "Evalúa y establece portafolio de ciberseguridad, mitigando riesgos y optimizando inversiones con objetivos estratégicos.",
      image: img3,
      videoPath: video3,
      color: "from-purple-500 to-pink-600",
      features: ["Evaluación riesgo", "Cumplimiento", "Optimización"],
      badge: "Enterprise"
    },
    {
      id: 4,
      title: "Innovación",
      subtitle: "Democratización de Ideas",
      description: "Estructura identificación y generación de ideas por complejidad, con soluciones para necesidades y objetivos estratégicos.",
      image: img4,
      videoPath: video4,
      color: "from-orange-500 to-red-600",
      features: ["Ideación", "Categorización", "Soluciones"],
      badge: "Nuevo"
    }
  ];

  // Manejar errores de video
  const handleVideoError = (id: number) => {
    console.warn(`Video ${id} no se pudo cargar, usando imagen de respaldo`);
    setVideoErrors(prev => ({ ...prev, [id]: true }));
  };

  // Manejar carga exitosa de video
  const handleVideoLoad = (id: number) => {
    console.log(`Video ${id} cargado exitosamente`);
    setVideoLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Función para manejar el primer click/interacción en una card
  const handleCardInteraction = (id: number | null) => {
    if (id !== null) {
      setUserInteracted(prev => ({ ...prev, [id]: true }));
    }
    setHoveredId(id);
  };

  // Manejar hover para reproducir/pausar video
  useEffect(() => {
    if (hoveredId !== null && !videoErrors[hoveredId]) {
      const video = videoRefs.current[hoveredId];
      if (video) {
        // Resetear el video al inicio antes de reproducir
        video.currentTime = 0;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log(`Video ${hoveredId} reproduciéndose correctamente`);
            })
            .catch(error => {
              if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
                console.log(`Autoplay bloqueado para video ${hoveredId}. Se requiere interacción del usuario.`);
              } else {
                console.warn(`Error al reproducir video ${hoveredId}:`, error);
              }
            });
        }
      }
    } else {
      Object.values(videoRefs.current).forEach(video => {
        if (video && !video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [hoveredId, videoErrors]);

  return (
    <div id="agentes-ia" className="w-full relative z-10 bg-white flex flex-col lg:h-[80vh] lg:min-h-[600px] lg:overflow-hidden h-auto py-10" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background subtle gradient for depth instead of dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none z-0" />

      <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 pt-6 lg:pt-10 pb-4 relative z-10 shrink-0">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 lg:mb-4 bg-gray-100 border border-gray-200">
             <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
             <span className="text-[10px] lg:text-xs font-bold text-gray-700 uppercase tracking-wider">Consultoría Estratégica</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-2 tracking-tight">
            <span className="text-gray-900">Agentes</span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"> Especializados</span>
          </h2>
        </div>
      </div>

      {/* Full-Height Flex Accordion Container */}
      <div className="flex-1 w-full max-w-[1800px] mx-auto px-4 lg:px-8 pb-6 lg:pb-10 flex flex-col lg:flex-row gap-4 lg:gap-4 lg:overflow-hidden relative z-10">
        {consultores.map((consultor) => {
          const hasValidVideo = !videoErrors[consultor.id];
          const isHovered = hoveredId === consultor.id;
          const isSelected = selectedId === consultor.id;
          const isActive = isHovered || isSelected;

          return (
            <div 
              key={consultor.id}
              onMouseEnter={() => {
                if (isMobile) return;
                setHoveredId(consultor.id);
                if (!userInteracted[consultor.id]) handleCardInteraction(consultor.id);
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                setHoveredId(null);
              }}
              onClick={() => {
                const nextId = selectedId === consultor.id ? null : consultor.id;
                setSelectedId(nextId);
                handleCardInteraction(nextId);
              }}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-[32px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex-shrink-0 lg:flex-shrink border border-gray-200 bg-gray-100 lg:h-full
                ${isActive 
                  ? 'h-[450px] lg:flex-[3] shadow-[0_20px_50px_rgba(0,0,0,0.15)]' 
                  : 'h-[100px] lg:flex-1 opacity-80 hover:opacity-100 hover:border-gray-300'}
              `}
            >
              {/* Media Section (Video/Imagen a pantalla completa) */}
              <div className="absolute inset-0 z-0">
                {hasValidVideo ? (
                  <video
                    ref={el => { videoRefs.current[consultor.id] = el; }}
                    muted loop preload={isMobile ? "none" : "auto"} playsInline
                    onError={() => handleVideoError(consultor.id)}
                    onLoadedData={() => handleVideoLoad(consultor.id)}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out origin-center ${isActive ? 'scale-100' : 'scale-[1.15] grayscale-[40%]'}`}
                    poster={consultor.image}
                    style={{ objectPosition: isMobile ? 'center 20%' : 'center' }}
                  >
                    <source src={consultor.videoPath} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={consultor.image} alt={consultor.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${isActive ? 'scale-100' : 'scale-[1.15] grayscale-[40%]'}`}
                    style={{ objectPosition: isMobile ? 'center 20%' : 'center' }}
                  />
                )}
                
                {/* Degradados para legibilidad */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-90' : 'opacity-80'}`} />
                <div className={`absolute inset-0 bg-gradient-to-b ${consultor.color} mix-blend-multiply transition-opacity duration-700 ${isActive ? 'opacity-20' : 'opacity-60'}`} />
                
                {/* Borde brillante superior cuando está activo */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${consultor.color} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* Contenido (Textos, Precios, CTA) */}
              <div className={`absolute inset-0 z-10 flex flex-col justify-end p-4 lg:p-6 transition-all duration-700 ${isActive ? 'translate-y-0' : 'translate-y-2 lg:translate-y-6'}`}>
                
                {/* Badge Superior (Solo visible si activo) */}
                <div className={`flex items-center gap-2 transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 max-h-10 mb-2' : 'opacity-0 max-h-0 mb-0'}`}>
                  <div className={`px-3 py-1 bg-gradient-to-r ${consultor.color} text-white text-[9px] font-black rounded-full shadow-lg uppercase tracking-widest`}>
                    {consultor.badge}
                  </div>
                </div>

                {/* Título (Siempre visible, cambia de tamaño) */}
                <div className="flex items-center gap-3">
                  <h3 className={`font-black text-white leading-tight drop-shadow-2xl transition-all duration-500 origin-left
                    ${isActive ? 'text-2xl lg:text-3xl mb-1' : 'text-lg lg:text-xl mb-0 truncate'}`}>
                    {consultor.title}
                  </h3>
                  {/* Icono de + para indicar expansión cuando no está activo */}
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-opacity duration-300 ${isActive ? 'opacity-0 hidden' : 'opacity-100 lg:flex hidden shrink-0'}`}>
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
                
                {/* Subtítulo (Solo activo) */}
                <p className={`text-gray-300 font-medium drop-shadow transition-all duration-500 overflow-hidden
                  ${isActive ? 'text-xs lg:text-sm opacity-100 max-h-16 mb-3' : 'text-[10px] opacity-0 max-h-0 mb-0'}`}>
                  {consultor.subtitle}
                </p>

                {/* Contenedor Inferior Expansible (Features, Desc) - CON OVERFLOW AUTO y Flex-1 */}
                <div className={`overflow-y-auto hide-scrollbar transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'flex-1 opacity-100 my-2 lg:my-3' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3">
                    {consultor.features.map((feature, idx) => (
                      <span key={idx} className="text-[9px] lg:text-[10px] px-2 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-inner font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Descripción Larga */}
                  <p className="text-xs text-gray-300 leading-relaxed mb-1">
                    {consultor.description}
                  </p>
                </div>

                {/* Footer de Tarjeta (Precio y Botón) - Fuera del scroll, siempre visible al estar activo */}
                <div className={`transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 max-h-24 border-t border-white/10 pt-3 mt-auto' : 'opacity-0 max-h-0 overflow-hidden mt-0 pt-0'}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3">
                    <button
                      className={`w-full sm:w-auto px-4 py-2 lg:py-2 rounded-lg font-bold text-[10px] lg:text-[11px] uppercase tracking-wider text-white shadow-[0_5px_15px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform bg-gradient-to-r ${consultor.color} border border-white/20 whitespace-nowrap`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.currentTarget.getBoundingClientRect();
                        if ((window as any).openCalendly) {
                          (window as any).openCalendly({ x: rect.right + 12, y: rect.top - 140 });
                        } else {
                          window.open('https://calendly.com/mayiainteligencia/consulta-mayia','_blank','noopener,noreferrer');
                        }
                      }}
                    >
                      Implementar
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentesConsultores;