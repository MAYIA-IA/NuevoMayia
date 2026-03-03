import { useState, useEffect } from 'react';

const CiberseguridadIA = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [floatingParticles, setFloatingParticles] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingParticles(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const servicios = [
    {
      id: 1,
      title: "Protección de Modelos IA",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      description: "Protegemos tus modelos de IA contra ataques adversarios, envenenamiento de datos y extracción de modelos. Implementamos técnicas de defensa robustas que garantizan la integridad y confidencialidad de tus algoritmos en producción.",
      color: "from-cyan-500 to-blue-600",
      label: "Defensa de Modelos ML/AI"
    },
    {
      id: 2,
      title: "Seguridad de Datos para IA",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      description: "Protegemos los datos de entrenamiento e inferencia de tus sistemas de IA. Implementamos cifrado homomórfico, federated learning y técnicas de privacidad diferencial para garantizar la confidencialidad mientras mantienes la utilidad de los datos.",
      color: "from-lime-500 to-green-600",
      label: "Privacidad de Datos AI/ML"
    },
    {
      id: 3,
      title: "Detección de Ataques IA",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      description: "Monitoreamos y detectamos ataques específicos contra sistemas de IA: ataques de evasión, de envenenamiento, de inferencia y de extracción. Nuestras soluciones utilizan IA para defender IA, creando un ecosistema de seguridad proactivo.",
      color: "from-purple-500 to-pink-600",
      label: "Threat Intelligence AI"
    },
    {
      id: 4,
      title: "Gobernanza y Compliance IA",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      description: "Cumplimiento con regulaciones específicas de IA. Establecemos marcos de gobernanza, evaluación de riesgo y procesos de auditoría continua para sistemas de IA éticos y seguros.",
      color: "from-orange-500 to-red-600",
      label: "AI Governance & Compliance"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-[#0a1f44] to-black py-20 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Partículas flotantes adicionales */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-lime-400 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-float-slow opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-slow opacity-60" style={{ animationDelay: '2s' }}></div>
        
        {/* Líneas decorativas animadas */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4ff00" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#d4ff00" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 200 100, 400 150 T 800 150" 
            stroke="url(#lineGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw-slow"
          />
          <path 
            d="M 600 500 Q 800 450, 1000 500 T 1400 500" 
            stroke="url(#lineGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw-slow"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Main title */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Ciberseguridad para </span>
                <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Sistemas de IA</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full animate-slide-in"></div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Protegemos tus sistemas de Inteligencia Artificial contra amenazas modernas. Desde la seguridad de datos de entrenamiento hasta la protección de modelos en producción, diseñamos soluciones de ciberseguridad especializadas para entornos de <span className="italic font-semibold text-cyan-400">MLOps</span> y <span className="italic font-semibold text-lime-400">AI-as-a-Service</span>.
            </p>
          </div>

          {/* Right side - CTA Box */}
          <div className="bg-gradient-to-br from-lime-400 via-yellow-300 to-lime-400 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Círculos orbitales */}
            <div className="absolute inset-0 rounded-3xl overflow-visible">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-gray-900/10 rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-gray-900/10 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 transform group-hover:scale-105 transition-transform duration-300">
                Protege tus sistemas de IA
              </h3>
              <div className="text-4xl font-bold text-gray-900 transform group-hover:scale-105 transition-transform duration-300">
                MAYiA <span className="font-light">cyberAI</span>
              </div>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg mt-4 relative overflow-hidden group/btn">
                <span className="relative z-10">AUDITORÍA DE SEGURIDAD AI</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-cyan-400/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              <div className="mt-4 px-6 py-2 bg-white rounded-full inline-block shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-gray-900 font-bold text-sm"> ¡Certificaciones de Ciberseguridad en FIRST, ISO 27001 y más!</span>
              </div>
            </div>
            
            {/* Partículas flotantes en la caja */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-900 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gray-900 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gray-900 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Labels Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {servicios.map((servicio, index) => (
            <div 
              key={`label-${servicio.id}`}
              className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${servicio.color} flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servicio.icon} />
                </svg>
              </div>
              <span className="text-white text-xs font-medium leading-tight">{servicio.label}</span>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div 
              key={servicio.id}
              onMouseEnter={() => setHoveredCard(servicio.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-transparent animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.15}s` }}
            >
              {/* Borde gradient en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

              {/* Contenido */}
              <div className="relative z-20 flex flex-col h-full">
                {/* Icono */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${servicio.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servicio.icon} />
                    </svg>
                    {/* Anillo pulsante */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-30 group-hover:animate-ping`}></div>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-[#0a1f44] mb-4 group-hover:text-cyan-700 transition-colors">
                  {servicio.title}
                </h3>

                {/* Descripción con flex-grow para empujar el botón al fondo */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 text-justify flex-grow">
                  {servicio.description}
                </p>

                {/* Botón en la parte inferior */}
                <div className="mt-auto">
                  <button className={`w-full bg-gradient-to-r ${servicio.color} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl relative overflow-hidden group/btn`}>
                    <span className="relative z-10">Solicitar Evaluación</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Partículas decorativas múltiples */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30`}></div>
              <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30`} style={{ animationDelay: '0.3s' }}></div>
              <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30`} style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-25px) translateX(0);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-50px) translateX(0);
          }
          75% {
            transform: translateY(-30px) translateX(-20px);
          }
        }
        
        @keyframes grid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        @keyframes draw-slow {
          from {
            stroke-dasharray: 0, 2000;
          }
          to {
            stroke-dasharray: 2000, 0;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        
        .animate-draw-slow {
          animation: draw-slow 5s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default CiberseguridadIA;