/* PartnersSection.tsx
   Para añadir un partner: agrega un objeto al array PARTNERS.
*/

const PARTNERS = [
  {
    name: 'AMD',
    tagline: 'Procesadores IA de alto rendimiento',
    color: '#ED1C24',
    logoText: 'AMD',
    stat: '4x',
    statLabel: 'más rendimiento IA',
  },
  {
    name: 'Intel',
    tagline: 'Xeon para infraestructura empresarial',
    color: '#0071C5',
    logoText: 'intel',
    stat: '30+',
    statLabel: 'nodos certificados',
  },
  {
    name: 'Lenovo',
    tagline: 'Servidores ThinkSystem para EdgeNet',
    color: '#E2231A',
    logoText: 'Lenovo',
    stat: '99.9%',
    statLabel: 'uptime garantizado',
  },
  {
    name: 'IBM Quantum',
    tagline: 'Cómputo cuántico aplicado a IA',
    color: '#1F70C1',
    logoText: 'IBM Quantum',
    stat: '127+',
    statLabel: 'qubits disponibles',
  },
];

export default function PartnersSection() {
  return (
    <section style={{ background: '#ffffff', padding: '60px 40px', borderTop: '1px solid #f3f4f6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)', marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A4D955' }} />
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>Alianzas tecnológicas</span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111827', margin: '0 0 12px' }}>Infraestructura respaldada por los mejores</h2>
          <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 540, margin: '0 auto' }}>MAYiA opera con hardware de clase enterprise y acceso a tecnologías de frontera para garantizar el más alto rendimiento en IA.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {PARTNERS.map(p => (
            <div
              key={p.name}
              style={{ background: '#fafafa', border: '1px solid #f3f4f6', borderRadius: 20, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16, transition: 'all 0.3s ease', cursor: 'default', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = `0 8px 32px ${p.color}18`; el.style.borderColor = `${p.color}40`; el.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.borderColor = '#f3f4f6'; el.style.transform = 'translateY(0)'; }}
            >
              <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: `${p.color}08`, filter: 'blur(20px)' }} />
              <div style={{ fontSize: 32, fontWeight: 900, color: p.color, letterSpacing: '-1px' }}>{p.logoText}</div>
              <div style={{ height: 1, background: '#f3f4f6' }} />
              <div>
                <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 12px', lineHeight: 1.5 }}>{p.tagline}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: p.color }}>{p.stat}</span>
                  <span style={{ fontSize: 11, color: '#9ca3af' }}>{p.statLabel}</span>
                </div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 99, background: `${p.color}10`, border: `1px solid ${p.color}30`, width: 'fit-content' }}>
                <svg width={10} height={10} viewBox="0 0 20 20" fill={p.color}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span style={{ fontSize: 9, fontWeight: 700, color: p.color, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Partner Certificado</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 13, color: '#9ca3af' }}>¿Tu empresa quiere convertirse en partner de MAYiA?{' '}
            <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer" style={{ color: '#4d7c0f', fontWeight: 700, textDecoration: 'none' }}>Contáctanos →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
