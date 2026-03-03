import { useState, useRef } from 'react';
import video1 from '../assets/PildorasIA/imagen2.mp4';
import video2 from '../assets/PildorasIA/WhCF.mp4';
import video3 from '../assets/PildorasIA/Recomendadora.mp4';
import video4 from '../assets/PildorasIA/Ciberseguridad.mp4';
import video5 from '../assets/PildorasIA/CamarasSeguridad.mp4';
import video6 from '../assets/PildorasIA/CamarasPlacas.mp4';
import video7 from '../assets/PildorasIA/PrevencionRobo.mp4';
import video8 from '../assets/PildorasIA/OperacionSucursales.mp4';
// Prueba de cambio de branch
import logoSrc from '../assets/PildorasIA/Imagen6.png';

const PildorasIA = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video && video.paused) {
      video.load();
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

  const pildoras = [
    {
      id: 1,
      title: "Asesor IA Contable Fiscal",
      video: video1,
      thumbnail: "https://images.unsplash.com/photo-1762151717091-4e0633e0c431?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-lime-400 to-green-500"
    },
    {
      id: 2,
      title: "Automatiza Whatsapp Cobro y Facturación",
      video: video2, 
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=500&fit=crop",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 3,
      title: "Recomendadora de Productos y Servicios",
      video: video3, 
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Técnico IA Soluciones de Ciberseguridad",
      video: video4, 
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=500&fit=crop",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Asesor en Recursos Humanos",
      video: video1,
      thumbnail:"https://images.unsplash.com/photo-1740153204804-200310378f2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-lime-400 to-green-500"
    },
    {
      id: 6,
      title: "Asesor en Seguridad en el Trabajo",
      video: video2,
      thumbnail:"https://plus.unsplash.com/premium_photo-1663051055744-c2be7c6fe61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 7,
      title: "Asesor ISO 9001",
      video: video1,
      thumbnail:"https://plus.unsplash.com/premium_photo-1661574784307-3bc01586ccc8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 8,
      title:"Operadora Con IA",
      video: video2,
      thumbnail:"https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 9,
      title: "3 Cámaras de Seguridad con IA",
      video: video5,
      thumbnail:"https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-lime-400 to-green-500"
    },
    {
      id: 10,
      title: "3 Camaras de Lectura de Placas",
      video: video6,
      thumbnail:"https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 11,
      title: "Sucursales Prevención de Robo y Merma",
      video: video7,
      thumbnail:"https://images.unsplash.com/photo-1559581958-df379578606a?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 12,
      title: "Operación de Sucursales",
      video: video8,
      thumbnail:"https://images.unsplash.com/photo-1580795478949-1b81005b91ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1,900",
      badge: "PROMOCIÓN",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Píldoras IA"
                className="h-16 lg:h-20 object-contain"
              />
            ) : (
              <>
                <h1 className="text-5xl lg:text-6xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-[#0a1f44] via-cyan-700 to-[#0a1f44] bg-clip-text text-transparent">
                    PÍLDORAS
                  </span>
                  <span className="ml-4 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                    IA
                  </span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 rounded-full mt-4" />
              </>
            )}
          </div>

          <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto">
            Pildoras de
            <span className="mx-2 px-3 py-1 bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 rounded-full text-sm font-bold">
              INTELIGENCIA ARTIFICIAL
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pildoras.map((pildora) => (
            <div 
              key={pildora.id}
              onMouseEnter={() => handleMouseEnter(pildora.id)}
              onMouseLeave={() => handleMouseLeave(pildora.id)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pildora.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

              <div className="relative h-80 overflow-hidden z-20 bg-black">
                {/* Thumbnail */}
                <img 
                  src={pildora.thumbnail} 
                  alt={pildora.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === pildora.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${pildora.color} transition-opacity duration-500 ${
                  hoveredId === pildora.id ? 'opacity-50' : 'opacity-30'
                }`}></div>
                
                {/* Video MP4 */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[pildora.id] = el;
                  }}
                  src={pildora.video}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === pildora.id
                      ? 'opacity-100 scale-100 visible'
                      : 'opacity-0 scale-95 invisible'
                  }`}
                />


                <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${pildora.color} text-white text-xs font-bold rounded-full shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500 z-10`}>
                  {pildora.badge}
                </div>

                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-500 z-10">
                  <svg className={`w-5 h-5 bg-gradient-to-br ${pildora.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="relative p-6 flex flex-col flex-grow z-20">
                <h3 className="text-lg font-bold text-[#0a1f44] mb-6 min-h-[3.5rem] flex items-center group-hover:text-cyan-700 transition-colors">
                  {pildora.title}
                </h3>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <button className="group/btn relative bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-yellow-300 hover:to-lime-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden shadow-md hover:shadow-xl">
                      <span className="relative z-10">COMPRAR<br />AHORA</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#0a1f44] to-cyan-700 bg-clip-text text-transparent">
                        {pildora.price}
                      </span>
                      <span className="text-xs text-gray-500">MXN</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-600 hover:to-lime-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl relative overflow-hidden group/btn2">
                    <span className="relative z-10">Reserva Una reunión</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn2:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                </div>
              </div>

              <div className={`absolute top-4 left-1/2 w-2 h-2 bg-gradient-to-br ${pildora.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30`}></div>
              <div className={`absolute bottom-4 left-1/4 w-2 h-2 bg-gradient-to-br ${pildora.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30`} style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PildorasIA;