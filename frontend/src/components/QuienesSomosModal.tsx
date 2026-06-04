import { useState } from 'react';
import { 
  Building2, Cpu, Server, Shield, Users, Award, 
  TrendingUp, Globe, Sparkles, BookOpen, Star, HelpCircle
} from 'lucide-react';
import { brandingConfig } from '../config/branding';

const { colores } = brandingConfig;

export default function QuienesSomosModal() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pillars = [
    {
      id: 'roi',
      title: 'ROI · Retorno sobre la Inversión',
      desc: 'Maximizar la rentabilidad del negocio mediante automatización inteligente, optimización operativa y eficiencia de procesos.',
      color: '#A4D955',
      bgGlow: 'rgba(164,217,85,0.08)',
      borderHover: 'rgba(164,217,85,0.4)',
      icon: TrendingUp,
    },
    {
      id: 'rl',
      title: 'RL · Retorno Laboral',
      desc: 'Capacitar y potenciar al talento humano, liberándolo de tareas repetitivas y elevando su competitividad tecnológica.',
      color: '#60a5fa',
      bgGlow: 'rgba(96,165,250,0.08)',
      borderHover: 'rgba(96,165,250,0.4)',
      icon: Award,
    },
    {
      id: 'rs',
      title: 'RS · Retorno Social',
      desc: 'Impulsar el desarrollo nacional, la inclusión tecnológica, la soberanía digital y la productividad de México.',
      color: '#a78bfa',
      bgGlow: 'rgba(167,139,250,0.08)',
      borderHover: 'rgba(167,139,250,0.4)',
      icon: Globe,
    }
  ];

  const coreStrengths = [
    {
      icon: Server,
      title: '30 Centros de Datos IA Ready',
      desc: 'Infraestructura interconectada nacional para procesamiento local.'
    },
    {
      icon: Shield,
      title: 'Nube Soberana FLAI',
      desc: 'Soberanía digital con datos protegidos dentro de México.'
    },
    {
      icon: Users,
      title: 'Implementation Squads',
      desc: 'Ingenieros especializados dedicados a la adopción y monitoreo.'
    },
    {
      icon: BookOpen,
      title: 'Academia & Embajadores',
      desc: 'Programas de formación continua y red de pioneros de IA.'
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
            <span className="text-xs font-bold text-lime-700 tracking-wider uppercase">Fábrica de IA Aplicada</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            ¿Quiénes Somos?
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #A4D955, #65a30d)' }} />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md mb-8 leading-relaxed text-gray-700">
          <p className="text-base sm:text-lg font-medium text-gray-900 mb-4">
            MAYIA Inteligencia Artificial es una fábrica mexicana de inteligencia artificial aplicada que ayuda a empresas, gobiernos, PYMES e industrias a implementar IA de forma segura, estratégica, privada, confiable y medible.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Integramos estrategia de IA, nube soberana, infraestructura tecnológica, centros de datos IA Ready, laboratorios de innovación, agentes inteligentes, automatización, análisis de datos, ciberseguridad, monitoreo, gobernanza, Squads de IA, desarrolladores especializados, Embajadores MAYIA, Human-in-the-Loop, capacitación empresarial y la Academia MAYIA para convertir datos, procesos y talento humano en productividad real.
          </p>
        </div>

        {/* 2. Infrastructure & Ecosystem Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#0B0B14] to-[#121220] rounded-3xl p-6 sm:p-8 text-white border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-lime-400/10 text-lime-400 border border-lime-400/20 uppercase tracking-widest mb-4">
                Red Soberana Nacional
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Infraestructura más grande del país
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                MAYIA vive sobre <span className="text-white font-semibold">30 centros de datos IA Ready</span> interconectados a nivel nacional y enlazados con <span className="text-lime-400 font-semibold">FLAI</span>, la nube soberana mexicana. Desde esta infraestructura, ofrecemos un entorno privado, confiable y gobernado para desarrollar, operar y escalar agentes de IA empresariales con latencia ultrabaja y total privacidad.
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-8 h-8 rounded-lg bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                <Globe size={16} />
              </div>
              <span className="text-xs font-semibold text-gray-300">Entorno 100% regulado y seguro</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-blue-100 text-blue-700 border border-blue-200 uppercase tracking-widest mb-4">
                Acompañamiento End-to-End
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                Ecosistema de Implementación
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Acompañamos a nuestros clientes desde el diagnóstico y la estrategia hasta la implementación, monitoreo, mejora continua y medición de resultados. Incluimos laboratorios de IA, Squads de implementación, desarrolladores, marketplace de soluciones y servicios especializados diseñados para llevar la IA a la operación diaria.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {coreStrengths.slice(2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <item.icon size={14} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Core strengths grid */}
        <div className="bg-[#f8fafc] border border-gray-200/50 rounded-3xl p-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((strength, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-lime-50 border border-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <strength.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{strength.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Three Dimensions of Return */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-wide justify-center">
            <Star size={16} className="text-lime-500 animate-spin" style={{ animationDuration: '6s' }} />
            Triple Retorno de Valor (ROI, RL, RS)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar) => {
              const isHovered = hoveredCard === pillar.id;
              const Icon = pillar.icon;

              return (
                <div 
                  key={pillar.id}
                  onMouseEnter={() => setHoveredCard(pillar.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between"
                  style={{
                    borderColor: isHovered ? pillar.color : '#e5e7eb',
                    boxShadow: isHovered ? `0 12px 24px ${pillar.color}15` : 'none',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    backgroundColor: isHovered ? pillar.bgGlow : '#ffffff'
                  }}
                >
                  <div>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${pillar.color}15`, 
                        color: pillar.color,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Mission Statement */}
        <div className="bg-lime-400/10 border border-lime-400/20 rounded-3xl p-6 sm:p-8 text-center mt-8">
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-lime-700 mb-2">Nuestra Misión</h3>
          <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed max-w-2xl mx-auto">
            "Convertir la inteligencia artificial en una capacidad productiva nacional, elevando el talento humano y generando un impacto social de inclusión y soberanía digital en todo México."
          </p>
        </div>

      </div>
    </div>
  );
}
