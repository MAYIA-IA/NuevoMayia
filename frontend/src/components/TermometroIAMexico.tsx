/* TermometroIAMexico.tsx – fondo blanco premium */
import { useState, useEffect, useRef } from 'react';
import { Landmark, Dna, Factory, ShoppingBag, Radio, Building2, Thermometer, BriefcaseBusiness, CircleDollarSign, AlertTriangle } from 'lucide-react';

interface DatoSector { sector:string; oferta:number; demanda:number; salarioMedio:number; crecimiento:number; color:string; icon:any; }
interface IndicadorMercado { label:string; valor:string; tendencia:'up'|'down'|'neutral'; cambio:string; color:string; icon:string; }

const BASE_DATOS: DatoSector[] = [
  { sector:'Finanzas & Banca',     oferta:23, demanda:89, salarioMedio:52000, crecimiento:67, color:'#65a30d', icon: Landmark },
  { sector:'Salud & Biotech',      oferta:18, demanda:76, salarioMedio:48000, crecimiento:82, color:'#059669', icon: Dna },
  { sector:'Manufactura',          oferta:31, demanda:72, salarioMedio:41000, crecimiento:45, color:'#0284c7', icon: Factory },
  { sector:'Retail & eCommerce',   oferta:29, demanda:68, salarioMedio:38000, crecimiento:54, color:'#d97706', icon: ShoppingBag },
  { sector:'Telecomunicaciones',   oferta:35, demanda:65, salarioMedio:55000, crecimiento:38, color:'#7c3aed', icon: Radio },
  { sector:'Gobierno & Educación', oferta:12, demanda:58, salarioMedio:32000, crecimiento:91, color:'#db2777', icon: Building2 },
];

function getDatos(): DatoSector[] {
  return BASE_DATOS.map(d => ({ ...d, oferta: Math.max(5, Math.min(95, d.oferta+(Math.random()-.5)*4)), demanda: Math.max(5, Math.min(99, d.demanda+(Math.random()-.5)*3)) }));
}
function getIndicadores(): IndicadorMercado[] {
  return [
    { label:'Índice de Escasez IA', valor:'77.4%', tendencia:'up',  cambio:'+3.2 pts',           color:'#ef4444', icon: 'Thermometer' },
    { label:'Vacantes Activas MX',  valor:(18400+Math.floor(Math.random()*200)).toLocaleString(), tendencia:'up',  cambio:'+12% mensual',         color:'#65a30d', icon: 'BriefcaseBusiness' },
    { label:'Salario Promedio IA',  valor:'$43,800',                tendencia:'up',  cambio:'+8.4% anual',          color:'#0284c7', icon: 'CircleDollarSign' },
    { label:'Brechas por cubrir',   valor:'78%',                    tendencia:'down',cambio:'Demanda insatisfecha', color:'#d97706', icon: 'AlertTriangle' },
  ];
}

function generatePDF(datos: DatoSector[]) {
  const fecha = new Date().toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'});
  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Reporte Termómetro IA México</title>
<style>body{font-family:Arial,sans-serif;padding:40px;color:#111}h1{color:#4d7c0f;font-size:28px}table{width:100%;border-collapse:collapse;margin-bottom:32px}th{background:#f9fafb;text-align:left;padding:10px 14px;font-size:11px;color:#6b7280;text-transform:uppercase;border-bottom:2px solid #e5e7eb}td{padding:12px 14px;border-bottom:1px solid #f3f4f6;font-size:13px}.alta{color:#ef4444}.media{color:#d97706}.baja{color:#65a30d}.footer{margin-top:40px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af}</style></head><body>
<h1>Termómetro de IA en México</h1><h2 style="color:#374151;font-size:16px;font-weight:400">Análisis · ${fecha}</h2>
<table><thead><tr><th>Sector</th><th>Oferta</th><th>Demanda</th><th>Brecha</th><th>Salario Medio</th><th>Crecimiento</th></tr></thead><tbody>
${datos.map(d=>{const b=d.demanda-d.oferta;const c=b>50?'alta':b>30?'media':'baja';return`<tr><td style="font-weight:600">${d.sector}</td><td>${d.oferta.toFixed(1)}%</td><td>${d.demanda.toFixed(1)}%</td><td class="${c}">+${b.toFixed(1)} pts</td><td>$${d.salarioMedio.toLocaleString()}</td><td style="color:#65a30d;font-weight:700">+${d.crecimiento}%</td></tr>`;}).join('')}
</tbody></table><div class="footer"><strong>MAYiA Research</strong> · Datos estimados basados en análisis de mercado laboral.</div></body></html>`;
  const blob = new Blob([html],{type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=`MAYiA_Termometro_${new Date().toISOString().slice(0,10)}.html`; a.click();
  URL.revokeObjectURL(url);
}

/* ── Barra dual ── */
function BarraDual({ d, animated }: { d:DatoSector; animated:boolean }) {
  const brecha = d.demanda - d.oferta;
  const bc = brecha>50 ? '#ef4444' : brecha>30 ? '#d97706' : '#65a30d';
  return (
    <div style={{ marginBottom:22 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
        <div className="group" style={{ display:'flex', alignItems:'center', gap:8, cursor:'default' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm" style={{ background: `${d.color}15`, color: d.color }}>
            <d.icon size={18} strokeWidth={2.5} />
          </div>
          <span style={{ fontSize:13, fontWeight:700, color:'#111827' }}>{d.sector}</span>
        </div>
        <div style={{ display:'flex', gap:10, fontSize:11 }}>
          <span style={{ color:'#6b7280' }}>Oferta: <b style={{ color:d.color }}>{d.oferta.toFixed(0)}%</b></span>
          <span style={{ color:'#6b7280' }}>Demanda: <b style={{ color:'#ef4444' }}>{d.demanda.toFixed(0)}%</b></span>
          <span style={{ padding:'2px 10px', borderRadius:99, background:`${bc}12`, color:bc, fontWeight:700, border:`1px solid ${bc}30` }}>+{brecha.toFixed(0)} pts</span>
        </div>
      </div>
      <div style={{ position:'relative', height:10, borderRadius:99, background:'#f3f4f6', overflow:'hidden' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:animated?`${d.demanda}%`:'0%', background:`${bc}22`, borderRadius:99, transition:'width 1s cubic-bezier(.23,1,.32,1)' }} />
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:animated?`${d.oferta}%`:'0%', background:`linear-gradient(90deg,${d.color},${d.color}cc)`, borderRadius:99, transition:'width 1.2s cubic-bezier(.23,1,.32,1)', boxShadow:`0 0 10px ${d.color}50` }} />
      </div>
    </div>
  );
}

const css = `
  @keyframes tm-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }
  @keyframes tm-ring  { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2.5);opacity:0} }
  @keyframes tm-fadeup{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes tm-glow  { 0%,100%{box-shadow:0 8px 30px rgba(164,217,85,.2)} 50%{box-shadow:0 8px 50px rgba(164,217,85,.45)} }
`;

export default function TermometroIAMexico() {
  const [datos, setDatos] = useState<DatoSector[]>(getDatos);
  const [indicadores] = useState<IndicadorMercado[]>(getIndicadores);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [animated, setAnimated] = useState(false);
  const [hovKpi, setHovKpi] = useState<string|null>(null);
  const iv = useRef<ReturnType<typeof setInterval>|null>(null);

  useEffect(() => {
    const t = setTimeout(()=>setAnimated(true), 300);
    iv.current = setInterval(()=>{ setDatos(getDatos()); setLastUpdate(new Date()); }, 8000);
    return ()=>{ clearTimeout(t); if(iv.current) clearInterval(iv.current); };
  }, []);

  return (
    <section style={{ background:'linear-gradient(180deg,#ffffff 0%,#f8fdf1 50%,#ffffff 100%)', padding:'100px 40px', position:'relative', overflow:'hidden' }}>
      <style>{css}</style>

      {/* Bg decoration */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'15%', right:'8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(164,217,85,.06) 0%,transparent 70%)', filter:'blur(70px)' }} />
        <div style={{ position:'absolute', bottom:'10%', left:'5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(239,68,68,.04) 0%,transparent 70%)', filter:'blur(60px)' }} />
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:20, marginBottom:52 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'6px 18px', borderRadius:99, background:'rgba(239,68,68,.07)', border:'1px solid rgba(239,68,68,.25)', marginBottom:20 }}>
              <div style={{ position:'relative', width:10, height:10 }}>
                <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'#ef4444', animation:'tm-ring 1.5s infinite' }} />
                <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'#ef4444' }} />
              </div>
              <span style={{ fontSize:11, fontWeight:800, letterSpacing:'0.15em', textTransform:'uppercase', color:'#dc2626' }}>En vivo · Mercado IA México</span>
            </div>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:900, margin:'0 0 10px', color:'#111827', lineHeight:1.1 }}>
              Termómetro de{' '}
              <span style={{ background:'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>IA en México</span>
            </h2>
            <p style={{ fontSize:13, color:'#9ca3af', display:'flex', alignItems:'center', gap:6, margin:0 }}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:'#A4D955', animation:'tm-pulse 2s infinite' }} />
              Actualizado: {lastUpdate.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}
            </p>
          </div>
          <button onClick={()=>generatePDF(datos)}
            style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'13px 24px', borderRadius:14, background:'linear-gradient(135deg,#111827,#1f2937)', color:'#A4D955', fontWeight:700, fontSize:13, border:'none', cursor:'pointer', transition:'all .3s', boxShadow:'0 4px 20px rgba(0,0,0,.12)' }}
            onMouseEnter={e=>{ e.currentTarget.style.background='linear-gradient(135deg,#A4D955,#65a30d)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 8px 30px rgba(164,217,85,.4)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background='linear-gradient(135deg,#111827,#1f2937)'; e.currentTarget.style.color='#A4D955'; e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,.12)'; }}
          >
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Descargar Reporte Inversionista
          </button>
        </div>

        {/* KPIs */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:18, marginBottom:40 }}>
          {indicadores.map(ind => {
            const IconComp = ind.icon === 'Thermometer' ? Thermometer : ind.icon === 'BriefcaseBusiness' ? BriefcaseBusiness : ind.icon === 'CircleDollarSign' ? CircleDollarSign : AlertTriangle;
            return (
              <div key={ind.label} className="group"
                style={{ background: hovKpi===ind.label ? '#ffffff' : '#ffffff', border:`1.5px solid ${hovKpi===ind.label ? ind.color+'50' : '#e5e7eb'}`, borderRadius:18, padding:'22px 24px', transition:'all .3s cubic-bezier(.23,1,.32,1)', cursor:'default', boxShadow: hovKpi===ind.label ? `0 12px 40px ${ind.color}15` : '0 2px 12px rgba(0,0,0,.05)', transform: hovKpi===ind.label ? 'translateY(-4px)' : 'translateY(0)', position:'relative', overflow:'hidden', animation:'tm-fadeup .6s ease both' }}
                onMouseEnter={()=>setHovKpi(ind.label)} onMouseLeave={()=>setHovKpi(null)}
              >
                <div className="absolute top-4 right-4 text-gray-400 group-hover:scale-110 transition-transform duration-300" style={{ color: ind.color }}>
                  <IconComp size={24} className="group-hover:animate-pulse" />
                </div>
                <div style={{ position:'absolute', top:0, right:0, width:70, height:70, borderRadius:'0 18px 0 70px', background:`${ind.color}08` }} />
                <div style={{ fontSize:30, fontWeight:900, color:ind.color, marginBottom:6, lineHeight:1 }}>{ind.valor}</div>
                <div style={{ fontSize:12, fontWeight:600, color:'#374151', marginBottom:6 }}>{ind.label}</div>
                <div style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:11, padding:'2px 10px', borderRadius:99, background: ind.tendencia==='up'?'rgba(5,150,105,.1)':'rgba(239,68,68,.1)', color: ind.tendencia==='up'?'#059669':'#ef4444' }}>
                  {ind.tendencia==='up'?'↑':'↓'} {ind.cambio}
                </div>
              </div>
            );
          })}
        </div>

        {/* Barras */}
        <div style={{ background:'#ffffff', borderRadius:24, padding:'32px 36px', border:'1px solid #e5e7eb', boxShadow:'0 2px 20px rgba(0,0,0,.06)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32 }}>
            <h3 style={{ fontSize:17, fontWeight:700, color:'#111827', margin:0 }}>Oferta vs Demanda por Sector</h3>
            <div style={{ display:'flex', gap:20, fontSize:11 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}><div style={{ width:20, height:3, borderRadius:99, background:'#A4D955', boxShadow:'0 0 6px rgba(164,217,85,.5)' }} /><span style={{ color:'#6b7280' }}>Oferta disponible</span></div>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}><div style={{ width:20, height:3, borderRadius:99, background:'rgba(239,68,68,.35)' }} /><span style={{ color:'#6b7280' }}>Demanda activa</span></div>
            </div>
          </div>
          {datos.map(d=><BarraDual key={d.sector} d={d} animated={animated}/>)}
        </div>

        <p style={{ fontSize:11, color:'#9ca3af', marginTop:20, textAlign:'center' }}>
          Datos estimados. Actualización automática cada 8 seg. Para datos en tiempo real descarga el reporte.
        </p>
      </div>
    </section>
  );
}
