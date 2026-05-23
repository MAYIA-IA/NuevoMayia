import { useState } from 'react';
import { HeartHandshake, Palette, Sparkles, MessageCircleHeart, ArrowRight, BrainCircuit } from 'lucide-react';

const CAPABILITIES = [
  { icon: MessageCircleHeart, title: 'Empatía Cognitiva', desc: 'Comprende el tono y emoción del usuario para respuestas humanas.' },
  { icon: Palette, title: 'Diseño Generativo', desc: 'Asistencia creativa para generar ideas visuales y conceptuales.' },
  { icon: HeartHandshake, title: 'Asesoría HR', desc: 'Apoyo en clima laboral, onboarding y bienestar del empleado.' },
];

const Lumel = () => {
  const [activeCap, setActiveCap] = useState(0);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden text-gray-800 font-sans">
      
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(192,132,252,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col-reverse 2xl:flex-row gap-16 items-center">
          
          {/* Left Column: Visual Interactive */}
          <div className="w-full 2xl:w-1/2 flex justify-center relative">
            
            {/* Soft Glowing Orb */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-400 to-orange-300 rounded-full blur-[40px] opacity-60 animate-pulse" />
              <div className="absolute inset-4 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105">
                <BrainCircuit size={64} className="text-purple-500 mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Hola, soy Lumel</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Tu asistente creativo y emocional. <br /> Estoy aquí para inspirarte.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Text Info */}
          <div className="w-full 2xl:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-pink-50 border border-pink-200 shadow-sm">
              <Sparkles size={16} className="text-pink-500" />
              <span className="text-xs font-bold text-pink-600 tracking-wide uppercase">Inteligencia Emocional IA</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Descubre a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Lumel</span>
            </h2>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              La Inteligencia Artificial no tiene por qué ser fría. Lumel combina procesamiento de lenguaje natural avanzado con un entendimiento profundo del comportamiento humano, ideal para recursos humanos, creatividad y atención a clientes premium.
            </p>

            <div className="space-y-4 mb-10">
              {CAPABILITIES.map((cap, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeCap === idx 
                      ? 'bg-white shadow-xl border-purple-100 scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                  onClick={() => setActiveCap(idx)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeCap === idx ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <cap.icon size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${activeCap === idx ? 'text-gray-900' : 'text-gray-600'}`}>
                      {cap.title}
                    </h4>
                    <p className={`text-sm ${activeCap === idx ? 'text-gray-600' : 'text-gray-400'}`}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Conversar con Lumel
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-pink-400" />
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Lumel;
