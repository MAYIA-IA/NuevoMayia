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



  return (
    <div id="ia-empresarial" className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden flex flex-col justify-center py-12 lg:py-16 relative">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Side: Hero Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm self-start">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">Inteligencia Artificial Empresarial</span>
            </div>

            {/* Título principal */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              <span className="text-gray-900">Reinventa tu negocio</span>
              <br />
              <span className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                con IA empresarial
              </span>
            </h1>

            {/* Propuesta de valor concisa */}
            <p className="text-sm text-gray-600 mb-5 max-w-lg leading-relaxed">
              Desde <span className="font-semibold text-gray-900">discovery</span> hasta implementación. 
              Soluciones IA que optimizan procesos y generan <span className="font-semibold text-gray-900">ROI medible</span>.
            </p>

            {/* Stats rápidos */}
            <div className="flex flex-row flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-none">2-4 meses</div>
                  <div className="text-[10px] text-gray-600 uppercase">Implementación</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-green-700 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-none">100%</div>
                  <div className="text-[10px] text-gray-600 uppercase">Soberanía</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-none">24/7</div>
                  <div className="text-[10px] text-gray-600 uppercase">Soporte</div>
                </div>
              </div>
            </div>

            {/* CTA principal */}
            <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="group self-start relative bg-gradient-to-r from-lime-400 to-lime-600 hover:from-lime-500 hover:to-lime-700 text-gray-900 font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg mt-2">
              <span className="relative z-10 flex items-center gap-2">
                Agendar consultoría gratuita
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Side: Services Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
                  className={`group relative bg-white rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                    expandedCard === service.id 
                      ? 'border-lime-400 shadow-lg z-10' 
                      : 'border-gray-200 shadow-sm hover:border-lime-200'
                  }`}
                >
                  {/* Icono y badge */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lime-400/20 to-lime-600/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} /></svg>
                    </div>
                    {/* Stat badge */}
                    <div className="text-right">
                      <div className="text-lg font-bold bg-gradient-to-r from-lime-500 to-lime-700 bg-clip-text text-transparent leading-none">
                        {service.stat}
                      </div>
                      <div className="text-[9px] uppercase tracking-wide text-gray-500">{service.statLabel}</div>
                    </div>
                  </div>
                  {/* Título */}
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">{service.title}</h3>
                  {/* Short description */}
                  <p className="text-[11px] text-gray-600 mb-1 leading-snug">{service.shortDesc}</p>
                  
                  {/* Full description - animada */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === service.id ? 'max-h-32 opacity-100 mb-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-[11px] text-gray-700 leading-relaxed pt-2 border-t border-gray-100 mt-2">
                      {service.fullDesc}
                    </p>
                  </div>
                  
                  {/* Indicador expandir */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-lime-600 group-hover:text-lime-700 mt-auto pt-1">
                    {expandedCard === service.id ? 'OCULTAR' : 'VER MÁS'}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${expandedCard === service.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>



      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default IAEmpresarial;