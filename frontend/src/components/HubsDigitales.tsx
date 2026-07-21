import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Zap } from 'lucide-react';

/* ─── Hub data ─── */
interface HubInfo {
  id: string;
  title: string;
  state: string;
  status: 'Activo' | 'Próximamente';
  link: string;
  logoUrl: string;
  accent: string;
  accentRgb: string;
  description: string;
  features: string[];
}

const HUBS: HubInfo[] = [
  {
    id: 'jalisco',
    title: 'Hub Jalisco',
    state: 'Jalisco, México',
    status: 'Activo',
    link: 'https://jalisco.hubdigital.com.mx/',
    logoUrl: 'https://jalisco.hubdigital.com.mx/assets/images/hubJalisco.png',
    accent: '#4881EB',
    accentRgb: '72, 129, 235',
    description: 'Conecta el ecosistema tecnológico de Jalisco con soluciones IA de frontera.',
    features: ['Ecosistema IA', 'Networking', 'Capacitación'],
  },
  {
    id: 'leon',
    title: 'Hub León',
    state: 'Guanajuato, México',
    status: 'Activo',
    link: 'https://leon.hubdigital.com.mx',
    logoUrl: 'https://leon.hubdigital.com.mx/assets/images/hubLeon.png',
    accent: '#7FD1FF',
    accentRgb: '127, 209, 255',
    description: 'Impulsa la transformación digital de empresas y talento del Bajío.',
    features: ['Industria 4.0', 'Talento Tech', 'Innovación'],
  },
];

/* ─── Sidebar Hub Card ─── */
const HubCard: React.FC<{ hub: HubInfo; index: number }> = ({ hub, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = hub.status === 'Activo';

  return (
    <motion.a
      href={isActive ? hub.link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="seo-hub-card"
      style={{
        display: 'block',
        margin: '0 8px 8px',
        padding: '12px',
        borderRadius: '12px',
        background: '#111118',
        border: `1px solid ${isHovered ? hub.accent : '#1a1a2e'}`,
        boxShadow: isHovered
          ? `0 8px 24px -4px rgba(${hub.accentRgb}, 0.25), 0 0 12px 1px rgba(${hub.accentRgb}, 0.15)`
          : 'none',
        textDecoration: 'none',
        cursor: isActive ? 'pointer' : 'default',
        transition: 'all 0.25s cubic-bezier(.23,1,.32,1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Background glow ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          background: `radial-gradient(circle at top right, rgba(${hub.accentRgb}, ${isHovered ? 0.25 : 0.12}) 0%, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Top Header: Logo + Title + Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: `rgba(${hub.accentRgb}, 0.15)`,
              border: `1px solid rgba(${hub.accentRgb}, 0.3)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              flexShrink: 0,
            }}
          >
            <img
              src={hub.logoUrl}
              alt={hub.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1.2,
              }}
            >
              {hub.title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
              <MapPin size={10} color={hub.accent} />
              <span
                style={{
                  fontSize: '9px',
                  color: '#9CA3AF',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                {hub.state}
              </span>
            </div>
          </div>
        </div>

        {/* Status & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontSize: '8px',
              fontWeight: 800,
              padding: '2px 6px',
              borderRadius: '99px',
              background: `rgba(${hub.accentRgb}, 0.15)`,
              color: hub.accent,
              border: `1px solid rgba(${hub.accentRgb}, 0.3)`,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: hub.accent,
                boxShadow: `0 0 6px ${hub.accent}`,
              }}
            />
            {hub.status}
          </span>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: isHovered ? hub.accent : 'rgba(255,255,255,0.06)',
              color: isHovered ? '#000000' : hub.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          margin: '0 0 8px 0',
          fontSize: '11px',
          color: '#9CA3AF',
          lineHeight: '1.4',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {hub.description}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {hub.features.map((feat) => (
          <span
            key={feat}
            style={{
              fontSize: '9px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#D1D5DB',
              fontWeight: 500,
            }}
          >
            {feat}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

/* ─── Main Component for Sidebar ─── */
export default function HubsDigitales() {
  return (
    <div id="hubs-digitales" style={{ paddingBottom: '4px' }}>
      {HUBS.map((hub, i) => (
        <HubCard key={hub.id} hub={hub} index={i} />
      ))}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '6px 12px 10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={11} color="#A4D955" />
          <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Inter', system-ui, sans-serif" }}>
            2 Hubs Activos
          </span>
        </div>
        <span style={{ fontSize: '10px', color: '#374151' }}>•</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={11} color="#60a5fa" />
          <span style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Inter', system-ui, sans-serif" }}>
            2 Estados
          </span>
        </div>
      </div>
    </div>
  );
}

