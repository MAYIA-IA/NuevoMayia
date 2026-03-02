import { useState } from 'react';

const IAEmpresarial = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Consultoría Estratégica",
      shortDesc: "Transformación digital con ROI medible",
      fullDesc: "Enfoque holístico en personas, procesos y tecnología con resultados tangibles. Aumentamos calidad, mejores prácticas e innovación constante.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      stat: "2-3x",
      statLabel: "ROI promedio"
    },
    {
      id: 2,
      title: "Científicos de Datos",
      shortDesc: "Soluciones innovadoras hoy, no mañana",
      fullDesc: "Centro de I+D interno y ecosistema 365x que reúne startups innovadoras. Garantizamos la mejor solución disponible con enfoque híbrido.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      stat: "365x",
      statLabel: "Ecosistema"
    },
    {
      id: 3,
      title: "Integración Completa",
      shortDesc: "Primera plataforma IA integral de México",
      fullDesc: "Infraestructura soberana y desarrollo especializado. Red nacional de centros de datos que acercan los modelos a tus datos con velocidad y seguridad.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      stat: "100%",
      statLabel: "Soberanía"
    },
    {
      id: 4,
      title: "Soporte 24/7",
      shortDesc: "Continuidad operativa garantizada",
      fullDesc: "Mantenimiento, seguridad y preparación para el futuro. Servicio internacional 24/7 con soporte y capacitación continua.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      stat: "24/7",
      statLabel: "Disponible"
    }
  ];

  const features = [
    { label: "Consultoría", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Data Science", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { label: "Integración", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Capacitación", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Hero Section - Más limpio y directo */}
      <div className="relative min-h-[70vh] flex items-center pb-16">
        {/* Efectos de fondo sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Inteligencia Artificial Empresarial</span>
            </div>

            {/* Título principal - más impactante */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Reinventa tu negocio</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 via-cyan-500 to-lime-400 bg-clip-text text-transparent">
                con IA empresarial
              </span>
            </h1>

            {/* Propuesta de valor concisa */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Desde <span className="font-semibold text-gray-900">discovery</span> hasta implementación. 
              Soluciones IA que optimizan procesos y generan <span className="font-semibold text-gray-900">ROI medible</span>.
            </p>

            {/* Stats rápidos */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2-4 meses</div>
                  <div className="text-sm text-gray-600">Implementación</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Soberanía de datos</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Soporte continuo</div>
                </div>
              </div>
            </div>

            {/* CTA principal - uno solo, poderoso */}
            <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Agendar consultoría gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Features bar - más compacto */}
      <div className="bg-gray-900 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400/20 to-cyan-500/20 border border-lime-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <span className="text-white font-medium group-hover:text-lime-400 transition-colors">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid - Cards expandibles */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
          <p className="text-lg text-gray-600">Soluciones integrales para tu transformación digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              className={`group relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer ${
                expandedCard === service.id 
                  ? 'border-lime-400 shadow-2xl scale-105 md:col-span-2' 
                  : 'border-gray-200 shadow-lg hover:border-gray-300 hover:shadow-xl'
              }`}
            >
              {/* Icono y badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>

                {/* Stat badge */}
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-cyan-500 bg-clip-text text-transparent">
                    {service.stat}
                  </div>
                  <div className="text-xs text-gray-500">{service.statLabel}</div>
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Short description - siempre visible */}
              <p className="text-sm text-gray-600 mb-4">
                {service.shortDesc}
              </p>

              {/* Full description - solo cuando se expande */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedCard === service.id ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Indicador expandir */}
              <div className="flex items-center gap-2 text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                {expandedCard === service.id ? 'Ver menos' : 'Ver más'}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${expandedCard === service.id ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Decoración de esquina */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-lime-400/10 to-transparent rounded-bl-full transition-opacity duration-300 ${
                expandedCard === service.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA secundario */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No estás seguro por dónde empezar?</p>
          <button className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2 mx-auto group">
            Hablemos de tu proyecto
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default IAEmpresarial;