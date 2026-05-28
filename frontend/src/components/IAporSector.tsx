import { useState } from 'react';

const IAPorSector = () => {
  const [activeSector, setActiveSector] = useState<number>(1);

  const sectoresDetallados = [
    {
      id: 1,
      category: "Finanzas",
      title: "Finanzas",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&fit=crop",
      gradient: "from-lime-600 to-green-700",
      services: [
        "Detección de Pagos y Fraudes",
        "Banca Personalizada (chatbots)",
        "Perspectivas de Inversión y Trading"
      ]
    },
    {
      id: 2,
      category: "Salud",
      title: "Salud",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&fit=crop",
      gradient: "from-green-600 to-lime-600",
      services: [
        "Simulación de Moléculas",
        "Descubrimiento de Fármacos",
        "Análisis de Datos de Ensayos Clínicos"
      ]
    },
    {
      id: 3,
      category: "Retail",
      title: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80&fit=crop",
      gradient: "from-lime-500 to-green-600",
      services: [
        "Compras Personalizadas",
        "Tiendas Inteligentes y Cadena de Suministro",
        "Gestión Omnicanal",
        "Chatbots de Servicio al Cliente"
      ]
    },
    {
      id: 4,
      category: "Ingeniería",
      title: "Ingeniería y Construcción",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80&fit=crop",
      gradient: "from-orange-600 to-red-600",
      services: [
        "Acelerar Flujos de Trabajo de Diseño",
        "Tomar Decisiones Más Rápidas con Rastreo en Tiempo Real",
        "Perspectivas Más Profundas en Productos de Diseño"
      ]
    },
    {
      id: 5,
      category: "Medios",
      title: "Medios y Entretenimiento",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80&fit=crop",
      gradient: "from-pink-600 to-purple-600",
      services: [
        "Desarrollo de Personajes",
        "Edición de Video y Creación de Imágenes",
        "Publicidad Hiper-Personalizada para el Consumidor"
      ]
    },
    {
      id: 6,
      category: "Manufactura",
      title: "Manufactura",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&fit=crop",
      gradient: "from-lime-600 to-green-600",
      services: [
        "La Fábrica Habilitada por IA",
        "Diseño y Desarrollo de Productos",
        "Mantenimiento Predictivo",
        "Chatbots para el Proceso de Ventas"
      ]
    },
    {
      id: 7,
      category: "Público",
      title: "Sector Público",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&fit=crop",
      gradient: "from-indigo-600 to-purple-600",
      services: [
        "Chatbots para la Participación Ciudadana",
        "Resumen de Documentos",
        "Cumplimiento de Auditorías",
        "Asistentes Virtuales de IA"
      ]
    },
    {
      id: 8,
      category: "Energía",
      title: "Energía",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&fit=crop",
      gradient: "from-yellow-600 to-orange-600",
      services: [
        "Gemelos Digitales",
        "Mantenimiento Predictivo y Preventivo",
        "Servicio al Cliente"
      ]
    }
  ];

  return (
    <div id="ia-sectores" className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-lime-700 to-gray-900 bg-clip-text text-transparent">
              IA por Sector
            </h1>
            <div className="h-1 bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 rounded-full"></div>
          </div>
          <p className="text-base text-gray-600 mt-6">
            Soluciones disponibles como 
            <span className="mx-2 px-3 py-1 bg-gradient-to-r from-lime-400 to-lime-600 text-gray-900 rounded-full text-sm font-bold">VaaS</span>
            y
            <span className="ml-2 px-3 py-1 bg-gradient-to-r from-lime-600 to-lime-400 text-gray-900 rounded-full text-sm font-bold">SaaS</span>
          </p>
        </div>

        {/* Galería de Paneles Expansivos (Flex Cards) */}
        <div className="w-full flex flex-col md:flex-row h-[70vh] min-h-[500px] gap-2 rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
          {sectoresDetallados.map((sector) => {
            const isActive = activeSector === sector.id;
            return (
              <div 
                key={sector.id}
                onMouseEnter={() => setActiveSector(sector.id)}
                onClick={() => setActiveSector(sector.id)}
                className="relative group cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 md:flex-shrink"
                style={{ flex: isActive ? 6 : 1 }}
              >
                {/* Imagen de Fondo */}
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${isActive ? 'scale-105' : 'scale-100 grayscale-[30%]'}`}
                />
                
                {/* Overlay oscurecedor */}
                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' : 'bg-black/70 group-hover:bg-black/50'}`}></div>
                
                {/* Contenido INACTIVO (Texto Rotado en Desktop, Normal en Mobile) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 delay-100 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-8 backdrop-blur-md">
                     <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className="text-white font-bold tracking-widest uppercase md:-rotate-90 whitespace-nowrap text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {sector.category}
                  </h3>
                </div>

                {/* Contenido ACTIVO */}
                <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-700 transform delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  
                  {/* Badge */}
                  <div className={`self-start px-4 py-1.5 bg-gradient-to-r ${sector.gradient} text-white rounded-full text-xs font-bold mb-4 shadow-lg flex items-center gap-2`}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    {sector.category}
                  </div>
                  
                  {/* Título grande */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-md text-balance break-words">
                    {sector.title}
                  </h3>
                  
                  {/* Lista de servicios (Oculta en móviles muy pequeños, visible en desktop) */}
                  <ul className="space-y-2.5 mb-8 max-w-md hidden sm:block">
                    {sector.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-200">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 text-white`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-shadow-sm">{service}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón CTA */}
                  <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className={`w-fit bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 group/btn`}>
                    Agendar Demo para {sector.category}
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IAPorSector;