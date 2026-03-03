import imagenAgente from "../assets/AgentesConsultores/Imagen6.png";
import { useState, useEffect } from 'react';

const EmpleadosDigitales = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [typingEffect, setTypingEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingEffect(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const conversaciones = [
    {
      id: 1,
      text: "¡Hola! ¿En qué puedo ayudarte hoy? Puedo procesar tu solicitud de crédito en menos de 5 minutos.",
      position: "top-left",
      color: "from-lime-400 to-green-500",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      id: 2,
      text: "He analizado tu inventario y detecté que necesitas reabastecer 15 productos. ¿Quieres que genere la orden?",
      position: "top-right",
      color: "from-cyan-400 to-blue-500",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      id: 3,
      text: "Tu reunión de mañana ha sido confirmada. Te envié el resumen de los temas a tratar y los documentos necesarios.",
      position: "bottom-left",
      color: "from-purple-400 to-pink-500",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      id: 4,
      text: "Revisé las métricas de tu campaña. Las conversiones aumentaron 23% esta semana. ¿Quieres ver el reporte completo?",
      position: "bottom-right",
      color: "from-yellow-400 to-orange-500",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-[#0a1f44] to-black py-20 px-4 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid animado */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
        
        {/* Círculos luminosos */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Líneas decorativas animadas */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4ff00" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#d4ff00" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 150 50, 300 100 T 600 100" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw"
          />
          <path 
            d="M 800 400 Q 950 350, 1100 400 T 1400 400" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Text mejorado */}
        <div className="text-center mb-16 px-4">
          <div className="inline-block space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight animate-fade-in">
              Aumenta la productividad de tu fuerza laboral:
            </h2>
            <h3 className="text-2xl lg:text-4xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                ¿Cómo tus empleados piensan, actúan y evolucionan con tu empresa?
              </span>
            </h3>
            <div className="flex items-center justify-center gap-3 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-lime-400"></div>
              <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-cyan-300 text-sm font-semibold">Confidencialidad absoluta de tus datos en nuestra fábrica de IA</p>
              <div className="h-px w-20 bg-gradient-to-r from-lime-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Content Area mejorado */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          <div className="relative w-full max-w-6xl h-[600px]">
            
            {conversaciones.map((conv, index) => {
              const positions = {
                'top-left': 'top-0 left-0 lg:left-12',
                'top-right': 'top-0 right-0 lg:right-12',
                'bottom-left': 'bottom-0 left-0 lg:left-12',
                'bottom-right': 'bottom-0 right-0 lg:right-12'
              };

              return (
                <div 
                  key={conv.id}
                  className={`absolute ${positions[conv.position as keyof typeof positions]} w-64 lg:w-72 animate-fade-in group cursor-pointer`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveChat(conv.id)}
                  onMouseLeave={() => setActiveChat(null)}
                >
                  {/* Burbuja de chat */}
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${conv.color} rounded-3xl p-6 shadow-2xl transform transition-all duration-500 ${activeChat === conv.id ? 'scale-110 rotate-2' : 'scale-100 rotate-0'}`}>
                      {/* Icono */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <svg className={`w-6 h-6 bg-gradient-to-br ${conv.color} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={conv.icon} />
                        </svg>
                      </div>
                      
                      <p className="text-white text-sm font-medium leading-relaxed pr-6">
                        {conv.text}
                      </p>
                      
                      {/* Indicador de typing */}
                      {typingEffect && activeChat === conv.id && (
                        <div className="flex gap-1 mt-3">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}
                    </div>

                    {/* Línea conectora animada */}
                    <svg 
                      className={`absolute w-24 h-16 transition-opacity duration-300 ${activeChat === conv.id ? 'opacity-100' : 'opacity-40'}`}
                      style={{
                        [conv.position.includes('top') ? 'bottom' : 'top']: '-32px',
                        [conv.position.includes('left') ? 'left' : 'right']: '32px'
                      }}
                      viewBox="0 0 100 50"
                    >
                      <path 
                        d={conv.position.includes('left') ? "M 20 0 Q 30 25, 10 50" : "M 80 0 Q 70 25, 90 50"}
                        stroke="url(#lineGradient)" 
                        strokeWidth="3" 
                        fill="none"
                        strokeLinecap="round"
                        className="animate-draw"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}

            {/* Center Image con efectos */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 lg:w-80 lg:h-[28rem]">
              {/* Círculo luminoso de fondo pulsante */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Anillos orbitales */}
              <div className="absolute inset-0 rounded-t-full overflow-visible">
                <div className="absolute inset-0 border-2 border-lime-400/40 rounded-t-full animate-ping-slow"></div>
                <div className="absolute inset-4 border-2 border-cyan-400/40 rounded-t-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Imagen con borde gradient estático */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 rounded-t-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-t-full overflow-hidden">
                    <img 
                      src={imagenAgente}
                      alt="Asistente Digital"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 via-transparent to-cyan-400/20 mix-blend-overlay"></div>
                  </div>
                </div>
                
                {/* Partículas flotantes mejoradas */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-lime-400 rounded-full animate-float shadow-lg shadow-lime-400/50"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 -left-6 w-2 h-2 bg-yellow-300 rounded-full animate-float shadow-lg shadow-yellow-300/50" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 -right-6 w-2 h-2 bg-lime-300 rounded-full animate-float shadow-lg shadow-lime-300/50" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reserve Button mejorado */}
        <div className="flex justify-center mt-12 px-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-400 hover:from-cyan-400 hover:to-lime-400 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
            <span className="relative z-10">Reserva una reunión</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
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
        
        @keyframes draw {
          from {
            stroke-dasharray: 0, 1000;
          }
          to {
            stroke-dasharray: 1000, 0;
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
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-25px) translateX(0);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-draw {
          animation: draw 3s ease-in-out infinite;
        }
        
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EmpleadosDigitales;