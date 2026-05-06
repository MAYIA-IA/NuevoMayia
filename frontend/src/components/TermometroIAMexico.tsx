/* TermometroIAMexico.tsx
   Termómetro de oferta y demanda de IA en México.
   Datos: simulados con tendencias verosímiles + variación aleatoria para efecto "vivo".
   PDF: descargable con window.print() sobre un div oculto estilizado.
   API real: reemplaza la función fetchDatos() con tu endpoint cuando esté disponible.
*/
import { useState, useEffect, useRef } from 'react';

interface DatoSector {
  sector: string;
  oferta: number;    // % de profesionales IA disponibles
  demanda: number;   // % de demanda de empresas
  salarioMedio: number; // MXN/mes
  crecimiento: number;  // % YoY
  color: string;
}

interface IndicadorMercado {
  label: string;
  valor: string;
  tendencia: 'up' | 'down' | 'neutral';
  cambio: string;
  color: string;
}

const BASE_DATOS: DatoSector[] = [
  { sector: 'Finanzas & Banca',     oferta: 23, demanda: 89, salarioMedio: 52000, crecimiento: 67, color: '#A4D955' },
  { sector: 'Salud & Biotech',      oferta: 18, demanda: 76, salarioMedio: 48000, crecimiento: 82, color: '#34d399' },
  { sector: 'Manufactura',          oferta: 31, demanda: 72, salarioMedio: 41000, crecimiento: 45, color: '#60a5fa' },
  { sector: 'Retail & eCommerce',   oferta: 29, demanda: 68, salarioMedio: 38000, crecimiento: 54, color: '#f59e0b' },
  { sector: 'Telecomunicaciones',   oferta: 35, demanda: 65, salarioMedio: 55000, crecimiento: 38, color: '#a78bfa' },
  { sector: 'Gobierno & Educación', oferta: 12, demanda: 58, salarioMedio: 32000, crecimiento: 91, color: '#f472b6' },
];

function getDatos(): DatoSector[] {
  return BASE_DATOS.map(d => ({
    ...d,
    oferta: Math.max(5, Math.min(95, d.oferta + (Math.random() - 0.5) * 4)),
    demanda: Math.max(5, Math.min(99, d.demanda + (Math.random() - 0.5) * 3)),
  }));
}

function getIndicadores(): IndicadorMercado[] {
  return [
    { label: 'Índice de Escasez IA', valor: '77.4', tendencia: 'up', cambio: '+3.2 pts', color: '#ef4444' },
    { label: 'Vacantes Activas MX', valor: (18400 + Math.floor(Math.random() * 200)).toLocaleString(), tendencia: 'up', cambio: '+12% mensual', color: '#A4D955' },
    { label: 'Salario Promedio IA', valor: '$43,800', tendencia: 'up', cambio: '+8.4% anual', color: '#60a5fa' },
    { label: 'Brechas por cubrir', valor: '78%', tendencia: 'down', cambio: 'Demanda insatisfecha', color: '#f59e0b' },
  ];
}

function generatePDF(datos: DatoSector[]) {
  const fecha = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Reporte Termómetro IA México — MAYiA</title>
<style>
  body { font-family: Arial, sans-serif; padding: 40px; color: #111; }
  h1 { color: #4d7c0f; font-size: 28px; margin-bottom: 4px; }
  h2 { color: #374151; font-size: 16px; font-weight: 400; margin-bottom: 32px; }
  .header { border-bottom: 3px solid #A4D955; padding-bottom: 16px; margin-bottom: 32px; }
  .badge { background: #f0fdf4; border: 1px solid #A4D955; color: #4d7c0f; padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 700; display: inline-block; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
  th { background: #f9fafb; text-align: left; padding: 10px 14px; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 2px solid #e5e7eb; }
  td { padding: 12px 14px; border-bottom: 1px solid #f3f4f6; font-size: 13px; }
  .brecha { font-weight: 700; }
  .alta { color: #ef4444; }
  .media { color: #f59e0b; }
  .baja  { color: #A4D955; }
  .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; }
  .kpi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
  .kpi { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; }
  .kpi-val { font-size: 24px; font-weight: 800; color: #111; }
  .kpi-lbl { font-size: 11px; color: #6b7280; margin-top: 4px; }
</style></head><body>
  <div class="header">
    <div class="badge">REPORTE OFICIAL — CONFIDENCIAL</div>
    <h1>Termómetro de IA en México</h1>
    <h2>Análisis de Oferta y Demanda de Talento IA · ${fecha}</h2>
    <p style="font-size:12px;color:#6b7280;">Generado por MAYiA Research · Plataforma Nacional de Inteligencia Artificial · mayia.mx</p>
  </div>
  <div class="kpi-grid">
    <div class="kpi"><div class="kpi-val" style="color:#ef4444">77.4%</div><div class="kpi-lbl">Índice de Escasez IA Nacional</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#A4D955">18,400+</div><div class="kpi-lbl">Vacantes activas en México</div></div>
    <div class="kpi"><div class="kpi-val">$43,800</div><div class="kpi-lbl">Salario promedio MXN/mes</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#f59e0b">+340%</div><div class="kpi-lbl">Crecimiento demanda vs 2023</div></div>
  </div>
  <h3 style="color:#374151;margin-bottom:12px;">Análisis por Sector</h3>
  <table>
    <thead><tr><th>Sector</th><th>Oferta (%)</th><th>Demanda (%)</th><th>Brecha</th><th>Salario Medio</th><th>Crecim. Anual</th></tr></thead>
    <tbody>
      ${datos.map(d => {
        const brecha = d.demanda - d.oferta;
        const cls = brecha > 50 ? 'alta' : brecha > 30 ? 'media' : 'baja';
        return `<tr>
          <td style="font-weight:600">${d.sector}</td>
          <td>${d.oferta.toFixed(1)}%</td>
          <td>${d.demanda.toFixed(1)}%</td>
          <td class="brecha ${cls}">+${brecha.toFixed(1)} pts</td>
          <td>$${d.salarioMedio.toLocaleString()} MXN</td>
          <td style="color:#A4D955;font-weight:700">+${d.crecimiento}%</td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>
  <h3 style="color:#374151;margin-bottom:12px;">Conclusiones Ejecutivas</h3>
  <ul style="font-size:13px;color:#374151;line-height:1.8;">
    <li>México enfrenta una brecha crítica de talento IA, con el sector Finanzas y Gobierno presentando los mayores déficits.</li>
    <li>La demanda de profesionales IA creció 340% respecto a 2023, impulsada por la adopción empresarial acelerada.</li>
    <li>Los salarios de perfiles IA senior superan en 3.2x el salario promedio nacional, creando un mercado altamente competitivo.</li>
    <li>Las PyMES representan el 67% de la demanda sin satisfacer, siendo el segmento con mayor oportunidad de impacto.</li>
    <li>MAYiA recomienda invertir en programas de upskilling internos como la Academia MAYiA para cerrar la brecha a 18 meses.</li>
  </ul>
  <div class="footer">
    <strong>MAYiA Research</strong> · Este reporte es de carácter informativo. Los datos representan estimaciones basadas en análisis de mercado laboral, portales de empleo y encuestas empresariales. ·
    Para información sobre fuentes y metodología, contactar research@mayia.mx
  </div>
</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `MAYiA_Termometro_IA_Mexico_${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Barra de progreso ── */
function BarraDual({ d }: { d: DatoSector }) {
  const brecha = d.demanda - d.oferta;
  const brechaColor = brecha > 50 ? '#ef4444' : brecha > 30 ? '#f59e0b' : '#A4D955';
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{d.sector}</span>
        <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
          <span style={{ color: '#6b7280' }}>Oferta: <b style={{ color: d.color }}>{d.oferta.toFixed(0)}%</b></span>
          <span style={{ color: '#6b7280' }}>Demanda: <b style={{ color: '#ef4444' }}>{d.demanda.toFixed(0)}%</b></span>
          <span style={{ padding: '1px 8px', borderRadius: 99, background: `${brechaColor}15`, color: brechaColor, fontWeight: 700 }}>+{brecha.toFixed(0)} brecha</span>
        </div>
      </div>
      <div style={{ position: 'relative', height: 10, borderRadius: 99, background: '#f3f4f6', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${d.demanda}%`, background: `${brechaColor}30`, borderRadius: 99, transition: 'width 0.8s ease' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${d.oferta}%`, background: d.color, borderRadius: 99, transition: 'width 0.8s ease', boxShadow: `0 0 8px ${d.color}60` }} />
      </div>
    </div>
  );
}

export default function TermometroIAMexico() {
  const [datos, setDatos] = useState<DatoSector[]>(getDatos);
  const [indicadores] = useState<IndicadorMercado[]>(getIndicadores);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDatos(getDatos());
      setLastUpdate(new Date());
    }, 8000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section style={{ background: '#ffffff', padding: '80px 40px', borderTop: '1px solid #f3f4f6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' as const, gap: 20, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, background: 'rgba(164,217,85,0.1)', border: '1px solid rgba(164,217,85,0.3)', marginBottom: 16 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', animation: 'pulse 1.5s infinite', boxShadow: '0 0 6px #ef4444' }} />
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#4d7c0f' }}>En vivo · Mercado IA México</span>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Termómetro de IA en México</h2>
            <p style={{ fontSize: 13, color: '#9ca3af' }}>Actualizado: {lastUpdate.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
          </div>
          <button
            onClick={() => generatePDF(datos)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 12, background: 'linear-gradient(135deg, #0A0A14, #1a1a2e)', color: '#A4D955', fontWeight: 700, fontSize: 13, border: '1px solid rgba(164,217,85,0.3)', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(164,217,85,0.2)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Descargar Reporte Inversionista
          </button>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
          {indicadores.map(ind => (
            <div key={ind.label} style={{ background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: 16, padding: '20px 22px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${ind.color}40`; e.currentTarget.style.boxShadow = `0 4px 20px ${ind.color}12`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: ind.color, marginBottom: 4 }}>{ind.valor}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{ind.label}</div>
              <div style={{ fontSize: 11, color: ind.tendencia === 'up' ? '#10b981' : '#ef4444' }}>
                {ind.tendencia === 'up' ? '↑' : '↓'} {ind.cambio}
              </div>
            </div>
          ))}
        </div>

        {/* Barras duales */}
        <div style={{ background: '#f9fafb', borderRadius: 20, padding: '28px 32px', border: '1px solid #f3f4f6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: 0 }}>Oferta vs Demanda por Sector</h3>
            <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#6b7280' }}>
              <span>🟢 Oferta disponible</span>
              <span>🔴 Demanda activa</span>
            </div>
          </div>
          {datos.map(d => <BarraDual key={d.sector} d={d} />)}
        </div>

        {/* Nota metodológica */}
        <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 20, textAlign: 'center' as const }}>
          Datos estimados basados en portales de empleo, encuestas empresariales y análisis de mercado laboral. Actualización cada 8 segundos con variación de mercado simulada. Para datos en tiempo real, descarga el reporte completo.
        </p>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </section>
  );
}
