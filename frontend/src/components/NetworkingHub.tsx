/* NetworkingHub.tsx – fondo blanco premium */
import { useState } from 'react';
import { Users, Building2, User, MapPin, BarChart, Activity, ShoppingBag, Landmark } from 'lucide-react';

type Tab = 'empresas' | 'talento';

interface EmpresaCard { id:number; nombre:string; sector:string; ciudad:string; busca:string[]; tamaño:string; color:string; icon:any; urgencia:'alta'|'media'|'normal'; }
interface TalentoCard { id:number; nombre:string; rol:string; especialidad:string[]; ciudad:string; disponibilidad:'inmediata'|'1mes'|'3meses'; nivel:'Junior'|'Mid'|'Senior'|'Lead'; color:string; salario:string; }

const EMPRESAS: EmpresaCard[] = [
  { id:1, nombre:'Fintech Nexus MX',   sector:'Finanzas',  ciudad:'CDMX',       busca:['ML Engineer','Data Scientist','NLP Specialist'],              tamaño:'51-200 empleados',  color:'#65a30d', icon:Building2, urgencia:'alta' },
  { id:2, nombre:'SaludPlus Digital',  sector:'Salud',     ciudad:'Guadalajara', busca:['Computer Vision','MLOps','AI Product Manager'],              tamaño:'11-50 empleados',   color:'#059669', icon:Activity, urgencia:'alta' },
  { id:3, nombre:'RetailMax México',   sector:'Retail',    ciudad:'Monterrey',   busca:['Recommendation Systems','Data Engineer','LLM Developer'],     tamaño:'500+ empleados',    color:'#d97706', icon:ShoppingBag, urgencia:'media' },
  { id:4, nombre:'GovTech Puebla',     sector:'Gobierno',  ciudad:'Puebla',      busca:['AI Consultant','Data Analyst','Chatbot Developer'],           tamaño:'200-500 empleados', color:'#0284c7', icon:Landmark, urgencia:'normal' },
];

const TALENTO: TalentoCard[] = [
  { id:1, nombre:'Perfil Disponible', rol:'ML Engineer',              especialidad:['PyTorch','MLflow','Kubernetes'],              ciudad:'CDMX / Remoto',  disponibilidad:'inmediata', nivel:'Senior', color:'#65a30d', salario:'$65-85k MXN' },
  { id:2, nombre:'Perfil Disponible', rol:'Data Scientist',           especialidad:['NLP','Pandas','Spark','SQL'],                ciudad:'Guadalajara',     disponibilidad:'inmediata', nivel:'Mid',    color:'#059669', salario:'$45-60k MXN' },
  { id:3, nombre:'Perfil Disponible', rol:'AI Product Manager',       especialidad:['LLM Products','Roadmap IA','Agile'],         ciudad:'Remoto',          disponibilidad:'1mes',      nivel:'Lead',   color:'#d97706', salario:'$70-90k MXN' },
  { id:4, nombre:'Perfil Disponible', rol:'Computer Vision Engineer', especialidad:['OpenCV','YOLO','TensorRT','OpenVINO'],       ciudad:'Monterrey',       disponibilidad:'1mes',      nivel:'Senior', color:'#0284c7', salario:'$60-80k MXN' },
  { id:5, nombre:'Perfil Disponible', rol:'LLM Developer',            especialidad:['LangChain','RAG','Fine-tuning','APIs'],     ciudad:'CDMX / Remoto',  disponibilidad:'inmediata', nivel:'Mid',    color:'#7c3aed', salario:'$50-70k MXN' },
  { id:6, nombre:'Perfil Disponible', rol:'MLOps Engineer',           especialidad:['Docker','Kubernetes','CI/CD','Monitoring'], ciudad:'Remoto',          disponibilidad:'3meses',    nivel:'Senior', color:'#db2777', salario:'$60-75k MXN' },
];

const DISP_META = {
  inmediata: { bg:'rgba(5,150,105,.1)',  color:'#059669', border:'rgba(5,150,105,.3)',  label:'● Disponible ahora',       live:true },
  '1mes':    { bg:'rgba(217,119,6,.1)',  color:'#d97706', border:'rgba(217,119,6,.3)',  label:'◉ Disponible en 1 mes',    live:false },
  '3meses':  { bg:'rgba(2,132,199,.1)', color:'#0284c7', border:'rgba(2,132,199,.3)', label:'◌ Disponible en 3 meses', live:false },
};
const NIVEL_C: Record<string,string> = { Junior:'#9ca3af', Mid:'#0284c7', Senior:'#65a30d', Lead:'#d97706' };
const URG_META = {
  alta:   { color:'#dc2626', label:'Urgente', bg:'rgba(220,38,38,.08)',  border:'rgba(220,38,38,.25)' },
  media:  { color:'#d97706', label:'Activo',  bg:'rgba(217,119,6,.08)',  border:'rgba(217,119,6,.25)' },
  normal: { color:'#6b7280', label:'Abierto', bg:'rgba(107,114,128,.08)',border:'rgba(107,114,128,.25)' },
};

const css = `
  @keyframes nh-fadeup { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes nh-pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
  @keyframes nh-glow   { 0%,100%{box-shadow:0 8px 30px rgba(164,217,85,.2)} 50%{box-shadow:0 8px 50px rgba(164,217,85,.5)} }
  .nh-card { animation: nh-fadeup .5s ease both; }
  .nh-cta-btn:hover { transform:translateY(-3px)!important; box-shadow:0 16px 50px rgba(164,217,85,.5)!important; }
`;

const STATS = [
  { v:'340+',   l:'Empresas registradas',      c:'#65a30d' },
  { v:'1,200+', l:'Perfiles IA activos',        c:'#0284c7' },
  { v:'87%',    l:'Conexiones exitosas',         c:'#059669' },
  { v:'18 días',l:'Tiempo promedio de match',   c:'#d97706' },
];

export default function NetworkingHub() {
  const [tab, setTab] = useState<Tab>('empresas');
  const [hov, setHov] = useState<number|null>(null);

  return (
    <section style={{ background:'linear-gradient(180deg,#f8fdf1 0%,#ffffff 40%,#f8fdf1 100%)', padding:'100px 40px', position:'relative', overflow:'hidden' }}>
      <style>{css}</style>

      {/* BG */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'10%', left:'8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(164,217,85,.06) 0%,transparent 70%)', filter:'blur(80px)' }} />
        <div style={{ position:'absolute', bottom:'8%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(96,165,250,.05) 0%,transparent 70%)', filter:'blur(60px)' }} />
        {[...Array(8)].map((_,i)=>(
          <div key={i} style={{ position:'absolute', left:`${(i*41+7)%90}%`, top:`${(i*59+5)%85}%`, width:3, height:3, borderRadius:'50%', background: i%2===0?'#A4D955':'#0284c7', opacity:.18, animation:`nh-pulse ${2+i*.3}s ${i*.4}s infinite` }} />
        ))}
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'6px 20px', borderRadius:99, background:'rgba(164,217,85,.12)', border:'1px solid rgba(164,217,85,.4)', marginBottom:20 }}>
            <Users size={16} color="#4d7c0f" />
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:'#4d7c0f' }}>Red MAYiA</span>
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:900, margin:'0 0 14px', color:'#111827', lineHeight:1.1 }}>
            Networking{' '}
            <span style={{ background:'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>IA en México</span>
          </h2>
          <p style={{ fontSize:15, color:'#6b7280', maxWidth:500, margin:'0 auto', lineHeight:1.7 }}>
            Conectamos <strong style={{ color:'#4d7c0f' }}>empresas que necesitan talento IA</strong> con los mejores profesionales del país.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:16, marginBottom:48 }}>
          {STATS.map(s=>(
            <div key={s.l} style={{ textAlign:'center', padding:'22px 16px', background:'#ffffff', border:`1px solid ${s.c}25`, borderRadius:18, boxShadow:`0 2px 14px ${s.c}10`, transition:'all .3s' }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 8px 30px ${s.c}20`;e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.borderColor=`${s.c}50`;}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow=`0 2px 14px ${s.c}10`;e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor=`${s.c}25`;}}
            >
              <div style={{ fontSize:32, fontWeight:900, color:s.c, lineHeight:1, marginBottom:6 }}>{s.v}</div>
              <div style={{ fontSize:10, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:36 }}>
          <div style={{ display:'flex', gap:4, background:'#f3f4f6', borderRadius:16, padding:4, border:'1px solid #e5e7eb' }}>
            {(['empresas','talento'] as Tab[]).map(t=>(
              <button key={t} onClick={()=>setTab(t)}
                style={{ padding:'11px 28px', borderRadius:12, border:'none', fontWeight:700, fontSize:13, cursor:'pointer', transition:'all .3s cubic-bezier(.23,1,.32,1)', background: tab===t?'linear-gradient(135deg,#A4D955,#65a30d)':'transparent', color: tab===t?'#ffffff':'#6b7280', boxShadow: tab===t?'0 4px 20px rgba(164,217,85,.35)':'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {t === 'empresas' ? <Building2 size={16} /> : <User size={16} />}
                  <span>{t === 'empresas' ? 'Empresas buscando IA' : 'Talento disponible'}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:20 }}>

          {tab==='empresas' && EMPRESAS.map((e,i)=>{
            const urg=URG_META[e.urgencia];
            return (
              <div key={e.id} className="nh-card"
                style={{ animationDelay:`${i*.08}s`, background:'#ffffff', border:`1.5px solid ${hov===e.id*10?e.color+'55':'#e5e7eb'}`, borderRadius:22, padding:'24px', transition:'all .35s cubic-bezier(.23,1,.32,1)', transform:hov===e.id*10?'translateY(-6px)':'translateY(0)', boxShadow:hov===e.id*10?`0 20px 50px ${e.color}15,0 0 0 1px ${e.color}15`:'0 2px 14px rgba(0,0,0,.06)', cursor:'default', position:'relative', overflow:'hidden' }}
                onMouseEnter={()=>setHov(e.id*10)} onMouseLeave={()=>setHov(null)}
              >
                {/* Corner glow */}
                <div style={{ position:'absolute', top:-20, right:-20, width:80, height:80, borderRadius:'50%', background:`${e.color}10`, filter:'blur(20px)', opacity: hov===e.id*10?1:.4, transition:'opacity .35s' }} />

                {/* Header */}
                <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                  <div style={{ width:48, height:48, borderRadius:14, flexShrink:0, background:`${e.color}10`, border:`1.5px solid ${e.color}30`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:hov===e.id*10?`0 0 18px ${e.color}25`:'none', transition:'box-shadow .3s' }}><e.icon size={22} color={e.color} /></div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:14, fontWeight:700, color:'#111827', marginBottom:3 }}>{e.nombre}</div>
                    <div style={{ fontSize:11, color:'#6b7280', display:'flex', alignItems:'center', gap:5 }}>
                      <span>{e.sector}</span><div style={{ width:3,height:3,borderRadius:'50%',background:'#d1d5db' }} /><span style={{ display:'flex', alignItems:'center', gap:'3px' }}><MapPin size={12} /> {e.ciudad}</span>
                    </div>
                  </div>
                  <div style={{ padding:'3px 10px', borderRadius:99, background:urg.bg, border:`1px solid ${urg.border}`, fontSize:9, fontWeight:800, color:urg.color, whiteSpace:'nowrap', textTransform:'uppercase', letterSpacing:'0.08em' }}>{urg.label}</div>
                </div>

                {/* Divider */}
                <div style={{ height:1, background:`linear-gradient(90deg,${e.color}40,transparent)`, marginBottom:16 }} />

                <div style={{ fontSize:10, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, marginBottom:10 }}>Busca perfiles:</div>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:16 }}>
                  {e.busca.map(b=><span key={b} style={{ fontSize:10, padding:'4px 10px', borderRadius:99, background:`${e.color}08`, color:e.color, border:`1px solid ${e.color}25`, fontWeight:600 }}>{b}</span>)}
                </div>

                <div style={{ fontSize:10, color:'#9ca3af', marginBottom:18, display:'flex', alignItems:'center', gap:4 }}><BarChart size={12} /> {e.tamaño}</div>

                <button style={{ width:'100%', padding:'11px', borderRadius:12, border:`1.5px solid ${e.color}40`, background:`${e.color}06`, color:e.color, fontWeight:700, fontSize:12, cursor:'pointer', transition:'all .3s' }}
                  onMouseEnter={el=>{el.currentTarget.style.background=`${e.color}12`;el.currentTarget.style.boxShadow=`0 4px 20px ${e.color}20`;}}
                  onMouseLeave={el=>{el.currentTarget.style.background=`${e.color}06`;el.currentTarget.style.boxShadow='none';}}
                >Conectar con esta empresa →</button>
              </div>
            );
          })}

          {tab==='talento' && TALENTO.map((t,i)=>{
            const disp=DISP_META[t.disponibilidad];
            const nc=NIVEL_C[t.nivel];
            return (
              <div key={t.id} className="nh-card"
                style={{ animationDelay:`${i*.08}s`, background:'#ffffff', border:`1.5px solid ${hov===t.id?t.color+'55':'#e5e7eb'}`, borderRadius:22, padding:'24px', transition:'all .35s cubic-bezier(.23,1,.32,1)', transform:hov===t.id?'translateY(-6px)':'translateY(0)', boxShadow:hov===t.id?`0 20px 50px ${t.color}15,0 0 0 1px ${t.color}15`:'0 2px 14px rgba(0,0,0,.06)', cursor:'default', position:'relative', overflow:'hidden' }}
                onMouseEnter={()=>setHov(t.id)} onMouseLeave={()=>setHov(null)}
              >
                <div style={{ position:'absolute', top:-20, right:-20, width:80, height:80, borderRadius:'50%', background:`${t.color}10`, filter:'blur(20px)', opacity: hov===t.id?1:.4, transition:'opacity .35s' }} />

                {/* Header */}
                <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', flexShrink:0, background:`${t.color}10`, border:`2px solid ${t.color}40`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:hov===t.id?`0 0 18px ${t.color}35`:'none', transition:'box-shadow .3s' }}><User size={22} color={t.color} /></div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:14, fontWeight:700, color:'#111827', marginBottom:3 }}>{t.nombre}</div>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <span style={{ fontSize:12, color:t.color, fontWeight:600 }}>{t.rol}</span>
                      <span style={{ fontSize:9, padding:'2px 8px', borderRadius:99, background:`${nc}12`, color:nc, fontWeight:700, border:`1px solid ${nc}30` }}>{t.nivel}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height:1, background:`linear-gradient(90deg,${t.color}40,transparent)`, marginBottom:16 }} />

                {/* Skills */}
                <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:16 }}>
                  {t.especialidad.map(s=><span key={s} style={{ fontSize:10, padding:'4px 10px', borderRadius:8, background:'#f3f4f6', border:'1px solid #e5e7eb', color:'#374151', fontWeight:600 }}>{s}</span>)}
                </div>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                  <span style={{ fontSize:11, color:'#6b7280', display:'flex', alignItems:'center', gap:'3px' }}><MapPin size={11} /> {t.ciudad}</span>
                  <span style={{ fontSize:11, fontWeight:700, color:'#4d7c0f' }}>{t.salario}</span>
                </div>

                <div style={{ marginBottom:18 }}>
                  <span style={{ fontSize:10, padding:'4px 12px', borderRadius:99, background:disp.bg, border:`1px solid ${disp.border}`, color:disp.color, fontWeight:600, display:'inline-flex', alignItems:'center', gap:4 }}>
                    {disp.live && <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:disp.color, animation:'nh-pulse 1.5s infinite' }} />}
                    {disp.label}
                  </span>
                </div>

                <button style={{ width:'100%', padding:'11px', borderRadius:12, border:`1.5px solid ${t.color}40`, background:`${t.color}06`, color:t.color, fontWeight:700, fontSize:12, cursor:'pointer', transition:'all .3s' }}
                  onMouseEnter={el=>{el.currentTarget.style.background=`${t.color}12`;el.currentTarget.style.boxShadow=`0 4px 20px ${t.color}20`;}}
                  onMouseLeave={el=>{el.currentTarget.style.background=`${t.color}06`;el.currentTarget.style.boxShadow='none';}}
                >Ver perfil completo →</button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:56, padding:'40px', borderRadius:28, background:'linear-gradient(135deg,rgba(164,217,85,.1),rgba(164,217,85,.04))', border:'1px solid rgba(164,217,85,.3)' }}>
          <h3 style={{ fontSize:22, fontWeight:800, color:'#111827', margin:'0 0 8px' }}>
            {tab==='empresas'?'¿Buscas talento IA para tu empresa?':'¿Eres un profesional de IA?'}
          </h3>
          <p style={{ fontSize:13, color:'#6b7280', margin:'0 0 24px' }}>
            {tab==='empresas'?'Publica tu vacante y conecta con los mejores perfiles de México.':'Crea tu perfil y conecta con empresas que necesitan tu talento.'}
          </p>
          <a href="https://api.whatsapp.com/send/?phone=525553315526" target="_blank" rel="noopener noreferrer" className="nh-cta-btn"
            style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 36px', borderRadius:14, background:'linear-gradient(135deg,#A4D955,#65a30d)', color:'#fff', fontWeight:800, fontSize:14, textDecoration:'none', transition:'all .3s', boxShadow:'0 8px 30px rgba(164,217,85,.3)', animation:'nh-glow 3s infinite' }}
          >
            {tab === 'empresas' ? <><Building2 size={18} /> Publicar vacante IA</> : <><User size={18} /> Crear mi perfil de talento</>}
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
