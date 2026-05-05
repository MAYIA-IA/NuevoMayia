import { useState } from 'react';

const CiberseguridadIA = () => {

  const servicios = [
    {
      id: 1,
      title: "Protección de Modelos",
      shortTitle: "Model Security",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      description: "Defensa contra ataques adversarios, envenenamiento de datos y extracción de modelos.",
      features: ["Ataques adversarios", "Envenenamiento", "Extracción"],
      color: "from-cyan-500 to-blue-600",
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
    <div id="ciberseguridad" className="w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black py-16 lg:py-24 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          
          {/* COLUMNA IZQUIERDA: Header, Threats & CTA */}
          <div className="flex-1 w-full lg:max-w-xl flex flex-col gap-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-gray-300 tracking-wide">Ciberseguridad Especializada en IA</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                <span className="text-white">Protege tus</span><br />
                <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  Sistemas de IA
                </span>
              </h2>

              <p className="text-sm md:text-base text-gray-400 max-w-lg mb-6 leading-relaxed">
                Desde datos de entrenamiento hasta modelos en producción.
                Seguridad especializada para <span className="text-lime-400 font-semibold">MLOps</span> y <span className="text-cyan-400 font-semibold">AI-as-a-Service</span>.
              </p>

              {/* Certificaciones badge - Inline */}
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm flex items-center gap-1.5 transition-colors hover:bg-white/10">
                    <svg className="w-3.5 h-3.5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-bold text-white tracking-wider">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Threat Dashboard Compacto */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Amenazas Detectadas (En vivo)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {threats.map((threat, idx) => (
                  <div key={idx} className="bg-black/20 border border-white/5 rounded-xl p-3 flex flex-col justify-between hover:bg-white/5 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[11px] font-medium text-gray-300 leading-tight">{threat.name}</span>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: threat.level === 'Critical' ? '#ef4444' : threat.level === 'High' ? '#f97316' : '#eab308', boxShadow: `0 0 8px ${threat.level === 'Critical' ? '#ef4444' : threat.level === 'High' ? '#f97316' : '#eab308'}` }}></div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1 mt-auto">
                      <div className={`h-1 rounded-full ${threat.color.replace('text', 'bg')}`} style={{ width: threat.level === 'Critical' ? '90%' : threat.level === 'High' ? '70%' : '50%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Final Compacto */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(163,230,53,0.3)] flex-1 flex items-center justify-center">
                Auditoría Gratuita
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 border border-white/10 hover:border-white/30 flex-1">
                Ver casos de éxito
              </button>
            </div>
            
          </div>

          {/* COLUMNA DERECHA: 4 Cards Grid */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-lime-400/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(163,230,53,0.15)] transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1"
                >
                  <div className={`relative bg-gradient-to-br ${servicio.color} p-5`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:12px_12px] opacity-30"></div>
                    
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servicio.icon} />
                        </svg>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-lg px-2.5 py-1 text-right shadow-sm border border-white/10">
                        <div className="text-sm font-bold text-white leading-none">{servicio.stat}</div>
                        <div className="text-[9px] text-white/90 uppercase tracking-wider mt-0.5">{servicio.statLabel}</div>
                      </div>
                    </div>
                    <div className="relative z-10 mt-4">
                      <h3 className="text-lg font-bold text-white leading-tight">{servicio.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {servicio.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {servicio.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className={`text-[10px] px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-600 font-semibold`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CiberseguridadIA;