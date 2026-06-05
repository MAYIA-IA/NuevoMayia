/* TermometroIAMexico.tsx – fondo blanco premium - Basado en Datos de Centro México Digital */
import { useState, useEffect } from 'react';
import { Thermometer, Factory, TrendingUp, Coins, Users, Building, MapPin, Download, Sparkles, Scale, Info, CheckCircle2 } from 'lucide-react';

interface BenchmarkData {
  id: string;
  label: string;
  value: number;
  color: string;
  description: string;
}

interface ReturnMetric {
  title: string;
  value: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
}

interface SizeData {
  size: string;
  value: number;
  ratio: string;
  color: string;
}

interface BranchData {
  name: string;
  value: number;
  type: 'lider' | 'rezago';
}

const BENCHMARKS: BenchmarkData[] = [
  { id: 'oecd', label: 'Promedio OCDE', value: 19.1, color: '#4f46e5', description: 'Meta y referente internacional de adopción de IA en manufactura.' },
  { id: 'eu', label: 'Unión Europea', value: 17.3, color: '#3b82f6', description: 'Nivel promedio de integración de tecnologías inteligentes en la industria europea.' },
  { id: 'usa', label: 'Estados Unidos', value: 13.9, color: '#06b6d4', description: 'Nivel de adopción impulsado por grandes corporativos e investigación avanzada.' },
  { id: 'canada', label: 'Canadá', value: 13.1, color: '#0d9488', description: 'Adopción acelerada mediante programas de inversión tecnológica.' },
  { id: 'mx_prom', label: 'MX Promedio Nacional', value: 8.0, color: '#6b7280', description: 'Promedio de adopción de IA considerando todos los sectores económicos de México.' },
  { id: 'mx_man', label: 'MX Manufactura (Censo 2024)', value: 4.8, color: '#ef4444', description: 'Tasa actual de adopción de IA en el sector manufacturero mexicano de 10+ empleados.' },
];

const RETURNS: ReturnMetric[] = [
  {
    title: 'Producción Bruta',
    value: '+18.8%',
    subtitle: 'Por cada 10pp de incremento',
    description: 'Asociación directa con un aumento en la producción bruta por unidad económica. Aproximadamente el doble del promedio nacional.',
    icon: TrendingUp,
    color: '#059669',
  },
  {
    title: 'Prima Salarial',
    value: '+5.4%',
    subtitle: 'Por cada 10pp de incremento',
    description: 'Asociación directa con mejores remuneraciones por trabajador, reflejando la demanda de personal con competencias en IA.',
    icon: Coins,
    color: '#0284c7',
  },
  {
    title: 'Generación de Empleo',
    value: '+3.3%',
    subtitle: 'Por unidad económica',
    description: 'A nivel nacional, la adopción se asocia con mayor empleo, demostrando que la IA opera como tecnología complementaria y no sustituta.',
    icon: Users,
    color: '#7c3aed',
  },
];

const SIZES: SizeData[] = [
  { size: 'Grandes empresas (251+ emp)', value: 16.9, ratio: '14.1%', color: '#1e1b4b' },
  { size: 'Medianas empresas (51-250 emp)', value: 7.8, ratio: '6.5%', color: '#312e81' },
  { size: 'Pequeñas empresas (11-50 emp)', value: 1.2, ratio: '1.0%', color: '#4338ca' },
];

const BRANCHES: BranchData[] = [
  { name: 'Eq. de cómputo y electrónicos', value: 15.1, type: 'lider' },
  { name: 'Petróleo y carbón', value: 14.7, type: 'lider' },
  { name: 'Equipo de transporte (Automotriz)', value: 13.4, type: 'lider' },
  { name: 'Aparatos eléctricos y energía', value: 13.0, type: 'lider' },
  { name: 'Prendas de vestir', value: 1.4, type: 'rezago' },
  { name: 'Muebles y persianas', value: 1.4, type: 'rezago' },
  { name: 'Cuero y piel', value: 1.1, type: 'rezago' },
  { name: 'Industria de la madera', value: 0.6, type: 'rezago' },
];

const STATES = [
  { name: 'Chihuahua', value: '11.5%', rank: 1, desc: 'Líder nacional por integración de manufactura avanzada.' },
  { name: 'Aguascalientes', value: '7.7%', rank: 2, desc: 'Fuerte ecosistema automotriz y de autopartes.' },
  { name: 'Coahuila', value: '7.7%', rank: 3, desc: 'Alta concentración de industria metalmecánica y ensamble.' },
  { name: 'Querétaro', value: '6.3%', rank: 4, desc: 'Clúster aeroespacial y electrónico de alta tecnología.' },
];

function generatePDF() {
  const fecha = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Reporte Especial: Adopción de IA en Manufactura - CMD</title>
<style>
  body{font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;padding:40px;color:#1f2937;line-height:1.6;background:#f9fafb}
  .container{max-width:800px;margin:0 auto;background:#fff;padding:40px;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.05)}
  h1{color:#1e293b;font-size:26px;margin-bottom:6px;border-bottom:2px solid #ef4444;padding-bottom:12px}
  .source{font-size:12px;color:#ef4444;font-weight:bold;margin-bottom:24px;text-transform:uppercase}
  .date{font-size:13px;color:#6b7280;margin-bottom:30px}
  .section-title{color:#1e3a8a;font-size:18px;margin-top:32px;margin-bottom:12px;border-bottom:1px solid #e5e7eb;padding-bottom:6px}
  table{width:100%;border-collapse:collapse;margin:16px 0}
  th{background:#f3f4f6;text-align:left;padding:10px 14px;font-size:12px;color:#4b5563;font-weight:600}
  td{padding:10px 14px;border-bottom:1px solid #f3f4f6;font-size:13px}
  .highlight{font-weight:bold;color:#ef4444}
  .card-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin:20px 0}
  .card{background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:8px;text-align:center}
  .card-value{font-size:22px;font-weight:bold;color:#0f766e}
  .card-title{font-size:13px;font-weight:600;margin:4px 0}
  .card-desc{font-size:11px;color:#6b7280}
  .footer{margin-top:48px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;text-align:center}
</style></head><body>
<div class="container">
  <h1>Reporte Especial: Inteligencia Artificial en la Manufactura Mexicana</h1>
  <div class="source">Estudio de Referencia · Centro México Digital</div>
  <div class="date">Generado el ${fecha} por MAYiA Hub</div>
  
  <p>Este informe detalla el estado actual de adopción de Inteligencia Artificial (IA) en el sector manufacturero de México, basado en los datos del Censo Económico 2024 (INEGI) y analizados en el informe de <strong>Centro México Digital</strong>.</p>
  
  <div class="section-title">1. Diagnóstico e Comparativa de Adopción</div>
  <p>La adopción en la manufactura mexicana con 10+ empleados se sitúa en un <strong>4.8%</strong>, lo que evidencia una brecha significativa frente a otras economías y promedios:</p>
  <table>
    <thead><tr><th>Indicador/Región</th><th>Porcentaje de Adopción (%)</th><th>Estatus</th></tr></thead>
    <tbody>
      <tr><td>Promedio OCDE</td><td>19.1%</td><td>Meta global</td></tr>
      <tr><td>Unión Europea</td><td>17.3%</td><td>Líder regional</td></tr>
      <tr><td>Estados Unidos</td><td>13.9%</td><td>Referente comercial</td></tr>
      <tr><td>Canadá</td><td>13.1%</td><td>Referente comercial</td></tr>
      <tr><td>México (Promedio todos los sectores)</td><td>8.0%</td><td>Promedio nacional</td></tr>
      <tr class="highlight"><td>México (Sector Manufacturero)</td><td>4.8%</td><td>Área de oportunidad</td></tr>
    </tbody>
  </table>

  <div class="section-title">2. Retornos Económicos Asociados (por cada 10pp de adopción)</div>
  <div class="card-grid">
    <div class="card">
      <div class="card-value">+18.8%</div>
      <div class="card-title">Producción Bruta</div>
      <div class="card-desc">Incremento en la productividad total</div>
    </div>
    <div class="card">
      <div class="card-value">+5.4%</div>
      <div class="card-title">Prima Salarial</div>
      <div class="card-desc">Mejora directa de remuneraciones</div>
    </div>
    <div class="card">
      <div class="card-value">+3.3%</div>
      <div class="card-title">Empleo</div>
      <div class="card-desc">Tecnología complementaria</div>
    </div>
  </div>

  <div class="section-title">3. Adopción por Tamaño de Empresa</div>
  <table>
    <thead><tr><th>Tamaño</th><th>Adopción en Manufactura</th><th>Brecha</th></tr></thead>
    <tbody>
      <tr><td>Grandes (251+ empleados)</td><td>16.9%</td><td>Referente sectorial</td></tr>
      <tr><td>Medianas (51-250 empleados)</td><td>7.8%</td><td>Adopción intermedia</td></tr>
      <tr><td>Pequeñas (11-50 empleados)</td><td>1.2%</td><td>Rezago tecnológico (14x menor)</td></tr>
    </tbody>
  </table>

  <div class="section-title">4. Liderazgo Sectorial y Regional</div>
  <p><strong>Ramas Manufactureras Líderes:</strong> Fabricación de equipo de cómputo y electrónicos (15.1%), Derivados del petróleo y carbón (14.7%), y Equipo de transporte / automotriz (13.4%).</p>
  <p><strong>Estados con Mayor Adopción:</strong> Chihuahua (11.5%), Aguascalientes (7.7%), Coahuila (7.7%), y Querétaro (6.3%).</p>

  <div class="footer">
    <strong>Fuente oficial:</strong> Centro México Digital (CMD), estudio <em>"México Inteligente: La manufactura frente a la oportunidad que no espera"</em> (2026).<br>
    © MAYiA Inteligencia de Mercado. Todos los derechos reservados.
  </div>
</div>
</body></html>`;
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `Reporte_CMD_Termometro_IA_${new Date().toISOString().slice(0, 10)}.html`; a.click();
  URL.revokeObjectURL(url);
}

export default function TermometroIAMexico() {
  const [activeBenchmark, setActiveBenchmark] = useState<string>('mx_man');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  const selectedData = BENCHMARKS.find(b => b.id === activeBenchmark) || BENCHMARKS[5];

  // Helper to compute thermometer height
  // Max scale is 20%, so we normalize value / 20 * 100
  const getMercuryHeight = () => {
    return animated ? `${(4.8 / 20) * 100}%` : '0%';
  };

  return (
    <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)', padding: '36px 28px', position: 'relative', overflow: 'hidden', minHeight: '620px' }}>
      
      {/* Decorative Gradients */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header Dashboard */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 32, borderBottom: '1px solid #e2e8f0', paddingBottom: 24 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 99, background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', marginBottom: 12 }}>
              <div style={{ position: 'relative', width: 8, height: 8 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#ef4444', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#ef4444' }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444' }}>Reporte Sectorial · Censo 2024</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900, margin: '0 0 8px', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Termómetro de <span style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>IA en Manufactura</span>
            </h2>
            <p style={{ fontSize: 13, color: '#ef4444', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
              <Sparkles size={14} /> Fuente oficial: Centro México Digital
            </p>
          </div>
          <button onClick={generatePDF}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 12, background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: '#fff', fontWeight: 600, fontSize: 13, border: 'none', cursor: 'pointer', transition: 'all .2s', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 23, 42, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.15)'; }}
          >
            <Download size={15} />
            Descargar Reporte Completo (CMD)
          </button>
        </div>

        {/* Main Dashboard Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>
          
          {/* LEFT PANEL: The Thermometer Visualization */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ background: '#fef2f2', color: '#ef4444', padding: 8, borderRadius: 12 }}><Thermometer size={20} strokeWidth={2.5} /></div>
              <div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#1e293b' }}>Visualización de Temperatura</h3>
                <span style={{ fontSize: 11, color: '#64748b' }}>Haz clic en las marcas para explorar</span>
              </div>
            </div>

            {/* Interactive Thermometer Body */}
            <div style={{ display: 'flex', gap: 20, padding: '10px 0 20px', minHeight: '380px', position: 'relative' }}>
              
              {/* Thermometer Stem and Bulb */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70px', position: 'relative', flexShrink: 0 }}>
                {/* Scale Grid Ticks */}
                <div style={{ position: 'absolute', right: '5px', height: '280px', top: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: 10, color: '#94a3b8', fontWeight: 600 }}>
                  <span>20%</span>
                  <span>15%</span>
                  <span>10%</span>
                  <span>5%</span>
                  <span>0%</span>
                </div>

                {/* Glass Tube */}
                <div style={{ width: '18px', height: '280px', background: '#f1f5f9', border: '2.5px solid #cbd5e1', borderRadius: '10px 10px 0 0', position: 'relative', overflow: 'hidden', boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.05)' }}>
                  {/* Mercury Fluid column */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: getMercuryHeight(), background: 'linear-gradient(180deg, #ff8a00, #ef4444)', transition: 'height 1.5s cubic-bezier(0.25, 1, 0.5, 1)', borderRadius: '6px 6px 0 0' }} />
                </div>
                
                {/* Bulb at the bottom */}
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #ff8a00, #ef4444 70%)', border: '3px solid #cbd5e1', marginTop: '-3px', zIndex: 2, boxShadow: '0 4px 10px rgba(239, 68, 68, 0.4)' }} />
              </div>

              {/* Benchmark Markers list relative to height */}
              <div style={{ flex: 1, position: 'relative', height: '280px', marginTop: '10px' }}>
                {BENCHMARKS.map((bench) => {
                  const percent = (bench.value / 20) * 100; // Normalization against max 20%
                  const isSelected = activeBenchmark === bench.id;
                  return (
                    <div key={bench.id}
                      onClick={() => setActiveBenchmark(bench.id)}
                      style={{
                        position: 'absolute',
                        bottom: `${percent}%`,
                        left: 0,
                        right: 0,
                        transform: 'translateY(50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        cursor: 'pointer',
                        padding: '4px 8px',
                        borderRadius: 8,
                        background: isSelected ? `${bench.color}10` : 'transparent',
                        border: isSelected ? `1.5px solid ${bench.color}` : '1.5px solid transparent',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: bench.color }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontSize: 11, fontWeight: isSelected ? 800 : 600, color: isSelected ? '#0f172a' : '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {bench.label}
                          </span>
                          <span style={{ fontSize: 12, fontWeight: 900, color: bench.color }}>
                            {bench.value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Bench Description */}
            <div style={{ background: '#f8fafc', border: `1px solid ${selectedData.color}25`, borderRadius: 16, padding: '16px 20px', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: selectedData.color }} />
                <span style={{ fontSize: 12, fontWeight: 800, color: '#0f172a' }}>{selectedData.label}</span>
                <span style={{ fontSize: 12, fontWeight: 900, color: selectedData.color, marginLeft: 'auto' }}>{selectedData.value}%</span>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: '#475569', lineHeight: 1.4 }}>
                {selectedData.description}
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Returns and Details Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Economic Returns */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 16px', fontSize: 15, fontWeight: 800, color: '#1e293b' }}>
                <CheckCircle2 size={16} style={{ color: '#059669' }} /> Retornos Económicos Demostrados
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 16 }}>
                {RETURNS.map((ret, idx) => {
                  const Icon = ret.icon;
                  return (
                    <div key={idx} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 16, padding: '18px', transition: 'all 0.3s', cursor: 'default' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.02)'; e.currentTarget.style.borderColor = `${ret.color}25`; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f1f5f9'; }}
                    >
                      <div style={{ color: ret.color, marginBottom: 8, display: 'inline-block', background: `${ret.color}08`, padding: 6, borderRadius: 8 }}>
                        <Icon size={18} />
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{ret.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: ret.color, margin: '3px 0 6px' }}>{ret.subtitle}</div>
                      <div style={{ fontSize: 10, color: '#64748b', lineHeight: 1.3 }}>{ret.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Adoption by Company Size */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: 0, fontSize: 15, fontWeight: 800, color: '#1e293b' }}>
                  <Scale size={16} style={{ color: '#4f46e5' }} /> Adopción por Tamaño de Empresa
                </h3>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#4f46e5', padding: '2px 8px', borderRadius: 99, background: '#e0e7ff' }}>Brecha: 14 veces</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {SIZES.map((size, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6 }}>
                      <span>{size.size}</span>
                      <span style={{ color: '#0f172a' }}>{size.value}%</span>
                    </div>
                    <div style={{ height: 8, background: '#f1f5f9', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: animated ? `${(size.value / 20) * 100}%` : '0%', background: size.color, borderRadius: 99, transition: 'width 1.2s cubic-bezier(0.25, 1, 0.5, 1)' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
                <Info size={14} style={{ color: '#7c3aed', flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: '#5b21b6', fontWeight: 600 }}>
                  Las empresas grandes (16.9%) superan dramáticamente a las pequeñas (1.2%), evidenciando un cuello de botella clave en el financiamiento y digitalización básica.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Subsectores and State Leadership grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 24 }}>
          
          {/* Branches (Subsectores) */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 16px', fontSize: 15, fontWeight: 800, color: '#1e293b' }}>
              <Factory size={16} style={{ color: '#0f766e' }} /> Contraste por Ramas Manufactureras
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              
              {/* Leaders */}
              <div>
                <h4 style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mayor Adopción</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {BRANCHES.filter(b => b.type === 'lider').map((b, idx) => (
                    <div key={idx} style={{ background: '#f0fdf4', padding: '8px 12px', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#166534', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '140px' }} title={b.name}>{b.name}</span>
                      <span style={{ fontSize: 11, fontWeight: 900, color: '#15803d' }}>{b.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lagging */}
              <div>
                <h4 style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Menor Adopción</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {BRANCHES.filter(b => b.type === 'rezago').map((b, idx) => (
                    <div key={idx} style={{ background: '#fef2f2', padding: '8px 12px', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#991b1b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '140px' }} title={b.name}>{b.name}</span>
                      <span style={{ fontSize: 11, fontWeight: 900, color: '#b91c1c' }}>{b.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Regional Leadership (States) */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 16px', fontSize: 15, fontWeight: 800, color: '#1e293b' }}>
              <MapPin size={16} style={{ color: '#e11d48' }} /> Liderazgo Geográfico (Top Estados)
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {STATES.map((state) => (
                <div key={state.rank} style={{ border: '1px solid #f1f5f9', background: '#fafafb', padding: '10px 12px', borderRadius: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#e2e8f0', color: '#475569', fontSize: 9, fontWeight: 900, display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                        {state.rank}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#0f172a' }}>{state.name}</span>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 900, color: '#e11d48' }}>{state.value}</span>
                  </div>
                  <span style={{ fontSize: 9, color: '#64748b', lineHeight: 1.2, display: 'block' }}>{state.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Source and Footnote citation */}
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, borderTop: '1px solid #e2e8f0', paddingTop: 20 }}>
          <p style={{ margin: 0, fontSize: 12, color: '#1e293b', fontWeight: 800, textAlign: 'center' }}>
            Fuente: Centro México Digital
          </p>
          <p style={{ margin: 0, fontSize: 10, color: '#64748b', textAlign: 'center', maxWidth: '600px', lineHeight: 1.4 }}>
            Estadísticas basadas en el estudio de referencia nacional <em>"México Inteligente: La manufactura frente a la oportunidad que no espera"</em>, compilado con datos oficiales del Censo Económico 2024 del INEGI.
          </p>
        </div>

      </div>
    </section>
  );
}
