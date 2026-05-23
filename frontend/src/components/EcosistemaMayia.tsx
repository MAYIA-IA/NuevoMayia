import { useState } from 'react';
import { ExternalLink, Handshake } from 'lucide-react';
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
    name: 'VATYCS',
    desc: 'Consultoría estratégica para implementación de IA. Metodología de éxito y ROI medible.',
    logoText: 'VATYCS',
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
`;

/* ── Component ──────────────────────────────────────────────── */

export default function EcosistemaMayia() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section
      id="ecosistema"
      aria-label="Ecosistema MAYIA — Partners y aliados tecnológicos"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fdf1 50%, #ffffff 100%)',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{css}</style>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.025,
      }}>
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
        position: 'absolute', top: '-5%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,217,85,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 16px', borderRadius: 99,
            background: 'rgba(164,217,85,0.1)',
            border: '1px solid rgba(164,217,85,0.3)',
            marginBottom: 16,
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
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 900, margin: '0 0 12px', color: '#111827',
            lineHeight: 1.15,
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
            fontSize: 14, color: '#6b7280', maxWidth: 500,
            margin: '0 auto', lineHeight: 1.7,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
            Conectamos con los mejores aliados tecnológicos para construir
            la infraestructura de IA más poderosa de México.
          </p>
        </div>

        {/* Partner cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
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
                  display: 'flex', flexDirection: 'column',
                  padding: '28px 24px', borderRadius: 20,
                  background: '#ffffff',
                  border: `1.5px solid ${isHov ? `${p.color}50` : '#e5e7eb'}`,
                  boxShadow: isHov
                    ? `0 16px 48px ${p.color}15`
                    : '0 2px 12px rgba(0,0,0,0.04)',
                  textDecoration: 'none',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Corner accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 80, height: 80, borderRadius: '0 20px 0 80px',
                  background: `linear-gradient(225deg, ${p.color}10, transparent)`,
                }} />

                {/* Logo + external link */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: 16,
                }}>
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{
                        height: 28, objectFit: 'contain',
                        filter: 'brightness(0) invert(0)',
                      }}
                    />
                  ) : (
                    <span style={{
                      fontSize: 22, fontWeight: 900, color: p.color,
                      letterSpacing: '-1px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}>
                      {p.logoText}
                    </span>
                  )}
                  <ExternalLink size={14} color={isHov ? p.color : '#9ca3af'} />
                </div>

                {/* Divider */}
                <div style={{
                  height: 1, marginBottom: 14,
                  background: `linear-gradient(90deg, ${p.color}40, transparent)`,
                }} />

                {/* Description */}
                <p style={{
                  margin: 0, fontSize: 13, color: '#6b7280',
                  lineHeight: 1.6,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                  {p.desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
