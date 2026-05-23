/* HackatonMarketplace.tsx
   Marketplace de ideas del Hackaton Desarrolladores Intel × MAYiA
   Para añadir proyectos reales: edita el array PROYECTOS.
*/
import { useState } from 'react';
import { Zap, Trophy, Medal, Target, FileSignature, ThumbsUp, Rocket } from 'lucide-react';

interface Proyecto {
  id: number;
  titulo: string;
  equipo: string;
  descripcion: string;
  categoria: string;
  tecnologias: string[];
  votos: number;
  estado: 'inscrito' | 'semifinal' | 'finalista' | 'ganador';
  premio?: string;
  color: string;
}

/* ── EDITAR AQUÍ: proyectos del hackaton ── */
const PROYECTOS: Proyecto[] = [
  { id: 1, titulo: 'AgroIA - Predicción de Cosechas', equipo: 'Team Colibri', descripcion: 'Modelo de visión computacional que predice rendimiento de cosechas con drones y datos climáticos del CONAGUA en tiempo real.', categoria: 'AgriTech', tecnologias: ['TensorFlow', 'Intel OpenVINO', 'Python'], votos: 847, estado: 'ganador', premio: '$200,000 MXN', color: '#A4D955' },
  { id: 2, titulo: 'LegalBot MX', equipo: 'Lex Machina', descripcion: 'Asistente legal IA entrenado en el marco jurídico mexicano, capaz de redactar contratos y analizar riesgo regulatorio para PyMES.', categoria: 'LegalTech', tecnologias: ['LLM', 'RAG', 'FastAPI'], votos: 612, estado: 'finalista', color: '#60a5fa' },
  { id: 3, titulo: 'SaludIA Rural', equipo: 'CodeMed', descripcion: 'Diagnóstico médico básico vía WhatsApp para comunidades sin acceso a especialistas. Operado por agentes IA y validado por médicos remotamente.', categoria: 'HealthTech', tecnologias: ['Twilio', 'MAYiA API', 'Node.js'], votos: 589, estado: 'finalista', color: '#34d399' },
  { id: 4, titulo: 'MuniBot - Trámites sin Filas', equipo: 'GovHackers', descripcion: 'Plataforma de automatización de trámites municipales con reconocimiento de documentos y firma digital para 15 municipios piloto.', categoria: 'GovTech', tecnologias: ['OCR', 'Blockchain', 'React'], votos: 445, estado: 'semifinal', color: '#f59e0b' },
  { id: 5, titulo: 'EduAgent - Tutor Personalizado', equipo: 'Aprende+', descripcion: 'Tutor IA adaptativo para secundaria que ajusta el nivel, ritmo y estilo de enseñanza según el progreso individual de cada estudiante.', categoria: 'EdTech', tecnologias: ['GPT-4', 'Next.js', 'PostgreSQL'], votos: 398, estado: 'semifinal', color: '#a78bfa' },
  { id: 6, titulo: 'FinQauntum - Trading Cuántico', equipo: 'Q-Finance', descripcion: 'Algoritmo de optimización de portafolio usando computación cuántica e IBM Quantum para maximizar retorno ajustado al riesgo en mercados latinoamericanos.', categoria: 'FinTech', tecnologias: ['IBM Quantum', 'Qiskit', 'Python'], votos: 367, estado: 'inscrito', color: '#f472b6' },
];

const ESTADOS: Record<Proyecto['estado'], { label: string; color: string; bg: string; icon: any }> = {
  ganador:   { label: 'Ganador',    color: '#A4D955', bg: 'rgba(164,217,85,0.15)', icon: Trophy },
  finalista: { label: 'Finalista',  color: '#f59e0b', bg: 'rgba(245,158,11,0.15)', icon: Medal },
  semifinal: { label: 'Semifinal',  color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', icon: Target },
  inscrito:  { label: 'Inscrito',   color: '#9ca3af', bg: 'rgba(156,163,175,0.1)' , icon: FileSignature },
};

const CATEGORIAS = ['Todas', 'AgriTech', 'LegalTech', 'HealthTech', 'GovTech', 'EdTech', 'FinTech'];

export default function HackatonMarketplace() {
  const [filtro, setFiltro] = useState('Todas');
  const proyectosFiltrados = filtro === 'Todas' ? PROYECTOS : PROYECTOS.filter(p => p.categoria === filtro);

  return (
    <section style={{ background: '#ffffff', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap' as const }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)', marginBottom: 16 }}>
              <Zap size={14} className="animate-pulse" style={{ color: '#A4D955' }} />
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>Hackaton Desarrolladores Intel × MAYiA</span>
            </div>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: '#111827', margin: '0 0 12px', lineHeight: 1.2 }}>
              Marketplace de<br /><span style={{ color: '#4d7c0f' }}>Ideas con IA</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 460, margin: 0 }}>
              Jóvenes desarrolladores compiten con soluciones reales de IA para México. Vota, conecta e invierte en la próxima generación.
            </p>
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
            {[{ v: '$500K', l: 'MXN en premios' }, { v: '48', l: 'equipos inscritos' }, { v: '6', l: 'categorías activas' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#111827' }}>{s.v}</div>
                <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 32 }}>
          {CATEGORIAS.map(cat => (
            <button key={cat} onClick={() => setFiltro(cat)}
              style={{ padding: '6px 16px', borderRadius: 99, border: `1px solid ${filtro === cat ? '#A4D955' : '#e5e7eb'}`, background: filtro === cat ? 'rgba(164,217,85,0.1)' : '#f9fafb', color: filtro === cat ? '#4d7c0f' : '#6b7280', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {proyectosFiltrados.map(p => {
            const est = ESTADOS[p.estado];
            return (
              <div key={p.id} className="group"
                style={{ background: '#fafafa', border: `1px solid ${p.estado === 'ganador' ? p.color + '60' : '#f3f4f6'}`, borderRadius: 18, overflow: 'hidden', transition: 'all 0.3s', boxShadow: p.estado === 'ganador' ? `0 4px 24px ${p.color}20` : 'none' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}18`; e.currentTarget.style.borderColor = `${p.color}50`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = p.estado === 'ganador' ? `0 4px 24px ${p.color}20` : 'none'; e.currentTarget.style.borderColor = p.estado === 'ganador' ? p.color + '60' : '#f3f4f6'; }}
              >
                {/* Top bar */}
                <div style={{ height: 4, background: `linear-gradient(to right, ${p.color}, ${p.color}80)` }} />
                <div style={{ padding: '20px 22px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 800, padding: '3px 10px', borderRadius: 99, background: est.bg, color: est.color, letterSpacing: '0.06em' }}>
                      <est.icon size={12} /> {est.label}
                    </span>
                    <span style={{ fontSize: 10, color: '#9ca3af' }}>#{p.id.toString().padStart(3, '0')}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 4px' }}>{p.titulo}</h3>
                  <p style={{ fontSize: 11, color: p.color, fontWeight: 600, margin: '0 0 10px' }}>por {p.equipo} · {p.categoria}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: '0 0 14px' }}>{p.descripcion}</p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 16 }}>
                    {p.tecnologias.map(t => (
                      <span key={t} style={{ fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 6, background: '#f3f4f6', color: '#374151' }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span className="group-hover:scale-125 transition-transform duration-300"><ThumbsUp size={14} style={{ color: '#111827' }} /></span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{p.votos.toLocaleString()}</span>
                      <span style={{ fontSize: 10, color: '#9ca3af' }}>votos</span>
                    </div>
                    {p.premio && (
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#A4D955', background: 'rgba(164,217,85,0.1)', padding: '4px 12px', borderRadius: 99, border: '1px solid rgba(164,217,85,0.3)' }}>{p.premio}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA inscripción */}
        <div style={{ marginTop: 52, background: 'linear-gradient(135deg, #0A0A14 0%, #111118 100%)', borderRadius: 24, padding: '40px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', textAlign: 'center' as const }}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-full mb-4 shadow-[0_0_20px_rgba(164,217,85,0.2)]">
            <Rocket size={32} className="text-lime-500 animate-pulse" />
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', margin: '0 0 10px' }}>¿Tienes una idea que transforme México?</h3>
          <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 24px', maxWidth: 440 }}>Inscríbete al Hackaton Intel × MAYiA. La próxima startup unicornio mexicana puede ser la tuya.</p>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer"
            style={{ padding: '12px 32px', borderRadius: 12, background: 'linear-gradient(135deg, #A4D955, #65a30d)', color: '#0A0A14', fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>
            Inscribir mi equipo →
          </a>
        </div>
      </div>
    </section>
  );
}
