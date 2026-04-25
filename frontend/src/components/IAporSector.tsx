const IAPorSector = () => {

  const sectoresDetallados = [
    {
      id: 1,
      category: "Finanzas",
      title: "Finanzas",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      gradient: "from-blue-600 to-purple-600",
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
      gradient: "from-green-600 to-teal-600",
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
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      gradient: "from-cyan-600 to-blue-600",
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
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#0a1f44] via-cyan-700 to-[#0a1f44] bg-clip-text text-transparent">
              IA por Sector
            </h1>
            <div className="h-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 rounded-full"></div>
          </div>
          <p className="text-base text-gray-600 mt-6">
            Soluciones disponibles como 
            <span className="mx-2 px-3 py-1 bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 rounded-full text-sm font-bold">VaaS</span>
            y
            <span className="ml-2 px-3 py-1 bg-gradient-to-r from-cyan-400 to-lime-400 text-gray-900 rounded-full text-sm font-bold">SaaS</span>
          </p>
        </div>

        {/* Sección de 8 sectores detallados - TODOS CON MISMA ALTURA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectoresDetallados.map((sector) => (
            <div 
              key={sector.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 flex flex-col h-full"
            >
              {/* Image con overlay - ALTURA FIJA */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80`}></div>
                
                {/* Título sobre imagen */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4 transform transition-all duration-500 group-hover:scale-110">
                    {sector.title}
                  </h3>
                </div>

                {/* Badge de categoría */}
                <div className={`absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold ${sector.gradient} bg-clip-text text-transparent transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500`}>
                  {sector.category}
                </div>
              </div>

              {/* Content - FLEX-GROW PARA OCUPAR ESPACIO RESTANTE */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Lista de servicios con altura fija y scroll si es necesario */}
                <div className="flex-grow mb-4">
                  <ul className="space-y-2.5 h-full">
                    {sector.services.map((service, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed group/item"
                      >
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-br ${sector.gradient} text-transparent`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1 group-hover/item:text-gray-900 transition-colors line-clamp-2">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de reserva - SIEMPRE EN LA PARTE INFERIOR */}
                <div className="mt-auto">
                  <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className={`w-full bg-gradient-to-r ${sector.gradient} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl relative overflow-hidden group/btn`}>
                    <span className="relative z-10 text-sm">Agendar Demo</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className={`h-1 bg-gradient-to-r ${sector.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left flex-shrink-0`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IAPorSector;