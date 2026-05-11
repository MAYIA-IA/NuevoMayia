import { useState, memo } from 'react';
import fotoJosue from '../assets/Embajadores/Josue.jpeg';
import fotoMartin from '../assets/Embajadores/Martín.jpeg';
import fotoDulce from '../assets/Embajadores/Dulce.jpeg';

interface Embajador { id: number; nombre: string; titulo: string; sector: string; ciudad: string; logro: string; foto?: string; color: string; desde: string; badge: string; impacto: string; }

const EMBAJADORES: Embajador[] = [
  { id: 1, nombre: 'Josue Serrano', titulo: 'Ingeniero de Inteligencia Artificial', sector: 'Tecnología', ciudad: 'Ciudad de México', logro: 'Impulsando la frontera tecnológica mediante el diseño de sistemas de inteligencia artificial que transforman ideas en soluciones visionarias y escalables.', foto: fotoJosue, color: '#0284c7', desde: '2024', badge: 'IA', impacto: 'Innovación' },
  { id: 2, nombre: 'Martín Cortes', titulo: 'Trainee de Operaciones en la Nube', sector: 'Infraestructura', ciudad: 'Ciudad de México', logro: 'Asegurando el futuro digital al optimizar y fortalecer las infraestructuras en la nube que sostienen el crecimiento de nuestras plataformas.', foto: fotoMartin, color: '#d97706', desde: '2024', badge: 'Cloud', impacto: 'Escalabilidad' },
  { id: 3, nombre: 'Dulce Meza', titulo: 'Gestión de Redes Sociales', sector: 'Marketing', ciudad: 'Ciudad de México', logro: 'Inspirando y conectando a nuestra comunidad a través de estrategias digitales que amplifican el impacto humano de la tecnología.', foto: fotoDulce, color: '#db2777', desde: '2024', badge: 'Marketing', impacto: 'Comunidad' },
];

const css = `
  @keyframes emb-fadeup { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes emb-pulse  { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.25);opacity:.5} }
  @keyframes emb-rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes emb-glow   { 0%,100%{box-shadow:0 8px 30px rgba(164,217,85,.2)} 50%{box-shadow:0 8px 50px rgba(164,217,85,.5)} }
  .emb-card { animation: emb-fadeup .55s ease both; }
  .emb-cta-btn:hover { transform:translateY(-3px)!important; box-shadow:0 16px 50px rgba(164,217,85,.5)!important; }
`;

function AvatarPlaceholder({ color }: { color: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg,${color}12,${color}05)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <span style={{ fontSize: 54, color }}>•</span>
      <div style={{ width: 56, height: 2, borderRadius: 99, background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
    </div>
  );
}

const EmbajadorCard = memo(({ emb, isHovered, onHover, index }: { emb: Embajador, isHovered: boolean, onHover: (id: number | null) => void, index: number }) => (
  <div
    className="emb-card"
    style={{
      animationDelay: `${index * 0.05}s`,
      background: '#ffffff',
      border: `1.5px solid ${isHovered ? emb.color + '55' : '#e5e7eb'}`,
      borderRadius: 24,
      overflow: 'hidden',
      transition: 'all .4s cubic-bezier(.23,1,.32,1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      boxShadow: isHovered ? `0 24px 60px ${emb.color}18, 0 0 0 1px ${emb.color}15` : '0 2px 16px rgba(0,0,0,.06)',
      cursor: 'default',
    }}
    onMouseEnter={() => onHover(emb.id)}
    onMouseLeave={() => onHover(null)}
  >
    {/* Photo zone */}
    <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,${emb.color}10,transparent 50%)`, zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, background: 'linear-gradient(to top,rgba(255,255,255,.95),transparent)', zIndex: 1 }} />
      <div style={{ width: '100%', height: '100%' }}>
        {emb.foto ? (
          <img src={emb.foto} alt={emb.nombre} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <AvatarPlaceholder color={emb.color} />
        )}
      </div>
      <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 2, padding: '4px 12px', borderRadius: 99, background: `${emb.color}18`, border: `1px solid ${emb.color}40`, backdropFilter: 'blur(4px)', fontSize: 9, fontWeight: 800, color: emb.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{emb.badge}</div>
      <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2, padding: '4px 12px', borderRadius: 99, background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(4px)', fontSize: 9, color: '#e5e7eb', fontWeight: 600 }}>Embajador desde {emb.desde}</div>
      <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', zIndex: 2, padding: '5px 14px', borderRadius: 99, background: `${emb.color}18`, border: `1px solid ${emb.color}40`, backdropFilter: 'blur(4px)', fontSize: 10, fontWeight: 700, color: emb.color, whiteSpace: 'nowrap' }}>Impacto: {emb.impacto}</div>
    </div>

    {/* Info */}
    <div style={{ padding: '22px 24px 26px' }}>
      <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 4px' }}>{emb.nombre}</h3>
      <p style={{ fontSize: 12, color: emb.color, fontWeight: 600, margin: '0 0 10px' }}>{emb.titulo}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: '#6b7280' }}>Sede: {emb.ciudad}</span>
        <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#d1d5db' }} />
        <span style={{ fontSize: 10, padding: '2px 10px', borderRadius: 99, background: `${emb.color}10`, border: `1px solid ${emb.color}25`, color: emb.color, fontWeight: 600 }}>{emb.sector}</span>
      </div>
      <div style={{ height: 1, background: `linear-gradient(90deg,${emb.color}30,transparent)`, marginBottom: 14 }} />
      <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
        <span style={{ color: emb.color, fontSize: 20, lineHeight: 0.5, verticalAlign: 'middle', marginRight: 3 }}>"</span>
        {emb.logro}
        <span style={{ color: emb.color, fontSize: 20, lineHeight: 0.5, verticalAlign: 'middle', marginLeft: 3 }}>"</span>
      </p>
    </div>
  </div>
));

export default function EmbajadoresMayia() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: 'linear-gradient(180deg,#f8fdf1 0%,#ffffff 40%,#f8fdf1 100%)', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      <style>{css}</style>

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '5%', left: '8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(164,217,85,.07) 0%,transparent 70%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '8%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(96,165,250,.05) 0%,transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 20px', borderRadius: 99, background: 'rgba(164,217,85,.12)', border: '1px solid rgba(164,217,85,.4)', marginBottom: 20 }}>
            <span style={{ fontSize: 14, animation: 'emb-rotate 4s linear infinite', display: 'inline-block' }}>✦</span>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4d7c0f' }}>Red de Pioneros MAYiA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '0 0 16px', color: '#111827', lineHeight: 1.1 }}>
            Embajadores{' '}
            <span style={{ background: 'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>MAYiA</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            Conoce a las mentes brillantes que están <strong style={{ color: '#4d7c0f' }}>redefiniendo el futuro</strong> en México. A través de la innovación y la Inteligencia Artificial, nuestros embajadores construyen el camino hacia un mañana extraordinario.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 36, flexWrap: 'wrap' }}>
            {[{ v: '3', l: 'Líderes activos', c: '#65a30d' }, { v: '1', l: 'Visión compartida', c: '#0284c7' }, { v: '100%', l: 'Pasión por innovar', c: '#db2777' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 24 }}>
          {EMBAJADORES.map((emb, i) => (
            <EmbajadorCard
              key={emb.id}
              emb={emb}
              index={i}
              isHovered={hov === emb.id}
              onHover={setHov}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64, padding: '44px 40px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(164,217,85,.1),rgba(164,217,85,.04))', border: '1px solid rgba(164,217,85,.3)' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>✦</div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>¿Tienes la visión para cambiar el mundo?</h3>
          <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 28px', maxWidth: 500, marginInline: 'auto' }}>Suma tu talento a nuestra red de pioneros y sé el impulso de la revolución tecnológica en México.</p>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer" className="emb-cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', borderRadius: 14, background: 'linear-gradient(135deg,#A4D955,#65a30d)', color: '#fff', fontWeight: 800, fontSize: 15, textDecoration: 'none', transition: 'all .3s', boxShadow: '0 8px 30px rgba(164,217,85,.3)', animation: 'emb-glow 3s infinite' }}
          >
            Inicia tu Legado
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
