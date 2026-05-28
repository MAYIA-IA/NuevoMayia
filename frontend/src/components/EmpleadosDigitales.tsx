import robotVideo from "../assets/AgentesConsultores/Robot_Asistente_con_Variaciones_de_Vestimenta.mp4";
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Package, Calendar, BarChart3 } from 'lucide-react';

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
      icon: Briefcase,
      position: "top-left",
      color: "from-lime-500 to-green-600",
      tag: "Finanzas"
    },
    {
      id: 2,
      text: "Detecté que necesitas reabastecer 12 productos prioritarios. ¿Genero la orden de compra?",
      user: "Marco - Inventario",
      icon: Package,
      position: "top-right",
      color: "from-lime-500 to-green-600",
      tag: "Operaciones"
    },
    {
      id: 3,
      text: "Tu junta de mañana está confirmada. Ya envié el brief y materiales a todos los participantes.",
      user: "Sofia - Asistente",
      icon: Calendar,
      position: "bottom-left",
      color: "from-purple-500 to-pink-600",
      tag: "Productividad"
    },
    {
      id: 4,
      text: "Las conversiones subieron 28% esta semana. El ROI de la campaña actual es excelente.",
      user: "David - Marketing",
      icon: BarChart3,
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
    <div id="empleados-digitales" className="w-full bg-white py-6 lg:py-10 relative overflow-hidden flex flex-col justify-center h-[80vh] min-h-[500px]">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* LEFT SIDE: Info, Stats & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col">
            {/* Header modernizado */}
            <div className="text-left mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-lime-500 to-green-600 rounded-full mb-3 shadow-md">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-wider uppercase">Inteligencia Artificial para tu organigrama</span>
              </div>

              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                Aumenta la productividad
              </h2>
              <p className="text-sm text-gray-600 mb-3 max-w-md">
                Empleados digitales que <span className="text-lime-600 font-semibold">piensan, actúan y evolucionan</span> con tu empresa.
              </p>

              {/* Trust badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-lime-50 border border-lime-200 rounded-full mb-4">
                <svg className="w-3.5 h-3.5 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-bold text-lime-700">100% Confidencialidad</span>
              </div>
            </div>

            {/* Stats Grid Compacto */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center hover:bg-lime-50 hover:border-lime-200 transition-all">
                  <div className="text-sm font-bold text-gray-900 leading-none mb-1">{stat.value}</div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-wide leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Section Compacto */}
            <div className="flex flex-row gap-3 items-center mt-2">
              <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0','_blank','noopener,noreferrer')} className="bg-gradient-to-r from-lime-400 to-lime-600 hover:from-lime-500 hover:to-lime-700 text-gray-900 font-bold py-2 px-5 rounded-lg text-xs transition-all duration-300 shadow-md hover:scale-105 flex items-center gap-1">
                Solicitar demo
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="text-gray-600 font-semibold text-[10px] sm:text-xs hover:text-lime-600 transition-colors">
                Ver casos de éxito
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Visuals (Video + Horizontal Conversations) */}
          <div className="w-full lg:w-7/12 flex flex-col items-center justify-center gap-6">
            
            {/* Video Agent (Arriba) */}
            <div className="shrink-0 relative mt-2">
              {/* Círculo luminoso animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-lime-600/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Container principal */}
              <div className="relative w-48 h-64 lg:w-56 lg:h-72">
                {/* Anillos orbitales */}
                <div className="absolute inset-0 rounded-t-full overflow-visible">
                  <div className="absolute inset-0 border-2 border-lime-400/30 rounded-t-full animate-spin-slow"></div>
                  <div className="absolute inset-3 border-2 border-lime-400/20 rounded-t-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                </div>
                
                {/* Video */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-lime-300 to-lime-400 rounded-t-full p-[3px] shadow-2xl">
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
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      <span className="text-gray-900 font-extrabold text-[11px] uppercase tracking-wider">IA Activa</span>
                    </div>
                  </div>
                </div>

                {/* Partículas flotantes */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-lime-400 rounded-full animate-float-slow shadow-[0_0_15px_rgba(163,230,53,0.8)] blur-[1px]"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-lime-300 rounded-full animate-float-slow shadow-[0_0_15px_rgba(163,230,53,0.8)] blur-[1px]" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Conversations Horizontal Bar (Abajo) */}
            <div className="w-full max-w-[420px] h-20 relative shrink-0">
              {conversaciones.map((conv, index) => (
                <div
                  key={conv.id}
                  className={`transform transition-all duration-700 absolute inset-0 ${
                    activeConversation === index 
                      ? 'opacity-100 translate-y-0 scale-100 z-20' 
                      : 'opacity-0 translate-y-4 scale-95 pointer-events-none z-10'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-r ${conv.color} rounded-2xl p-3 shadow-xl flex items-center justify-between gap-3 overflow-hidden border border-white/10`}>
                    
                    {/* Left: Icon */}
                    <div className="shrink-0 flex items-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                        <conv.icon size={18} className={`text-white transition-all ${activeConversation === index && isTyping ? 'animate-bounce' : ''}`} />
                      </div>
                    </div>

                    {/* Center: Message */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white leading-none">{conv.user}</span>
                        <span className="text-[8px] font-bold text-white/90 uppercase bg-black/20 px-1.5 py-0.5 rounded-full leading-none">{conv.tag}</span>
                      </div>
                      <p className="text-[11px] text-white/90 leading-tight font-medium line-clamp-2">
                        {conv.text}
                      </p>
                    </div>

                    {/* Right: Actions or Typing */}
                    <div className="shrink-0 flex flex-col items-end justify-center">
                      {activeConversation === index && isTyping ? (
                        <div className="flex gap-1.5 py-2 px-3">
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      ) : (
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[10px] font-bold py-1.5 px-3 rounded-lg transition-all shadow-sm border border-white/10 flex items-center gap-1">
                          Aprobar
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              ))}

              {/* Indicadores de conversación en la parte inferior */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5">
                {conversaciones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveConversation(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeConversation === index ? 'w-5 bg-lime-500' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
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