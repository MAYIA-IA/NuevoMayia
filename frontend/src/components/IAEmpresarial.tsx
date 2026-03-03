import { useState } from 'react';

const IAEmpresarial = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Consultoría MAYiA",
      description: "Para tener éxito en la Transformación Digital de tu negocio, es vital un enfoque de consultoría de negocios holístico y pragmático que abarque personas, procesos y tecnología con resultados tangibles. Estás buscando soporte para el éxito estratégico u operativo, nuestro enfoque impulsado por el ROI, aumenta la calidad, las mejores prácticas y la innovación constante.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 2,
      title: "Científicos de Datos",
      description: "Brindamos a nuestros clientes las innovaciones del mañana hoy. ¿Cómo lo hacemos? Con nuestro centro de I + D interno que desarrolla nuestra industria y soluciones específicas de función y con nuestro ecosistema (365x), que también reúne plataformas innovadoras de startups que revolucionan el mercado. Nuestro enfoque híbrido garantiza que obtengas la mejor solución disponible.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      id: 3,
      title: "Integración",
      description: "MAYiA es la primera plataforma integral de inteligencia artificial concebida en México. Unimos tecnología de vanguardia e infraestructura de datos soberana y desarrolló especializado para maximizar el impacto empresarial. Desde nuestra red nacional de centros de datos distribuidos, acercamos los modelos de IA a los datos de nuestros clientes, garantizando seguridad, confidencialidad y velocidad de respuesta para empresas, gobiernos y organizaciones de todos los tamaños.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: 4,
      title: "Mantener la continuidad operativa",
      description: "Una vez que has implementado tus soluciones, deben mantenerse, mantenerse seguras y preparadas para el futuro, tanto en términos de infraestructura como de aplicaciones comerciales. Nuestra división de atención al cliente tiene esta tarea mediante un servicio de sistemas internacional abierto las 24 horas, los 7 días de la semana, con soporte y capacitación.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  const features = [
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Business Consulting" },
    { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Científicos de Datos" },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Laboratorios de Pruebas de Concepto e Integración" },
    { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", label: "Capacitación y Acompañamiento" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Hero Section con efectos de fondo */}
      <div className="relative">
        {/* Efectos de fondo animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch relative z-10">
          {/* Left Side - Content */}
          <div className="flex-1 px-8 py-16 lg:px-16 lg:py-24">
            <div className="space-y-6 max-w-2xl">
              <div className="overflow-hidden">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0a1f44] via-cyan-700 to-[#0a1f44] bg-clip-text text-transparent animate-fade-in">
                  IA Empresarial
                </h1>
              </div>
              
              <div className="h-1 w-24 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full animate-slide-in"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Desarrollamos inteligencia artificial empresarial, desde la etapa de <span className="italic font-semibold text-cyan-600">discovery</span> hasta la implementación, diseñamos soluciones de IA personalizadas que optimizan procesos, mejoran la toma de decisiones y generan un retorno de inversión claro y medible.
              </p>
              
              <button className="group relative bg-gradient-to-r from-lime-400 to-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="relative z-10">RESERVA UNA REUNIÓN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Dark Section con efectos */}
          <div className="flex-1 bg-gradient-to-br from-[#0a1f44] via-[#0d2847] to-[#1a3a5c] px-8 py-16 lg:px-16 lg:py-24 relative overflow-hidden">
            {/* Círculos decorativos animados */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-10 right-10 w-64 h-64 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute top-20 right-20 w-48 h-48 border-2 border-lime-400/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute bottom-10 right-32 w-32 h-32 border-2 border-cyan-400/40 rounded-full animate-pulse"></div>
              
              {/* Puntos flotantes */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-lime-400 rounded-full animate-float"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <p className="text-sm text-cyan-300 font-semibold tracking-wider uppercase animate-fade-in">Inteligencia Artificial</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Reinventa tu negocio con
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">MAYiA</span>
                <span className="text-white font-light ml-3">consultoría</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Services Bar mejorado */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:border-lime-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-gradient-to-br from-cyan-400/20 to-lime-400/20">
                  <svg className="w-6 h-6 text-cyan-400 group-hover:text-lime-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <span className="text-white text-sm leading-tight flex-1 group-hover:text-lime-300 transition-colors">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section mejorada */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-lime-400/50"
            >
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-lime-400/10 via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icono animado */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-cyan-600 group-hover:text-lime-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0a1f44] mb-4 relative z-10 group-hover:text-cyan-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed flex-grow text-justify mb-6 relative z-10">
                {service.description}
              </p>

              <button className="relative mt-auto w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-lime-400 hover:to-cyan-400 text-white hover:text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 overflow-hidden group/btn">
                <span className="relative z-10">Reserva una reunión</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>

              {/* Decoración de esquina */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-400/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
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
        
        @keyframes slide-in {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(0);
          }
          75% {
            transform: translateY(-10px) translateX(-5px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default IAEmpresarial;