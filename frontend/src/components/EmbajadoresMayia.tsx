/* EmbajadoresMayia.tsx
   Para añadir/editar embajadores: modifica el array EMBAJADORES.
   Para añadir foto real: en cada embajador, cambia foto a la ruta del archivo.
   Ejemplo: foto: '/src/assets/embajadores/juan_garcia.jpg'
*/

interface Embajador {
  id: number;
  nombre: string;
  titulo: string;
  sector: string;
  ciudad: string;
  logro: string;
  foto?: string;               // <- AQUÍ va la ruta a la foto real
  color: string;
  desde: string;
  badge: string;
}

/* ── EDITAR AQUÍ ── */
const EMBAJADORES: Embajador[] = [
  { id: 1, nombre: 'Nombre Embajador', titulo: 'Director de Transformación Digital', sector: 'Banca y Finanzas', ciudad: 'Ciudad de México', logro: 'Implementó agentes IA que redujeron 78% el tiempo de aprobación crediticia.', foto: undefined, color: '#A4D955', desde: '2024', badge: 'IA Financiera' },
  { id: 2, nombre: 'Nombre Embajadora', titulo: 'CEO & Co-Fundadora', sector: 'HealthTech', ciudad: 'Guadalajara, Jalisco', logro: 'Llevó detección temprana de enfermedades crónicas con IA a 12 hospitales públicos.', foto: undefined, color: '#60a5fa', desde: '2024', badge: 'IA Salud' },
  { id: 3, nombre: 'Nombre Embajador', titulo: 'VP de Operaciones', sector: 'Manufactura', ciudad: 'Monterrey, N.L.', logro: 'Redujo el desperdicio industrial en 34% usando cámaras IA en línea de producción.', foto: undefined, color: '#f59e0b', desde: '2025', badge: 'Vision IA' },
  { id: 4, nombre: 'Nombre Embajadora', titulo: 'Directora de Innovación', sector: 'Gobierno', ciudad: 'Puebla', logro: 'Primera funcionaria pública en México en implementar un chatbot IA para trámites ciudadanos.', foto: undefined, color: '#34d399', desde: '2025', badge: 'GovTech' },
  { id: 5, nombre: 'Nombre Embajador', titulo: 'Fundador & CTO', sector: 'AgriTech', ciudad: 'Hermosillo, Sonora', logro: 'Optimizó el riego de 4,200 hectáreas con IA predictiva, ahorrando 40% del agua.', foto: undefined, color: '#a78bfa', desde: '2025', badge: 'IA Campo' },
  { id: 6, nombre: 'Nombre Embajadora', titulo: 'Directora Académica', sector: 'Educación', ciudad: 'Mérida, Yucatán', logro: 'Diseñó el primer plan de estudios de IA para bachillerato en el sureste de México.', foto: undefined, color: '#f472b6', desde: '2026', badge: 'EdTech' },
];

function AvatarFallback({ nombre, color }: { nombre: string; color: string }) {
  const initials = nombre.split(' ').filter(w => !['Nombre', 'Embajador', 'Embajadora'].includes(w)).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'MB';
  return (
    <div style={{ width: '100%', height: '100%', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 36, fontWeight: 900, color }}>✦</span>
    </div>
  );
}

export default function EmbajadoresMayia() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)', padding: '80px 40px', borderTop: '4px solid #A4D955' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.15)', border: '1px solid rgba(164,217,85,0.5)', marginBottom: 16 }}>
            <span style={{ fontSize: 14, color: '#4d7c0f' }}>✦</span>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>Comunidad MAYiA</span>
          </div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#111827', margin: '0 0 14px' }}>
            Embajadores <span style={{ color: '#65a30d' }}>MAYiA</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
            Líderes que están transformando México con inteligencia artificial. Historias reales de impacto nacional.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {EMBAJADORES.map(emb => (
            <div
              key={emb.id}
              style={{ background: '#ffffff', border: `1px solid ${emb.color}30`, borderRadius: 22, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${emb.color}70`; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 60px ${emb.color}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${emb.color}30`; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}
            >
              {/* Foto + glow */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${emb.color}12 0%, transparent 60%)` }} />
                <div style={{ width: '100%', height: '100%' }}>
                  {emb.foto
                    ? <img src={emb.foto} alt={emb.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <AvatarFallback nombre={emb.nombre} color={emb.color} />
                  }
                </div>
                {/* Badge */}
                <div style={{ position: 'absolute', top: 14, right: 14, padding: '4px 12px', borderRadius: 99, background: `${emb.color}22`, border: `1px solid ${emb.color}50`, fontSize: 9, fontWeight: 800, color: emb.color, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                  {emb.badge}
                </div>
                {/* Desde */}
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '4px 10px', borderRadius: 99, background: 'rgba(0,0,0,0.6)', fontSize: 9, color: '#9ca3af', fontWeight: 600 }}>
                  Embajador desde {emb.desde}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 22px 24px' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#111827', margin: '0 0 4px' }}>{emb.nombre}</h3>
                <p style={{ fontSize: 11, color: emb.color, fontWeight: 600, margin: '0 0 2px' }}>{emb.titulo}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, color: '#6b7280' }}>📍 {emb.ciudad}</span>
                  <span style={{ color: '#d1d5db' }}>·</span>
                  <span style={{ fontSize: 10, color: '#6b7280' }}>{emb.sector}</span>
                </div>
                <div style={{ height: 1, background: '#f3f4f6', marginBottom: 14 }} />
                <p style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  "{emb.logro}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ color: '#4b5563', fontSize: 14, marginBottom: 16 }}>¿Quieres ser Embajador MAYiA?</p>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #A4D955, #65a30d)', color: '#ffffff', fontWeight: 800, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(164,217,85,0.35)' }}>
            Postular mi candidatura →
          </a>
        </div>
      </div>
    </section>
  );
}
