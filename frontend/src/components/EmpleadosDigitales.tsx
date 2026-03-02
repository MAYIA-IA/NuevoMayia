import robotVideo from "../assets/AgentesConsultores/Robot_Asistente_con_Variaciones_de_Vestimenta.mp4";
import { useState, useEffect, useRef } from 'react';

const EmpleadosDigitales = () => {
  const [activeConversation, setActiveConversation] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Configurar video para reproducción automática
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Autoplay bloqueado:", e);
        // Mostrar botón de reproducción si autoplay es bloqueado
      });
    }
  }, []);

  // Rotación automática de conversaciones
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConversation((prev) => (prev + 1) % 4);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const conversaciones = [
    {
      id: 1,
      text: "Procesé tu solicitud de crédito. Todo aprobado en 3 minutos. ¿Te envío los documentos?",
      user: "Ana - Finanzas",
      avatar: "💼",
      position: "top-left",
      color: "from-cyan-500 to-blue-600",
      tag: "Finanzas"
    },
    {
      id: 2,
      text: "Detecté que necesitas reabastecer 12 productos prioritarios. ¿Genero la orden de compra?",
      user: "Marco - Inventario",
      avatar: "📦",
      position: "top-right",
      color: "from-lime-500 to-green-600",
      tag: "Operaciones"
    },
    {
      id: 3,
      text: "Tu junta de mañana está confirmada. Ya envié el brief y materiales a todos los participantes.",
      user: "Sofia - Asistente",
      avatar: "📅",
      position: "bottom-left",
      color: "from-purple-500 to-pink-600",
      tag: "Productividad"
    },
    {
      id: 4,
      text: "Las conversiones subieron 28% esta semana. El ROI de la campaña actual es excelente.",
      user: "David - Marketing",
      avatar: "📊",
      position: "bottom-right",
      color: "from-orange-500 to-red-600",
      tag: "Ventas"
    }
  ];

  const stats = [
    { value: "24/7", label: "Disponibilidad", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "10x", label: "Más productivo", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { value: "85%", label: "Ahorro de tiempo", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "0", label: "Errores humanos", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header modernizado */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Empleados Digitales Inteligentes</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Aumenta la productividad de tu equipo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Empleados digitales que <span className="text-lime-400 font-semibold">piensan, actúan y evolucionan</span> con tu empresa
          </p>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-400/10 to-cyan-500/10 border border-lime-400/30 rounded-full backdrop-blur-sm">
            <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-lime-400">100% Confidencialidad de tus datos</span>
          </div>
        </div>

        {/* Main Content Area - Rediseñado */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left side - Conversaciones */}
            <div className="flex-1 w-full">
              <div className="space-y-4">
                {conversaciones.map((conv, index) => (
                  <div
                    key={conv.id}
                    className={`transform transition-all duration-700 ${
                      activeConversation === index 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-40 translate-x-4 scale-95'
                    }`}
                  >
                    <div className={`relative bg-gradient-to-br ${conv.color} rounded-2xl p-5 shadow-2xl`}>
                      {/* Tag superior */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                          {conv.tag}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                          <span className="text-xs text-white/80">En línea</span>
                        </div>
                      </div>

                      {/* Usuario */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                          {conv.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{conv.user}</div>
                          <div className="text-xs text-white/70">Empleado Digital</div>
                        </div>
                      </div>

                      {/* Mensaje */}
                      <p className="text-white text-base leading-relaxed font-medium">
                        {conv.text}
                      </p>

                      {/* Typing indicator cuando está activo */}
                      {activeConversation === index && isTyping && (
                        <div className="flex gap-1 mt-3 pt-3 border-t border-white/20">
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}

                      {/* Acciones rápidas */}
                      {activeConversation === index && !isTyping && (
                        <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
                          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105">
                            ✓ Aprobar
                          </button>
                          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105">
                            → Ver detalles
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores de conversación */}
              <div className="flex justify-center gap-2 mt-6">
                {conversaciones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveConversation(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeConversation === index 
                        ? 'w-8 bg-lime-400' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Agente visual con VIDEO */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Círculo luminoso animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Container principal */}
                <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem]">
                  {/* Anillos orbitales */}
                  <div className="absolute inset-0 rounded-t-full overflow-visible">
                    <div className="absolute inset-0 border-2 border-lime-400/30 rounded-t-full animate-spin-slow"></div>
                    <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-t-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  </div>
                  
                  {/* Video con borde gradient - REEMPLAZADO IMAGEN POR VIDEO */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 rounded-t-full p-1 shadow-2xl">
                      <div className="w-full h-full bg-gray-900 rounded-t-full overflow-hidden">
                        <video
                          ref={videoRef}
                          src={robotVideo}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lime-400/10 via-transparent to-cyan-400/10 mix-blend-overlay"></div>
                      </div>
                    </div>

                    {/* Badge "IA Activa" */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full shadow-2xl">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="text-gray-900 font-bold text-sm">IA Activa</span>
                      </div>
                    </div>
                  </div>

                  {/* Partículas flotantes mejoradas */}
                  <div className="absolute top-1/4 -left-6 w-4 h-4 bg-lime-400 rounded-full animate-float-slow shadow-lg shadow-lime-400/50 blur-sm"></div>
                  <div className="absolute top-1/2 -right-6 w-3 h-3 bg-cyan-400 rounded-full animate-float-slow shadow-lg shadow-cyan-400/50 blur-sm" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/3 -left-8 w-3 h-3 bg-yellow-300 rounded-full animate-float-slow shadow-lg shadow-yellow-300/50 blur-sm" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Nuevo */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section mejorado */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu equipo?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Implementa empleados digitales en tu empresa y libera a tu equipo para tareas estratégicas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              <span className="relative z-10 flex items-center gap-2">
                Solicitar demo gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button className="group text-white font-semibold flex items-center gap-2 hover:text-lime-400 transition-colors">
              Ver casos de éxito
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Sin instalación</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Implementación en 48hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Soporte dedicado</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-30px) translateX(0);
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EmpleadosDigitales;