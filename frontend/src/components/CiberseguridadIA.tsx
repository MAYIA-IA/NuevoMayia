import { useState, useEffect } from 'react';

const CiberseguridadIA = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Close if clicking outside any card
      if (!target.closest('.ciberseguridad-card')) {
        setExpandedId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicios = [
    {
      id: 1,
      title: "Protección de Modelos",
      shortTitle: "Model Security",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      description: "Defensa contra ataques adversarios, envenenamiento de datos y extracción de modelos.",
      features: ["Ataques adversarios", "Envenenamiento", "Extracción"],
      color: "from-lime-500 to-green-600",
      stat: "99.9%",
      statLabel: "Protección"
    },
    {
      id: 2,
      title: "Seguridad de Datos",
      shortTitle: "Data Privacy",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      description: "Cifrado homomórfico, federated learning y privacidad diferencial para tus datos de IA.",
      features: ["Cifrado homomórfico", "Federated learning", "Privacidad diferencial"],
      color: "from-lime-500 to-green-600",
      stat: "100%",
      statLabel: "Confidencial"
    },
    {
      id: 3,
      title: "Detección de Ataques",
      shortTitle: "Threat Detection",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      description: "Monitoreo proactivo contra evasión, inferencia y extracción. IA que defiende IA.",
      features: ["Evasión", "Inferencia", "Monitoring 24/7"],
      color: "from-purple-500 to-pink-600",
      stat: "24/7",
      statLabel: "Monitoreo"
    },
    {
      id: 4,
      title: "Gobernanza & Compliance",
      shortTitle: "AI Governance",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      description: "Cumplimiento regulatorio, evaluación de riesgo y auditoría continua para IA ética.",
      features: ["Evaluación riesgo", "Auditoría", "Compliance"],
      color: "from-orange-500 to-red-600",
      stat: "ISO",
      statLabel: "Certificado"
    }
  ];

  const certifications = [
    { name: "FIRST", active: true },
    { name: "ISO 27001", active: true },
    { name: "ISO 27034", active: true },
    { name: "SOC 2", active: true }
  ];

  const threats = [
    { name: "Ataques Adversarios", level: "Critical", color: "text-red-500" },
    { name: "Data Poisoning", level: "High", color: "text-orange-500" },
    { name: "Model Extraction", level: "High", color: "text-orange-500" },
    { name: "Membership Inference", level: "Medium", color: "text-yellow-500" }
  ];

  return (
    <div id="ciberseguridad" className="w-full bg-white relative overflow-hidden lg:h-[80vh] lg:min-h-[650px] flex items-center py-12 lg:py-0">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1600px] w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          
          {/* COLUMNA IZQUIERDA: Header, Threats & CTA */}
          <div className="flex-1 w-full min-w-0 flex flex-col gap-5 lg:gap-6 lg:max-w-xl xl:max-w-2xl">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full mb-3 shadow-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] lg:text-xs font-bold text-gray-600 uppercase tracking-wider">Centro de Operaciones de Seguridad IA</span>
              </div>

              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-3 leading-tight tracking-tight">
                <span className="text-gray-900">Ciberseguridad para</span><br />
                <span className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
              </h2>

              <p className="text-sm lg:text-base text-gray-500 max-w-lg mb-5 leading-relaxed">
                Seguridad especializada para <span className="text-lime-600 font-bold">MLOps</span> y <span className="text-lime-500 font-bold">AI-as-a-Service</span>. Desde datos de entrenamiento hasta modelos en producción.
              </p>

              {/* Certificaciones badge - Inline */}
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg flex items-center gap-1.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-bold text-gray-700 tracking-wider">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Threat Dashboard Compacto */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-md mt-2 w-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-gray-800 flex items-center gap-2 uppercase tracking-wide">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Amenazas Interceptadas (Live)
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {threats.map((threat, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 flex flex-col justify-between">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-2 gap-1">
                      <span className="text-[9px] xl:text-[10px] font-bold text-gray-700 leading-tight">{threat.name}</span>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: threat.level === 'Critical' ? '#ef4444' : threat.level === 'High' ? '#f97316' : '#eab308' }}></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-auto">
                      <div className={`h-1 rounded-full ${threat.color.replace('text', 'bg')}`} style={{ width: threat.level === 'Critical' ? '90%' : threat.level === 'High' ? '70%' : '50%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Final Compacto */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="group relative bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-lg flex-1 flex items-center justify-center whitespace-nowrap">
                Solicitar Auditoría
                <svg className="w-4 h-4 ml-2 text-lime-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-xl text-xs transition-all border border-gray-200 shadow-sm flex-1 whitespace-nowrap">
                Descargar Reporte SOC
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: 4 Cards Grid (Denser Bento Layout with Ver Más) */}
          <div className="flex-1 w-full min-w-0 lg:max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 relative z-10">
              {servicios.map((servicio) => {
                const isExpanded = expandedId === servicio.id;
                
                return (
                <div
                  key={servicio.id}
                  className={`ciberseguridad-card group bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 flex flex-col cursor-pointer
                    ${isExpanded ? 'border-lime-300 shadow-md ring-2 ring-lime-400/20' : 'border-gray-100 hover:shadow-lg hover:border-gray-200'}
                  `}
                  onClick={() => !isExpanded && setExpandedId(servicio.id)}
                >
                  <div className={`relative bg-gradient-to-br ${servicio.color} p-3 lg:p-4 transition-all`}>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:10px_10px] opacity-20"></div>
                    
                    <div className="relative z-10 flex items-start justify-between mb-2 lg:mb-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servicio.icon} />
                        </svg>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-md px-1.5 py-0.5 text-right border border-white/10">
                        <div className="text-[10px] lg:text-xs font-bold text-white leading-none">{servicio.stat}</div>
                        <div className="text-[7px] text-white/80 uppercase tracking-widest mt-0.5">{servicio.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="relative z-10 text-sm lg:text-base font-bold text-white leading-tight">{servicio.title}</h3>
                  </div>
                  
                  <div className="p-3 lg:p-4 flex flex-col flex-grow bg-white">
                    
                    {/* Condensed View (Default) */}
                    <div className={`transition-all duration-300 ${isExpanded ? 'hidden' : 'block mt-auto'}`}>
                      <button onClick={(e) => { e.stopPropagation(); setExpandedId(servicio.id); }} className="flex items-center gap-1.5 text-lime-600 font-bold text-[9px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        Ver detalles
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>

                    {/* Expanded View */}
                    <div className={`overflow-hidden transition-all duration-[500ms] ease-in-out flex flex-col ${isExpanded ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[9px] lg:text-[10px] text-gray-500 mb-2 leading-relaxed">
                        {servicio.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {servicio.features.map((feature, idx) => (
                          <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded bg-gray-50 border border-gray-100 text-gray-600 font-bold uppercase tracking-wider shadow-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <button onClick={(e) => { e.stopPropagation(); setExpandedId(null); }} className="mt-auto flex items-center gap-1.5 text-gray-400 hover:text-gray-600 font-bold text-[9px] uppercase tracking-wider transition-colors pt-2 border-t border-gray-50">
                        Cerrar
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CiberseguridadIA;