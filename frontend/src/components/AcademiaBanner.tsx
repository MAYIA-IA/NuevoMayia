import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Users, ArrowRight, BookOpen } from 'lucide-react';
import { brandingConfig } from '../config/branding';

const { colores } = brandingConfig;

const WA_URL = 'https://api.whatsapp.com/send/?phone=525553315526&text&type=phone_number&app_absent=0';

const highlights = [
  { icon: BookOpen, value: '32', label: 'Cursos de IA', color: '#A4D955' },
  { icon: Award, value: '6+', label: 'Certificaciones', color: '#60a5fa' },
  { icon: Briefcase, value: 'B2B', label: 'IA para negocios', color: '#f59e0b' },
  { icon: Users, value: 'Tech', label: 'IA para equipos', color: '#a78bfa' },
];

const ctas = [
  { label: 'Conocer cursos', href: '#academia', primary: true },
  { label: 'Certificaciones', href: '#academia', primary: false },
  { label: 'Capacita a tu equipo', href: WA_URL, external: true, primary: false },
];

export default function AcademiaBanner({ compact = false }: { compact?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);

  if (compact) {
    return (
      <section
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafb 100%)',
          border: `1px solid ${colores.borde}`,
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: 150, height: 150, borderRadius: '50%',
          background: `radial-gradient(circle, ${colores.primario}12 0%, transparent 70%)`,
          filter: 'blur(30px)', pointerEvents: 'none',
        }} />

        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro || '#65a30d'})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 4px 12px ${colores.primario}30`,
            flexShrink: 0,
          }}>
            <GraduationCap size={18} color="#fff" />
          </div>
          <div>
            <h2 style={{
              margin: 0, fontSize: 13, fontWeight: 800, color: colores.textoClaro || '#1A202C',
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: '-0.2px',
            }}>
              Academia MAYiA
            </h2>
            <p style={{
              margin: 0, fontSize: 10, color: colores.textoMedio || '#4a5568',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>
              Formación en Inteligencia Artificial
            </p>
          </div>
        </div>

        {/* Stats pills: 2 columns grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 6,
          marginBottom: 16,
        }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 8px', borderRadius: 8,
                background: `${colores.fondoTerciario}60`,
                border: `1px solid ${colores.borde}60`,
              }}
            >
              <h.icon size={12} color={h.color} style={{ flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, color: colores.textoClaro,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                  {h.value}
                </span>
                <span style={{
                  fontSize: 8, fontWeight: 500, color: colores.textoOscuro || '#718096',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  marginTop: 1,
                }}>
                  {h.label.replace(' de IA', '')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs stacked vertically */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {ctas.slice(0, 2).map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '8px 12px',
                borderRadius: 8,
                background: cta.primary
                  ? `linear-gradient(135deg, ${colores.primario}, ${colores.primarioOscuro || '#65a30d'})`
                  : `${colores.fondoTerciario}`,
                border: cta.primary
                  ? 'none'
                  : `1px solid ${colores.borde}`,
                color: cta.primary ? '#000000' : (colores.textoClaro || '#1A202C'),
                fontWeight: 700, fontSize: 10,
                textDecoration: 'none',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: "'Inter', system-ui, sans-serif",
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                if (cta.primary) {
                  e.currentTarget.style.boxShadow = `0 4px 12px ${colores.primario}40`;
                } else {
                  e.currentTarget.style.background = `${colores.fondoTerciario}dd`;
                }
              }}
              onMouseLeave={e => {
                if (cta.primary) {
                  e.currentTarget.style.boxShadow = 'none';
                } else {
                  e.currentTarget.style.background = `${colores.fondoTerciario}`;
                }
              }}
            >
              {cta.label}
              {cta.primary && <ArrowRight size={12} />}
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="academia-banner"
      aria-label="Academia MAYIA — Cursos de Inteligencia Artificial"
      style={{
        background: 'linear-gradient(135deg, #0d0d14 0%, #111118 50%, #0d1210 100%)',
        borderBottom: '1px solid rgba(164,217,85,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-40%', right: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,217,85,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '28px 32px',
        display: 'flex', alignItems: 'center',
        gap: 32, flexWrap: 'wrap',
      }}>
        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'linear-gradient(135deg, #A4D955, #65a30d)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(164,217,85,0.3)',
          }}>
            <GraduationCap size={22} color="#fff" />
          </div>
          <div>
            <h2 style={{
              margin: 0, fontSize: 18, fontWeight: 800, color: '#ffffff',
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: '-0.3px',
            }}>
              Academia MAYiA
            </h2>
            <p style={{
              margin: 0, fontSize: 11, color: '#9ca3af',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>
              Formación en Inteligencia Artificial para empresas mexicanas
            </p>
          </div>
        </div>

        {/* Stats pills */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flex: 1 }}>
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 10,
                background: hovered === i
                  ? `${h.color}18`
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered === i ? `${h.color}40` : 'rgba(255,255,255,0.08)'}`,
                cursor: 'default',
                transition: 'background 0.3s, border-color 0.3s',
              }}
            >
              <h.icon size={14} color={h.color} />
              <span style={{
                fontSize: 15, fontWeight: 800, color: h.color,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}>
                {h.value}
              </span>
              <span style={{
                fontSize: 11, fontWeight: 500, color: '#9ca3af',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}>
                {h.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
          {ctas.map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: cta.primary ? '9px 20px' : '9px 16px',
                borderRadius: 10,
                background: cta.primary
                  ? 'linear-gradient(135deg, #A4D955, #65a30d)'
                  : 'rgba(255,255,255,0.06)',
                border: cta.primary
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.12)',
                color: cta.primary ? '#0A0A14' : '#d1d5db',
                fontWeight: 700, fontSize: 12,
                textDecoration: 'none',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
              onMouseEnter={e => {
                if (cta.primary) {
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(164,217,85,0.4)';
                } else {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={e => {
                if (cta.primary) {
                  e.currentTarget.style.boxShadow = 'none';
                } else {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
            >
              {cta.label}
              {cta.primary && <ArrowRight size={14} />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
