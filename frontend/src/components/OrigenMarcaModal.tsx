import { useState } from 'react';
import { 
  Sparkles, Eye, TrendingUp, Brain, Compass, Clock, Zap, BookOpen 
} from 'lucide-react';
import { brandingConfig } from '../config/branding';

const { colores } = brandingConfig;

export default function OrigenMarcaModal() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const achievements = [
    {
      title: "Lectura de Señales",
      desc: "Los mayas miraban el cielo para leer señales.",
      icon: Eye,
      color: "#A4D955",
      bgGlow: "rgba(164,217,85,0.06)"
    },
    {
      title: "Toma de Decisiones",
      desc: "Estudiaban los ciclos para tomar decisiones.",
      icon: TrendingUp,
      color: "#60a5fa",
      bgGlow: "rgba(96,165,250,0.06)"
    },
    {
      title: "Generación de Conocimiento",
      desc: "Transformaban la observación en conocimiento.",
      icon: Brain,
      color: "#a78bfa",
      bgGlow: "rgba(167,139,250,0.06)"
    },
    {
      title: "Arquitectura y Cálculo",
      desc: "Convertían el cálculo en arquitectura.",
      icon: Compass,
      color: "#f59e0b",
      bgGlow: "rgba(245,158,11,0.06)"
    },
    {
      title: "Sistemas de Tiempo",
      desc: "Hacían del tiempo un sistema.",
      icon: Clock,
      color: "#10b981",
      bgGlow: "rgba(16,185,129,0.06)"
    },
    {
      title: "Filosofía de Inteligencia",
      desc: "Hacían de la inteligencia una forma de vida.",
      icon: Zap,
      color: "#6366f1",
      bgGlow: "rgba(99,102,241,0.06)"
    }
  ];

  return (
    <div 
      className="relative w-full py-10 px-6 sm:px-10 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(164,217,85,0.08)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(96,165,250,0.06)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(164,217,85,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(164,217,85,0.12)', border: '1px solid rgba(164,217,85,0.3)' }}>
            <Sparkles size={14} className="text-lime-600 animate-pulse" />
            <span className="text-xs font-bold text-lime-700 tracking-wider uppercase">El origen de nuestra marca</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
            ¿Por qué MAYIA?
          </h1>
          <p className="text-sm font-semibold text-gray-500 max-w-md mx-auto">
            La unión de la inteligencia ancestral y la inteligencia artificial (Maya + IA)
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #A4D955, #65a30d)' }} />
        </div>

        {/* Narrative Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md mb-8 leading-relaxed text-gray-700">
          <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
            MAYIA nace de una raíz profunda: <span className="text-lime-600">Maya + IA</span>.
          </p>
          <p className="text-base sm:text-lg italic text-center text-gray-600 border-l-4 border-lime-400 pl-4 py-2 my-6 bg-slate-50/50 rounded-r-xl">
            "Un nombre que une la inteligencia ancestral de México con la inteligencia artificial que hoy está escribiendo una nueva etapa para el mundo."
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-4">
            La civilización maya fue una civilización del conocimiento. Observó el cielo con precisión, desarrolló sistemas matemáticos, midió el tiempo, construyó ciudades, creó arquitectura monumental, entendió ciclos naturales, dejó escritura, símbolos y una visión extraordinaria sobre la relación entre el ser humano, la naturaleza y el universo.
          </p>
        </div>

        {/* Mayan Achievements Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-wide justify-center">
            <BookOpen size={16} className="text-lime-500" />
            La civilización del conocimiento
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((item, idx) => {
              const isHovered = hoveredCard === idx;
              const Icon = item.icon;

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between"
                  style={{
                    borderColor: isHovered ? item.color : '#e5e7eb',
                    boxShadow: isHovered 
                      ? `0 20px 40px -8px ${item.color}35, 0 0 24px 2px ${item.color}20, inset 0 0 24px 2px ${item.color}1c` 
                      : 'none',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    background: isHovered 
                      ? `radial-gradient(120% 120% at 50% 50%, rgba(255, 255, 255, 0) 30%, ${item.color}0f 100%)` 
                      : '#ffffff'
                  }}
                >
                  <div>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${item.color}15`, 
                        color: item.color,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout Banner */}
        <div className="bg-lime-400/10 border border-lime-400/20 rounded-3xl p-6 sm:p-8 text-center mt-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-lime-700 mb-2">Inspiración e Identidad</h3>
          <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed max-w-2xl mx-auto">
            "Porque antes de hablar de inteligencia artificial, México ya tenía una historia profunda de inteligencia. MAYIA es inteligencia artificial con raíz mexicana."
          </p>
          <p className="text-xs font-semibold text-lime-700 mt-4 tracking-wider uppercase">
            De esa inspiración nace MAYIA
          </p>
        </div>

      </div>
    </div>
  );
}
