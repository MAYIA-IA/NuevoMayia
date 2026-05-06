/* EmbajadoresMayia.tsx – fondo blanco premium */
import { useState } from 'react';

interface Embajador { id:number; nombre:string; titulo:string; sector:string; ciudad:string; logro:string; foto?:string; color:string; desde:string; badge:string; emoji:string; impacto:string; }

const EMBAJADORES: Embajador[] = [
  { id:1, nombre:'Nombre Embajador',  titulo:'Director de Transformación Digital', sector:'Banca y Finanzas', ciudad:'Ciudad de México',    logro:'Implementó agentes IA que redujeron 78% el tiempo de aprobación crediticia.', foto:undefined, color:'#65a30d', desde:'2024', badge:'IA Financiera', emoji:'🏦', impacto:'-78% tiempo aprobación' },
  { id:2, nombre:'Nombre Embajadora', titulo:'CEO & Co-Fundadora',                 sector:'HealthTech',      ciudad:'Guadalajara, Jalisco', logro:'Llevó detección temprana de enfermedades crónicas con IA a 12 hospitales públicos.', foto:undefined, color:'#0284c7', desde:'2024', badge:'IA Salud',      emoji:'🧬', impacto:'12 hospitales impactados' },
  { id:3, nombre:'Nombre Embajador',  titulo:'VP de Operaciones',                  sector:'Manufactura',     ciudad:'Monterrey, N.L.',      logro:'Redujo el desperdicio industrial en 34% usando cámaras IA en línea de producción.', foto:undefined, color:'#d97706', desde:'2025', badge:'Vision IA',   emoji:'🏭', impacto:'-34% desperdicio' },
  { id:4, nombre:'Nombre Embajadora', titulo:'Directora de Innovación',            sector:'Gobierno',        ciudad:'Puebla',               logro:'Primera funcionaria pública en México en implementar un chatbot IA para trámites ciudadanos.', foto:undefined, color:'#059669', desde:'2025', badge:'GovTech',     emoji:'🏛️', impacto:'1er chatbot gov MX' },
  { id:5, nombre:'Nombre Embajador',  titulo:'Fundador & CTO',                     sector:'AgriTech',        ciudad:'Hermosillo, Sonora',   logro:'Optimizó el riego de 4,200 hectáreas con IA predictiva, ahorrando 40% del agua.', foto:undefined, color:'#7c3aed', desde:'2025', badge:'IA Campo',    emoji:'🌾', impacto:'-40% consumo agua' },
  { id:6, nombre:'Nombre Embajadora', titulo:'Directora Académica',               sector:'Educación',       ciudad:'Mérida, Yucatán',      logro:'Diseñó el primer plan de estudios de IA para bachillerato en el sureste de México.', foto:undefined, color:'#db2777', desde:'2026', badge:'EdTech',      emoji:'📚', impacto:'1er currículo IA bachillerato' },
];

<<<<<<< HEAD
const css = `
  @keyframes emb-fadeup { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes emb-pulse  { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.25);opacity:.5} }
  @keyframes emb-rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes emb-glow   { 0%,100%{box-shadow:0 8px 30px rgba(164,217,85,.2)} 50%{box-shadow:0 8px 50px rgba(164,217,85,.5)} }
  .emb-card { animation: emb-fadeup .55s ease both; }
  .emb-cta-btn:hover { transform:translateY(-3px)!important; box-shadow:0 16px 50px rgba(164,217,85,.5)!important; }
`;

function AvatarPlaceholder({ color, emoji }: { color:string; emoji:string }) {
=======
function AvatarFallback({ nombre, color }: { nombre: string; color: string }) {
  void nombre;
>>>>>>> 35e424aa448063dec2465c7c1fa9f32a4ad0dca2
  return (
    <div style={{ width:'100%', height:'100%', background:`linear-gradient(135deg,${color}12,${color}05)`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
      <span style={{ fontSize:54 }}>{emoji}</span>
      <div style={{ width:56, height:2, borderRadius:99, background:`linear-gradient(90deg,transparent,${color},transparent)` }} />
    </div>
  );
}

export default function EmbajadoresMayia() {
  const [hov, setHov] = useState<number|null>(null);

  return (
    <section style={{ background:'linear-gradient(180deg,#f8fdf1 0%,#ffffff 40%,#f8fdf1 100%)', padding:'100px 40px', position:'relative', overflow:'hidden' }}>
      <style>{css}</style>

      {/* BG decoration */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'5%', left:'8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(164,217,85,.07) 0%,transparent 70%)', filter:'blur(70px)' }} />
        <div style={{ position:'absolute', bottom:'8%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(96,165,250,.05) 0%,transparent 70%)', filter:'blur(60px)' }} />
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'6px 20px', borderRadius:99, background:'rgba(164,217,85,.12)', border:'1px solid rgba(164,217,85,.4)', marginBottom:20 }}>
            <span style={{ fontSize:14, animation:'emb-rotate 4s linear infinite', display:'inline-block' }}>✦</span>
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:'#4d7c0f' }}>Comunidad MAYiA</span>
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:900, margin:'0 0 16px', color:'#111827', lineHeight:1.1 }}>
            Embajadores{' '}
            <span style={{ background:'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>MAYiA</span>
          </h2>
          <p style={{ fontSize:15, color:'#6b7280', maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
            Líderes que están <strong style={{ color:'#4d7c0f' }}>transformando México</strong> con inteligencia artificial. Historias reales de impacto nacional.
          </p>

          {/* Stats strip */}
          <div style={{ display:'flex', justifyContent:'center', gap:48, marginTop:36, flexWrap:'wrap' }}>
            {[{ v:'6+', l:'Embajadores activos', c:'#65a30d' }, { v:'6', l:'Estados representados', c:'#0284c7' }, { v:'100%', l:'Casos de éxito reales', c:'#db2777' }].map(s=>(
              <div key={s.l} style={{ textAlign:'center' }}>
                <div style={{ fontSize:26, fontWeight:900, color:s.c }}>{s.v}</div>
                <div style={{ fontSize:10, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:24 }}>
          {EMBAJADORES.map((emb, i) => (
            <div key={emb.id} className="emb-card"
              style={{
                animationDelay:`${i*.1}s`,
                background:'#ffffff',
                border:`1.5px solid ${hov===emb.id ? emb.color+'55' : '#e5e7eb'}`,
                borderRadius:24, overflow:'hidden',
                transition:'all .4s cubic-bezier(.23,1,.32,1)',
                transform: hov===emb.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hov===emb.id ? `0 24px 60px ${emb.color}18, 0 0 0 1px ${emb.color}15` : '0 2px 16px rgba(0,0,0,.06)',
                cursor:'default',
              }}
              onMouseEnter={()=>setHov(emb.id)} onMouseLeave={()=>setHov(null)}
            >
              {/* Photo zone */}
              <div style={{ position:'relative', height:200, overflow:'hidden' }}>
                <div style={{ position:'absolute', inset:0, background:`linear-gradient(135deg,${emb.color}10,transparent 50%)`, zIndex:1 }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:70, background:'linear-gradient(to top,rgba(255,255,255,.95),transparent)', zIndex:1 }} />
                <div style={{ width:'100%', height:'100%' }}>
                  {emb.foto ? <img src={emb.foto} alt={emb.nombre} style={{ width:'100%', height:'100%', objectFit:'cover' }}/> : <AvatarPlaceholder color={emb.color} emoji={emb.emoji}/>}
                </div>
                {/* Badge top right */}
                <div style={{ position:'absolute', top:14, right:14, zIndex:2, padding:'4px 12px', borderRadius:99, background:`${emb.color}18`, border:`1px solid ${emb.color}40`, backdropFilter:'blur(4px)', fontSize:9, fontWeight:800, color:emb.color, letterSpacing:'0.12em', textTransform:'uppercase' }}>{emb.badge}</div>
                {/* Desde top left */}
                <div style={{ position:'absolute', top:14, left:14, zIndex:2, padding:'4px 12px', borderRadius:99, background:'rgba(0,0,0,.45)', backdropFilter:'blur(4px)', fontSize:9, color:'#e5e7eb', fontWeight:600 }}>Embajador desde {emb.desde}</div>
                {/* Impact pill */}
                <div style={{ position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)', zIndex:2, padding:'5px 14px', borderRadius:99, background:`${emb.color}18`, border:`1px solid ${emb.color}40`, backdropFilter:'blur(4px)', fontSize:10, fontWeight:700, color:emb.color, whiteSpace:'nowrap' }}>🎯 {emb.impacto}</div>
              </div>

              {/* Info */}
              <div style={{ padding:'22px 24px 26px' }}>
                <h3 style={{ fontSize:18, fontWeight:800, color:'#111827', margin:'0 0 4px' }}>{emb.nombre}</h3>
                <p style={{ fontSize:12, color:emb.color, fontWeight:600, margin:'0 0 10px' }}>{emb.titulo}</p>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                  <span style={{ fontSize:11, color:'#6b7280' }}>📍 {emb.ciudad}</span>
                  <div style={{ width:3, height:3, borderRadius:'50%', background:'#d1d5db' }} />
                  <span style={{ fontSize:10, padding:'2px 10px', borderRadius:99, background:`${emb.color}10`, border:`1px solid ${emb.color}25`, color:emb.color, fontWeight:600 }}>{emb.sector}</span>
                </div>
                <div style={{ height:1, background:`linear-gradient(90deg,${emb.color}30,transparent)`, marginBottom:14 }} />
                <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.7, margin:0, fontStyle:'italic' }}>
                  <span style={{ color:emb.color, fontSize:20, lineHeight:0.5, verticalAlign:'middle', marginRight:3 }}>"</span>
                  {emb.logro}
                  <span style={{ color:emb.color, fontSize:20, lineHeight:0.5, verticalAlign:'middle', marginLeft:3 }}>"</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:64, padding:'44px 40px', borderRadius:28, background:'linear-gradient(135deg,rgba(164,217,85,.1),rgba(164,217,85,.04))', border:'1px solid rgba(164,217,85,.3)' }}>
          <div style={{ fontSize:32, marginBottom:12 }}>✦</div>
          <h3 style={{ fontSize:24, fontWeight:800, color:'#111827', margin:'0 0 8px' }}>¿Quieres ser Embajador MAYiA?</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:'0 0 28px', maxWidth:400, marginInline:'auto' }}>Únete a nuestra red de líderes que transforman México con inteligencia artificial.</p>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer" className="emb-cta-btn"
            style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 36px', borderRadius:14, background:'linear-gradient(135deg,#A4D955,#65a30d)', color:'#fff', fontWeight:800, fontSize:15, textDecoration:'none', transition:'all .3s', boxShadow:'0 8px 30px rgba(164,217,85,.3)', animation:'emb-glow 3s infinite' }}
          >
            Postular mi candidatura
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
