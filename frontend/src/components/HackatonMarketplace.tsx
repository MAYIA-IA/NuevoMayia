/* HackatonMarketplace.tsx -> Marketplace.tsx
   Marketplace de Soluciones de IA
   Muestra los proyectos y agentes desarrollados.
*/
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Zap, Trophy, Medal, Target, FileSignature, ThumbsUp, Rocket, X, ShoppingCart } from 'lucide-react';
import lumelImg from '../assets/Marketplace/lumel.png';
import agente33Img from '../assets/Marketplace/agente33.png';
import GalagaBg from './GalagaBg';

interface Proyecto {
  id: number;
  titulo: string;
  equipo: string;
  descripcion: string;
  categoria: string;
  tecnologias: string[];
  votos: number;
  estado: 'destacado' | 'popular' | 'nuevo' | 'inscrito';
  premio?: string;
  color: string;
  imagen: string;
}

/* ── EDITAR AQUÍ: proyectos del marketplace ── */
const PROYECTOS: Proyecto[] = [
  { id: 1, titulo: 'Lumel', equipo: 'Equipo de RRHH', descripcion: 'La Inteligencia Artificial no tiene por qué ser fría. Lumel combina procesamiento de lenguaje natural avanzado con un entendimiento profundo del comportamiento humano, ideal para recursos humanos.', categoria: 'RRHH', tecnologias: ['Empatía Cognitiva', 'LLM', 'MAYiA API'], votos: 984, estado: 'popular', color: '#f472b6', imagen: lumelImg },
  { id: 2, titulo: 'Agente 33', equipo: 'Seguridad MAYiA', descripcion: 'La máxima expresión de inteligencia artificial táctica. Agente 33 no solo monitorea, neutraliza. Diseñado para entornos empresariales de alta exigencia.', categoria: 'Seguridad', tecnologias: ['Computer Vision', 'Defensa Neuronal', 'Respuesta Autónoma'], votos: 1250, estado: 'destacado', color: '#10b981', imagen: agente33Img },
  { id: 3, titulo: 'MCP CDMX', equipo: 'Claude Impact', descripcion: 'Asistente de IA soberana de la CDMX. Permite a los usuarios consultar datos sobre movilidad, medio ambiente y finanzas utilizando herramientas MCP en tiempo real.', categoria: 'GovTech', tecnologias: ['CopilotKit', 'MCP', 'React'], votos: 890, estado: 'nuevo', color: '#f97316', imagen: 'galaga' },
];

const ESTADOS: Record<Proyecto['estado'], { label: string; color: string; bg: string; icon: any }> = {
  destacado: { label: 'Destacado',  color: '#A4D955', bg: 'rgba(164,217,85,0.15)', icon: Trophy },
  popular:   { label: 'Popular',    color: '#f59e0b', bg: 'rgba(245,158,11,0.15)', icon: ThumbsUp },
  nuevo:     { label: 'Nuevo',      color: '#f97316', bg: 'rgba(249,115,22,0.15)', icon: Zap },
  inscrito:  { label: 'En desarrollo', color: '#9ca3af', bg: 'rgba(156,163,175,0.1)' , icon: Rocket },
};

const CATEGORIAS = ['Todas', 'RRHH', 'Seguridad', 'GovTech'];

export default function HackatonMarketplace() {
  const [filtro, setFiltro] = useState('Todas');
  const [showList, setShowList] = useState(false);
  const proyectosFiltrados = filtro === 'Todas' ? PROYECTOS : PROYECTOS.filter(p => p.categoria === filtro);

  return (
    <>
      <section id="hackaton" className="w-full bg-white relative overflow-hidden flex flex-col h-[80vh] min-h-[580px] py-4 lg:py-6">
        <div className="container m-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* LEFT SIDE: Info & Join */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="text-left mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-50 border border-lime-200 rounded-full mb-3">
                <Zap size={14} className="animate-pulse text-lime-500" />
                <span className="text-[9px] sm:text-[10px] font-bold text-lime-700 tracking-wider uppercase">Ecosistema Inteligente MAYiA</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                Marketplace de<br /><span className="text-lime-600">Soluciones IA</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-md">
                Explora agentes, modelos y soluciones integrales creadas para resolver problemas específicos en tu industria. Conecta e invierte en el futuro.
              </p>

              {/* Stats inline */}
              <div className="flex gap-4 sm:gap-6 mb-5">
                {[{ v: '+12', l: 'proyectos' }, { v: '3', l: 'top' }, { v: '3', l: 'categorías' }].map(s => (
                  <div key={s.l} className="text-left">
                    <div className="text-xl sm:text-2xl font-black text-gray-900 leading-none mb-1">{s.v}</div>
                    <div className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Join CTA integrated */}
              <div className="bg-gray-900 rounded-2xl p-4 shadow-xl relative overflow-hidden group border border-gray-800">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                   <Rocket size={48} className="text-lime-500" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">¿Tienes una solución de IA para empresas?</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 mb-3 max-w-[250px] relative z-10">Integra tu proyecto al ecosistema y llega a miles de corporativos.</p>
                <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 bg-gradient-to-r from-lime-400 to-lime-600 text-gray-900 font-bold text-[10px] sm:text-xs px-4 py-2 rounded-lg hover:scale-105 transition-transform relative z-10 shadow-lg">
                  Unirse al Marketplace
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Filters & Grid */}
          <div className="w-full lg:w-7/12 flex flex-col">
            {/* Filtros */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 justify-start lg:justify-end">
              {CATEGORIAS.map(cat => (
                <button key={cat} onClick={() => setFiltro(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    filtro === cat ? 'bg-lime-100 border border-lime-400 text-lime-700 shadow-sm' : 'bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid Dinámico */}
            <div className={`grid gap-3 ${
              proyectosFiltrados.length === 1 ? 'grid-cols-1' :
              proyectosFiltrados.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {proyectosFiltrados.map(p => {
                const est = ESTADOS[p.estado];
                return (
                  <div key={p.id} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-[280px] lg:h-[340px]"
                    style={{ boxShadow: p.estado === 'destacado' ? `0 10px 40px ${p.color}20` : '' }}
                  >
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                      {p.imagen === 'galaga' ? (
                        <div className="w-full h-full scale-[1.2] opacity-60 group-hover:scale-100 transition-transform duration-700">
                          <GalagaBg />
                        </div>
                      ) : (
                        <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                      
                      {/* Top Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border" style={{ color: est.color, borderColor: `${p.color}40`}}>
                          <est.icon size={12} /> {est.label}
                        </span>
                      </div>

                      <div className="transform translate-y-6 lg:translate-y-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0">
                        <p className="text-[9px] sm:text-[10px] font-bold mb-1 tracking-wider uppercase" style={{ color: p.color }}>{p.categoria}</p>
                        <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">{p.titulo}</h3>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2 sm:mb-3">
                          {p.tecnologias.map(t => (
                            <span key={t} className="text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-sm text-gray-200 border border-white/5">{t}</span>
                          ))}
                        </div>

                        {/* Desc & extra (shown on hover) */}
                        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-2">
                          <p className="text-[9px] sm:text-[10px] text-gray-300 leading-snug mb-3 line-clamp-2">{p.descripcion}</p>
                          
                          <div className="flex justify-between items-center pt-2 border-t border-white/10">
                            <div className="flex items-center gap-1 text-white shrink-0">
                              <ThumbsUp size={10} className="text-gray-400" />
                              <span className="text-[9px] sm:text-[10px] font-bold">{p.votos.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full list button */}
            <div className="mt-5 flex justify-center lg:justify-end">
              <button 
                onClick={() => setShowList(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs px-5 py-2.5 rounded-full border border-gray-700 shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <ShoppingCart size={14} className="text-lime-400" />
                Mostrar lista completa
              </button>
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* Modal Lista Completa (Light Theme - React Portal para sobreponer a todo) */}
      {showList && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <ShoppingCart className="text-lime-600" />
                Marketplace Completo
              </h2>
              <button onClick={() => setShowList(false)} className="text-gray-500 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
            
            {/* List */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-white">
              {PROYECTOS.map(p => {
                const est = ESTADOS[p.estado];
                return (
                  <div key={p.id} className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-lime-500 hover:shadow-md transition-all">
                    {/* Visual */}
                    <div className="w-full sm:w-1/3 h-48 sm:h-auto rounded-xl overflow-hidden relative shrink-0 border border-gray-100">
                      {p.imagen === 'galaga' ? (
                        <GalagaBg />
                      ) : (
                        <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-[9px] font-bold px-2 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm" style={{ color: est.color }}>
                        <est.icon size={10} /> {est.label}
                      </div>
                    </div>
                    
                    {/* Data */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.categoria}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{p.titulo}</h3>
                          </div>
                          {/* Price Tag */}
                          <div className="bg-lime-50 border border-lime-200 px-3 py-1.5 rounded-lg text-right shrink-0 shadow-sm">
                            <div className="text-[9px] text-lime-700 font-bold uppercase">Precio Promocional</div>
                            <div className="text-xs sm:text-sm font-black text-lime-600">$10.00 Pesos Mexicanos</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{p.descripcion}</p>
                        
                        {/* Tech */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.tecnologias.map(t => (
                            <span key={t} className="text-[10px] font-medium px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <button className="text-gray-500 hover:text-gray-900 font-bold text-xs px-4 py-2 transition-colors">Ver demo</button>
                        <button className="bg-gradient-to-r from-lime-400 to-lime-600 text-gray-900 font-bold text-xs px-6 py-2 rounded-lg hover:scale-105 transition-transform shadow-md">
                          Adquirir
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
