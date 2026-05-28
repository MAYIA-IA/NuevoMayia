/* PartnersSection.tsx – fondo blanco premium */
import { useState } from 'react';
import { Zap, Cpu, Server, Atom, ChevronDown, ChevronUp } from 'lucide-react';

const PARTNERS = [
  { name: 'AMD',       tagline: 'Procesadores IA de alto rendimiento',        color: '#ED1C24', logoText: 'AMD',      stat: '4x',    statLabel: 'más rendimiento IA',   icon: Zap, description: 'Arquitectura RDNA y EPYC diseñada para workloads de inteligencia artificial en producción.' },
  { name: 'Intel',     tagline: 'Xeon para infraestructura empresarial',       color: '#0071C5', logoText: 'intel',    stat: '30+',   statLabel: 'nodos certificados',    icon: Cpu, description: 'Procesadores Xeon Scalable y Gaudi para aceleración de modelos de lenguaje y visión.' },
  { name: 'Lenovo',    tagline: 'Servidores ThinkSystem para EdgeNet',         color: '#E2231A', logoText: 'Lenovo',   stat: '99.9%', statLabel: 'uptime garantizado',     icon: Server, description: 'Infraestructura ThinkSystem optimizada para despliegues IA en el borde y en la nube.' },
  { name: 'IBM Quantum', tagline: 'Cómputo cuántico aplicado a IA',           color: '#1F70C1', logoText: 'IBM Q',    stat: '127+',  statLabel: 'qubits disponibles',     icon: Atom, description: 'Acceso a hardware cuántico real para investigación y optimización de algoritmos de IA.' },
];

const css = `
  @keyframes ps-pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
  @keyframes ps-fadeup  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ps-glow    { 0%,100%{box-shadow:0 8px 30px rgba(164,217,85,.2)} 50%{box-shadow:0 8px 50px rgba(164,217,85,.45)} }
  .ps-card { animation: ps-fadeup .55s ease both; }
  .ps-cta-btn:hover { transform:translateY(-2px)!important; box-shadow:0 14px 40px rgba(164,217,85,.5)!important; }
  .ps-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .ps-left {
    flex: 1 1 350px;
    max-width: 450px;
  }
  .ps-right {
    flex: 1.5 1 500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .ps-text-col {
    text-align: left;
  }
  @media (max-width: 1024px) {
    .ps-layout {
      flex-direction: column;
      gap: 32px;
    }
    .ps-left {
      max-width: 100%;
    }
    .ps-right {
      width: 100%;
      flex: 1 1 auto;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
    .ps-text-col {
      text-align: center;
    }
    .ps-left-cta {
      justify-content: center;
    }
  }
`;

export default function PartnersSection() {
  const [hov, setHov] = useState<string | null>(null);
  const [expandedPartner, setExpandedPartner] = useState<string | null>(null);

  return (
    <section style={{ background: 'linear-gradient(180deg,#ffffff 0%,#f8fdf1 50%,#ffffff 100%)', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      <style>{css}</style>

      {/* Subtle bg shapes */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-5%', left:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(164,217,85,.07) 0%,transparent 70%)', filter:'blur(60px)' }} />
        <div style={{ position:'absolute', bottom:'-5%', right:'-5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(96,165,250,.05) 0%,transparent 70%)', filter:'blur(60px)' }} />
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.025 }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid-ps" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M 56 0 L 0 0 0 56" fill="none" stroke="#4d7c0f" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid-ps)"/>
        </svg>
      </div>

      <div className="ps-layout">
        {/* Left Col */}
        <div className="ps-text-col ps-left">
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'6px 20px', borderRadius:99, background:'rgba(164,217,85,.12)', border:'1px solid rgba(164,217,85,.4)', marginBottom:20 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#65a30d', animation:'ps-pulse 2s infinite' }} />
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:'#4d7c0f' }}>Alianzas tecnológicas</span>
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,36px)', fontWeight:900, margin:'0 0 16px', color:'#111827', lineHeight:1.1 }}>
            Infraestructura respaldada<br />
            <span style={{ background:'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>por los mejores del mundo</span>
          </h2>
          <p style={{ fontSize:15, color:'#6b7280', maxWidth:'100%', margin:'0 0 24px', lineHeight:1.6 }}>
            MAYiA opera con hardware de clase <strong style={{ color:'#4d7c0f' }}>enterprise</strong> y acceso a tecnologías de frontera para garantizar el más alto rendimiento en IA.
          </p>

          <div className="ps-left-cta" style={{ display: 'flex', marginTop: 16 }}>
            <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer" className="ps-cta-btn"
              style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 28px', borderRadius:14, background:'linear-gradient(135deg,#A4D955,#65a30d)', color:'#fff', fontWeight:800, fontSize:14, textDecoration:'none', transition:'all .3s', boxShadow:'0 8px 30px rgba(164,217,85,.3)', animation:'ps-glow 3s infinite' }}
            >
              Ser Partner MAYiA
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>
        </div>

        {/* Right Col: 2x2 Grid */}
        <div className="ps-right">
          {PARTNERS.map((p, i) => {
            const isHov = hov === p.name;
            const isExpanded = expandedPartner === p.name;
            return (
              <div key={p.name} className="ps-card group"
                style={{
                  animationDelay:`${i*.1}s`,
                  background: isHov ? '#ffffff' : '#ffffff',
                  border:`1.5px solid ${isHov ? p.color+'60' : '#e5e7eb'}`,
                  borderRadius:16, padding:'16px 20px',
                  boxShadow: isHov ? `0 12px 30px ${p.color}15, 0 0 0 1px ${p.color}15` : '0 2px 8px rgba(0,0,0,.04)',
                  transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
                  transition:'all .35s cubic-bezier(.23,1,.32,1)',
                  cursor:'pointer', position:'relative', overflow:'hidden',
                  display: 'flex', flexDirection: 'column'
                }}
                onMouseEnter={()=>setHov(p.name)} onMouseLeave={()=>setHov(null)}
                onClick={() => setExpandedPartner(isExpanded ? null : p.name)}
              >
                {/* Corner accent */}
                <div style={{ position:'absolute', top:0, right:0, width:60, height:60, borderRadius:'0 16px 0 60px', background:`linear-gradient(225deg,${p.color}12,transparent)` }} />
                
                {/* Header (Always Visible) */}
                <div style={{ display:'flex', flexWrap: 'nowrap', justifyContent:'space-between', alignItems:'center', gap: 8, zIndex: 1, position: 'relative' }}>
                  <div style={{ fontSize:18, fontWeight:900, color:p.color, letterSpacing:'-0.5px', lineHeight:1 }}>{p.logoText}</div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'3px 8px', borderRadius:99, background:`${p.color}10`, border:`1px solid ${p.color}25` }}>
                      <svg width={7} height={7} viewBox="0 0 20 20" fill={p.color}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span style={{ fontSize:7, fontWeight:800, color:p.color, letterSpacing:'0.05em', textTransform:'uppercase' as const }}>Certificado</span>
                    </div>
                    <div style={{
                      background: isHov ? `${p.color}15` : '#f3f4f6', 
                      borderRadius: '50%', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      {isExpanded ? <ChevronUp size={14} color={isHov ? p.color : '#9ca3af'} /> : <ChevronDown size={14} color={isHov ? p.color : '#9ca3af'} />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div style={{
                  maxHeight: isExpanded ? 500 : 0,
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  marginTop: isExpanded ? 16 : 0,
                  display: 'flex', flexDirection: 'column', flex: isExpanded ? 1 : 0
                }}>
                  {/* Divider */}
                  <div style={{ height:1, background:`linear-gradient(90deg,${p.color}40,transparent)`, marginBottom:10 }} />

                  <p style={{ fontSize:12, color:'#4b5563', margin:'0 0 6px', lineHeight:1.3, fontWeight:700 }}>{p.tagline}</p>
                  <p style={{ fontSize:11, color:'#6b7280', margin:'0 0 12px', lineHeight:1.4, flex: 1 }}>{p.description}</p>

                  {/* Stat box */}
                  <div style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 12px', borderRadius:12, background:`${p.color}08`, border:`1px solid ${p.color}15`, marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize:20, fontWeight:900, color:p.color, lineHeight:1 }}>{p.stat}</div>
                      <div style={{ fontSize:8, color:'#9ca3af', marginTop:2, textTransform: 'uppercase', lineHeight: 1.1 }}>{p.statLabel}</div>
                    </div>
                    <div style={{ marginLeft:'auto', color:p.color, flexShrink: 0 }} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                      <p.icon size={20} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
