import { useState, useEffect, useRef } from 'react';

/* ── Shared particle canvas ──────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string; phase: number; pulse: number };
    const COLORS = ['#A4D955', '#7FD1FF', '#A4D955', '#c8ec88', '#b8e8ff'];

    const particles: P[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 3 + 0.8,
      alpha: Math.random() * 0.4 + 0.08,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      pulse: Math.random() * 0.01 + 0.005,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.phase += p.pulse;
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.phase));

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, p.color + Math.round(a * 255).toString(16).padStart(2, '0'));
        grad.addColorStop(1, p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + 'cc';
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

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
    title: '30 Centros de Datos Edge',
    desc: 'Red distribuida de infraestructura de alta disponibilidad ubicada estratégicamente en todo el país.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" /><circle cx="18" cy="5" r="1" fill="currentColor" />
        <circle cx="18" cy="12" r="1" fill="currentColor" /><circle cx="18" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
    accent: '#5aab00', glow: 'rgba(90,171,0,0.18)', tag: 'Infraestructura',
  },
  {
    id: '02',
    title: 'Presencia Nacional',
    desc: 'Cobertura en los 32 estados de México. Tu empresa no es un límite geográfico, es una ventaja.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    accent: '#0099cc', glow: 'rgba(0,153,204,0.18)', tag: 'Alcance',
  },
  {
    id: '03',
    title: 'Infraestructura Propia',
    desc: 'GPU, redes, energía y coding bajo un mismo techo. Soberanía tecnológica sin dependencias externas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" />
        <circle cx="17" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    accent: '#c07a00', glow: 'rgba(192,122,0,0.18)', tag: 'Hardware',
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
    accent: '#8b35cc', glow: 'rgba(139,53,204,0.18)', tag: 'I+D',
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
    accent: '#0a8c5a', glow: 'rgba(10,140,90,0.18)', tag: 'Consultoría',
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
    accent: '#1a6bb5', glow: 'rgba(26,107,181,0.18)', tag: 'Dev',
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
    accent: '#c04a00', glow: 'rgba(192,74,0,0.18)', tag: 'Marketplace',
  },
  {
    id: '08',
    title: 'Squad de Análisis de Datos',
    desc: 'Data engineering, Business Intelligence y MLOps. Tus datos convertidos en decisiones de negocio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    accent: '#a01ab5', glow: 'rgba(160,26,181,0.18)', tag: 'Data',
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
    accent: '#007a6e', glow: 'rgba(0,122,110,0.18)', tag: 'Cloud',
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
    accent: '#b5002e', glow: 'rgba(181,0,46,0.18)', tag: 'Seguridad',
  },
];

/* ── Card ────────────────────────────────────────────────────────────────── */
interface MusculoCardProps { m: Musculo; index: number }

const MusculoCard = ({ m, index }: MusculoCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
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
        style={{ background: m.glow, filter: 'blur(28px)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease' }}
      />

      {/* Card — white base */}
      <div
        className="h-full rounded-2xl p-5 flex flex-col gap-3"
        style={{
          border: `1.5px solid ${hovered ? m.accent : 'rgba(0,0,0,0.08)'}`,
          background: hovered ? '#ffffff' : 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(8px)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
          boxShadow: hovered
            ? `0 12px 40px ${m.glow}, 0 2px 8px rgba(0,0,0,0.06)`
            : '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        {/* Number + tag */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold tracking-widest" style={{ color: m.accent, opacity: 0.8 }}>
            {m.id}
          </span>
          <span
            className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full border uppercase"
            style={{ background: `${m.accent}18`, color: m.accent, borderColor: `${m.accent}40` }}
          >
            {m.tag}
          </span>
        </div>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            color: m.accent,
            background: `${m.accent}12`,
            boxShadow: hovered ? `0 0 18px ${m.glow}` : 'none',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {m.icon}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-semibold text-sm leading-snug" style={{ color: '#111827' }}>{m.title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{m.desc}</p>
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

/* ── Section ─────────────────────────────────────────────────────────────── */
const MusculosMAYiA = () => {
  const [scrollHint, setScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setScrollHint(false); };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Subtle grid texture — lighter on white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(164,217,85,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,209,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 1,
        }}
      />

      {/* Soft ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(164,217,85,0.07)', filter: 'blur(100px)', zIndex: 1 }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(127,209,255,0.07)', filter: 'blur(100px)', zIndex: 1 }} />

      <div className="relative container mx-auto px-6" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-mono tracking-[0.3em] uppercase mb-3" style={{ color: '#9ca3af' }}>
            Construido para escalar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: '#111827' }}>
            La plataforma más completa{' '}
            <span style={{ background: 'linear-gradient(90deg, #5aab00, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              de IA en México
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
            Diez capacidades integradas. Un solo partner. Toda la potencia que tu empresa necesita para transformarse con IA.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {musculos.map((m, i) => <MusculoCard key={m.id} m={m} index={i} />)}
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
                background: i === 0 ? '#A4D955' : i === 1 ? '#7FD1FF88' : '#7FD1FF33',
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
      `}</style>
    </section>
  );
};

export default MusculosMAYiA;