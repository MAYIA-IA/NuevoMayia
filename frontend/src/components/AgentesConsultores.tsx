import img1 from "../assets/AgentesConsultores/Imagen1.jpg";
import img2 from "../assets/AgentesConsultores/Imagen2.jpg";
import img3 from "../assets/AgentesConsultores/Imagen4.jpg";
import img4 from "../assets/AgentesConsultores/Imagen5.jpg"

import { useState } from 'react';

const AgentesConsultores = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const consultores = [
    {
      id: 1,
      title: "CONSULTOR DIGITAL ROI IA",
      description: "Cuantifica y mide los resultados de negocio y el ROI de cualquier solución tecnológica y empresarial, desde el análisis de valor previo a la inversión hasta la medición de beneficios, incluyendo análisis de probabilidad y riesgo.",
      image: img1,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "CONSULTOR DIGITAL ESTRATEGIA IA",
      description: "Desarrolla una estrategia integral de IA empresarial mediante la planificación coordinada del portafolio de sistemas de IA y la evolución de las competencias y habilidades de la fuerza laboral.",
      image: img2,
      color: "from-lime-500 to-green-600"
    },
    {
      id: 3,
      title: "CONSULTOR DIGITAL CIBER RIESGO IA",
      description: "Inteligencia convertida para evaluar y establecer un portafolio estratégico de ciberseguridad, mitigando riesgos en activos operativos y equilibrando el impacto financiero, optimizando y alineando las inversiones en ciberseguridad con los objetivos estratégicos del negocio.",
      image: img3,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "CONSULTOR DIGITAL INNOVACIÓN EMPRESARIAL",
      description: "Para democratizar la innovación empresarial, mediante un proceso que estructura la identificación y autoGeneración de ideas, categorizadas por nivel de complejidad, con sugerencias de soluciones para resolver las necesidades y objetivos estratégicos de la empresa.",
      image: img4,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-gray-100 to-white py-16 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h1 className="text-5xl lg:text-6xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#0a1f44] via-cyan-700 to-[#0a1f44] bg-clip-text text-transparent">
                IA Empresarial
              </span>
              <span className="ml-4 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                AGENTES CONSULTORES
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 rounded-full mt-4"></div>
          </div>
          <p className="text-base text-gray-600 mt-6 max-w-3xl mx-auto">
            Sistemas Multi-Agente de IA (disponibles como <span className="font-bold text-cyan-600">VaaS</span> y <span className="font-bold text-cyan-600">SaaS</span>) 
            <span className="ml-2 px-3 py-1 bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 rounded-full text-sm font-bold">Modelo Xtrive MR</span>
          </p>
        </div>

        {/* Cards Grid mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultores.map((consultor) => (
            <div 
              key={consultor.id}
              onMouseEnter={() => setHoveredId(consultor.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-transparent"
            >
              {/* Borde gradient en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${consultor.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

              {/* Image con overlay */}
              <div className="relative h-48 overflow-hidden z-20">
                <img 
                  src={consultor.image} 
                  alt={consultor.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${consultor.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Icono flotante */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500 shadow-lg">
                  <svg className={`w-6 h-6 bg-gradient-to-br ${consultor.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col flex-grow z-20">
                <h3 className="text-lg font-bold text-[#0a1f44] mb-4 min-h-[3.5rem] flex items-center group-hover:text-cyan-700 transition-colors">
                  {consultor.title}
                </h3>
                
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow text-justify">
                  {consultor.description}
                </p>

                {/* Promoción Badge mejorado */}
                <div className="mb-4">
                  <span className={`inline-block bg-gradient-to-r ${consultor.color} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    PROMOCIÓN
                  </span>
                </div>

                {/* Price and Buttons */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button className="group/btn relative bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-yellow-300 hover:to-lime-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden shadow-md hover:shadow-xl">
                      <span className="relative z-10">COMPRAR<br />AHORA</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#0a1f44] to-cyan-700 bg-clip-text text-transparent">
                        $98,000
                      </span>
                      <span className="text-xs text-gray-500">MXN</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-600 hover:to-lime-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl relative overflow-hidden group/btn2">
                    <span className="relative z-10">Reserva una reunión</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn2:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Partículas decorativas */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30" style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentesConsultores;