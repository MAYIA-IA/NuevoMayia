import { useState } from 'react';
import { Download, FileText, Mail, Phone, ExternalLink, Globe, PlayCircle, Mic, User } from 'lucide-react';

const COMUNICADOS = [
  {
    id: 1,
    date: '22 Mayo 2026',
    title: 'MAYiA Anuncia Inversión de $50M para Expandir Infraestructura de IA en Latinoamérica',
    pdf: '#',
  },
  {
    id: 2,
    date: '10 Abril 2026',
    title: 'Alianza Estratégica con Intel para Procesamiento Neuronal Edge',
    pdf: '#',
  },
  {
    id: 3,
    date: '15 Marzo 2026',
    title: 'Lanzamiento de "Píldoras IA": Democratizando la Automatización para PyMES',
    pdf: '#',
  },
];

const ENLACES_MEDIOS = [
  { title: 'Entrevista en Forbes México', icon: Mic, link: '#' },
  { title: 'Reportaje Especial Expansión', icon: FileText, link: '#' },
  { title: 'Webinar: El futuro del trabajo', icon: PlayCircle, link: '#' },
];

const SalaPrensa = () => {
  const [hoveredCom, setHoveredCom] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden text-gray-600">
      
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(164,217,85,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-cyan-50 border border-cyan-100 shadow-sm">
            <Globe size={16} className="text-cyan-500" />
            <span className="text-sm font-bold text-cyan-800 tracking-wide uppercase">Centro de Medios</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sala de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lime-500">Prensa</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Toda la información oficial, comunicados de prensa, recursos gráficos y contacto para medios de comunicación interesados en MAYiA.
          </p>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-12">
          
          {/* Main Column: Comunicados */}
          <div className="2xl:col-span-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="text-cyan-500" /> Últimos Comunicados
            </h3>
            
            <div className="space-y-4">
              {COMUNICADOS.map((com) => (
                <div 
                  key={com.id} 
                  className="group relative bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-50 hover:border-gray-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/5 cursor-pointer"
                  onMouseEnter={() => setHoveredCom(com.id)}
                  onMouseLeave={() => setHoveredCom(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-cyan-500 mb-2 uppercase tracking-wider">{com.date}</div>
                      <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-lime-600 transition-colors">
                        {com.title}
                      </h4>
                    </div>
                    <a 
                      href={com.pdf} 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0"
                      title="Descargar PDF"
                    >
                      <Download size={20} className={hoveredCom === com.id ? 'animate-bounce' : ''} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Mic className="text-lime-500" /> En los Medios
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {ENLACES_MEDIOS.map((enlace, idx) => (
                  <a 
                    key={idx} 
                    href={enlace.link} 
                    className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:bg-gray-50 hover:border-lime-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <enlace.icon size={32} className="text-gray-400 group-hover:text-lime-500 mb-4 transition-colors" />
                    <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{enlace.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column: Media Kit & Contact */}
          <div className="2xl:col-span-4 space-y-8">
            
            {/* Media Kit */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-cyan-100 rounded-full blur-2xl group-hover:bg-cyan-200 transition-all" />
              <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Media Kit</h4>
              <p className="text-sm text-gray-500 mb-8 relative z-10">
                Descarga nuestro logotipo oficial en alta resolución, manual de identidad gráfica y fotografías corporativas.
              </p>
              <button className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold flex items-center justify-center gap-2 transition-colors relative z-10 shadow-lg shadow-cyan-500/20">
                <Download size={18} /> Descargar Kit (ZIP)
              </button>
            </div>

            {/* Contacto de Prensa */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Contacto de Prensa</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <User size={18} className="text-lime-500" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">Relaciones Públicas</div>
                    <div className="text-sm text-gray-500">Equipo de Comunicación MAYiA</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-cyan-600 transition-colors">
                    prensa@mayia.ai
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-lime-50 group-hover:text-lime-500 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-lime-600 transition-colors">
                    +52 55 5331 5526
                  </div>
                </div>
              </div>
            </div>

            {/* RRSS Link */}
            <a href="https://www.linkedin.com/company/mayia-edgenet/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 hover:border-gray-300 transition-all group">
              <span className="font-bold text-gray-700 group-hover:text-gray-900">Síguenos en LinkedIn</span>
              <ExternalLink size={18} className="text-gray-400 group-hover:text-cyan-500" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SalaPrensa;
