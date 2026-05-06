/* NetworkingHub.tsx
   Red de conexión entre empresas y talento IA en México.
   Para añadir perfiles reales: edita los arrays EMPRESAS y TALENTO.
*/
import { useState } from 'react';

type Tab = 'empresas' | 'talento';

interface EmpresaCard { id: number; nombre: string; sector: string; ciudad: string; busca: string[]; tamaño: string; color: string; }
interface TalentoCard { id: number; nombre: string; rol: string; especialidad: string[]; ciudad: string; disponibilidad: 'inmediata' | '1mes' | '3meses'; nivel: 'Junior' | 'Mid' | 'Senior' | 'Lead'; color: string; }

const EMPRESAS: EmpresaCard[] = [
  { id: 1, nombre: 'Fintech Nexus MX', sector: 'Finanzas', ciudad: 'CDMX', busca: ['ML Engineer', 'Data Scientist', 'NLP Specialist'], tamaño: '51-200 empleados', color: '#A4D955' },
  { id: 2, nombre: 'SaludPlus Digital', sector: 'Salud', ciudad: 'Guadalajara', busca: ['Computer Vision', 'MLOps', 'AI Product Manager'], tamaño: '11-50 empleados', color: '#34d399' },
  { id: 3, nombre: 'RetailMax México', sector: 'Retail', ciudad: 'Monterrey', busca: ['Recommendation Systems', 'Data Engineer', 'LLM Developer'], tamaño: '500+ empleados', color: '#f59e0b' },
  { id: 4, nombre: 'GovTech Puebla', sector: 'Gobierno', ciudad: 'Puebla', busca: ['AI Consultant', 'Data Analyst', 'Chatbot Developer'], tamaño: '200-500 empleados', color: '#60a5fa' },
];

const TALENTO: TalentoCard[] = [
  { id: 1, nombre: 'Perfil Disponible', rol: 'ML Engineer', especialidad: ['PyTorch', 'MLflow', 'Kubernetes'], ciudad: 'CDMX / Remoto', disponibilidad: 'inmediata', nivel: 'Senior', color: '#A4D955' },
  { id: 2, nombre: 'Perfil Disponible', rol: 'Data Scientist', especialidad: ['NLP', 'Pandas', 'Spark', 'SQL'], ciudad: 'Guadalajara', disponibilidad: 'inmediata', nivel: 'Mid', color: '#34d399' },
  { id: 3, nombre: 'Perfil Disponible', rol: 'AI Product Manager', especialidad: ['LLM Products', 'Roadmap IA', 'Agile'], ciudad: 'Remoto', disponibilidad: '1mes', nivel: 'Lead', color: '#f59e0b' },
  { id: 4, nombre: 'Perfil Disponible', rol: 'Computer Vision Engineer', especialidad: ['OpenCV', 'YOLO', 'TensorRT', 'Intel OpenVINO'], ciudad: 'Monterrey', disponibilidad: '1mes', nivel: 'Senior', color: '#60a5fa' },
  { id: 5, nombre: 'Perfil Disponible', rol: 'LLM Developer', especialidad: ['LangChain', 'RAG', 'Fine-tuning', 'API Integration'], ciudad: 'CDMX / Remoto', disponibilidad: 'inmediata', nivel: 'Mid', color: '#a78bfa' },
  { id: 6, nombre: 'Perfil Disponible', rol: 'MLOps Engineer', especialidad: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring'], ciudad: 'Remoto', disponibilidad: '3meses', nivel: 'Senior', color: '#f472b6' },
];

const DISPONIBILIDAD_COLORS = { inmediata: { bg: 'rgba(52,211,153,0.15)', color: '#10b981', label: '● Disponible ahora' }, '1mes': { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b', label: '◉ Disponible en 1 mes' }, '3meses': { bg: 'rgba(96,165,250,0.15)', color: '#60a5fa', label: '◌ Disponible en 3 meses' } };
const NIVEL_COLORS: Record<string, string> = { Junior: '#9ca3af', Mid: '#60a5fa', Senior: '#A4D955', Lead: '#f59e0b' };

export default function NetworkingHub() {
  const [tab, setTab] = useState<Tab>('empresas');

  return (
    <section style={{ background: '#f9fafb', padding: '80px 40px', borderTop: '1px solid #f3f4f6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)', marginBottom: 16 }}>
            <span style={{ fontSize: 13 }}>🤝</span>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>Red MAYiA</span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111827', margin: '0 0 12px' }}>Networking IA en México</h2>
          <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>
            Conectamos empresas que necesitan talento IA con los mejores profesionales del país.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' as const }}>
          {[{ v: '340+', l: 'Empresas registradas' }, { v: '1,200+', l: 'Perfiles IA activos' }, { v: '87%', l: 'Conexiones exitosas' }, { v: '18 días', l: 'Tiempo promedio de match' }].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: '#111827' }}>{s.v}</div>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, background: '#f3f4f6', borderRadius: 12, padding: 4, marginBottom: 32, width: 'fit-content', margin: '0 auto 32px' }}>
          {(['empresas', 'talento'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: '10px 28px', borderRadius: 9, border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s', background: tab === t ? '#ffffff' : 'transparent', color: tab === t ? '#111827' : '#6b7280', boxShadow: tab === t ? '0 2px 8px rgba(0,0,0,0.08)' : 'none' }}>
              {t === 'empresas' ? '🏢 Empresas buscando IA' : '👤 Talento disponible'}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
          {tab === 'empresas' && EMPRESAS.map(e => (
            <div key={e.id}
              style={{ background: '#ffffff', border: '1px solid #f3f4f6', borderRadius: 18, padding: '22px', transition: 'all 0.25s' }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = `${e.color}50`; el.currentTarget.style.boxShadow = `0 8px 32px ${e.color}12`; el.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = '#f3f4f6'; el.currentTarget.style.boxShadow = 'none'; el.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${e.color}15`, border: `1px solid ${e.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏢</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{e.nombre}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>{e.sector} · {e.ciudad}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8, fontWeight: 700 }}>Busca perfiles:</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 14 }}>
                {e.busca.map(b => <span key={b} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 99, background: `${e.color}10`, color: e.color, border: `1px solid ${e.color}30`, fontWeight: 600 }}>{b}</span>)}
              </div>
              <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 14 }}>📊 {e.tamaño}</div>
              <button style={{ width: '100%', padding: '9px', borderRadius: 10, border: `1px solid ${e.color}40`, background: `${e.color}08`, color: e.color, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>Conectar con esta empresa</button>
            </div>
          ))}

          {tab === 'talento' && TALENTO.map(t => {
            const disp = DISPONIBILIDAD_COLORS[t.disponibilidad];
            return (
              <div key={t.id}
                style={{ background: '#ffffff', border: '1px solid #f3f4f6', borderRadius: 18, padding: '22px', transition: 'all 0.25s' }}
                onMouseEnter={el => { el.currentTarget.style.borderColor = `${t.color}50`; el.currentTarget.style.boxShadow = `0 8px 32px ${t.color}12`; el.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={el => { el.currentTarget.style.borderColor = '#f3f4f6'; el.currentTarget.style.boxShadow = 'none'; el.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${t.color}15`, border: `2px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👤</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{t.nombre}</div>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: t.color, fontWeight: 600 }}>{t.rol}</span>
                      <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 99, background: `${NIVEL_COLORS[t.nivel]}15`, color: NIVEL_COLORS[t.nivel], fontWeight: 700 }}>{t.nivel}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 14 }}>
                  {t.especialidad.map(s => <span key={s} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 6, background: '#f3f4f6', color: '#374151', fontWeight: 600 }}>{s}</span>)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 11, color: '#6b7280' }}>📍 {t.ciudad}</span>
                  <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 99, background: disp.bg, color: disp.color, fontWeight: 600 }}>{disp.label}</span>
                </div>
                <button style={{ width: '100%', padding: '9px', borderRadius: 10, border: `1px solid ${t.color}40`, background: `${t.color}08`, color: t.color, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>Ver perfil completo</button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 30px', borderRadius: 12, background: 'linear-gradient(135deg, #A4D955, #65a30d)', color: '#0A0A14', fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>
            {tab === 'empresas' ? '🏢 Publicar vacante IA →' : '👤 Crear mi perfil de talento →'}
          </a>
        </div>
      </div>
    </section>
  );
}
