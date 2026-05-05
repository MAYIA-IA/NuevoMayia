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
    <div id="empleados-digitales" className="w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black py-12 lg:py-16 relative overflow-hidden flex flex-col justify-center min-h-screen lg:min-h-0">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* LEFT SIDE: Info, Stats & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col">
            {/* Header modernizado */}
            <div className="text-left mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 backdrop-blur-sm">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-300">Empleados Digitales Inteligentes</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Aumenta la productividad
              </h2>
              <p className="text-base text-gray-300 mb-4 max-w-lg">
                Empleados digitales que <span className="text-lime-400 font-semibold">piensan, actúan y evolucionan</span> con tu empresa.
              </p>

              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-lime-400/10 to-cyan-500/10 border border-lime-400/30 rounded-full backdrop-blur-sm">
                <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-lime-400">100% Confidencialidad</span>
              </div>
            </div>

            {/* Stats Grid Compacto */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-lime-400/20 to-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wide leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section Compacto */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Listo para transformar tu equipo?
              </h3>
              <p className="text-xs text-gray-300 mb-4 max-w-md">
                Implementa empleados digitales en tu empresa y libera a tu equipo para tareas estratégicas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="w-full sm:w-auto group relative bg-gradient-to-r from-lime-400 to-cyan-500 hover:from-lime-500 hover:to-cyan-600 text-gray-900 font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Solicitar demo gratuita
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="text-white font-semibold text-xs flex items-center gap-1 hover:text-lime-400 transition-colors">
                  Ver casos de éxito
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Visuals (Conversations + Video) */}
          <div className="w-full lg:w-7/12 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
            
            {/* Conversations */}
            <div className="flex-1 w-full max-w-sm relative">
              <div className="space-y-3">
                {conversaciones.map((conv, index) => (
                  <div
                    key={conv.id}
                    className={`transform transition-all duration-700 ${
                      activeConversation === index 
                        ? 'opacity-100 translate-x-0 scale-100 absolute inset-0 z-20' 
                        : 'opacity-0 translate-x-4 scale-95 pointer-events-none absolute inset-0 z-10'
                    }`}
                  >
                    <div className={`relative bg-gradient-to-br ${conv.color} rounded-2xl p-4 shadow-2xl h-full flex flex-col justify-between border border-white/10`}>
                      <div>
                        {/* Tag superior */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full">
                            {conv.tag}
                          </span>
                          <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-medium text-white">En línea</span>
                          </div>
                        </div>

                        {/* Usuario */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-lg border border-white/20 shadow-inner">
                            {conv.avatar}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white leading-tight">{conv.user}</div>
                            <div className="text-[10px] text-white/80">Empleado Digital</div>
                          </div>
                        </div>

                        {/* Mensaje */}
                        <p className="text-white text-sm leading-relaxed font-medium bg-black/10 p-3 rounded-xl border border-white/5">
                          {conv.text}
                        </p>
                      </div>

                      {/* Typing indicator */}
                      {activeConversation === index && isTyping && (
                        <div className="flex gap-1.5 mt-3 pt-3 border-t border-white/20">
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}

                      {/* Acciones rápidas */}
                      {activeConversation === index && !isTyping && (
                        <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
                          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold py-2 px-2 rounded-lg transition-all duration-300 shadow-sm">
                            ✓ Aprobar
                          </button>
                          <button className="flex-1 bg-black/20 hover:bg-black/30 backdrop-blur-md text-white text-xs font-semibold py-2 px-2 rounded-lg transition-all duration-300 shadow-sm border border-white/10">
                            Detalles
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contenedor estático para dar altura a las tarjetas absolutas */}
              <div className="h-64 invisible"></div>

              {/* Indicadores de conversación */}
              <div className="flex justify-center gap-2 mt-4">
                {conversaciones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveConversation(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeConversation === index 
                        ? 'w-6 bg-lime-400' 
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Video Agent */}
            <div className="shrink-0 relative">
              {/* Círculo luminoso animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Container principal */}
              <div className="relative w-56 h-72 lg:w-64 lg:h-80">
                {/* Anillos orbitales */}
                <div className="absolute inset-0 rounded-t-full overflow-visible">
                  <div className="absolute inset-0 border-2 border-lime-400/30 rounded-t-full animate-spin-slow"></div>
                  <div className="absolute inset-3 border-2 border-cyan-400/30 rounded-t-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                </div>
                
                {/* Video */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 rounded-t-full p-[3px] shadow-2xl">
                    <div className="w-full h-full bg-gray-900 rounded-t-full overflow-hidden relative">
                      <video
                        ref={videoRef}
                        src={robotVideo}
                        className="w-full h-full object-cover scale-[1.02]"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-overlay"></div>
                    </div>
                  </div>

                  {/* Badge "IA Activa" */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-lime-400 to-cyan-500 rounded-full shadow-xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      <span className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wider">IA Activa</span>
                    </div>
                  </div>
                </div>

                {/* Partículas flotantes */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-lime-400 rounded-full animate-float-slow shadow-[0_0_15px_rgba(163,230,53,0.8)] blur-[1px]"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow shadow-[0_0_15px_rgba(34,211,238,0.8)] blur-[1px]" style={{ animationDelay: '1s' }}></div>
              </div>
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