/* Organigrama.tsx – fondo blanco premium */
import { useState } from 'react';
import { Crown, Settings, Brain, Wrench, Laptop, TrendingUp, Handshake, Megaphone, Zap, Building, Star, Sparkles, BarChart, Waves, User } from 'lucide-react';

interface OrgNode { id:string; nombre:string; cargo:string; depto:string; foto?:string; color?:string; icon?:any; hijos?:OrgNode[]; }

const ORGANIGRAMA: OrgNode = {
  id:'ceo', nombre:'CEO MAYiA', cargo:'Chief Executive Officer', depto:'Dirección General', color:'#65a30d', icon: Crown,
  hijos: [
    { id:'cto', nombre:'CTO', cargo:'Chief Technology Officer', depto:'Tecnología', color:'#0284c7', icon: Settings,
      hijos: [
        { id:'arch',  nombre:'AI Architect', cargo:'Lead AI Architect',      depto:'Ingeniería', color:'#0ea5e9', icon: Brain },
        { id:'mlops', nombre:'MLOps Lead',   cargo:'Infraestructura IA',     depto:'Ingeniería', color:'#0ea5e9', icon: Wrench },
        { id:'dev',   nombre:'Dev Lead',     cargo:'Desarrollo de Producto', depto:'Ingeniería', color:'#0ea5e9', icon: Laptop },
      ]},
    { id:'cco', nombre:'CCO', cargo:'Chief Commercial Officer', depto:'Comercial', color:'#d97706', icon: TrendingUp,
      hijos: [
        { id:'ventas', nombre:'Dir. Ventas',    cargo:'Sales Director',     depto:'Ventas',    color:'#f59e0b', icon: Handshake },
        { id:'mkt',    nombre:'Dir. Marketing', cargo:'Marketing Director', depto:'Marketing', color:'#f59e0b', icon: Megaphone },
      ]},
    { id:'coo', nombre:'COO', cargo:'Chief Operations Officer', depto:'Operaciones', color:'#059669', icon: Zap,
      hijos: [
        { id:'ops', nombre:'Dir. Ops',        cargo:'Operations Director', depto:'Ops',      color:'#10b981', icon: Building },
        { id:'cs',  nombre:'Customer Success',cargo:'CS Director',         depto:'Clientes', color:'#10b981', icon: Star },
      ]},
    { id:'cdo', nombre:'CDO', cargo:'Chief Data Officer', depto:'Datos & IA', color:'#7c3aed', icon: Sparkles,
      hijos: [
        { id:'data', nombre:'Data Lead',       cargo:'Ciencia de Datos',   depto:'Datos', color:'#8b5cf6', icon: BarChart },
        { id:'lake', nombre:'MAYiA Lake Lead', cargo:'Soberanía del Dato', depto:'Datos', color:'#8b5cf6', icon: Waves },
      ]},
  ],
};

const css = `
  @keyframes org-fadein { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
  @keyframes org-pulse  { 0%,100%{opacity:1} 50%{opacity:.4} }
  @keyframes org-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  .org-card { animation: org-fadein .4s ease both; }
`;

function OrgCard({ node, isRoot=false }: { node:OrgNode; isRoot?:boolean }) {
  const [hov, setHov] = useState(false);
  const c = node.color || '#65a30d';
  return (
    <div className="org-card group"
      style={{
        background: hov ? '#ffffff' : '#ffffff',
        border:`1.5px solid ${hov ? c+'70' : c+'30'}`,
        borderRadius: isRoot ? 22 : 18,
        padding: isRoot ? '22px 24px' : '16px 18px',
        minWidth: isRoot ? 200 : 158,
        maxWidth: isRoot ? 220 : 178,
        textAlign:'center',
        transition:'all .3s cubic-bezier(.23,1,.32,1)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hov ? `0 16px 40px ${c}20, 0 0 0 1px ${c}15` : `0 3px 14px ${c}12`,
        cursor:'default', position:'relative', overflow:'hidden',
      }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
    >
      {/* Corner accent */}
      <div style={{ position:'absolute', top:0, right:0, width:44, height:44, borderRadius:'0 18px 0 44px', background:`${c}12` }} />

      {/* Avatar */}
      <div className="group-hover:scale-110 group-hover:rotate-6" style={{
        width: isRoot ? 58 : 44, height: isRoot ? 58 : 44,
        borderRadius:'50%', background:`${c}12`, border:`2px solid ${c}40`,
        margin:'0 auto 10px', display:'flex', alignItems:'center', justifyContent:'center',
        fontSize: isRoot ? 24 : 18, color: c,
        boxShadow: hov ? `0 0 18px ${c}30` : 'none',
        transition:'all .3s',
      }}>
        {node.foto ? <img src={node.foto} alt={node.nombre} style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }}/> : (node.icon ? <node.icon size={isRoot ? 28 : 20} /> : <User size={isRoot ? 28 : 20} />)}
      </div>

      <div style={{ fontSize: isRoot ? 14 : 12, fontWeight:800, color:'#111827', marginBottom:3 }}>{node.nombre}</div>
      <div style={{ fontSize: isRoot ? 11 : 10, color:c, fontWeight:600, marginBottom:4 }}>{node.cargo}</div>
      <div style={{ display:'inline-block', fontSize:8, color:'#9ca3af', padding:'2px 8px', borderRadius:99, background:`${c}08`, border:`1px solid ${c}20`, textTransform:'uppercase', letterSpacing:'0.08em' }}>{node.depto}</div>
    </div>
  );
}

function ConnLine({ color }: { color?:string }) {
  return <div style={{ width:2, height:28, background:`linear-gradient(to bottom,${color||'#65a30d'}60,${color||'#65a30d'}20)`, margin:'0 auto' }} />;
}

function OrgTree({ node, depth=0 }: { node:OrgNode; depth?:number }) {
  const [collapsed, setCollapsed] = useState(false);
  const hasC = node.hijos && node.hijos.length > 0;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <div style={{ position:'relative', cursor: hasC?'pointer':'default' }} onClick={()=>hasC&&setCollapsed(!collapsed)}>
        <OrgCard node={node} isRoot={depth===0}/>
        {hasC && (
          <div style={{ position:'absolute', bottom:-13, left:'50%', transform:'translateX(-50%)', width:24, height:24, borderRadius:'50%', background:`linear-gradient(135deg,${node.color||'#65a30d'},${node.color||'#65a30d'}cc)`, border:'2px solid #fff', display:'flex', alignItems:'center', justifyContent:'center', zIndex:3, fontSize:12, fontWeight:900, color:'#fff', boxShadow:`0 4px 12px ${node.color||'#65a30d'}40`, transition:'all .3s' }}>
            {collapsed?'+':'−'}
          </div>
        )}
      </div>
      {hasC && !collapsed && (
        <>
          <ConnLine color={node.color}/>
          <div style={{ position:'relative' }}>
            {node.hijos!.length>1 && <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:2, background:`linear-gradient(90deg,transparent,${node.color||'#65a30d'}40,transparent)` }} />}
            <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
              {node.hijos!.map(child=>(
                <div key={child.id} style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <ConnLine color={child.color}/>
                  <OrgTree node={child} depth={depth+1}/>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Organigrama() {
  return (
    <section style={{ background:'linear-gradient(180deg,#ffffff 0%,#f8fdf1 50%,#ffffff 100%)', padding:'100px 20px', position:'relative', overflow:'hidden' }}>
      <style>{css}</style>

      {/* BG */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'10%', left:'50%', transform:'translateX(-50%)', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(164,217,85,.06) 0%,transparent 70%)', filter:'blur(80px)', animation:'org-float 9s ease-in-out infinite' }} />
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.025 }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid-org" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M 56 0 L 0 0 0 56" fill="none" stroke="#4d7c0f" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid-org)"/>
        </svg>
      </div>

      <div style={{ maxWidth:1400, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'6px 20px', borderRadius:99, background:'rgba(164,217,85,.12)', border:'1px solid rgba(164,217,85,.4)', marginBottom:20 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#65a30d', animation:'org-pulse 2s infinite' }} />
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:'#4d7c0f' }}>Equipo MAYiA</span>
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:900, margin:'0 0 12px', color:'#111827', lineHeight:1.1 }}>
            Organigrama{' '}
            <span style={{ background:'linear-gradient(135deg,#4d7c0f,#A4D955)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Corporativo</span>
          </h2>
          <p style={{ fontSize:14, color:'#6b7280', maxWidth:420, margin:'0 auto' }}>
            Haz clic en los nodos para <strong style={{ color:'#4d7c0f' }}>expandir o colapsar</strong> áreas del equipo
          </p>
        </div>

        {/* Tree */}
        <div style={{ overflowX:'auto', paddingBottom:32, background:'#ffffff', border:'1px solid #e5e7eb', borderRadius:24, padding:'48px 32px', boxShadow:'0 2px 20px rgba(0,0,0,.06)' }}>
          <div style={{ display:'inline-flex', justifyContent:'center', minWidth:'100%' }}>
            <OrgTree node={ORGANIGRAMA}/>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display:'flex', justifyContent:'center', gap:24, marginTop:28, flexWrap:'wrap' }}>
          {[
            { color:'#65a30d', label:'Dirección General' },
            { color:'#0284c7', label:'Tecnología' },
            { color:'#d97706', label:'Comercial' },
            { color:'#059669', label:'Operaciones' },
            { color:'#7c3aed', label:'Datos & IA' },
          ].map(l=>(
            <div key={l.label} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:10, height:10, borderRadius:'50%', background:l.color, boxShadow:`0 0 6px ${l.color}60` }} />
              <span style={{ fontSize:11, color:'#6b7280' }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
