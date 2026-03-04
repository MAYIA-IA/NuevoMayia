import { useState, useEffect, useRef } from 'react';

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
    title: '30 Centros de Datos Edge',
    desc: 'Red distribuida de infraestructura de alta disponibilidad ubicada estratégicamente en todo el país.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="18" cy="5" r="1" fill="currentColor" />
        <circle cx="18" cy="12" r="1" fill="currentColor" />
        <circle cx="18" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
    accent: '#A4D955',
    glow: 'rgba(164,217,85,0.25)',
    tag: 'Infraestructura',
  },
  {
    id: '02',
    title: 'Presencia Nacional',
    desc: 'Cobertura en los 32 estados de México. Tu empresa no es un límite geográfico, es una ventaja.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    accent: '#7FD1FF',
    glow: 'rgba(127,209,255,0.25)',
    tag: 'Alcance',
  },
  {
    id: '03',
    title: 'Infraestructura Propia',
    desc: 'GPU, redes, energía y coding bajo un mismo techo. Soberanía tecnológica sin dependencias externas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
        <circle cx="17" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    accent: '#F59E0B',
    glow: 'rgba(245,158,11,0.25)',
    tag: 'Hardware',
  },
  {
    id: '04',
    title: 'Laboratorios IA + Academia',
    desc: 'I+D continuo y formación especializada. Innovamos hoy para que tu equipo lidere mañana.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    accent: '#C084FC',
    glow: 'rgba(192,132,252,0.25)',
    tag: 'I+D',
  },
  {
    id: '05',
    title: 'Consultoría VATYCS',
    desc: 'Estrategia, gobierno e implementación. Llevamos a tu organización de la visión al valor real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: '#34D399',
    glow: 'rgba(52,211,153,0.25)',
    tag: 'Consultoría',
  },
  {
    id: '06',
    title: 'Desarrollo IA Enterprise',
    desc: 'Apps a medida, agentes inteligentes e integración con tus sistemas. IA que trabaja con tu empresa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: '#60A5FA',
    glow: 'rgba(96,165,250,0.25)',
    tag: 'Dev',
  },
  {
    id: '07',
    title: 'Marketplace + Píldoras IA',
    desc: 'Soluciones listas para usar. Rápido time-to-value sin grandes inversiones iniciales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    accent: '#FB923C',
    glow: 'rgba(251,146,60,0.25)',
    tag: 'Marketplace',
  },
  {
    id: '08',
    title: 'Squad de Análisis de Datos',
    desc: 'Data engineering, Business Intelligence y MLOps. Tus datos convertidos en decisiones de negocio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    accent: '#E879F9',
    glow: 'rgba(232,121,249,0.25)',
    tag: 'Data',
  },
  {
    id: '09',
    title: 'Nube Soberana',
    desc: 'Datos y cómputo en México. Cumplimiento regulatorio, latencia óptima y control total.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    accent: '#2DD4BF',
    glow: 'rgba(45,212,191,0.25)',
    tag: 'Cloud',
  },
  {
    id: '10',
    title: 'SOC + Embajadores MAYiA',
    desc: '7 certificaciones ISO, ciberseguridad 24/7 y una comunidad que multiplica el impacto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: '#F43F5E',
    glow: 'rgba(244,63,94,0.25)',
    tag: 'Seguridad',
  },
];

interface MusculoCardProps {
  m: Musculo;
  index: number;
}

const MusculoCard = ({ m, index }: MusculoCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s`,
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 scale-110 pointer-events-none"
        style={{
          background: m.glow,
          filter: 'blur(32px)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Card */}
      <div
        className="h-full rounded-2xl backdrop-blur-sm p-5 flex flex-col gap-3"
        style={{
          border: `1px solid ${hovered ? m.accent : 'rgba(255,255,255,0.07)'}`,
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.025)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'border-color 0.35s ease, background 0.35s ease, transform 0.3s ease',
        }}
      >
        {/* Number + tag */}
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[11px] font-bold tracking-widest opacity-70"
            style={{ color: m.accent }}
          >
            {m.id}
          </span>
          <span
            className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full border uppercase"
            style={{
              background: `${m.accent}18`,
              color: m.accent,
              borderColor: `${m.accent}40`,
            }}
          >
            {m.tag}
          </span>
        </div>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            color: m.accent,
            background: `${m.accent}15`,
            boxShadow: hovered ? `0 0 20px ${m.glow}` : 'none',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {m.icon}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-white font-semibold text-sm leading-snug">
            {m.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            {m.desc}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-px w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${m.accent}, transparent)`,
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.45s ease',
          }}
        />
      </div>
    </div>
  );
};

const MusculosMAYiA = () => {
  const [scrollHint, setScrollHint] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setScrollHint(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative py-20 bg-[#0A0A14] overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#A4D955]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#7FD1FF]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gray-500 text-[11px] font-mono tracking-[0.3em] uppercase mb-3">
            Construido para escalar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            La plataforma más completa{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #A4D955, #7FD1FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              de IA en México
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Diez capacidades integradas. Un solo partner. Toda la potencia
            que tu empresa necesita para transformarse con IA.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {musculos.map((m, i) => (
            <MusculoCard key={m.id} m={m} index={i} />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="flex flex-col items-center gap-2 mt-14 pointer-events-none"
          style={{
            opacity: scrollHint ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >
          <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
            Descubre más
          </span>
          <div className="flex flex-col gap-1 items-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 2,
                  height: 6,
                  borderRadius: 9999,
                  background: i === 0 ? '#A4D955' : i === 1 ? '#7FD1FF88' : '#7FD1FF33',
                  animation: `scrollDot 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default MusculosMAYiA;