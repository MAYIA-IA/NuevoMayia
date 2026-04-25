import { useState, useRef, useEffect } from 'react';

import img1 from "../assets/AgentesConsultores/Agente1.jpeg";
import img2 from "../assets/AgentesConsultores/Agente2.jpeg";
import img3 from "../assets/AgentesConsultores/Agente3.jpeg";
import img4 from "../assets/AgentesConsultores/Agente4.jpeg";

import video1 from "../assets/AgentesConsultores/Agente1.mp4";
import video2 from "../assets/AgentesConsultores/Agente2.mp4";
import video3 from "../assets/AgentesConsultores/Agente3.mp4";
import video4 from "../assets/AgentesConsultores/Agente4.mp4";

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
  const handleCardInteraction = (id: number) => {
    setUserInteracted(prev => ({ ...prev, [id]: true }));
    setHoveredId(id);
  };

  // Manejar hover para reproducir/pausar video
  useEffect(() => {
    if (hoveredId !== null && !videoErrors[hoveredId] && videoLoaded[hoveredId]) {
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
  }, [hoveredId, videoErrors, videoLoaded]);

  return (
    <div id="agentes-ia" className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header modernizado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Sistemas Multi-Agente de IA</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">Agentes</span>
            <span className="bg-gradient-to-r from-lime-400 via-cyan-500 to-lime-400 bg-clip-text text-transparent"> Consultores</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Disponibles como <span className="font-semibold text-gray-900">VaaS</span> y <span className="font-semibold text-gray-900">SaaS</span>
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-400/10 to-cyan-500/10 border border-lime-400/30 rounded-full">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-gray-800">Modelo Xtrive MR</span>
          </div>
        </div>

        {/* Cards Grid - Más compacto y elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {consultores.map((consultor) => {
            const hasValidVideo = !videoErrors[consultor.id];
            
            return (
              <div 
                key={consultor.id}
                onMouseEnter={() => {
                  setHoveredId(consultor.id);
                  // Si el usuario ya interactuó antes, esto permitirá el autoplay
                  if (!userInteracted[consultor.id]) {
                    handleCardInteraction(consultor.id);
                  }
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  setSelectedId(selectedId === consultor.id ? null : consultor.id);
                  handleCardInteraction(consultor.id);
                }}
                className={`group relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                  selectedId === consultor.id 
                    ? 'border-lime-400 shadow-2xl scale-[1.02]' 
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Badge en esquina */}
                <div className={`absolute top-3 right-3 z-20 px-3 py-1 bg-gradient-to-r ${consultor.color} text-white text-xs font-bold rounded-full shadow-lg transform transition-all duration-300 ${
                  hoveredId === consultor.id ? 'scale-110' : 'scale-100'
                }`}>
                  {consultor.badge}
                </div>

                {/* Media Section - AJUSTADO PARA IMÁGENES VERTICALES */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {hasValidVideo ? (
                    <>
                      <video
                        ref={el => {
                          videoRefs.current[consultor.id] = el;
                        }}
                        muted
                        loop
                        preload="auto"
                        playsInline
                        onError={() => handleVideoError(consultor.id)}
                        onLoadedData={() => handleVideoLoad(consultor.id)}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        poster={consultor.image}
                        style={{ objectPosition: 'center center' }}
                      >
                        <source src={consultor.videoPath} type="video/mp4" />
                        Tu navegador no soporta videos.
                      </video>
                      
                      {/* Overlay de invitación a hover */}
                      {!userInteracted[consultor.id] && hoveredId !== consultor.id && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-gray-700">Ver preview</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Indicador de video */}
                      <div className="absolute top-2 left-2 z-10 bg-black/70 text-white rounded-full p-1.5">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={consultor.image} 
                      alt={consultor.title}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                    />
                  )}
                  
                  {/* Overlay gradient - más sutil para no opacar la imagen */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${consultor.color} opacity-20 mix-blend-multiply group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Título sobre media - con mejor fondo para legibilidad */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-2xl">
                      {consultor.title}
                    </h3>
                    <p className="text-sm text-white/95 font-medium drop-shadow-lg">
                      {consultor.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {consultor.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${consultor.color} bg-opacity-10 text-gray-700 font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    selectedId === consultor.id ? 'max-h-32 opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {consultor.description}
                    </p>
                  </div>

                  {/* Precio y CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">PROMOCIÓN</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        $98,000
                      </div>
                      <div className="text-xs text-gray-500">MXN</div>
                    </div>

                    <button
                      className={`group/btn px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r ${consultor.color} text-white hover:scale-105 shadow-md hover:shadow-lg`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer');
                      }}
                    >
                      <span className="flex items-center gap-1">
                        Comprar
                        <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Indicador de más info */}
                  {selectedId !== consultor.id && (
                    <button className="w-full mt-4 text-xs text-cyan-600 hover:text-cyan-700 font-medium flex items-center justify-center gap-1">
                      Ver detalles
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Línea decorativa inferior */}
                <div className={`h-1 bg-gradient-to-r ${consultor.color} transform transition-transform duration-500 ${
                  hoveredId === consultor.id || selectedId === consultor.id ? 'scale-x-100' : 'scale-x-0'
                } origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿No sabes cuál agente necesitas?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Agenda una consultoría gratuita y te ayudamos a identificar la mejor solución para tu negocio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Agendar consultoría
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
                <span className="flex items-center justify-center gap-2">
                  Ver comparativa completa
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Implementación en 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Garantía de satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentesConsultores;