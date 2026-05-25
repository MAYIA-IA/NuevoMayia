import { Shield, Zap, Target, Activity, Code, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: 'Defensa Neuronal', desc: 'Prevención activa de amenazas en tiempo real.' },
  { icon: Activity, title: 'Análisis Predictivo', desc: 'Anticipa anomalías en operaciones de TI.' },
  { icon: Code, title: 'Integración Nativa', desc: 'Compatible con tu stack tecnológico actual.' },
  { icon: Target, title: 'Respuesta Autónoma', desc: 'Toma de decisiones tácticas en milisegundos.' },
];

const Agente33 = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden text-gray-600 font-sans">
      
      {/* High-tech Background Light Mode */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(230, 235, 240, 0.9) 1px, transparent 1px),
          linear-gradient(90deg, rgba(230, 235, 240, 0.9) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.6
      }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(164,217,85,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-emerald-200 bg-emerald-50 shadow-sm">
              <ShieldAlert size={16} className="text-emerald-600 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 tracking-[0.2em] uppercase">Protocolo de Seguridad Activado</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Conoce a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500">Agente 33</span>
            </h2>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              La máxima expresión de inteligencia artificial táctica. Agente 33 no solo monitorea, <strong className="text-gray-900">neutraliza</strong>. Diseñado para entornos empresariales de alta exigencia donde un segundo marca la diferencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {FEATURES.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-200 group-hover:scale-110 transition-transform">
                    <feat.icon size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">{feat.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wide hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40">
              Desplegar Agente 33
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            
            {/* Hologram rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-emerald-300/40 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-emerald-400/30 animate-[spin_30s_linear_infinite_reverse]" />
            </div>

            {/* Core Agent Visual (Light mode adaptation) */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-emerald-100 to-white border-2 border-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-200/20 mix-blend-multiply group-hover:bg-emerald-300/30 transition-colors duration-700" />
              <Cpu size={80} className="text-emerald-500 relative z-20 animate-pulse drop-shadow-md" />
              
              {/* Scanline effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-30 opacity-60">
                <div className="w-full h-2 bg-emerald-400/40 blur-[1px] animate-[scan_3s_ease-in-out_infinite]" />
              </div>
            </div>
            
            {/* Stats Widgets */}
            <div className="absolute top-10 right-0 bg-white/90 backdrop-blur-md border border-emerald-200 rounded-2xl p-4 shadow-xl">
              <div className="text-xs text-gray-500 mb-1">Tiempo de Respuesta</div>
              <div className="text-2xl font-black text-gray-900 flex items-baseline gap-1">12<span className="text-sm text-emerald-600">ms</span></div>
            </div>

            <div className="absolute bottom-16 left-0 bg-white/90 backdrop-blur-md border border-emerald-200 rounded-2xl p-4 shadow-xl">
              <div className="text-xs text-gray-500 mb-1">Nivel de Amenaza</div>
              <div className="text-xl font-black text-emerald-600 flex items-center gap-2">Neutralizada <Zap size={16} /></div>
            </div>

          </div>
        </div>
        
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100px); }
          50% { transform: translateY(400px); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </section>
  );
};

export default Agente33;
