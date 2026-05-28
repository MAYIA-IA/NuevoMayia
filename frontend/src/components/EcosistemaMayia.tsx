import { useState } from 'react';
import { ExternalLink, Handshake, ChevronDown, ChevronUp } from 'lucide-react';
import edgeNetLogo from '../assets/logosNativos/edgeNetLogoBlanco.png';
import flaiLogo from '../assets/logosNativos/logo-FLAI.png';

/* ── Partners data ──────────────────────────────────────────── */

interface Partner {
  name: string;
  desc: string;
  logo?: string;
  logoText?: string;
  color: string;
  url: string;
}

const PARTNERS: Partner[] = [
  {
    name: 'EdgeNet',
    desc: 'Red de 30 centros de datos distribuidos en México. Infraestructura de alta disponibilidad y baja latencia.',
    logo: edgeNetLogo,
    color: '#A4D955',
    url: 'https://edgenet.mx',
  },
  {
    name: 'FLAI',
    desc: 'Plataforma de nube soberana para inteligencia artificial. Datos en México, cumplimiento regulatorio total.',
    logo: flaiLogo,
    color: '#60a5fa',
    url: '#infraestructura',
  },
  {
    name: 'AMD',
    desc: 'Procesadores EPYC y GPUs Instinct para aceleración de workloads de IA en producción enterprise.',
    logoText: 'AMD',
    color: '#ED1C24',
    url: 'https://www.amd.com',
  },
  {
    name: 'Intel',
    desc: 'Xeon Scalable y Gaudi para inferencia y entrenamiento de modelos de lenguaje y visión.',
    logoText: 'intel',
    color: '#0071C5',
    url: 'https://www.intel.com',
  },
  {
    name: 'Lenovo',
    desc: 'Servidores ThinkSystem optimizados para IA en el borde y en la nube empresarial.',
    logoText: 'Lenovo',
    color: '#E2231A',
    url: 'https://www.lenovo.com',
  },
  {
    name: 'VALTYCS',
    desc: 'Consultoría estratégica para implementación de IA. Metodología de éxito y ROI medible.',
    logoText: 'VALTYCS',
    color: '#0a8c5a',
    url: '#',
  },
];

/* ── Styles ─────────────────────────────────────────────────── */

const css = `
  .eco-card {
    transition: all 0.35s cubic-bezier(.23,1,.32,1) !important;
  }
  .eco-card:hover {
    transform: translateY(-4px) !important;
  }
  .eco-text-col {
    text-align: left;
  }
  .eco-layout {
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
  .eco-left {
    flex: 1 1 300px;
    max-width: 450px;
  }
  .eco-right {
    flex: 1.5 1 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  @media (max-width: 1024px) {
    .eco-layout {
      flex-direction: column;
      gap: 32px;
    }
    .eco-left {
      max-width: 100%;
    }
    .eco-right {
      width: 100%;
      flex: 1 1 auto;
    }
    .eco-text-col {
      text-align: center;
      margin-bottom: 0px;
    }
  }
`;

/* ── Component ──────────────────────────────────────────────── */

export default function EcosistemaMayia() {
  const [hov, setHov] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="ecosistema"
      aria-label="Ecosistema MAYIA — Partners y aliados tecnológicos"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fdf1 50%, #ffffff 100%)',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{css}</style>

      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-eco" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#4d7c0f" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-eco)" />
        </svg>
      </div>

      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,217,85,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="eco-layout">
        {/* Left Col */}
        <div className="eco-text-col eco-left">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 16px', borderRadius: 99,
            background: 'rgba(164,217,85,0.1)',
            border: '1px solid rgba(164,217,85,0.3)',
            marginBottom: 20,
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 10, fontWeight: 800, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#4d7c0f',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>
              <Handshake size={14} className="animate-pulse" /> Ecosistema de Innovación
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 900, margin: '0 0 12px', color: '#111827',
            lineHeight: 1.1,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
            Ecosistema <span style={{
              background: 'linear-gradient(135deg, #4d7c0f, #A4D955)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>MAYIA</span>
          </h2>

          <p style={{
            fontSize: 14, color: '#6b7280', maxWidth: '100%',
            margin: '0 0 20px', lineHeight: 1.5,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
            Conectamos con los mejores aliados tecnológicos para construir
            la infraestructura de inteligencia artificial soberana más poderosa de México.
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 8,
              background: '#f3f4f6', color: '#374151',
              border: '1px solid #e5e7eb',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e5e7eb'}
            onMouseLeave={e => e.currentTarget.style.background = '#f3f4f6'}
          >
            {expanded ? 'Ocultar detalles' : 'Ver toda la información'} 
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Right Col: Stacked Horizontal Cards */}
        <div className="eco-right">
          {PARTNERS.map(p => {
            const isHov = hov === p.name;
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="eco-card"
                onMouseEnter={() => setHov(p.name)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: 'flex', flexDirection: 'row',
                  alignItems: 'center',
                  padding: '12px 16px', borderRadius: 12,
                  background: '#ffffff',
                  border: `1.5px solid ${isHov ? `${p.color}50` : '#e5e7eb'}`,
                  boxShadow: isHov
                    ? `0 8px 16px ${p.color}15`
                    : '0 2px 4px rgba(0,0,0,0.02)',
                  textDecoration: 'none',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Accent glow on hover */}
                <div style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0,
                  width: 4, background: isHov ? p.color : 'transparent',
                  transition: 'background 0.3s ease'
                }} />

                {/* Logo Area */}
                <div style={{
                  width: 90, flexShrink: 0, display: 'flex', alignItems: 'center',
                  borderRight: `1px solid ${isHov ? `${p.color}30` : '#f3f4f6'}`,
                  marginRight: 16, paddingRight: 16, transition: 'border-color 0.3s ease'
                }}>
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{ height: 20, objectFit: 'contain' }}
                    />
                  ) : (
                    <span style={{
                      fontSize: 16, fontWeight: 900, color: p.color,
                      letterSpacing: '-0.5px', fontFamily: "'Inter', system-ui, sans-serif",
                    }}>
                      {p.logoText}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <p style={{
                    margin: 0, fontSize: 12, color: '#4b5563',
                    lineHeight: 1.3, fontFamily: "'Inter', system-ui, sans-serif",
                    display: expanded ? 'block' : '-webkit-box', 
                    WebkitLineClamp: expanded ? 'unset' : 2, 
                    WebkitBoxOrient: 'vertical',
                    overflow: expanded ? 'visible' : 'hidden', 
                    textOverflow: expanded ? 'clip' : 'ellipsis'
                  }}>
                    {p.desc}
                  </p>
                </div>

                {/* Link Icon */}
                <div style={{ marginLeft: 12, display: 'flex', alignItems: 'center' }}>
                  <ExternalLink size={14} color={isHov ? p.color : '#9ca3af'} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
