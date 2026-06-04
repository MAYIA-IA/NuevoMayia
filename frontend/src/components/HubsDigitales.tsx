import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Globe, Zap, ArrowUpRight, Signal } from 'lucide-react';

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

/* ─── Individual Hub Card (compact) ─── */
const HubCard: React.FC<{ hub: HubInfo; index: number }> = ({ hub, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = hub.status === 'Activo';

  return (
    <motion.a
      href={isActive ? hub.link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative rounded-xl overflow-hidden h-full"
      style={{
        cursor: isActive ? 'pointer' : 'not-allowed',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* ── Card body ── */}
      <div
        className="relative rounded-xl overflow-hidden transition-all duration-500 h-full"
        style={{
          background: '#0E0E1A',
          border: `1px solid rgba(${hub.accentRgb}, ${isHovered ? 0.4 : 0.15})`,
          boxShadow: isHovered
            ? `0 8px 32px rgba(${hub.accentRgb}, 0.15), 0 0 0 1px rgba(${hub.accentRgb}, 0.1)`
            : '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        {/* ── Blue glow ── */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at center, rgba(${hub.accentRgb}, ${isHovered ? 0.2 : 0.1}) 0%, transparent 70%)`,
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 p-5 flex flex-col h-full">
          {/* Top row: logo + title + status */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center p-2 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `rgba(${hub.accentRgb}, 0.12)`,
                  border: `1px solid rgba(${hub.accentRgb}, 0.2)`,
                  boxShadow: isHovered ? `0 4px 16px rgba(${hub.accentRgb}, 0.2)` : 'none',
                }}
              >
                <img
                  src={hub.logoUrl}
                  alt={hub.title}
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div>
                <h3
                  className="text-base font-bold tracking-tight leading-tight"
                  style={{ color: '#F2F2F2' }}
                >
                  {hub.title}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={11} style={{ color: hub.accent }} />
                  <span className="text-[10px] font-mono tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {hub.state}
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shrink-0"
              style={{
                background: isActive ? `rgba(${hub.accentRgb}, 0.12)` : 'rgba(255,255,255,0.05)',
                border: `1px solid ${isActive ? `rgba(${hub.accentRgb}, 0.25)` : 'rgba(255,255,255,0.1)'}`,
                color: isActive ? hub.accent : 'rgba(255,255,255,0.35)',
              }}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: hub.accent }} />
              )}
              {hub.status}
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-relaxed mb-3 font-medium flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {hub.description}
          </p>

          {/* Feature tags + CTA row */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {hub.features.map((feat) => (
                <span
                  key={feat}
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* CTA icon */}
            {isActive && (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  background: isHovered ? hub.accent : `rgba(${hub.accentRgb}, 0.12)`,
                  color: isHovered ? '#0E0E1A' : hub.accent,
                  boxShadow: isHovered ? `0 4px 16px rgba(${hub.accentRgb}, 0.3)` : 'none',
                }}
              >
                <ArrowUpRight size={15} />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

/* ─── Main Section (compact oneShot) ─── */
export default function HubsDigitales() {
  return (
    <section
      className="relative py-12 lg:py-16 overflow-hidden"
      id="hubs-digitales"
      style={{ background: '#FFFFFF' }}
    >
      {/* ── Background FX ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Blue ambient blobs */}
        <div
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(72, 129, 235, 0.06)' }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(127, 209, 255, 0.05)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* ── Section header (compact) ── */}
        <div className="text-center mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{
              background: 'rgba(164, 217, 85, 0.1)',
              border: '1px solid rgba(164, 217, 85, 0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4D955] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5EA500]">
              Red Nacional
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight"
          >
            <span style={{ color: '#1A202C' }}>MAYiA </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #A4D955 0%, #7FD1FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hubs Digitales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-xl mx-auto text-sm lg:text-base leading-relaxed font-medium"
            style={{ color: '#4A5568' }}
          >
            Nodos estratégicos de innovación que conectan talento local con el ecosistema tecnológico global.
          </motion.p>
        </div>

        {/* ── Hub cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {HUBS.map((hub, i) => (
            <HubCard key={hub.id} hub={hub} index={i} />
          ))}
        </div>

        {/* ── Bottom stats (inline, compact) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 lg:gap-10 mt-8"
        >
          {[
            { value: '2', label: 'Hubs Activos', icon: <Zap size={12} /> },
            { value: '2', label: 'Estados', icon: <MapPin size={12} /> },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{
                  background: 'rgba(164, 217, 85, 0.12)',
                  border: '1px solid rgba(164, 217, 85, 0.25)',
                  color: '#5EA500',
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div className="text-base font-bold font-mono leading-none" style={{ color: '#1A202C' }}>
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: '#718096' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
