import { useState, useEffect, useRef } from 'react';
import MusculoModal from './MusculoModal';

/* ── Data ────────────────────────────────────────────────────────────────── */
interface Musculo {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  tag: string;
}

const musculos: Musculo[] = [
  {
    id: '01',
    title: 'MAYiA Vive en 30 Centros de Datos Edgenet',
    desc: 'Red distribuida de infraestructura de alta disponibilidad ubicada estratégicamente en todo el país.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad01" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5aab00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7EBB2A" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Server Rack Box */}
        <rect x="35" y="15" width="30" height="50" rx="4" fill="url(#grad01)" stroke="#5aab00" strokeWidth="2" />
        {/* Server Blades */}
        <rect x="39" y="22" width="22" height="6" rx="1" fill="#0B0F19" stroke="#5aab00" strokeWidth="1" />
        <rect x="39" y="32" width="22" height="6" rx="1" fill="#0B0F19" stroke="#5aab00" strokeWidth="1" />
        <rect x="39" y="42" width="22" height="6" rx="1" fill="#0B0F19" stroke="#5aab00" strokeWidth="1" />
        <rect x="39" y="52" width="22" height="6" rx="1" fill="#0B0F19" stroke="#5aab00" strokeWidth="1" />
        {/* Blinking LEDs */}
        <circle cx="56" cy="25" r="1.5" fill="#fff" className="animate-pulse" />
        <circle cx="56" cy="35" r="1.5" fill="#fff" />
        <circle cx="56" cy="45" r="1.5" fill="#fff" className="animate-pulse" />
        <circle cx="56" cy="55" r="1.5" fill="#fff" />
        {/* Network Base */}
        <path d="M20 70 L80 70" stroke="#5aab00" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
    accent: '#5aab00', glow: 'rgba(90,171,0,0.22)', tag: 'Infraestructura',
  },
  {
    id: '02',
    title: 'Presencia Nacional',
    desc: 'Cobertura en los 32 estados de México. Tu empresa no es un límite geográfico, es una ventaja.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad02" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0099cc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00c0f0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Signal Rings */}
        <circle cx="50" cy="40" r="25" stroke="#0099cc" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="50" cy="40" r="15" stroke="#0099cc" strokeWidth="1" opacity="0.5" />
        {/* Big Map Pin */}
        <path d="M50 20 C42 20 36 26 36 34 C36 44 50 60 50 60 C50 60 64 44 64 34 C64 26 58 20 50 20 Z" fill="url(#grad02)" stroke="#0099cc" strokeWidth="2" />
        <circle cx="50" cy="34" r="5" fill="#fff" />
        {/* Ground node */}
        <ellipse cx="50" cy="65" rx="12" ry="4" fill="#0099cc" opacity="0.4" />
      </svg>
    ),
    accent: '#0099cc', glow: 'rgba(0,153,204,0.22)', tag: 'Alcance',
  },
  {
    id: '03',
    title: 'Infraestructura Propia',
    desc: 'GPU, redes, energía y coding bajo un mismo techo. Soberanía tecnológica sin dependencias externas.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad03" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c07a00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e59800" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* CPU Base */}
        <rect x="30" y="20" width="40" height="40" rx="4" fill="url(#grad03)" stroke="#c07a00" strokeWidth="2" />
        {/* Inner CPU Core */}
        <rect x="40" y="30" width="20" height="20" rx="2" fill="#0B0F19" stroke="#c07a00" strokeWidth="2" />
        <circle cx="50" cy="40" r="3" fill="#fff" className="animate-pulse" />
        {/* Circuit Pins */}
        <path d="M25 25 L30 25 M25 35 L30 35 M25 45 L30 45 M25 55 L30 55" stroke="#c07a00" strokeWidth="2" strokeLinecap="round" />
        <path d="M75 25 L70 25 M75 35 L70 35 M75 45 L70 45 M75 55 L70 55" stroke="#c07a00" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 15 L35 20 M45 15 L45 20 M55 15 L55 20 M65 15 L65 20" stroke="#c07a00" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 65 L35 60 M45 65 L45 60 M55 65 L55 60 M65 65 L65 60" stroke="#c07a00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: '#c07a00', glow: 'rgba(192,122,0,0.22)', tag: 'Hardware',
  },
  {
    id: '04',
    title: 'Laboratorio IA AMD',
    desc: 'Ven y prueba aquí tus proyectos. Hardware acelerado para la nueva era de la inteligencia artificial.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad04" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Brain / Tech Nodes */}
        <path d="M40 25 C30 25 25 35 30 45 C25 55 35 60 40 55 C45 50 55 50 60 55 C65 60 75 55 70 45 C75 35 70 25 60 25 C55 25 45 25 40 25 Z" fill="url(#grad04)" stroke="#ED1C24" strokeWidth="2" />
        {/* AMD Core Spark */}
        <polygon points="50,30 55,40 65,40 53,48 56,58 50,52 44,58 47,48 35,40 45,40" fill="#fff" className="animate-pulse" />
        {/* Orbit rings */}
        <ellipse cx="50" cy="45" rx="30" ry="12" stroke="#ED1C24" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      </svg>
    ),
    accent: '#ED1C24', glow: 'rgba(237,28,36,0.3)', tag: 'AMD Partner',
  },
  {
    id: '05',
    title: 'Academia MAYiA',
    desc: 'Formación especializada y capacitación. Innovamos hoy para que tu equipo lidere mañana.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad05" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b35cc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b066ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Graduation Cap */}
        <path d="M20 35 L50 20 L80 35 L50 50 Z" fill="url(#grad05)" stroke="#8b35cc" strokeWidth="2" strokeLinejoin="round" />
        <path d="M35 43 L35 55 C35 60 65 60 65 55 L65 43" fill="none" stroke="#8b35cc" strokeWidth="2" strokeLinecap="round" />
        {/* Tassel */}
        <path d="M50 35 L75 45 L75 55" fill="none" stroke="#b066ff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="75" cy="57" r="3" fill="#fff" className="animate-pulse" />
      </svg>
    ),
    accent: '#8b35cc', glow: 'rgba(139,53,204,0.22)', tag: 'Educación',
  },
  {
    id: '06',
    title: 'Consultoría VATYCS',
    desc: 'Estrategia, gobierno e implementación. Llevamos a tu organización de la visión al valor real.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad06" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a8c5a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1dd1a1" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Bar Chart */}
        <rect x="25" y="45" width="12" height="20" rx="2" fill="#0B0F19" stroke="#0a8c5a" strokeWidth="2" />
        <rect x="45" y="30" width="12" height="35" rx="2" fill="url(#grad06)" stroke="#0a8c5a" strokeWidth="2" />
        <rect x="65" y="15" width="12" height="50" rx="2" fill="#0B0F19" stroke="#0a8c5a" strokeWidth="2" />
        {/* Trend Arrow */}
        <path d="M20 40 L45 25 L65 10 L80 10 M65 10 L65 20 M65 10 L55 10" stroke="#1dd1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="80" cy="10" r="3" fill="#fff" className="animate-pulse" />
      </svg>
    ),
    accent: '#0a8c5a', glow: 'rgba(10,140,90,0.22)', tag: 'Consultoría',
  },
  {
    id: '07',
    title: 'Desarrollo IA Enterprise',
    desc: 'Apps a medida, agentes inteligentes e integración con tus sistemas. IA que trabaja con tu empresa.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad07" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a6bb5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Monitor */}
        <rect x="20" y="20" width="60" height="40" rx="4" fill="url(#grad07)" stroke="#1a6bb5" strokeWidth="2" />
        {/* Screen */}
        <rect x="26" y="26" width="48" height="28" rx="2" fill="#0B0F19" />
        {/* Code Brackets */}
        <path d="M40 34 L35 40 L40 46 M60 34 L65 40 L60 46" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M53 32 L47 48" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        {/* Base */}
        <path d="M40 60 L60 60 L65 65 L35 65 Z" fill="#1a6bb5" />
      </svg>
    ),
    accent: '#1a6bb5', glow: 'rgba(26,107,181,0.22)', tag: 'Dev',
  },
  {
    id: '08',
    title: 'Marketplace + Píldoras IA',
    desc: 'Soluciones listas para usar. Rápido time-to-value sin grandes inversiones iniciales.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad08" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c04a00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff7849" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Storefront / Box */}
        <path d="M25 35 L75 35 L70 65 L30 65 Z" fill="url(#grad08)" stroke="#c04a00" strokeWidth="2" />
        <path d="M20 25 L80 25 L75 35 L25 35 Z" fill="#0B0F19" stroke="#c04a00" strokeWidth="2" />
        {/* Floating Pills */}
        <rect x="40" y="45" width="20" height="8" rx="4" fill="#fff" className="animate-pulse" />
        <path d="M50 45 L50 53" stroke="#c04a00" strokeWidth="2" />
        {/* Top Handle */}
        <path d="M40 25 C40 15 60 15 60 25" fill="none" stroke="#c04a00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: '#c04a00', glow: 'rgba(192,74,0,0.22)', tag: 'Marketplace',
  },
  {
    id: '09',
    title: 'Squad de Análisis de Datos',
    desc: 'Data engineering, Business Intelligence y MLOps. Tus datos convertidos en decisiones de negocio.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad09" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a01ab5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f368e0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Database Cylinders */}
        <ellipse cx="50" cy="25" rx="20" ry="8" fill="url(#grad09)" stroke="#a01ab5" strokeWidth="2" />
        <path d="M30 25 L30 40 A 20 8 0 0 0 70 40 L70 25" fill="#0B0F19" stroke="#a01ab5" strokeWidth="2" />
        <ellipse cx="50" cy="40" rx="20" ry="8" fill="url(#grad09)" stroke="#a01ab5" strokeWidth="2" />
        <path d="M30 40 L30 55 A 20 8 0 0 0 70 55 L70 40" fill="#0B0F19" stroke="#a01ab5" strokeWidth="2" />
        <ellipse cx="50" cy="55" rx="20" ry="8" fill="url(#grad09)" stroke="#a01ab5" strokeWidth="2" />
        {/* Magnifying Glass / Analysis */}
        <circle cx="65" cy="55" r="8" fill="#fff" stroke="#f368e0" strokeWidth="2" />
        <path d="M71 61 L78 68" stroke="#f368e0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    accent: '#a01ab5', glow: 'rgba(160,26,181,0.22)', tag: 'Data',
  },
  {
    id: '10',
    title: 'Nube Soberana',
    desc: 'Datos y cómputo en México. Cumplimiento regulatorio, latencia óptima y control total.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007a6e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00d2d3" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Cloud Shape */}
        <path d="M30 50 A 15 15 0 0 1 35 22 A 20 20 0 0 1 70 25 A 15 15 0 0 1 75 50 Z" fill="url(#grad10)" stroke="#007a6e" strokeWidth="2" strokeLinejoin="round" />
        {/* Checkmark / Secure Center */}
        <circle cx="53" cy="38" r="8" fill="#0B0F19" stroke="#00d2d3" strokeWidth="1.5" />
        <path d="M49 38 L52 41 L57 35" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
        {/* Raining Data Lines */}
        <path d="M35 55 L35 65 M45 55 L45 70 M55 55 L55 60 M65 55 L65 65" stroke="#00d2d3" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
      </svg>
    ),
    accent: '#007a6e', glow: 'rgba(0,122,110,0.22)', tag: 'Cloud',
  },
  {
    id: '11',
    title: 'SOC (Security Operations Center)',
    desc: '7 certificaciones ISO y ciberseguridad 24/7 para proteger tu infraestructura.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b5002e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Large Shield */}
        <path d="M50 15 L25 25 L25 40 C25 55 40 65 50 70 C60 65 75 55 75 40 L75 25 Z" fill="url(#grad11)" stroke="#b5002e" strokeWidth="2" strokeLinejoin="round" />
        {/* Inner Tech Pattern / Radar */}
        <circle cx="50" cy="40" r="12" fill="#0B0F19" stroke="#ff4d6d" strokeWidth="1.5" />
        <circle cx="50" cy="40" r="6" stroke="#ff4d6d" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M50 40 L60 30" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
      </svg>
    ),
    accent: '#b5002e', glow: 'rgba(181,0,46,0.22)', tag: 'Seguridad',
  },
  {
    id: '12',
    title: 'Embajadores MAYiA',
    desc: 'Una red de líderes y expertos que multiplican el conocimiento y el impacto de la IA en la comunidad.',
    icon: (
      <svg className="w-full h-full drop-shadow-md tech-illustration-element" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Central Star / Spark */}
        <path d="M50 25 L53 37 L65 40 L53 43 L50 55 L47 43 L35 40 L47 37 Z" fill="url(#grad12)" stroke="#d97706" strokeWidth="1.5" className="animate-pulse" />
        {/* Connected Users */}
        <circle cx="25" cy="25" r="5" fill="#0B0F19" stroke="#d97706" strokeWidth="2" />
        <path d="M15 40 C15 35 35 35 35 40 L35 45 L15 45 Z" fill="#d97706" />

        <circle cx="75" cy="25" r="5" fill="#0B0F19" stroke="#d97706" strokeWidth="2" />
        <path d="M65 40 C65 35 85 35 85 40 L85 45 L65 45 Z" fill="#d97706" />

        <circle cx="50" cy="60" r="5" fill="#0B0F19" stroke="#d97706" strokeWidth="2" />
        <path d="M40 75 C40 70 60 70 60 75 L60 80 L40 80 Z" fill="#d97706" />

        {/* Connection Lines */}
        <line x1="30" y1="28" x2="45" y2="35" stroke="rgba(217,119,6,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="70" y1="28" x2="55" y2="35" stroke="rgba(217,119,6,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="50" y1="53" x2="50" y2="46" stroke="rgba(217,119,6,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    accent: '#d97706', glow: 'rgba(217,119,6,0.22)', tag: 'Comunidad',
  },
];

/* ── Card ────────────────────────────────────────────────────────────────── */
interface MusculoCardProps { m: Musculo; index: number; onClick?: () => void }

const MusculoCard = ({ m, index, onClick }: MusculoCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative tech-card-wrapper ${m.id === '04' ? 'lg:col-span-2' : ''} cursor-pointer`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
      }}
    >
      {/* Dynamic radial glow behind the card (technology contrast) */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 scale-105 pointer-events-none"
        style={{
          background: m.glow,
          filter: 'blur(24px)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Card Body */}
      <div
        className="h-full rounded-2xl p-5 flex flex-col justify-between gap-4"
        style={{
          border: `1.5px solid ${hovered ? m.accent : 'rgba(0,0,0,0.06)'}`,
          background: hovered
            ? 'linear-gradient(145deg, #ffffff 0%, #f9fbf7 100%)'
            : 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%)',
          backdropFilter: 'blur(12px)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: hovered
            ? `0 20px 40px ${m.glow}, 0 4px 12px rgba(0,0,0,0.03)`
            : '0 2px 10px rgba(0,0,0,0.04)',
        }}
      >
        {/* Top bar: ID and tag */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-extrabold tracking-widest" style={{ color: m.accent, opacity: 0.9 }}>
            {m.id}
          </span>
          <span
            className="text-[8px] font-extrabold tracking-wider px-2 py-0.5 rounded-full border uppercase"
            style={{
              background: `${m.accent}12`,
              color: m.accent,
              borderColor: `${m.accent}25`
            }}
          >
            {m.tag}
          </span>
        </div>

        {/* Central visual area - Tech Illustration */}
        <div
          className="w-full h-24 flex items-center justify-center select-none overflow-hidden my-1 relative"
          style={{
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {m.icon}
        </div>

        {/* Bottom area: Title & description */}
        <div className="flex flex-col gap-1.5 mt-auto">
          <h3
            className="font-bold text-[13px] leading-snug tracking-tight"
            style={{
              color: '#0A0F1D',
              transition: 'color 0.3s ease'
            }}
          >
            {m.title}
          </h3>
          <p
            className="text-[11px] leading-relaxed"
            style={{
              color: '#4B5563',
              fontWeight: 400
            }}
          >
            {m.desc}
          </p>
        </div>

        {/* Bottom animated accent line */}
        <div
          className="h-1 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${m.accent}, transparent)`,
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: 0.7
          }}
        />
      </div>
    </div>
  );
};

/* ── Section ─────────────────────────────────────────────────────────────── */
const MusculosMAYiA = () => {
  const [scrollHint, setScrollHint] = useState(true);
  const [selectedMusculo, setSelectedMusculo] = useState<Musculo | null>(null);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setScrollHint(false); };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Subtle grid texture — lighter on white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(164,217,85,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(164,217,85,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 1,
        }}
      />

      {/* Soft ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(164,217,85,0.06)', filter: 'blur(110px)', zIndex: 1 }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(164,217,85,0.04)', filter: 'blur(110px)', zIndex: 1 }} />

      <div className="relative container mx-auto px-6" style={{ zIndex: 2 }}>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {musculos.map((m, i) => (
            <MusculoCard
              key={m.id}
              m={m}
              index={i}
              onClick={() => setSelectedMusculo(m)}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="flex flex-col items-center gap-2 mt-14 pointer-events-none"
          style={{ opacity: scrollHint ? 1 : 0, transition: 'opacity 0.8s ease' }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#9ca3af' }}>
            Descubre más
          </span>
          <div className="flex flex-col gap-1 items-center">
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 2, height: 6, borderRadius: 9999,
                background: i === 0 ? '#A4D955' : i === 1 ? '#D6F0A088' : '#D6F0A033',
                animation: `scrollDot 1.4s ease-in-out ${i * 0.2}s infinite`,
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        
        /* Fine micro-floating animation for technological illustrations */
        .tech-illustration-element {
          animation: floatTechSvg 4s ease-in-out infinite;
          transform-origin: center;
          transition: filter 0.3s ease;
        }
        
        .tech-card-wrapper:hover .tech-illustration-element {
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12));
        }

        @keyframes floatTechSvg {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(0.5deg);
          }
        }
      `}</style>
      <MusculoModal isOpen={!!selectedMusculo} onClose={() => setSelectedMusculo(null)} musculo={selectedMusculo} />
    </section>
  );
};

export default MusculosMAYiA;