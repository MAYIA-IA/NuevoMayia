import { useState } from 'react';

const CiberseguridadIA = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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
    <div id="ciberseguridad" className="w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section - Más compacto */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Ciberseguridad Especializada en IA</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Protege tus</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                Sistemas de IA
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Desde datos de entrenamiento hasta modelos en producción.
              Seguridad especializada para <span className="text-lime-400 font-semibold">MLOps</span> y <span className="text-cyan-400 font-semibold">AI-as-a-Service</span>
            </p>

            {/* Certificaciones badge */}
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-white">{cert.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Hero Box - Más compacto */}
          <div className="bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 rounded-2xl p-8 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  MAYiA <span className="font-light">cyberAI</span>
                </h3>
                <p className="text-gray-800 font-medium">
                  Auditoría de seguridad completa para tus sistemas de IA
                </p>
              </div>
              
              <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="flex-shrink-0 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-xl">
                Solicitar Auditoría
              </button>
            </div>
          </div>
        </div>

        {/* Threat Dashboard - Nuevo */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Amenazas Detectadas
            </h3>
            <span className="text-xs text-gray-400">Actualizado en tiempo real</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {threats.map((threat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-white">{threat.name}</span>
                  <span className={`text-xs font-bold ${threat.color} px-2 py-1 bg-white/10 rounded-full`}>
                    {threat.level}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${threat.color.replace('text', 'bg')}`}
                    style={{ width: threat.level === 'Critical' ? '90%' : threat.level === 'High' ? '70%' : '50%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - Más compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              onMouseEnter={() => setHoveredCard(servicio.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === servicio.id ? null : servicio.id)}
              className={`group relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer flex flex-col ${
                selectedCard === servicio.id
                  ? 'border-lime-400 shadow-2xl scale-[1.02]'
                  : 'border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300'
              }`}
            >
              {/* Header con gradiente */}
              <div className={`relative bg-gradient-to-br ${servicio.color} p-6 pb-12`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="relative z-10">
                  {/* Icono */}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servicio.icon} />
                    </svg>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {servicio.title}
                  </h3>
                  <p className="text-sm text-white/80 font-medium">
                    {servicio.shortTitle}
                  </p>
                </div>

                {/* Stat badge */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="text-xl font-bold text-white">{servicio.stat}</div>
                  <div className="text-xs text-white/80 text-center">{servicio.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {servicio.description}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {servicio.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${servicio.color} bg-opacity-10 text-gray-700 font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full mt-auto py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-gradient-to-r ${servicio.color} text-white hover:scale-[1.02] shadow-md hover:shadow-lg`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer');
                  }}
                >
                  Solicitar Evaluación
                </button>
              </div>

              {/* Línea decorativa */}
              <div className={`h-1 bg-gradient-to-r ${servicio.color} transform transition-transform duration-500 ${
                hoveredCard === servicio.id || selectedCard === servicio.id ? 'scale-x-100' : 'scale-x-0'
              } origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tus sistemas de IA están protegidos?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una evaluación gratuita de seguridad y descubre vulnerabilidades antes que los atacantes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Evaluación gratuita
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
                Ver casos de éxito
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Certificado FIRST</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">ISO 27001 / 27034</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Respuesta 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CiberseguridadIA;